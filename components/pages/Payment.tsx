import React from "react";
import { PAYMENT_LIST } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { MotionDiv } from "@/components/utils/Motion";
import { Badge } from "@/components/ui";
import PaymentCard from "@/components/PaymentCard";
import CosmicIcon from "../CosmicIcon";

function PaymentPlan() {
  return (
    <section
      id="payment"
      className="w-full min-h-screen side-padding flex flex-col items-center justify-center gap-8 relative"
    >
      {/* Text */}
      <MotionDiv {...fadeIn(0.5)}>
        <Badge variant="outline">
          <CosmicIcon />
          <span className="pl-2 text-2xl">Payment Plans</span>
        </Badge>
      </MotionDiv>
      <h1 className="head-title pb-6">Explore Our Payment Plans.</h1>

      <div className="flex flex-col items-center justify-center gap-16">
        {PAYMENT_LIST.map((payment, i) => (
          <PaymentCard key={i} index={i} payment={payment} />
        ))}
      </div>
    </section>
  );
}

export default PaymentPlan;
