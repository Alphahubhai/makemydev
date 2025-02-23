import Hero 		from '../components/sections/index/hero'
import AboutUs 		from '../components/sections/index/aboutUs'
import Testimonials 	from '../components/sections/index/testimonials'
import Newsletter 	from '../components/sections/index/newsletter'
import Stats 		from '../components/sections/index/stats'
import Events 		from '../components/sections/index/events'
import FAQ 		from '../components/sections/index/faq'
import Partners 	from '../components/sections/index/partners'
import Careers 	from '../components/sections/index/careers'
import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<AboutUs />
			<Testimonials />
			<Newsletter />
			<Stats />
			<Events />
			<FAQ />
			<Partners />
			<Careers />
		</>
	);
}