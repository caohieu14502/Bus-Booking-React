import { useEffect, useState } from "react";
import TripItem from "../component/TripItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import Api, { endpoints } from "../configs/Api";
import MySpinner from "../component/MySpinner";

const TripPage = () => {
	const [trips, setTrips] = useState(null);
	const [q] = useSearchParams();
	const nav = useNavigate();
	useEffect(() => {
		let loadTrips = async () => {
			let e = endpoints["trips"];
			if (q != null) e = `${e}?${q}`;
			try {
				let res = await Api.get(e);
				setTrips(res.data);
			} catch (ex) {
				console.error(ex);
			}
		};
		loadTrips();
	}, [q]);

	if (trips === null)
		return (
			<div className='flex justify-center mt-20'>
				<MySpinner />
			</div>
		);

	if (trips.length === 0)
		return (
			<div class='my-4 mt-6 flex justify-center rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800' role='alert'>
				<span class='mr-2'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-5 w-5'>
						<path
							fillRule='evenodd'
							d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				Don't have any trip YET! Wait for it...
			</div>
		);

	return (
		<>
			<h1 class='mx-auto mb-6 font-semibold text-[#0274CA] text-5xl text-center sm:text-5xl md:text-6xl xl:text-7xl dark:text-white'>TRIPS</h1>
			<div className='grid grid-rows-1 gap-4'>
				{trips.map((t) => (
					<TripItem {...t} key={t.id} onClick={() => nav(`/trips/${t.id}`)} />
				))}
			</div>
		</>
	);
};

export default TripPage;
