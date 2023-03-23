import { useState } from "react";
import accordionData from "@/accordionData";
import Link from "next/link";

const Accordion = ({ heading, summary }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)}>{heading}</h3>
      {isOpen && <p>{summary}</p>}
    </div>
  );
};

const Index = () => {
  const { points } = accordionData;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Open with Conditional Rendering</h1>
      {points.map((point, index) => {
        return <Accordion key={index} {...point} />;
      })}
    </div>
  );
};

export default Index;
