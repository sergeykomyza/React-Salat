import "./App.sass";

import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'
import MainPage from "./pages/main/MainPage";
import AboutPage from "./pages/about/AboutPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<MainPage/>} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
