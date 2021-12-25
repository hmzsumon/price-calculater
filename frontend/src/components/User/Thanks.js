import React from 'react';
import Navbar from '../Header/Navbar';

const Thanks = () => {
	return (
		<>
			<Navbar />
			<div className='flex items-center justify-center h-80'>
				<h1 className='text-3xl font-bold text-yellow-600'>
					Thank you very much we will contact you via email
				</h1>
			</div>
		</>
	);
};

export default Thanks;
