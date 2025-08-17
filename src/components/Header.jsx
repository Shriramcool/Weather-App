import React from 'react'
import { motion } from 'framer-motion'
export default function Header() {
  return (
    <motion.header initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} className="py-6 text-center">
      <h1 className="text-4xl font-extrabold">Weather Modern</h1>
      <p className="text-white/80">Current weather • 5-day forecast • Live location</p>
    </motion.header>
  )
}
