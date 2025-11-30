import { Button } from "./lesson-one/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-zinc-50 font-sans dark:bg-white text-black">
      <Button text="Primary" type="primary" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Success" type="success" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Error" type="error" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Info" type="info" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Disabled" type="disabled" variant="filled" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />


      <Button text="Primary" type="primary" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Success" type="success" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Error" type="error" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Info" type="info" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
      <Button text="Disabled" type="disabled" variant="outline" arrowLeft={<ArrowLeft size={16} />} arrowRight={<ArrowRight size={16} />} />
    </div>
  );
}
