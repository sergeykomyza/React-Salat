
import Home from '../../sections/home/Home'
import BestPrice from '../../sections/bestPrice/BestPrice';
import News from '../../sections/news/News'
import Goods from '../../sections/goods/Goods'
import Info from '../../sections/info/Info'
import Advantages from '../../sections/advantages/Advantages'
import Subscription from '../../sections/subscription/Subscription'



function Main() {
	return (
		<div className="main-page overflow-hidden">
			<Home />
			<BestPrice />	
			<News />		
			<Goods />
			<Info />
			<Advantages />
			<Subscription />
		</div>
	);
}

export default Main;