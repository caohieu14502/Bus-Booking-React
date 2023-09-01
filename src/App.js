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

export const MyUserContext = createContext();

const App = () => {
	const [user, dispatch] = useReducer(MyUserReducer, cookie.load("user") || null);

	return (
		<MyUserContext.Provider value={[user, dispatch]}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/trips' element={<TripPage />} />
					<Route path='/trips/:tripId' element={<TripDetail />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</MyUserContext.Provider>
	);
};

export default App;
