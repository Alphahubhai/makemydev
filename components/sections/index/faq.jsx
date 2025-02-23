import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import faq from '../../../styles/sections/index/faq.module.scss';

const faqData = [
  {
    question: "How can I join the community?",
    answer: "You can join our community by clicking the 'Join Community' button on our homepage. It's free and open to everyone passionate about technology."
  },
  {
    question: "What kind of events do you host?",
    answer: "We host various events including hackathons, tech meetups, workshops, and networking sessions focused on different aspects of technology and development."
  },
  {
    question: "How can I partner with MakeItDevs?",
    answer: "You can reach out to us through our partnership form or contact us directly. We're always looking for meaningful collaborations that benefit the tech community."
  },
  {
    question: "How do I stay updated with the latest events?",
    answer: "Join our newsletter and follow us on social media to stay updated with all our latest events, hackathons, and community activities."
  },
  {
    question: "Who can participate in the events?",
    answer: "Our events are open to everyone - from beginners to experienced professionals. We welcome all skill levels and backgrounds."
  },
  {
    question: "Are the events free to join?",
    answer: "Most of our community events are free. Some special events or workshops might have a nominal fee, but we ensure they provide great value."
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={faq.faqItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button 
        className={faq.question} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <motion.span 
          className={faq.arrow}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          ↓
        </motion.span>
      </button>
      <motion.div 
        className={faq.answer}
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : "0",
          opacity: isOpen ? 1 : 0
        }}
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <Section classProp={faq.section} id="faq">
      <Container>
        <motion.div 
          className={faq.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={faq.title}>Frequently Asked Questions</h2>
          <div className={faq.faqGrid}>
            {faqData.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
} 