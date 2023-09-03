import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import MySpinner from "./MySpinner";
import cookie from "react-cookies";

const PrintableTickets = (props) => {
	const staff = cookie.load("user");

	return (
		<>
			{props.tickets.map((c) => {
				<PDFDownloadLink document={<PDFFile ticket={c} user={props.user} staff={staff} />} fileName={c.id}>
					{({ loading }) =>
						loading ? (
							<MySpinner />
						) : (
							<button
								type='submit'
								className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
								Download
							</button>
						)
					}
				</PDFDownloadLink>;
				// <PDFFile />
			})}
		</>
	);
};

export default PrintableTickets;
