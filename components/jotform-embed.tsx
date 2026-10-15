'use client'

import { useEffect, useRef, useState } from 'react'

type JotformEmbedProps = {
  src: string
  title: string
  /** Height used until the form reports its real height. */
  initialHeight?: number
}

/**
 * Embeds a Jotform with no inner scrollbar. The form tells the page how tall it
 * is (a "setHeight" message from form.jotform.com), and the frame grows to fit,
 * so the form reads as part of the page. No third-party script is loaded.
 */
export function JotformEmbed({ src, title, initialHeight = 1400 }: JotformEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(initialHeight)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== 'https://form.jotform.com') return
      if (event.source !== frameRef.current?.contentWindow) return
      if (typeof event.data !== 'string') return
      const [action, value] = event.data.split(':')
      if (action === 'setHeight') {
        const next = parseInt(value, 10)
        if (Number.isFinite(next) && next > 200) setHeight(next + 20)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <iframe
      ref={frameRef}
      src={src}
      title={title}
      loading="lazy"
      scrolling="no"
      allow="fullscreen"
      style={{ width: '100%', minWidth: '100%', height, border: 'none', display: 'block', overflow: 'hidden' }}
    />
  )
}
