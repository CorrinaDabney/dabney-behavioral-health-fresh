'use client'

import { useEffect, useRef, useState } from 'react'

type JotformEmbedProps = {
  src: string
  title: string
}

/**
 * Pick a frame height that shows every field of the form, with room to spare
 * for error messages and the "Other" box that appears when chosen. The height
 * depends on how wide the frame is, because the form stacks its fields on
 * narrow screens. Measured on the live form (28 fields): about 2,850px at
 * phone width, 2,270px at ~490px wide, and 2,010px from ~770px up.
 */
function heightForWidth(width: number) {
  if (width <= 420) return 3250
  if (width <= 560) return 2700
  return 2350
}

/**
 * Embeds a Jotform right on the page with no inner box. Nothing is cut off:
 * the height is sized for the full form, the frame can scroll as a last
 * resort, and if the form reports its own height we use that if it is larger.
 */
export function JotformEmbed({ src, title }: JotformEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(2350)
  const reported = useRef(0)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const apply = () => setHeight(Math.max(heightForWidth(frame.clientWidth), reported.current))
    apply()

    const observer = new ResizeObserver(apply)
    observer.observe(frame)

    function onMessage(event: MessageEvent) {
      if (event.origin !== 'https://form.jotform.com') return
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
  }, [])

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
