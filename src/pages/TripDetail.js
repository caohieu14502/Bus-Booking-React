import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MySpinner from "../component/MySpinner";
import Api, { endpoints } from "../configs/Api";
import TicketListTrip from "../component/TicketListTrip";
import CommentSection from "../component/CommentSection";
import Moment from "react-moment";

const TripDetail = () => {
	const { tripId } = useParams();
	const [trip, setTrip] = useState(null);
	const nav = useNavigate();

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
			<div className='m-auto text-center'>
				<h1 class='mx-auto font-semibold text-[#777573] text-5xl text-center sm:text-5xl md:text-6xl xl:text-7xl dark:text-white'>
					{trip.routeId.origin.province} - {trip.routeId.destination.province}
				</h1>
			</div>
			<div className='m-auto text-center'>
				<h1 class='mx-auto font-bold text-[#777573] text-xl text-center sm:text-5xl md:text-6xl xl:text-7xl dark:text-white'>
					<Moment format='LL'>{trip.setOffDay}</Moment>
					<br />
					<Moment format='LT'>{trip.setOffTime}</Moment>
				</h1>
				<h1 class=' mb-4 mx-auto font-semibold text-[#777573] text-xl text-center sm:text-5xl md:text-6xl xl:text-7xl dark:text-white'></h1>
			</div>

			<div className='flex m-auto w-3/4'>
				<div className='pr-4'>
					<img src={trip.routeId.destination.picture} alt='' className='rounded-2xl w-[500px]' />
				</div>
				<TicketListTrip trip={trip} />
			</div>
			<div className='flex justify-end w-3/4'>
				<button
					onClick={() => nav("/cart")}
					className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
					PAY
				</button>
			</div>
			<br />
			<div className='border-b-2 border-b-cyan-500'></div>
			<CommentSection tripId={tripId} />
		</>
	);
};

export default TripDetail;
