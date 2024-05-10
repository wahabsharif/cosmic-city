import React from "react";

import { Contact, Hero, PaymentPlan, About } from "@/components/pages";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <PaymentPlan />
      <Contact />
    </>
  );
}

export default Home;
