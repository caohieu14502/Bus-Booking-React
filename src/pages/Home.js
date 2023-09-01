import { useEffect, useState } from "react";
import HomeRegister from "../component/HomeRegister";
import { TERipple } from "tw-elements-react";
import GoodComments from "../component/GoodComments";
import Api, { endpoints } from "../configs/Api";
import MySpinner from "../component/MySpinner";
import { Link } from "react-router-dom";

const Home = () => {
	const [routes, setRoutes] = useState(null);

	useEffect(() => {
		const loadRoutes = async () => {
			// let res = await fetch(
			// 	"http://localhost:8080/BusBookingApp/api/routes?page=1"
			// );
			// let data = await res.json();
			try {
				let res = await Api.get(endpoints["routes"]);
				setRoutes(res.data);
			} catch (ex) {
				console.error(ex);
			}
		};
		loadRoutes();
	}, []);

	if (routes === null)
		return (
			<div className='flex justify-center mt-20'>
				<MySpinner />
			</div>
		);
	return (
		<>
			<GoodComments />
			<div className='bg-[#F2F6F8] h-[720px] w-full mt-16 '>
				<div className='text-[#20415B] mb-4 font-[900] text-[32px] text-center py-8'>Top travelled bus routes</div>
				<div className='container grid grid-cols-3 gap-12 m-auto flex-wrap'>
					{routes.map((r) => {
						let h = `/trips?routeId=${r.id}`;
						return (
							<Link to={h} className='w-[400px] relative h-[250px] rounded-3xl' key={r.id}>
								<div className='block rounded-3xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
									<a href='#!'>
										<img className='rounded-xl w-[400px] h-[250px] duration-300 transition delay-100 ease-in-out  hover:scale-105' src={r.destination.picture} alt='' />
									</a>
									<div className='ml-3 bottom-1 absolute backdrop-blur-lg  rounded-xl h'>
										<p className='m-2  align-middle text-[14px] font-medium text-white'>
											{r.origin.province} to {r.destination.province}
										</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<HomeRegister />
		</>
	);
};

export default Home;
