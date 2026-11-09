export default function Spark({ size = 28 }: { size?: number }) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg width={size} height={size} viewBox="-12 -12 24 24" aria-hidden className="shrink-0 text-accent">
      {rays.map((a) => (
        <line key={a} x1="0" y1="-3.5" x2="0" y2="-10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform={`rotate(${a})`} />
      ))}
    </svg>
  );
}
