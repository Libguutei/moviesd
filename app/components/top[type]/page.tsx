"use client";

import Top from "../Top";
import Footer from "../Footer";
import Nav from "../Nav";

export default function UpcomingPage() {
  return (
    <div>
      <Nav />
      <div className="pt-[91px] px-6">
        <Top showAll={true} />
      </div>
      <Footer />
    </div>
  );
}
