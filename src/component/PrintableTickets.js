import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import MySpinner from "./MySpinner";
import cookie from "react-cookies";

const PrintableTickets = (props) => {
	const staff = cookie.load("user");

	console.log(props.tickets);
	let ticketts = props.tickets.map((c) => {
		const temp = c.tripId.setOffDay;
		c.tripId.setOffDay = new Date(temp).toISOString().split("T")[0];
		const temp2 = c.tripId.setOffTime;
		console.log(temp2);
		c.tripId.setOffTimeString = new Date(temp2).toTimeString().split(" ")[0];
		console.log(c.tripId.setOffTimeString);
		let file = <PDFFile ticket={c} user={props.user} staff={staff} />;
		return (
			<PDFDownloadLink document={file} fileName={c.id}>
				{({ loading }) =>
					loading ? (
						<MySpinner />
					) : (
						<button
							type='submit'
							className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
							Download - id: {c.id}
						</button>
					)
				}
			</PDFDownloadLink>
		);
	});

	return (
		<>
			{/* {props.tickets.map((c) => {                    */}
			{/* <PDFDownloadLink document={doc} fileName={props.tickets["0"].id}>
				{({ loading }) =>
					loading ? (
						<MySpinner />
					) : (
						<button
							type='submit'
							className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
							Download - id: {props.tickets["0"].id}
						</button>
					)
				}
			</PDFDownloadLink> */}
			{/* ;<PDFFile /> */}
			{/* })} */}
			<div className='grid gap-3 grid-cols-5'>{ticketts}</div>
		</>
	);
};

export default PrintableTickets;
