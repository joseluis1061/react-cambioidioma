import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './../App';
import Explore from './../components/Explore';
import Profile from './../components/Profile';

const Router = () => {
	return (
		<div className="contenedor">
			<BrowserRouter>
				<Routes>
					<Route path="/explore" element={<Explore/>} />
					<Route path="/profile" element={<Profile/>} />
					<Route path="/" element={<App/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
 
export default Router;