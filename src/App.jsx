import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/watchlist" element={<WatchList />} />
			</Routes>
		</>
	);
}

export default App;
