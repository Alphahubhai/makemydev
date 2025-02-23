import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Section from '../../structure/section';
import Container from '../../structure/container';
import stats from '../../../styles/sections/index/stats.module.scss';

function Number({ n, label }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? parseInt(n) : 0,
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      className={stats.statCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      data-hovered={isHovered}
    >
      <h3 className={stats.number}>
        <animated.span>
          {number.to(n => n.toFixed(0))}
        </animated.span>
        {isNaN(parseInt(n)) ? n : '+'}
      </h3>
      <p className={stats.label}>{label}</p>
    </motion.div>
  );
}

const statsData = [
  { number: '150000', label: 'Community of' },
  { number: '40000', label: 'Prizes in $ worth' },
  { number: '100', label: 'Partners' },
  { number: '14', label: 'Countries' }
];

export default function Stats() {
  return (
    <Section classProp={stats.section} id="stats">
      <Container>
        <motion.div 
          className={stats.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={stats.title}>Numbers Say It All</h2>
          <div className={stats.grid}>
            {statsData.map((stat, index) => (
              <Number 
                key={index} 
                n={stat.number} 
                label={stat.label} 
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
} 