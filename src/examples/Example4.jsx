
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 900 : 0}deg)`,
    config: { mass: 7, tension: 350, friction: 90 }
  })
  return (
    <div className='unicorn' onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >Too dope for you</a.div>
      <a.div class="c front"style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(900deg)`) }}>NPH on a unicorn, your arguement is invalid</a.div>
    </div>
  )
}

export default Card