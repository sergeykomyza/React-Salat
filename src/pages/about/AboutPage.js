
import Info from '../../sections/info/Info'
import Advantages from '../../sections/advantages/Advantages'
import Subscription from '../../sections/subscription/Subscription'

function AboutPage() {
	return (
		<div className="about-page overflow-hidden">
			<Info />
			<Advantages />
			<Subscription />
		</div>
	);
}

export default AboutPage;