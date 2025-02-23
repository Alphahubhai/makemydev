import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Section from '../../structure/section';
import Container from '../../structure/container';
import hero from '../../../styles/sections/index/hero.module.scss';
import navData from '../../../content/navbar.json';

/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section className={hero.section}>
      <div className={hero.navWrapper}>
        <nav className={`${hero.navbar} ${scrolled ? hero.scrolled : ''}`}>
          <div className={hero.navContainer}>
            <button onClick={scrollToTop} className={hero.brandName}>
              MakeItDevs
            </button>
            <div className={hero.navLinks}>
              {navData.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className={hero.navLink}
                >
                  {link.text}
                </Link>
              ))}
              <Link 
                href={navData.cta.href} 
                className={hero.partnerBtn}
              >
                {navData.cta.text}
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Container>
        <div className={hero.content}>
          <div className={hero.pillars}>
            <span className={`${hero.pill} ${hero.pillCode}`}>Code</span>
            <span className={`${hero.pill} ${hero.pillCreate}`}>Create</span>
            <span className={`${hero.pill} ${hero.pillConnect}`}>Connect</span>
          </div>
          <h1 className={hero.header}>
            Hackathons & Meetups
            <br />
            For{' '}
            <TypeAnimation
              sequence={[
                'Professionals',
                2000,
                'Students',
                2000,
                'Developers',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={hero.highlight}
            />
          </h1>
          <p className={hero.description}>
            MakeItDevs is an inclusive global community for anyone passionate about technology. 
            We foster collaboration and innovation through global events.
          </p>
          <div className={hero.cta}>
            <Link href="/join">
              <div className={hero.primaryBtn}>
                <span>Join community</span>
                <svg className={hero.svgIcon} viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z"/>
                </svg>
              </div>
            </Link>
            <Link href="/events">
              <div className={hero.secondaryBtn}>
                <span>Events</span>
                <svg className={hero.svgIcon} viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
