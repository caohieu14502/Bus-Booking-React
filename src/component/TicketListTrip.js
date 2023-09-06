import { useEffect, useState } from "react";
import Api, { endpoints } from "../configs/Api";
import MySpinner from "./MySpinner";
import TicketBookBtn from "./TicketBookBtn";

const TicketListTrip = (props) => {
	const [tickets, setTickets] = useState(null);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const loadTicket = async () => {
			try {
				let { data } = await Api.get(endpoints["ticketsTrip"](props.trip.id));
				setTickets(data);
			} catch (ex) {
				console.log(ex);
			}
		};

		loadTicket();
	}, []);

	let classNames = `grid gap-3 grid-cols-8 grid-cols-7 grid-cols-6 grid-cols-5 grid-cols-4 grid-cols-3 grid-cols-2`;

	if (tickets === null) return <MySpinner />;

	const maxCol = tickets.reduce(function (prev, current) {
		return prev.seatId.seatColPos > current.seatId.seatColPos ? prev : current;
	});

	classNames = `grid gap-3 grid-cols-${maxCol.seatId.seatColPos}`;

	return (
		<>
			<div>
				<div className='flex justify-around mb-10'>
					<button className='inline-block rounded-full bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]'>
						Driver
					</button>
					<button className='inline-block rounded-full bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]'>
						row:0 - col:2
					</button>
				</div>
				<div className={classNames}>
					{tickets.map((t) => {
						return <TicketBookBtn {...t} trip={props.trip} keyId={t.id} setTotal={setTotal} total={total} />;
					})}
				</div>
				<div className='mt-6'>Price per ticket: {Object.values(tickets)[tickets.length - 1].price.toLocaleString()} VND</div>
				<div className='mt-6'>Total: {total.toLocaleString()} VND</div>
			</div>
		</>
	);
};

export default TicketListTrip;
