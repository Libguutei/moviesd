"use client";
import React from "react";
import Upcoming from "../components/Upcoming";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function UpcomingPage() {
  return (
    <div>
      <Nav />
      <div className="pt-[91px] px-6">
        <Upcoming showAll={true} />
      </div>
      <Footer />
    </div>
  );
}
