import Moment from "react-moment";

const TripItem = (props) => {
	return (
		<>
			<div className='border p-20px flex justify-between rounded-3xl w-3/4 m-auto h-[130px] shadow hover:border-indigo-500/100 hover:shadow-sm transition-shadow hover:cursor-pointer hover:shadow-indigo-400' onClick={props.onClick} key={props.key}>
				<div className='flex justify-center flex-col ml-[20px]'>
					<img src={props.routeId.destination.picture} alt='' className='w-[120px] rounded-md shadow-lg'></img>
				</div>
				<div className='info flex justify-around items-center w-3/6'>
					<div className='from w-3/6'>
						<h3 className='text-3xl text-[#20415B]'>
							<Moment format='LT'>{props.setOffTime}</Moment>
						</h3>
						<h5 className='text-base text-[#446893]'>{props.routeId.origin.location}</h5>

						<p className='uppercase text-[10px] font-semibold text-[#699BC5]'>{props.routeId.origin.province}</p>
					</div>
					<div className='text-[#AFC5D4] mx-[40px]'>
						<svg width='36' height='100%' viewBox='0 0 36 12' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fillRule='evenodd' clipRule='evenodd' d='M30.3431 0L35.7071 5.29396C36.0976 5.68448 36.0976 6.31765 35.7071 6.70817L30.3431 12L29 10.6579L32.66 7.00107H18V5.00107H32.66L29 1.34421L30.3431 0ZM2 5H0V7H2V5ZM4 5H8V7H4V5ZM16 5H10V7H16V5Z' fill='currentColor'></path>
						</svg>
					</div>
					<div className='to w-3/6'>
						<h3 className='text-3xl text-[#20415B]'>{props.setOffTime}</h3>
						<h5 className='text-base text-[#446893]'>{props.routeId.destination.location}</h5>

						<p className='uppercase text-[10px] font-semibold text-[#699BC5]'>{props.routeId.destination.province}</p>
					</div>
				</div>
				<div className='flex flex-col justify-evenly items-end mr-[20px]'>
					<div>
						{props.busId.busTypeId.name} {props.busId.numberOfSeats} chỗ
					</div>
					<div>
						<div className='inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
							<span>300000 VNĐ</span>
							<span className='pl-3 text-md'>&gt;&gt;</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TripItem;
