
import Home from '../../sections/home/Home'
import BestPrice from '../../sections/bestPrice/BestPrice';
import News from '../../sections/news/News'
import Goods from '../../sections/goods/Goods'
import Info from '../../sections/info/Info'


function Main() {
	return (
		<div className="main">
			<Home />
			<BestPrice />	
			<News />		
			<Goods />
			<Info />
		</div>
	);
}

export default Main;