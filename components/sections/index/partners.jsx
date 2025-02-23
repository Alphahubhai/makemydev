import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../../structure/section';
import Container from '../../structure/container';
import partners from '../../../styles/sections/index/partners.module.scss';

const partnerTestimonials = [
  {
    company: 'Kode Kloud',
    testimonial: 'Excellent! So there was a sudden spike in audience from YT redirected to our site after the collaboration and that was really good to see.',
    author: 'Prabhjyot Kaur',
    image: '/img/partners/kodekloud.jpg',
    authorImage: '/img/partners/prabhjyot.jpg'
  },
  {
    company: 'Kubesphere',
    testimonial: "It's been a great feeling to collaborate with Kunal and his community, and he has made the entire process a pleasure. Kunal has made great contributions to letting more people know the benefits of our services and increase our user base. We got over 11K stars and 5K signups.",
    author: 'Yun Li',
    image: '/img/partners/kubesphere.jpg',
    authorImage: '/img/partners/yunli.jpg'
  },
  {
    company: 'Wilco',
    testimonial: 'It was extremely successful. We got around 1700 signups through our campaigns. Thank you for everything, Kunal. You have a wonderful community.',
    author: 'Alexandra Macias',
    image: '/img/partners/wilco.jpg',
    authorImage: '/img/partners/alexandra.jpg'
  },
  {
    company: 'Teleport',
    testimonial: 'Partnering with Kunal and his community was one of the highlights for the Teleport team this year. The quality of content is top-notch, the community engagement is very high, and the ROI is there to prove it. It brought in 10K+ new web sessions and 100+ downloads with majority being new users.',
    author: 'Kateryna Ivashchenko',
    image: '/img/partners/teleport.jpg',
    authorImage: '/img/partners/kateryna.jpg'
  },
  {
    company: 'Boot Dev',
    testimonial: "Fantastic, looking forward to more. I think you're doing great, I'd love to continue swinging by the channel whenever you feel it's appropriate. Boot.dev has a YouTube channel now, so I'd love to have you on there as well.",
    author: 'Lane',
    image: '/img/partners/bootdev.jpg',
    authorImage: '/img/partners/lane.jpg'
  }
];

export default function Partners() {
  return (
    <Section classProp={partners.section} id="partners">
      <Container>
        <motion.div 
          className={partners.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={partners.title}>Partner With Us</h2>
          <p className={partners.subtitle}>
            Collaborate with us to support innovation in global hackathons and tech events.
          </p>
          
          <div className={partners.testimonialGrid}>
            {partnerTestimonials.map((partner, index) => (
              <motion.div 
                key={index}
                className={partners.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={partners.companyLogo}>
                  <Image 
                    src={partner.image} 
                    alt={partner.company} 
                    width={120} 
                    height={40} 
                    objectFit="contain"
                  />
                </div>
                <p className={partners.testimonialText}>
                  {partner.testimonial}
                </p>
                <div className={partners.author}>
                  <div className={partners.authorImage}>
                    <Image 
                      src={partner.authorImage} 
                      alt={partner.author} 
                      width={50} 
                      height={50} 
                      className={partners.authorAvatar}
                    />
                  </div>
                  <div className={partners.authorInfo}>
                    <h4>{partner.author}</h4>
                    <p>{partner.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <Link href="/partner">
              <motion.div 
                className={`${partners.testimonialCard} ${partners.partnerCTA}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 12px 40px rgba(109, 35, 35, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={partners.ctaContent}>
                  <h3>Partner with us</h3>
                  <p>Join our growing list of successful partnerships</p>
                  <span className={partners.ctaArrow}>→</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
} 