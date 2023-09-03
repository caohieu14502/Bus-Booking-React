import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "AntonFamily",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
		fontFamily: "AntonFamily",
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "Oswald",
	},
});

const PDFFile = ({ ticket, user, staff }) => {
	<Document>
		<Page>
			<Text style={styles.title}>TICKET</Text>
			<Text style={styles.text}>
				Route: {ticket.tripId.routeId.origin.province} to {ticket.tripId.routeId.destination.province}
			</Text>
			<Text style={styles.text}>
				Location: {ticket.tripId.routeId.origin.location} to {ticket.tripId.routeId.destination.location}
			</Text>
			<Text style={styles.title}>
				Set Off at: {ticket.tripId.setOffDay} {ticket.tripId.setOffTime}
			</Text>
			<Text style={styles.title}>Bus: {ticket.tripId.busId.plate}</Text>
			<Text style={styles.title}>
				Client: {user.firstName} {user.lastName}
			</Text>
			<Text style={styles.title}>
				Staff: {staff.firstName} {staff.lastName}
			</Text>
			<Text style={styles.title}>Staff ID: {staff.id}</Text>

			<Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} fixed></Text>
		</Page>
	</Document>;

	return (
		<>
			<div>PDFILE</div>
		</>
	);
};

export default PDFFile;
