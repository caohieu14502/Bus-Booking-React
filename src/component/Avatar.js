import { useState } from "react";
import { Link } from "react-router-dom";
import { TECollapse, TERipple } from "tw-elements-react";

const Avatar = ({ logout, user }) => {
	const [show, setShow] = useState(false);

	const toggleShow = () => setShow(!show);
	const switchRender = (role) => {
		switch (role) {
			case "ROLE_Staff":
				return (
					<li>
						<Link
							className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
							to='/printTicket'>
							Print ticket
						</Link>
					</li>
				);
			case "ROLE_Driver":
				return (
					<li>
						<Link
							className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
							to='/driver'>
							Trips
						</Link>
					</li>
				);
		}
	};

	return (
		<>
			<div className='relative'>
				<TERipple rippleColor='light'>
					<div
						className='flex justify-between rounded bg-submain px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
						onClick={toggleShow}>
						<img src={user.avatar} className='rounded-full w-[30px] h-[30px]' alt='' loading='lazy' />
						<span className='[&>svg]:w-8 ml-4'>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='h-8 w-8'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
							</svg>
						</span>
					</div>
					<TECollapse className='absolute w-[150px]' show={show}>
						<ul
							className='absolute z-[1000] float-left m-0 min-w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block'
							aria-labelledby='dropdownMenuButton2'
							data-te-dropdown-menu-ref>
							<li>
								<Link
									className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
									to='/'>
									Information
								</Link>
							</li>
							{switchRender(user.roleId.roleName)}
							<hr className='my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200' />
							<li>
								<button
									className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-red-400 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
									onClick={logout}
									data-te-dropdown-item-ref>
									<b>Log out</b>
								</button>
							</li>
						</ul>
					</TECollapse>
				</TERipple>
			</div>
		</>
	);
};

export default Avatar;
