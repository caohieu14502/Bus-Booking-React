import { useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Api, { endpoints } from "../configs/Api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const [stations, setStations] = useState([]);
	const [formInput, setFormInput] = useState({ origin: "", destination: "", setOffDay: new Date().toISOString().split("T")[0], setOffTime: new Date().toISOString().split("T")[1] });

	const nav = useNavigate();

	const search = (evt) => {
		evt.preventDefault();
		let params = "/trips?";
		for (const input in formInput) {
			if (formInput[input] !== "") params += `${input}=${formInput[input]}&`;
		}
		params = params.substring(params.length - 1, 1);
		nav(params);
	};

	useEffect(() => {
		let loadStations = async () => {
			let res = await Api.get(endpoints["stations"]);
			setStations(res.data);
		};

		loadStations();
	}, []);

	return (
		<form className='h-14 flex' onSubmit={search}>
			<div className='flex rounded-xl bg-white gap-1 shadow-lg shadow-indigo-500/50'>
				<TEInput type='text' id='orginSearch' label='Origin' onChange={(event) => setFormInput({ ...formInput, origin: event.target.value })} value={formInput.origin} autoComplete='off' className='peer h-14 pr-2'>
					<ul className='w-10/12 mt-1 hover:block peer-focus:block absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block'>
						{stations.map((s) => {
							return (
								<li className='hover:cursor-pointer' key={s.id}>
									<div
										className='block w-full  whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent dark:text-neutral-200 dark:hover:bg-white/30'
										onClick={() => setFormInput({ ...formInput, origin: s.province })}>
										{s.province}
									</div>
								</li>
							);
						})}
					</ul>
				</TEInput>
				<TEInput type='text' id='destinationSearch' autoComplete='off' onChange={(event) => setFormInput({ ...formInput, destination: event.target.value })} value={formInput.destination} label='Destination' className='h-14 pr-2'>
					<ul className='w-10/12 hover:block mt-1 peer-focus:block absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block'>
						{stations.map((s) => {
							return (
								<li className='hover:cursor-pointer' key={s.id}>
									<div
										className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent dark:text-neutral-200 dark:hover:bg-white/30'
										onClick={() => setFormInput({ ...formInput, destination: s.province })}>
										{s.province}
									</div>
								</li>
							);
						})}
					</ul>
				</TEInput>
				<TEInput type='date' id='dateSearch' label='Date' min={new Date().toISOString().split("T")[0]} value={formInput.setOffDay} onChange={(event) => setFormInput({ ...formInput, setOffDay: event.target.value })} className='h-14 pr-2' />
				<TEInput type='time' id='timeSearch' label='Time' value={formInput.setOffTime} onChange={(event) => setFormInput({ ...formInput, setOffTime: event.target.value })} className='h-14 pr-2' />
			</div>

			<TERipple className=' bg-submain transition duration-300 hover:scale-105 delay-100 ease-in-out rounded-xl ml-8 w-40 hover:shadow-indigo-500/40 shadow-2xl text-white hover:bg-btnHover' rippleColor='light'>
				<button
					type='submit'
					className='inline-block h-full w-full border-none rounded-xl font-extrabold border-2 px-6 pb-[6px] pt-2 leading-normal text-white transition duration-150 ease-in-out  hover:bg-neutral-500 hover:bg-opacity-10   focus:outline-none focus:ring-0  dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'>
					Search
				</button>
			</TERipple>
		</form>
	);
};

export default SearchBar;
