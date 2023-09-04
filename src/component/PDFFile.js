import React from "react";
import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
	family: "vietnam",
	src: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5vAw.ttf",
});

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
		fontFamily: "vietnam",
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "vietnam",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
		fontFamily: "vietnam",
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "vietnam",
	},
});

const PDFFile = (props) => {
	return (
		<Document>
			<Page size='A5'>
				<Text style={styles.title}>TICKET</Text>
				<Text style={styles.text}>
					Route: {props.ticket.tripId.routeId.origin.province} to {props.ticket.tripId.routeId.destination.province}
				</Text>
				<Text style={styles.text}>
					Location: {props.ticket.tripId.routeId.origin.location} to {props.ticket.tripId.routeId.destination.location}
				</Text>
				<Text style={styles.title}>
					Set Off at: {props.ticket.tripId.setOffDay} {props.ticket.tripId.setOffTime}
				</Text>
				<Text style={styles.title}>Bus: {props.ticket.tripId.busId.plate}</Text>
				<Text style={styles.title}>
					Client: {props.user.firstName} {props.user.lastName}
				</Text>
				<Text style={styles.title}>
					Staff: {props.staff.firstName} {props.staff.lastName}
				</Text>
				<Text style={styles.title}>Staff ID: {props.staff.id}</Text>

				<Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} fixed></Text>
			</Page>
		</Document>
	);
};

export default PDFFile;
