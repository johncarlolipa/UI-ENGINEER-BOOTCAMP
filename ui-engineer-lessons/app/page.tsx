"use client";

import { Button } from "./lesson-one/Button";
import { Card } from "./lesson-one/Card";
import { ArrowLeft, ArrowRight, Mail, Phone, ChevronDown, Globe, CreditCard, HelpCircle } from "lucide-react";
import { Navbar } from "./lesson-one/Navbar";

import { Input } from "./lesson-one/Input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-zinc-50 font-sans dark:bg-white text-black">

      <Input
        type="email"
        label="Email"
        hint="This is a hint copy"
        leftIcon={<Mail size={16} />}
        rightIcon={<HelpCircle size={16} />}
      />
      <Input
        type="phone"
        label="Phone Number"
        leftIcon={<Phone size={16} />}
        rightIcon={<ChevronDown size={24} />}
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
      <Input
        type="sale"
        label="Price"
        state="error"
        required={true}
        leftIcon={<span className="text-gray-600 text-md">$</span>}
        rightIcon={<ChevronDown size={24} />}
      />
      <Input
        type="website"
        label="Website"
        leftIcon={<span className="text-gray-500 text-sm">http://</span>}
      />
      <Input
        type="card"
        label="Card Number"
        rightIcon={<CreditCard size={16} />}
        secondRightIcon={<CreditCard size={16} />}
      />

      <Input size="small" state="active" />

      <Input size="medium" state="error" />

      <Input size="medium" state="disabled" />

      <Input size="small" state="placeholder" />
      <Input size="medium" state="default" />







      <Navbar title="Lumora" variant="light" size="large" links={["Pricing", "Features", "Resources"]} signInLabel="Sign In" signUpLabel="Sign Up" />

      <Button text="Primary" type="primary" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text='Success' type='success' variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Error" type="error" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Warning" type="warning" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Information" type="info" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />

      <Button text="Primary" type="primary" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text='Success' type='success' variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Error" type="error" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Warning" type="warning" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Information" type="info" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />

      <Card size="large" variant="outlined" imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&w=800" imageAlt="beautiful beach" title="The Beautiful Beach" subtitle="Delight Yourself" description="Try this beache here so your stress will go away." tags={["Bali", "Boracay", "Siargao"]} footer={<div className="flex justify-center gap-4"><Button text="Information" type="info" variant="outline" /><Button text="Learn More" type="primary" variant="filled" /></div>} />




    </div>
  );
}
