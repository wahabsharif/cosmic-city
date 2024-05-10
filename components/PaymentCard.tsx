import React from "react";
import Link from "next/link";
import Image from "next/image";

import { slideInFromBottom } from "@/lib/animations";
import { MotionDiv } from "@/components/utils/Motion";
// import SVG from "@/components/utils/SVG";
// import { Button } from "@/components/ui";

// Define the shape of the payment object
interface payment {
  // codeUrl: string;
  imageSrc: string;
  // title: string;
  // description: string;
  // liveUrl: string;
  // Add other properties as needed
}

function PaymentCard({ payment, index }: { payment: payment; index: number }) {
  return (
    <MotionDiv
      className={`flex max-xl:flex-col max-md:w-full 2xl:w-1/2 w-3/4 border border-solid border-#4cbc7c drop-shadow-xl rounded-xl hover:border-slate-100 transition-colors duration-300 ease-out hover:shadow-[0_0_4rem_rgb(76,188,124)] ${
        index % 2 ? "flex-row-reverse" : "flex-row"
      }`}
      {...slideInFromBottom()}
    >
      {/* payment preview */}
      <Link className="xl:flex-1" href="#payment" tabIndex={-1}>
        <Image
          className="object-cover rounded-xl h-full"
          src={payment.imageSrc}
          alt="payment preview"
          width={1920}
          height={1080}
        />
      </Link>

      {/* <div
        className={`flex flex-col flex-1 gap-4 text-balance p-5 ${
          index % 2
            ? "text-left items-start max-xl:text-center max-xl:items-center"
            : "text-right items-end max-xl:text-center max-xl:items-center"
        }`}
      >
        <div className="flex items-center gap-2">
          {payment.icons.map((icon) => (
            <SVG
              key={icon}
              src={icon}
              className="w-8 h-8 relative [&_svg]:absolute [&_svg]:h-8 [&_svg]:w-8 [&_svg]:left-1/2 [&_svg]:top-1/2 [&_svg]:-translate-x-1/2 [&_svg]:-translate-y-1/2"
            />
          ))}
        </div>

        <h3 className="text-3xl font-bold max-w-md">{payment.title}</h3>
        <p className="text-gray-400 max-w-md">{payment.description}</p>
        <div
          className={`flex items-center gap-4 ${
            index % 2 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Link href={payment.liveUrl} target="_blank" tabIndex={-1}>
            <Button>View it live 🚀</Button>
          </Link>
          <Link href={payment.codeUrl} target="_blank" tabIndex={-1}>
            <Button variant="secondary">Source code 🔓</Button>
          </Link>
        </div>
      </div> */}
    </MotionDiv>
  );
}

export default PaymentCard;
