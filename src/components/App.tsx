import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Actors from './Actors/Actors';
import MovieInformation from './MovieInformation/MovieInformation';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

function App() {
	return (
		<div className='flex h-full'>
			<CssBaseline />
			<Navbar />
			<main className='grow p-8'>
				<div className='h-20' />
				<Routes>
					<Route path='/' element={<Movies />} />
					<Route path='/actor/:id' element={<Actors />} />
					<Route path='/profile/:id' element={<Profile />} />
					<Route path='/movie/:id' element={<MovieInformation />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
