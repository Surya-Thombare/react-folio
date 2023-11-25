"use client";

import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "@/Components/Resume/Resume";

const Page = () => {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
};

export default Page;
