import "./App.sass";

import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'
import MainPage from "./pages/main/MainPage";
import AboutPage from "./pages/about/AboutPage";
import NewsPage from './pages/news/NewsPage'
import ContactsPage from './pages/contacts/ContactsPage'
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<MainPage/>} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/contacts" element={<ContactsPage/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
