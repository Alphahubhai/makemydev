import Section from '../../structure/section'
import Container from '../../structure/container'
import Icon from '../../utils/icon.util'
import styles from '../../../styles/sections/index/features.module.scss'

export default function Features() {
  const features = [
    {
      icon: ['fas', 'graduation-cap'],
      title: 'Learning Resources',
      description: 'Access curated educational content and interactive courses'
    },
    {
      icon: ['fas', 'users'],
      title: 'Community Events',
      description: 'Connect with peers through workshops and meetups'
    },
    {
      icon: ['fas', 'code-branch'],
      title: 'Open Source',
      description: 'Contribute to meaningful projects and build your portfolio'
    },
    {
      icon: ['fas', 'rocket'],
      title: 'Career Growth',
      description: 'Get mentorship and guidance for your tech career'
    }
  ]

  return (
    <Section>
      <Container>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.iconWrapper}>
                <Icon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
} 