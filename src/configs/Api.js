import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/BusBookingApp";
const SERVER = "http://localhost:8080";

export const endpoints = {
	stations: `${SERVER_CONTEXT}/api/stations/`,
	routes: `${SERVER_CONTEXT}/api/routes/`,
	trips: `${SERVER_CONTEXT}/api/trips/`,
	tripDetail: (tripId) => `${SERVER_CONTEXT}/api/trips/${tripId}`,
	ticketsTrip: (tripId) => `${SERVER_CONTEXT}/api/tickets/?tripId=${tripId}`,
	login: `${SERVER_CONTEXT}/api/login/`,
	register: `${SERVER_CONTEXT}/api/users/`,
	currentUser: `${SERVER_CONTEXT}/api/current-user/`,
	printUserTicket: `${SERVER_CONTEXT}/api/userMail/`,
	printTicket: `${SERVER_CONTEXT}/api/printTicket/`,
	pay: `${SERVER_CONTEXT}/api/pay/`,
	googleTest: `${SERVER_CONTEXT}/api/login/google/`,
};

export const authApi = () => {
	return axios.create({
		baseURL: SERVER,
		headers: {
			Authorization: cookie.load("token"),
		},
	});
};

export const authGoogle = () => {
	return axios.create({
		baseURL: SERVER,
		headers: {
			Authorization: cookie.load("token"),
		},
	});
};

export default axios.create({
	baseURL: SERVER,
});
