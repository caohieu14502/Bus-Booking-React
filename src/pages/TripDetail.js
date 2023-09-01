import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MySpinner from "../component/MySpinner";
import Api, { endpoints } from "../configs/Api";

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
			<p>
				{trip.routeId.origin.province} - {trip.routeId.destination.province}{" "}
			</p>
			<img src={trip.routeId.destination.picture} />
		</>
	);
};

export default TripDetail;
