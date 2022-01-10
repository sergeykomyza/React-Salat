import "./App.sass";

import Header from './sections/header/Header'
import Main from "./pages/main/MainPage";
import About from "./pages/about/About";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<Main/>} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
