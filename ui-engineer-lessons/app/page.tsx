import { Button } from "./lesson-one/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-zinc-50 font-sans dark:bg-white text-black">
      <Button text="Primary Filled" type="primary" variant="filled" iconLeft={<ArrowLeft size={16} />} iconRight={<ArrowRight size={16} />} />
      <Button text="Error Filled" type="error" variant="filled" iconLeft={<ArrowLeft size={16} />} iconRight={<ArrowRight size={16} />} />
      <Button text="Success Outline" type="success" variant="outline" iconLeft={<ArrowLeft size={16} />} iconRight={<ArrowRight size={16} />} />
      <Button text="Disabled Filled" type="disabled" variant="filled" iconLeft={<ArrowLeft size={16} />} iconRight={<ArrowRight size={16} />} />
      <Button text="Warning Filled" type="warning" variant="filled" iconLeft={<ArrowLeft size={16} />} iconRight={<ArrowRight size={16} />} />
      <Button text="Info Outline" type="info" variant="outline" iconLeft={<ArrowLeft size={16} />} iconRight={<ArrowRight size={16} />} />
      <Button text="Large Filled" type="success" variant="filled" size="large" />
      <Button text="Small Outline" type="error" variant="outline" size="small" />
      <Button text="Medium Outline" type="disabled" variant="outline" size="medium" />
      <Button text="Medium Warning Outline" type="warning" variant="outline" size="medium" />
      <Button text="Large Info Filled" type="info" variant="filled" size="large" />
    </div>
  );
}
