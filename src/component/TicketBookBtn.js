import { useContext, useState } from "react";
import { MyCartContext } from "../App";
import cookie from "react-cookies";

const TicketBookBtn = (props) => {
	let cart = cookie.load("cart") || null;
	// const [isChoose, setIsChoose] = useState(false);
	const [isChoose, setIsChoose] = useState(props.id in cart);
	const [, cartDispatch] = useContext(MyCartContext);

	const booking = (propsValue) => {
		let dispatching = {
			type: "inc",
		};
		if (isChoose) {
			dispatching = { ...dispatching, type: "dec" };
		}
		cartDispatch(dispatching);
		setIsChoose(!isChoose);

		if (cart === null) cart = {};
		if (propsValue.id in cart) {
			delete cart[propsValue.id];
		} else {
			cart[propsValue.id] = {
				id: propsValue.id,
				unitPrice: propsValue.price,
				origin: propsValue.trip.routeId.origin.province,
				destination: propsValue.trip.routeId.destination.province,
				setOffTime: propsValue.trip.setOffTime,
				setOffDay: propsValue.trip.setOffDay,
				seatRowPos: propsValue.seatId.seatRowPos,
				seatColPos: propsValue.seatId.seatColPos,
			};
			// console.log(propsValue.price);
		}

		cookie.save("cart", cart);
		console.info(cart);
	};

	const classNames = {
		not: "inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
		booked: "inline-block rounded-full bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]",
	};
	// console.log(props.seatId.seatRowPos);

	return !props.isAvailable ? (
		<button
			key={props.keyId}
			disabled
			className='inline-block rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out  focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'>
			{props.price}VND, row:{props.seatId.seatRowPos}-col:{props.seatId.seatColPos}
		</button>
	) : (
		<button onClick={() => booking(props)} key={props.keyId} className={!isChoose ? classNames["not"] : classNames["booked"]}>
			row:{props.seatId.seatRowPos}-col:{props.seatId.seatColPos}
		</button>
	);
};

export default TicketBookBtn;
