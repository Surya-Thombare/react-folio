import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Heading } from "@/Components/ui/Resume/Heading";
import data from "@/data/data";

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
  },
  row: {
    flexDirection: "row",
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 16,
    width: "55%",
  },
  rightColumn: {
    flexGrow: 1,
    width: "40%",
  },
});

// Create Document Component
const MyResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Heading
        title={data.name}
        subtitle={data.title}
        avatarUrl={data.avatarUrl}
        information={{
          phone: data.phone,
          email: data.email,
          website: data.website,
          location: data.location,
        }}
      />
    </Page>
  </Document>
);

export default MyResume;
