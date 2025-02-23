// Core packages
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';
import Icon from '../../utils/icon.util';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: {
			y: 20,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const features = [
		{
			icon: ['fas', 'code'],
			title: 'Learn & Build',
			description: 'Master modern technologies through hands-on projects and expert guidance'
		},
		{
			icon: ['fas', 'users'],
			title: 'Connect & Collaborate',
			description: 'Join a thriving community of developers, share ideas, and grow together'
		},
		{
			icon: ['fas', 'rocket'],
			title: 'Launch & Scale',
			description: 'Transform ideas into reality with our resources and mentorship'
		},
		{
			icon: ['fas', 'globe'],
			title: 'Global Network',
			description: 'Connect with developers worldwide and expand your professional network'
		}
	];

	const coreValues = [
		{
			icon: ['fas', 'code'],
			title: 'Code',
			description: 'Build real-world projects with modern technologies'
		},
		{
			icon: ['fas', 'lightbulb'],
			title: 'Create',
			description: 'Transform innovative ideas into impactful solutions'
		},
		{
			icon: ['fas', 'users'],
			title: 'Connect',
			description: 'Join a global community of passionate developers'
		}
	];

	return (
		<Section classProp={about.section} id="about">
			<Container>
				<div className={about.wrapper}>
					<motion.div 
						className={about.textContent}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className={about.sectionLabel}>About Us</span>
						<h2 className={about.title}>Building Tomorrow's Tech Community</h2>
						<p className={about.description}>
							We're a vibrant community of developers, designers, and innovators 
							working together to shape the future of technology. Through collaboration, 
							learning, and innovation, we empower each other to grow and create impact.
						</p>
						
						<div className={about.valueCards}>
							{coreValues.map((value, index) => (
								<motion.div 
									key={index}
									className={about.card}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
								>
									<div className={about.iconBox}>
										<Icon icon={value.icon} />
									</div>
									<h3>{value.title}</h3>
									<p>{value.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div 
						className={about.imageContent}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className={about.imageWrapper}>
							<img 
								src="/img/community.svg" 
								alt="Developer Community"
								className={about.image}
							/>
						</div>
					</motion.div>
				</div>
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]