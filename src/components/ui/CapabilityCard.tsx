import TiltCard from "./TiltCard";

type CapabilityCardProps = {
  title: string;
  description: string;
  outcome: string;
};

export default function CapabilityCard({
  title,
  description,
  outcome
}: CapabilityCardProps) {
  return (
    <TiltCard className="capability-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-connector" />
      <div className="card-outcome">{outcome}</div>
    </TiltCard>
  );
}
