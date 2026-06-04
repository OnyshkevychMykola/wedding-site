import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

const charVariant: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

interface AnimatedLabelProps {
  children: string
}

export default function AnimatedLabel({ children }: AnimatedLabelProps) {
  return (
    <motion.p
      className="section-label"
      style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children.split('').map((ch, i) => (
        <motion.span key={i} variants={charVariant} style={{ display: 'inline-block' }}>
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </motion.p>
  )
}
