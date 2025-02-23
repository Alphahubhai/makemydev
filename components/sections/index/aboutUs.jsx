import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import styles from '../../../styles/sections/index/aboutUs.module.scss';

export default function AboutUs() {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            MakeItDevs is a community initiative to help and grow the student as well as 
            professional developer community by providing a platform to learn, grow and 
            connect with other developers.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Our Mission</h3>
              <p>To empower developers worldwide by providing resources, mentorship, and 
              opportunities for growth in their tech journey.</p>
            </div>
            
            <div className={styles.feature}>
              <h3>Our Vision</h3>
              <p>Creating a global ecosystem where developers can learn, collaborate, 
              and build amazing things together.</p>
            </div>
            
            <div className={styles.feature}>
              <h3>Community First</h3>
              <p>We believe in the power of community and peer learning to accelerate 
              growth and foster innovation.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 