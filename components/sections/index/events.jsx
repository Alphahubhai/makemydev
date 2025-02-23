import { motion } from 'framer-motion';
import Section from '../../structure/section';
import Container from '../../structure/container';
import events from '../../../styles/sections/index/events.module.scss';

const eventData = [
  {
    category: 'Hackathons',
    description: 'Join in our hackathons with your team of programmers, designers and other tech enthusiasts to collaborate & build fascinating projects.',
    events: [
      {
        title: 'HackFrost Winter Hackathon',
        status: 'ENDED',
        date: 'Nov 29 - Dec 1',
        description: 'Network, build projects and showcase your best ideas this winter',
        image: '/img/events/hackfrost.jpg'
      },
      {
        title: 'SpringHacks 2024',
        status: 'UPCOMING',
        date: 'Mar 15 - Mar 17',
        description: 'Build innovative solutions for real-world problems in this spring-themed hackathon',
        image: '/img/events/springhacks.jpg'
      }
    ]
  },
  {
    category: 'Meetups',
    description: 'Participate in our meetups where professionals, developers and industry leaders come together to network and talk about latest tech innovations.',
    events: [
      {
        title: 'Open Source Connect',
        status: 'ENDED',
        date: 'December 13',
        location: 'The Circle-Huda City Center, Gurgaon',
        description: 'Explore open source and tech with expert talks, networking, pizza, drinks, and swag!',
        image: '/img/events/opensource.jpg'
      },
      {
        title: 'Tech Innovators Summit',
        status: 'UPCOMING',
        date: 'January 25',
        location: 'Tech Hub, Bangalore',
        description: 'Join industry leaders for insights into emerging technologies and networking',
        image: '/img/events/techsummit.jpg'
      }
    ]
  }
];

export default function Events() {
  return (
    <Section classProp={events.section} id="events">
      <Container>
        <motion.div 
          className={events.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {eventData.map((category, index) => (
            <motion.div 
              key={index}
              className={events.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className={events.categoryTitle}>{category.category}</h2>
              <p className={events.categoryDesc}>{category.description}</p>
              
              <div className={events.eventGrid}>
                {category.events.map((event, eventIndex) => (
                  <motion.div 
                    key={eventIndex}
                    className={events.eventCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index * 0.2) + (eventIndex * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={events.eventImage} style={{ backgroundImage: `url(${event.image})` }} />
                    <div className={events.eventContent}>
                      <span className={`${events.status} ${events[event.status.toLowerCase()]}`}>
                        {event.status}
                      </span>
                      <h3>{event.title}</h3>
                      <div className={events.eventDetails}>
                        <span>{event.date}</span>
                        {event.location && <span>{event.location}</span>}
                      </div>
                      <p>{event.description}</p>
                      <motion.button 
                        className={events.exploreBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
} 