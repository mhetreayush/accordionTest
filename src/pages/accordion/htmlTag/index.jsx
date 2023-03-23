import accordionData from "@/accordionData";

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
      <h1>Open with HTML Tags</h1>
      {points.map((point, index) => {
        return <Accordion key={index} {...point} />;
      })}
    </div>
  );
};

export default Index;
