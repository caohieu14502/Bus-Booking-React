const MyCartCounterReducer = (currentState, action) => {
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
