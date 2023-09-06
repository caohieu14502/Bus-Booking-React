import { useEffect, useState } from "react";
import { authApi, endpoints } from "../configs/Api";
import MySpinner from "../component/MySpinner";
import Moment from "react-moment";
import { TERipple } from "tw-elements-react";
import { useNavigate } from "react-router-dom";

const MyTrips = () => {
	const [tickets, setTickets] = useState(null);
	const [param, setParam] = useState("future");
	const nav = useNavigate();

	let loadTickets = async () => {
		let res = await authApi().get(endpoints["myTickets"](param));
		setTickets(res.data);
	};

	let setActive = (e) => {
		setParam(e.target.getAttribute("data-value"));
		document.querySelectorAll(".presentation").forEach((d) => {
			d.removeAttribute("data-te-nav-active");
		});
		e.target.setAttribute("data-te-nav-active", "");
	};

	useEffect(() => {
		loadTickets();
	}, [param]);

	console.log(tickets);
	return (
		<>
			<div className='m-auto text-center'>
				<h1 class='mx-auto font-semibold text-[#777573] text-5xl text-center sm:text-5xl md:text-6xl xl:text-7xl dark:text-white'>My Tickets</h1>
			</div>
			<ul className='mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 bg-[#F2F6F8]' role='tablist' data-te-nav-ref>
				<li role='presentation'>
					<div
						className='my-2 presentation block hover:cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
						data-value='future'
						onClick={setActive}
						data-te-nav-active>
						Future
					</div>
				</li>
				<li role='presentation'>
					<div
						className='my-2 presentation block hover:cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
						data-value='past'
						onClick={setActive}>
						Past
					</div>
				</li>
			</ul>
			{tickets === null ? (
				<MySpinner />
			) : (
				<div className='mb-6'>
					<div className='grid gap-4 grid-cols-5'>
						{tickets.map((t) => {
							return (
								<>
									<div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700' key={t.id}>
										<h5 className='text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
											{t.tripId.routeId.destination.province} - {t.tripId.routeId.origin.province}
										</h5>
										<p className='text-center mb-4 text-base text-neutral-600 dark:text-neutral-200'>
											<Moment format='LL'>{t.tripId.setOffDay}</Moment>
										</p>
										<p className='text-center mb-4 text-base text-neutral-600 dark:text-neutral-200'>
											<Moment format='LT'>{t.tripId.setOffTime}</Moment>
										</p>
										<p className='text-center mb-4 text-base text-neutral-600 dark:text-neutral-200'>
											Col: {t.seatId.seatColPos} -- Row:{t.seatId.seatRowPos}
										</p>
										<div className='text-center '>{t.price.toLocaleString()} VND</div>
										<div className='flex justify-around mt-5'>
											<TERipple>
												<button
													onClick={() => nav(`/trips/${t.tripId.id}`)}
													className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
													{param === "future" ? "Detail" : "Rate"}
												</button>
											</TERipple>
											{param === "past" ? (
												""
											) : (
												<TERipple>
													<button
														onClick={() => nav(`/trips/${t.tripId.id}`)}
														className='inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
														Change
													</button>
												</TERipple>
											)}
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default MyTrips;
