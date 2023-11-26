"use client";

import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyResume from "@/Components/shared/Resume/Resume";

const Page = () => {
  return (
    <div className="flex justify-center">
      <PDFViewer width={750} height={800}>
        <MyResume />
      </PDFViewer>
    </div>
  );
};

export default Page;
