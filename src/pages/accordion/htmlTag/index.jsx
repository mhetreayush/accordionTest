import accordionData from "@/accordionData";
import Link from "next/link";

const Accordion = ({ heading, summary }) => {
  return (
    <details>
      <summary>{heading}</summary>
      <p>{summary}</p>
    </details>
  );
};

const Index = () => {
  const { points } = accordionData;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Open with HTML Tags</h1>
      {points.map((point, index) => {
        return <Accordion key={index} {...point} />;
      })}
    </div>
  );
};

export default Index;
