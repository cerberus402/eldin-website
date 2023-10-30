import { useState, useRef, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring, to } from '@react-spring/web'

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

// const ImageTransition = ({ offset, speed, image1, image2 }) => {
//   const props = useSpring({
//     from: { opacity: 0 },
//     opacity: offset,
//     reset: true,
//   })

//   useEffect(() => {
//     console.log(props)
//   }, [props])

//   return (
//     <ParallaxLayer offset={offset} speed={speed}>
//       <animated.div
//         style={{
//           position: 'absolute',
//           opacity: props.opacity.to([offset - 1, offset, offset + 1], [0, 1, 0]),
//         }}>
//         <img src={url(image1)} style={{ width: '50%', marginLeft: '25%' }} alt="Image 1" />
//       </animated.div>
//       <animated.div
//         style={{
//           position: 'absolute',
//           opacity: props.scroll.to([offset - 1, offset, offset + 1], [1, 0, 0]),
//         }}>
//         <img src={url(image2)} style={{ width: '50%', marginLeft: '25%' }} alt="Image 2" />
//       </animated.div>
//     </ParallaxLayer>
//   )
// }

function MyComponent() {
  const props = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: -360 },
    reset: true,
  })

  return (
    <ParallaxLayer offset={0} speed={0.5}>
      <animated.div
        style={{
          transform: props.rotateZ.to(value => `rotateZ(${value}deg)`),
          margin: '20% 0 0 50%',
        }}>
        Hello World
      </animated.div>
    </ParallaxLayer>
  )
}

export default function Home() {
  const parallaxRef = useRef()
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallaxRef} pages={4} onScroll={e => handleScroll(e)}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <MyComponent parallax={parallaxRef} />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>

        {/* <ImageTransition offset={3} speed={1} image1="clients-main" image2="clients" /> */}
      </Parallax>
    </div>
  )
}
