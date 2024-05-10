import React from "react";
import { fadeIn } from "@/lib/animations";
import ContactIcon from "@/components/ContactIcon";
import ContactForm from "@/components/ContactForm";
import { MotionDiv } from "@/components/utils/Motion";
import { Badge } from "@/components/ui";
import CosmicIcon from "../CosmicIcon";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col side-padding items-center justify-center relative pt-24"
    >
      <MotionDiv {...fadeIn(0.5)}>
        <Badge variant="outline">
          <CosmicIcon />
          <span className="pl-2 text-2xl">info@cosmiccity.com</span>
        </Badge>
      </MotionDiv>
      <h1 className="head-title pt-6">Contact us via mail</h1>

      <ContactIcon />
      <ContactForm />
    </section>
  );
}

export default Contact;
