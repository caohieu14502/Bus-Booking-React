import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../component/SearchBar";
import { useContext } from "react";
import { MyCartContext, MyUserContext } from "../App";
import Avatar from "../component/Avatar";
import tickets from "../asset/img/tickets.png";

const Header = () => {
	const [cartCounter] = useContext(MyCartContext);
	const nav = useNavigate();

	const [user, dispatch] = useContext(MyUserContext);
	const logout = () => {
		console.log("Log out");
		dispatch({
			type: "logout",
		});
	};

	return (
		<>
			<header className='bg-main'>
				<nav className='mx-auto flex w-11/12 items-center justify-between p-4 pb-0 lg:px-8'>
					<div className='flex lg:flex-1'>
						<div>
							<Link to='' className='text-blue -m-1.5 p-1.5'>
								<svg height='40' viewBox='0 0 439 131' role='img' aria-label='Busbud.com' className='s34' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M42.01 100.58L42 101v24a6 6 0 1 0 12 0v-24l-.01-.42c-.58.3-1.15.56-1.73.75-2.77.9-5.75.9-8.52 0-.58-.2-1.15-.44-1.73-.75z' fill='#FFAB00'></path>
									<path d='M54 100.57c-.58.31-1.15.56-1.74.76-2.77.9-5.75.9-8.52 0-.59-.2-1.16-.45-1.74-.76v-6c.58.31 1.15.56 1.74.76 2.77.9 5.75.9 8.52 0 .59-.2 1.16-.45 1.74-.76v6z' fill='#DA771B'></path>
									<path
										d='M32.4 9.89c5.46-5.46 8.2-8.2 11.34-9.22 2.77-.9 5.75-.9 8.52 0C55.41 1.7 58.14 4.43 63.6 9.9l22.51 22.5c5.46 5.46 8.2 8.2 9.22 11.34.9 2.77.9 5.75 0 8.52-1.03 3.15-3.76 5.88-9.22 11.34L63.6 86.11c-5.46 5.46-8.2 8.2-11.34 9.22-2.77.9-5.75.9-8.52 0-3.15-1.03-5.88-3.76-11.34-9.22L9.89 63.6c-5.46-5.46-8.2-8.2-9.22-11.34-.9-2.77-.9-5.75 0-8.52C1.7 40.59 4.43 37.86 9.9 32.4L32.4 9.89z'
										fill='#FFAB00'></path>
									<path d='M20.07 46a28 28 0 0 0 55.86 0H69.9a22 22 0 0 1-43.82 0h-6.02z' fill='#DA771B'></path>
									<path
										d='M182.05 52.09h12.42v1.41c0 9.43-.05 19.4.04 28.83.02 2.16.28 4.4.9 6.47 1.44 4.78 5.3 6.25 9.68 6.07 5.9-.26 9.03-3.58 9.45-9.78.08-1.21.12-2.44.12-3.65V52.09h12.43v.74c-.01 10.53.03 21.6-.06 32.13a20.25 20.25 0 0 1-5.78 14.36c-3.05 3.16-6.9 4.95-11.18 5.76-5.38 1.01-10.66.67-15.72-1.53-6.5-2.82-10.42-7.72-11.74-14.59-.39-1.98-.5-4.05-.52-6.07-.05-9.7-.02-19.95-.02-29.65-.02-.36-.02-.7-.02-1.15zm153.4 0h12.42v1.41c0 9.43-.06 19.4.04 28.83.02 2.16.28 4.4.9 6.47 1.43 4.78 5.29 6.25 9.68 6.07 5.9-.26 9.03-3.58 9.44-9.78.09-1.21.13-2.44.13-3.65V52.09h12.43v.74c-.01 10.53.02 21.6-.06 32.13a20.25 20.25 0 0 1-5.78 14.36c-3.06 3.16-6.9 4.95-11.19 5.76-5.37 1.01-10.65.67-15.71-1.53-6.5-2.82-10.42-7.72-11.75-14.59-.38-1.98-.5-4.05-.51-6.07-.05-9.7-.02-19.95-.02-29.65-.02-.36-.02-.7-.02-1.15z'
										fill='currentColor'></path>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M167.48 55.63a23.7 23.7 0 0 1 9.2 14 34.3 34.3 0 0 1-.87 19.47 23.1 23.1 0 0 1-11.53 13.41 26.77 26.77 0 0 1-12.55 3.09c-15 0-27.55-7.65-27.55-29.23V32h12.55v25.27l.34-.22c.18-.11.31-.2.42-.31 3.35-3.5 7.59-5.11 12.31-5.7 6.52-.81 12.46.73 17.68 4.6zM148.9 95.17c5.65.59 10.34-1.15 13.42-6.07 2.09-3.33 2.78-7.07 2.78-10.98 0-6.98-2.72-13.75-9.08-16.05-6.37-2.32-14-.67-17.31 6.2-3.01 6.22-3 12.64-.4 19 1.91 4.65 5.5 7.37 10.59 7.9zm171.97-39.54a23.7 23.7 0 0 1 9.2 14 34.3 34.3 0 0 1-.87 19.47 23.1 23.1 0 0 1-11.53 13.41 26.77 26.77 0 0 1-12.55 3.09c-15 0-27.55-7.65-27.55-29.23V32h12.55v25.27l.34-.22c.18-.11.31-.2.42-.31 3.35-3.5 7.59-5.11 12.31-5.7 6.52-.81 12.46.73 17.68 4.6zm-18.59 39.54c5.65.59 10.34-1.15 13.42-6.07 2.09-3.33 2.77-7.07 2.77-10.98 0-6.98-2.71-13.75-9.07-16.05-6.37-2.32-14-.67-17.31 6.2-3.01 6.22-3 12.64-.4 19 1.91 4.65 5.5 7.37 10.59 7.9zM425.9 32v24.52c-.49-.35-.94-.7-1.39-1.05a24.44 24.44 0 0 0-2.82-1.98c-5.2-2.95-10.86-3.06-16.5-2-9.09 1.7-15.24 7.15-18.3 15.66a32.08 32.08 0 0 0 .07 22.68c2.15 5.68 5.97 10 11.4 12.87a24.6 24.6 0 0 0 14.74 2.57c5.25-.63 9.9-2.4 13.3-6.64l.67-.86v6.08h5.17c1.37.02 2.74.01 4.1 0h2.04V32h-12.49zm-11.63 63.05a12.2 12.2 0 0 0 8.94-5.73 19.77 19.77 0 0 0 3.13-11c0-5.32-1.43-12.73-8.13-15.93-6.77-3.12-16.36-1.35-19.37 8.1a25.37 25.37 0 0 0-.37 14.05c.89 3.56 2.7 6.59 5.87 8.64 3.04 1.96 6.45 2.32 9.93 1.87z'
										fill='currentColor'></path>
									<path
										d='M253 105.62c-4.4 0-8.15-.72-11.26-2.16-3.12-1.44-5.53-3.21-7.24-5.32a16.53 16.53 0 0 1-3.36-6.49l11.1-4.11a11.42 11.42 0 0 0 3.67 6.02c1.84 1.51 4.35 2.26 7.53 2.26 2.48 0 4.39-.53 5.73-1.6a5 5 0 0 0 2.06-4.12 4.9 4.9 0 0 0-1-3.12c-.64-.83-1.78-1.59-3.42-2.26-1.6-.7-3.92-1.4-6.93-2.1-5.06-1.21-9.1-3.07-12.11-5.58-3.02-2.52-4.52-6-4.52-10.45 0-3.18.72-5.95 2.16-8.3a13.92 13.92 0 0 1 6.38-5.47c2.81-1.3 6.23-1.96 10.25-1.96 3.95 0 7.35.62 10.2 1.86a18.17 18.17 0 0 1 6.83 4.82 15.88 15.88 0 0 1 3.41 6.28l-11.15 4.12a9.43 9.43 0 0 0-3.37-5.12 9.37 9.37 0 0 0-5.97-1.86c-2.15 0-3.82.52-5.03 1.56a4.8 4.8 0 0 0-1.76 3.82c0 1.1.27 2.06.8 2.86.54.8 1.51 1.54 2.92 2.21 1.44.64 3.47 1.26 6.08 1.86a51.6 51.6 0 0 1 10.05 3.26 15.41 15.41 0 0 1 6.28 5.03c1.54 2.1 2.3 4.84 2.3 8.19 0 3.31-.86 6.17-2.6 8.59a16.16 16.16 0 0 1-7.29 5.42 28.9 28.9 0 0 1-10.75 1.86z'
										fill='currentColor'></path>
								</svg>
							</Link>
						</div>
						{/* <div>
							<a href='#' className='text-blue -m-1.5 p-1.5'>
								<svg height='24' width='24' className='s129 s97'>
									<use href='/dscl/6.1.7/images/Icons/Bus/MD/BusMD.svg#root'></use>
								</svg>
							</a>
						</div> */}
					</div>
					<div className='lg:flex lg:flex-1 lg:justify-end items-center lg:gap-x-12'>
						<div className='relative right-0'>
							<button type='button' className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900' aria-expanded='false'>
								Language
								<svg className='h-5 w-5 flex-none text-gray-400' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
									<path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clipRule='evenodd' />
								</svg>
							</button>
						</div>
						<div onClick={() => nav("/cart")} className='hover:cursor-pointer relative inline-flex w-fit'>
							<div className='absolute bottom-auto left-auto right-0 top-1 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-400 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white'>
								{cartCounter}
							</div>
							<img src={tickets} className='w-[25px] h-[25px]' alt='' loading='lazy' />
						</div>
						{user === null ? (
							<Link to='/login' className='text-sm font-semibold leading-6 text-gray-900'>
								Log in <span aria-hidden='true'>&rarr;</span>
							</Link>
						) : (
							<>
								<Avatar logout={logout} user={user} />
							</>
						)}
					</div>
				</nav>
				<div className='m-auto place-content-center p-8 pt-0 w-10/12 flex'>
					<SearchBar />
				</div>
			</header>
		</>
	);
};
export default Header;
