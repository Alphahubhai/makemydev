import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Icon from '../../utils/icon.util';
import testimonials from '../../../styles/sections/index/testimonials.module.scss';

const testimonialData = [
  {
    id: 1,
    image: '/img/testimonials/user1.jpg',
    name: 'Sarah Johnson',
    role: 'Full Stack Developer',
    quote: 'This community has been instrumental in my growth as a developer. The support and knowledge sharing are incredible. I\'ve learned more here in months than I did in years on my own.'
  },
  {
    id: 2,
    image: '/img/testimonials/user2.jpg',
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    quote: 'Found my dream job through connections made here. The collaborative environment is unlike anything else. The mentorship program completely transformed my career trajectory.'
  },
  {
    id: 3,
    image: '/img/testimonials/user3.jpg',
    name: 'Emma Williams',
    role: 'Software Engineer',
    quote: 'The mentorship and learning opportunities have accelerated my career growth exponentially. The community challenges pushed me to learn new technologies I wouldn\'t have explored otherwise.'
  },
  {
    id: 4,
    image: '/img/testimonials/user4.jpg',
    name: 'David Kim',
    role: 'Mobile Developer',
    quote: 'The hackathons and coding challenges helped me improve my problem-solving skills dramatically. I\'ve made lifelong friends and professional connections through this amazing community.'
  },
  {
    id: 5,
    image: '/img/testimonials/user5.jpg',
    name: 'Lisa Martinez',
    role: 'DevOps Engineer',
    quote: 'Amazing platform for networking and learning from industry experts. The workshops are incredibly valuable, and the community support is unmatched. It\'s been a game-changer for my career.'
  },
  {
    id: 6,
    image: '/img/testimonials/user6.jpg',
    name: 'James Wilson',
    role: 'Frontend Developer',
    quote: 'The peer review system and collaborative projects have helped me grow both technically and professionally. The community\'s focus on best practices and modern technologies keeps me ahead of the curve.'
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (!isPaused) {
        autoPlayRef.current();
      }
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Section classProp={testimonials.section}>
      <Container>
        <motion.div 
          className={testimonials.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={testimonials.sectionLabel}>Testimonials</span>
          <h2 className={testimonials.title}>What Our Community Says</h2>

          <div 
            className={testimonials.carouselWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={testimonials.carousel}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className={testimonials.slide}
                >
                  <div className={testimonials.testimonialCard}>
                    <div className={testimonials.imageWrapper}>
                      <img 
                        src={testimonialData[currentSlide].image} 
                        alt={testimonialData[currentSlide].name}
                      />
                    </div>
                    <blockquote className={testimonials.quote}>
                      {testimonialData[currentSlide].quote}
                    </blockquote>
                    <div className={testimonials.author}>
                      <h3>{testimonialData[currentSlide].name}</h3>
                      <p>{testimonialData[currentSlide].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              className={`${testimonials.navButton} ${testimonials.prev}`}
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <Icon icon={['fas', 'chevron-left']} />
            </button>
            <button 
              className={`${testimonials.navButton} ${testimonials.next}`}
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <Icon icon={['fas', 'chevron-right']} />
            </button>

            <div className={testimonials.dots}>
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  className={`${testimonials.dot} ${index === currentSlide ? testimonials.active : ''}`}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
} 