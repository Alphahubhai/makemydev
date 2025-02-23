import { motion } from 'framer-motion';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Icon from '../../utils/icon.util';
import newsletter from '../../../styles/sections/index/newsletter.module.scss';

export default function Newsletter() {
  return (
    <Section classProp={newsletter.section} id="newsletter">
      <Container>
        <motion.div 
          className={newsletter.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className={newsletter.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Our Community
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className={newsletter.subtitle}>Stay Connected</p>
            <p className={newsletter.description}>
              Get the latest insights, updates, and exclusive community content straight to your inbox.
            </p>
          </motion.div>

          <motion.form 
            className={newsletter.form}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className={newsletter.inputWrapper}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <Icon icon={['fas', 'paper-plane']} />
              </motion.button>
            </motion.div>
            <p className={newsletter.privacy}>
              Your privacy is important. We never share your email.
            </p>
          </motion.form>

          <motion.div 
            className={newsletter.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="#discord"
              className={`${newsletter.socialButton} ${newsletter.discord}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon={['fab', 'discord']} />
              Join Discord
            </motion.a>
            <motion.a
              href="#telegram"
              className={`${newsletter.socialButton} ${newsletter.telegram}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon={['fab', 'telegram']} />
              Join Telegram
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
} 