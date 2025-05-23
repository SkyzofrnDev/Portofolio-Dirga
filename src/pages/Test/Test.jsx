import { useEffect } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// Register the plugin once
gsap.registerPlugin(ScrollTrigger)

export default function Test() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor || '#000'
      const fg = char.dataset.fgColor || '#fff'

      const text = new SplitType(char, { types: 'chars' })

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
          },
        }
      )
    })
  }, [])

  return (
    <>
      <section className="border-b border-black min-h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)]">
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)]" data-bg-color="#000000" data-fg-color="#1299F5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente non adipisci qui magnam.
        </p>
      </section>
      <section className="min-h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)]">
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)]" data-bg-color="#ff00ff" data-fg-color="#00ffff">
          Repudiandae nam facilis, labore ea qui at veniam animi pariatur ducimus alias, velit modi ad quos?
        </p>
      </section>
      <section className="bg-yellow-400 min-h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)]">
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)]" data-bg-color="#000" data-fg-color="#fff">
          Dolorem ipsum sunt cumque velit alias, adipisci consequatur deleniti.
        </p>
      </section>
      <section className="bg-neutral-900 text-white min-h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)]">
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)]" data-bg-color="#ffffff" data-fg-color="#1299F5">
          Consequatur deleniti aliquid eveniet unde dolores officia pariatur!
        </p>
      </section>
    </>
  )
}