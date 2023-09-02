import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MySpinner from "../component/MySpinner";
import Api, { endpoints } from "../configs/Api";
import TicketListTrip from "../component/TicketListTrip";

const TripDetail = () => {
	const { tripId } = useParams();
	const [trip, setTrip] = useState(null);

	useEffect(() => {
		const loadTrip = async () => {
			try {
				let { data } = await Api.get(endpoints["tripDetail"](tripId));
				setTrip(data);
			} catch (ex) {
				console.log(ex);
			}
		};

		loadTrip();
	}, []);

	if (trip === null) return <MySpinner />;
	return (
		<>
			<h1>Trip detail</h1>
			<p className='text-center'>
				{trip.routeId.origin.province} - {trip.routeId.destination.province}{" "}
			</p>
			<div className='grid grid-cols-2 gap-4 w-3/4 m-auto'>
				<img src={trip.routeId.destination.picture} alt='' />
				<TicketListTrip trip={trip} />
			</div>
			<div className='flex justify-end w-3/4'>
				<button
					type='submit'
					className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
					PAY
				</button>
			</div>
		</>
	);
};

export default TripDetail;
