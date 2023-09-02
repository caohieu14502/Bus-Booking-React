import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import TripPage from "./pages/TripPage";
import Login from "./pages/Login";
import { createContext, useReducer } from "react";
import MyUserReducer from "./reducers/MyUserReducer";
import cookie from "react-cookies";
import Register from "./pages/Register";
import TripDetail from "./pages/TripDetail";
import MyCartCounterReducer from "./reducers/MyCartCounterReducer";
import Cart from "./pages/Cart";

export const MyUserContext = createContext();
export const MyCartContext = createContext();

const countCart = () => {
	let cart = cookie.load("cart") || null;
	if (cart != null) return Object.keys(cart).length;
	return 0;
};

const App = () => {
	const [user, dispatch] = useReducer(MyUserReducer, cookie.load("user") || null);
	const [cartCounter, cartDispatch] = useReducer(MyCartCounterReducer, countCart());

	return (
		<MyUserContext.Provider value={[user, dispatch]}>
			<MyCartContext.Provider value={[cartCounter, cartDispatch]}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/trips' element={<TripPage />} />
						<Route path='/trips/:tripId' element={<TripDetail />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</MyCartContext.Provider>
		</MyUserContext.Provider>
	);
};

export default App;
