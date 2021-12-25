/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import Navbar from '../../components/Header/Navbar';

import MetaData from '../layout/MetaData';
import { frameworks, appCategories } from '../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const [appPrice, setAppPrice] = useState(0);
	const [categoryPrice, setCategoryPrice] = useState(0);
	const [selected, setSelected] = useState(0);
	const [frameworkName, setFrameworkName] = useState('');

	const [selectedCategoryName, setSelectedCategoryName] = useState('');

	const [selectCategory, setSelectCategory] = useState(false);
	const [pageCount, setPageCount] = useState(0);

	const [ready, setReady] = useState(false);

	const [paymentMethod, setPaymentMethod] = useState('');

	const [barWidth, setBarWidth] = useState(50);

	const [pageQty, setPageQty] = useState(0);

	useEffect(() => {
		if (pageCount === 0) {
			setBarWidth(25);
		} else if (pageCount === 1) {
			setBarWidth(75);
		} else if (pageCount === 2) {
			setBarWidth(100);
		} else {
			setBarWidth(0);
		}
	}, [pageCount]);

	const handler = (e) => {
		setFrameworkName(e.name);
		setSelected(e.id);
		setAppPrice(e.price);
	};

	const handleCategory = (e) => {
		setSelectCategory(e.id);
		setCategoryPrice(e.price);
		setSelectedCategoryName(e.name);
	};

	const handleNext = () => {
		setPageCount(pageCount + 1);
	};

	const handlePrev = () => {
		setPageCount(pageCount - 1);
	};

	console.log(paymentMethod);

	return (
		<>
			<div>
				<MetaData title={'Home'} />
				<Navbar />
				<h1 className='my-4 text-3xl font-bold text-center text-gray-800 '>
					CALCULATE YOUR PRICE
				</h1>
				<div className='border-t-2 border-gray-900'>
					<div>
						<h1 className='p-2 text-center text-gray-800 sm:block'>
							Want to discuss your project in detail?{' '}
							<a className='text-blue-700 ' href='tel:+8801757454532'>
								SCHEDULE A CALL HERE
							</a>
						</h1>
					</div>
					<div className='grid grid-cols-1 gap-8 px-10 border-t-2 border-gray-900 md:grid-cols-3 '>
						<div className='col-span-2 border-r-2 border-gray-900 '>
							<div className='p-10 '>
								{pageCount === 0 && (
									<h1 className='mb-10 text-2xl font-bold text-center text-gray-800'>
										I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)
									</h1>
								)}
								{pageCount === 1 && (
									<h1 className='mb-10 text-2xl font-bold text-center text-gray-800'>
										I WANT TO BUILD
									</h1>
								)}

								{/* // First page */}
								{pageCount === 0 && (
									<div className='flex flex-col pr-16 space-y-4 '>
										{frameworks.map((framework, index) => (
											<div
												className={`p-4 transition duration-100 ease-in-out bg-white rounded-md cursor-pointer hover:bg-gray-800 hover:text-white hover:border-white ${
													selected === framework.id ? 'bg-green-500' : ''
												}`}
												onClick={() => handler(framework)}
												key={index}
											>
												<h1 className='text-xl font-bold'>{framework.name}</h1>
												<p>{framework.description}</p>
											</div>
										))}
									</div>
								)}

								{/* // 2nd step */}
								{pageCount === 1 && (
									<div className='flex flex-col pr-16 space-y-4 '>
										{appCategories.map((category, index) => (
											<div
												className={`p-4 transition duration-100 ease-in-out bg-white rounded-md cursor-pointer hover:bg-gray-800 hover:text-white hover:border-white ${
													selectCategory === category.id ? 'bg-green-500' : ''
												}`}
												onClick={() => handleCategory(category)}
												key={index}
											>
												<h1 className='text-xl font-bold'>{category.name}</h1>
												<p>{category.description}</p>
											</div>
										))}
									</div>
								)}

								{/* // 3rd step */}
								{pageCount === 2 && (
									<div className='flex flex-col justify-center pr-16 m-auto space-y-8 '>
										{/* Ready */}
										<div className='m-auto space-y-8'>
											<h1>DO YOU HAVE UX DESIGN READY?</h1>
											<div className='space-x-10 text-center'>
												<button
													className={`px-4 py-2 border-2 rounded-md cursor-pointer hover:border-green-500 ${
														ready ? 'bg-green-500' : ''
													}`}
													onClick={() => setReady((prevCheck) => !prevCheck)}
												>
													Yeas
												</button>
												<button
													className={`px-4 py-2 border-2 rounded-md cursor-pointer hover:border-green-500 ${
														ready ? '' : 'bg-green-500'
													}`}
													onClick={() => setReady((prevCheck) => !prevCheck)}
												>
													No
												</button>
											</div>
										</div>
										{/* select Page */}
										<div className='m-auto space-y-8'>
											<h1>
												HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?
											</h1>
											<div className='space-x-10 text-center'>
												<button
													className='text-3xl font-bold'
													disabled={pageQty === 0}
													onClick={() => setPageQty(pageQty - 1)}
												>
													-
												</button>
												<input
													className='border-2 rounded-md cursor-pointer hover:border-green-500'
													readOnly
													type='number'
													value={pageQty}
													onChange={(e) => setPageQty(e.target.value)}
												/>
												<button
													className='text-3xl font-bold'
													onClick={() => setPageQty(pageQty + 1)}
												>
													+
												</button>
											</div>
										</div>

										{/* select Payment Method */}
										<div className='m-auto space-y-8'>
											<h1>ANY PAYMENT GATEWAY INTEGRATION?</h1>
											<div className='space-x-10 text-center'>
												<button
													className={`px-4 py-2 border-2 rounded-md cursor-pointer hover:border-green-500 ${
														paymentMethod === 'stripe' ? 'bg-green-500' : null
													}`}
													value='stripe'
													onClick={(e) => setPaymentMethod(e.target.value)}
												>
													Stripe
												</button>
												<button
													className={`px-4 py-2 border-2 rounded-md cursor-pointer hover:border-green-500 ${
														paymentMethod === 'paypal' ? 'bg-green-500' : null
													}`}
													value='paypal'
													onClick={(e) => setPaymentMethod(e.target.value)}
												>
													Paypal
												</button>
												<button
													className={`px-4 py-2 border-2 rounded-md cursor-pointer hover:border-green-500 ${
														paymentMethod === 'Both' ? 'bg-green-500' : null
													}`}
													value='Both'
													onClick={(e) => setPaymentMethod(e.target.value)}
												>
													Both
												</button>
												<button
													className={`px-4 py-2 border-2 rounded-md cursor-pointer hover:border-green-500 ${
														paymentMethod === 'none' ? 'bg-green-500' : null
													}`}
													value='none'
													onClick={(e) => setPaymentMethod(e.target.value)}
												>
													None
												</button>
											</div>
										</div>
									</div>
								)}

								{/* Next & Prev */}
								<div className='mt-16 '>
									<div className='flex justify-center m-auto space-x-8 it'>
										<button
											className={`px-4 py-2  rounded-md cursor-pointer ${
												pageCount === 0 ? 'bg-gray-500' : 'bg-green-500'
											}`}
											disabled={pageCount === 0}
											onClick={handlePrev}
										>
											{' '}
											previous
										</button>
										<div className='w-full h-10 bg-gray-200 rounded-full'>
											<div
												className='h-10 bg-blue-600 rounded-full'
												style={{ width: `${barWidth}%` }}
											></div>
										</div>
										<button
											className={`px-4 py-2  rounded-md cursor-pointer ${
												pageCount === 2 ? 'bg-gray-500' : 'bg-green-500'
											}`}
											disabled={pageCount === 2}
											onClick={handleNext}
										>
											next
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='col-span-1 '>
							<div className='p-10'>
								{/* 2nd step */}
								{pageCount === 1 && (
									<div className='flex flex-col items-center justify-center space-y-6 '>
										<h1 className='font-medium text-gray-800 '>
											Your Framework is:{' '}
											<span className='text-xl font-bold'>{frameworkName}</span>{' '}
										</h1>
										<div className='flex space-x-16'>
											<h1 className='text-2xl font-bold text-gray-800'>
												Price:
											</h1>
											<h1 className='text-2xl font-bold text-green-500'>
												{' '}
												{appPrice}
											</h1>
										</div>
									</div>
								)}

								{/* 3rd step */}
								{pageCount === 2 && (
									<div className='flex flex-col items-center justify-center space-y-6 '>
										<h1 className='font-medium text-gray-800 '>
											Your Framework is:{' '}
											<span className='text-xl font-bold'>{frameworkName}</span>{' '}
										</h1>
										<h1 className='font-medium text-gray-800 '>
											You want to build :{' '}
											<span className='text-xl font-bold'>
												{selectedCategoryName}
											</span>{' '}
										</h1>
										<div className='flex space-x-16'>
											<h1 className='text-2xl font-bold text-gray-800'>
												Total Price:
											</h1>
											<h1 className='text-2xl font-bold text-green-500'>
												{' '}
												{appPrice + categoryPrice}
											</h1>
										</div>
										<p>
											"This cost will include 2 rounds of corrections at UI
											design stage, and once the design is finalized, we will
											proceed to development. Project will be divided into 2 - 3
											milestone payments."
										</p>

										<div className='pt-16'>
											<Link to='/thanks'>
												<button className='px-4 py-2 bg-green-500 rounded-md cursor-pointer '>
													START YOUR PROJECT NOW
												</button>
											</Link>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
