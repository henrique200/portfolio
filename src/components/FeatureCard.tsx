type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{description}</p>
    </div>
  );
}
