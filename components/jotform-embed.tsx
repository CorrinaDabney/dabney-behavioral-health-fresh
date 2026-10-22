'use client'

import { useEffect, useRef, useState } from 'react'

type JotformEmbedProps = {
  src: string
  title: string
  /** Frame heights for [phone, small, wide] screens. Defaults suit the long Pathways form. */
  heights?: [number, number, number]
  /** If true, the form's own reported height replaces the starting height (use for short forms). */
  useReportedHeight?: boolean
}

/**
 * Pick a frame height that shows every field of the form, with room to spare
 * for error messages and the "Other" box that appears when chosen. The height
 * depends on how wide the frame is, because the form stacks its fields on
 * narrow screens. Measured on the live form (28 fields): about 2,850px at
 * phone width, 2,270px at ~490px wide, and 2,010px from ~770px up.
 */
function heightForWidth(width: number, heights: [number, number, number]) {
  if (width <= 420) return heights[0]
  if (width <= 560) return heights[1]
  return heights[2]
}

const DEFAULT_HEIGHTS: [number, number, number] = [3250, 2700, 2350]

function isJotformOrigin(origin: string) {
  try {
    const host = new URL(origin).hostname
    return host === 'jotform.com' || host.endsWith('.jotform.com')
  } catch {
    return false
  }
}

/**
 * Embeds a Jotform right on the page with no inner box. Nothing is cut off:
 * the height is sized for the full form, the frame can scroll as a last
 * resort, and if the form reports its own height we use that if it is larger.
 */
export function JotformEmbed({
  src,
  title,
  heights = DEFAULT_HEIGHTS,
  useReportedHeight = false,
}: JotformEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(heights[2])
  const reported = useRef(0)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const apply = () => {
      const start = heightForWidth(frame.clientWidth, heights)
      setHeight(useReportedHeight && reported.current ? reported.current : Math.max(start, reported.current))
    }
    apply()

    const observer = new ResizeObserver(apply)
    observer.observe(frame)

    function onMessage(event: MessageEvent) {
      if (!isJotformOrigin(event.origin)) return
      if (event.source !== frame?.contentWindow) return
      if (typeof event.data !== 'string') return
      const [action, value] = event.data.split(':')
      if (action === 'setHeight') {
        const next = parseInt(value, 10)
        if (Number.isFinite(next)) {
          reported.current = next + 40
          apply()
        }
      }
    }
    window.addEventListener('message', onMessage)

    return () => {
      observer.disconnect()
      window.removeEventListener('message', onMessage)
    }
  }, [heights, useReportedHeight])

  return (
    <iframe
      ref={frameRef}
      src={src}
      title={title}
      allow="fullscreen"
      style={{ width: '100%', minWidth: '100%', height, border: 'none', display: 'block' }}
    />
  )
}
