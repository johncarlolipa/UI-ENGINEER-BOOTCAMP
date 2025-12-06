import { Button } from "./lesson-one/Button";
import { Card } from "./lesson-one/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "./lesson-one/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-zinc-50 font-sans dark:bg-white text-black">

      <Navbar title="Lumora" links={["Home", "Pricing", "Features"]} variant="dark" size="large"/>

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
