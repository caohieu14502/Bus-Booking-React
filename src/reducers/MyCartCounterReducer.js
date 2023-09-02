import { useState } from "react";
import cookie from "react-cookies";

const MyCartCounterReducer = (currentState, action) => {
	const [carts, setCarts] = useState(cookie.load("cart") || null);

	switch (action.type) {
		case "inc":
			return currentState + 1;
		case "dec":
			return currentState - 1;
		case "pay":
			return 0;
	}
};

export default MyCartCounterReducer;
