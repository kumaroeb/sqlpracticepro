import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
