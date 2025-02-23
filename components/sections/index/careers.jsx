import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import careers from '../../../styles/sections/index/careers.module.scss';

const careerPositions = [
  {
    title: 'Social Media Manager',
    type: 'Freelance',
    location: 'Remote',
    description: 'Manage and grow our online presence by crafting engaging content and building relationships with our audience.',
    prerequisites: [
      'Proven experience in social media management',
      'Excellent communication and copywriting skills',
      'Creativity in content creation'
    ],
    benefits: [
      'Flexible working hours',
      'Professional development opportunities',
      'Remote work allowance'
    ]
  },
  {
    title: 'Graphic Designer',
    type: 'Freelance',
    location: 'Remote',
    description: 'Create visually compelling designs that align with our brand identity and resonate with our audience.',
    prerequisites: [
      'Strong portfolio of design work',
      'Proficiency in design tools (Figma, Adobe Suite)',
      'Understanding of brand guidelines'
    ],
    benefits: [
      'Flexible working hours',
      'Portfolio development',
      'Remote work setup'
    ]
  }
];

function Modal({ position, onClose }) {
  if (!position) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={careers.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={careers.modalContent}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className={careers.closeButton} onClick={onClose}>×</button>
          
          <div className={careers.modalHeader}>
            <h3>{position.title}</h3>
            <div className={careers.meta}>
              <span>{position.location}</span>
              <span>{position.type}</span>
            </div>
            <p className={careers.description}>{position.description}</p>
          </div>

          <div className={careers.infoCard}>
            <div className={careers.section}>
              <h4>Prerequisites</h4>
              <ul>
                {position.prerequisites.map((prereq, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    {prereq}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={careers.section}>
              <h4>Benefits</h4>
              <ul>
                {position.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className={careers.modalFooter}>
            <p className={careers.applyText}>
              To apply, please email contact@makeitdev.org along with your proof of work and CV.
            </p>

            <motion.a 
              href={`mailto:contact@makeitdev.org?subject=Application for ${position.title}`}
              className={careers.applyButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  return (
    <Section classProp={careers.section} id="careers">
      <Container>
        <motion.div 
          className={careers.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={careers.positions}>
            {careerPositions.map((position, index) => (
              <motion.div 
                key={index}
                className={careers.position}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={careers.positionContent}>
                  <h3>{position.title}</h3>
                  <p>{position.description}</p>
                  <div className={careers.meta}>
                    <span>{position.location}</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <motion.button
                  className={careers.knowMoreButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPosition(position)}
                >
                  Know More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
      
      <Modal 
        position={selectedPosition} 
        onClose={() => setSelectedPosition(null)} 
      />
    </Section>
  );
} 