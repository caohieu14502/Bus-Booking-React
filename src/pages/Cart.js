import { useContext, useState } from "react";
import cookie from "react-cookies";
import { MyCartContext, MyUserContext } from "../App";
import { Link } from "react-router-dom";
import { authApi, endpoints } from "../configs/Api";
import MySpinner from "../component/MySpinner";

const Cart = () => {
	const [, cartDispatch] = useContext(MyCartContext);
	const [user] = useContext(MyUserContext);
	const [loading, setLoading] = useState(false);
	const [carts, setCarts] = useState(cookie.load("cart") || null);
	const [isPaid, setIsPaid] = useState(false);

	console.info(carts);

	const deleteCart = (ticket) => {
		let cart = cookie.load("cart") || null;
		if (cart !== null) {
			if (ticket.id in cart) {
				cartDispatch({
					type: "dec",
				});
				delete cart[ticket.id];
				setCarts(cart);
				cookie.save("cart", cart);
			}
		}
	};

	const pay = () => {
		setLoading(true);
		const process = async () => {
			let res = await authApi().post(endpoints["pay"], carts);
			if (res.status === 200) {
				cookie.remove("cart");
				setCarts([]);
				setIsPaid(true);
				cartDispatch({
					type: "paid",
				});
			}
		};
		process();
	};

	if (isPaid)
		return (
			<div className='mb-3 mt-6 m-auto flex justify-center w-9/12 items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700' role='alert'>
				<span className='mr-2'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
						<path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z' clipRule='evenodd' />
					</svg>
				</span>
				Paid Successfully!!!
			</div>
		);

	if (carts === null || Object.values(carts).length === 0)
		return (
			<div className='mb-4 mt-8 flex justify-center w-9/12 m-auto rounded-lg text-center bg-warning-100 px-6 py-5 text-base text-warning-800' role='alert'>
				<span className='mr-2'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
						<path
							fillRule='evenodd'
							d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				You didn't pick anything YET!
			</div>
		);
	return (
		<>
			<h1>Bill</h1>
			<div className='flex flex-col w-3/4 m-auto'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full text-left text-sm font-light'>
								<thead className='border-b font-medium dark:border-neutral-500'>
									<tr>
										<th scope='col' className='px-6 py-4'>
											#
										</th>
										<th scope='col' className='px-6 py-4'>
											Route
										</th>
										<th scope='col' className='px-6 py-4'>
											Time
										</th>
										<th scope='col' className='px-6 py-4'>
											Price
										</th>
										<th scope='col' className='px-6 py-4'>
											Seat
										</th>
										<th scope='col' className='px-6 py-4'></th>
									</tr>
								</thead>
								<tbody>
									{Object.values(carts).map((c) => {
										return (
											<tr className='border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50'>
												<td className='whitespace-nowrap px-6 py-4 font-medium'>{c.id}</td>
												<td className='whitespace-nowrap px-6 py-4'>
													{c.origin} - {c.destination}
												</td>
												<td className='whitespace-nowrap px-6 py-4'>
													{c.setOffDay} at {c.setOffTime}
												</td>
												<td className='whitespace-nowrap px-6 py-4'>{c.unitPrice}</td>
												<td className='whitespace-nowrap px-6 py-4'>
													Row:{c.seatRowPos} - Col:{c.seatColPos}
												</td>
												<td className='whitespace-nowrap px-6 py-4'>
													<button
														onClick={() => deleteCart(c)}
														type='button'
														className='inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]'>
														&times;
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{user === null ? (
					<div className='mb-4 mt-6 rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600 text-center' role='alert'>
						Please
						<Link to='/login?next=/cart' className='text-danger-500 mx-[4px]'>
							Log In
						</Link>
						to book them!!!
					</div>
				) : (
					<div className='flex justify-end w-9/12'>
						{loading === true ? (
							<MySpinner />
						) : (
							<button
								onClick={pay}
								className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
								PAY
							</button>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Cart;
