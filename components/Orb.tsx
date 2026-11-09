/**
 * Brand mark: an orange orb (radial gradient + faint static halo).
 * `breathe` adds a slow scale-only loop (stopped by prefers-reduced-motion).
 * `avatar` is the richer answer-avatar variant: a static concentric ring
 * around the orb plus a specular gloss. `size` is the orb's own diameter.
 */
export default function Orb({
  size = 28,
  breathe = false,
  avatar = false,
}: {
  size?: number;
  breathe?: boolean;
  avatar?: boolean;
}) {
  const orb = (
    <span
      aria-hidden
      className={`relative inline-block shrink-0 rounded-full ${breathe ? "orb-breathe" : ""}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 32% 28%, color-mix(in srgb, var(--color-accent-strong) 70%, white) 0%, var(--color-accent) 45%, color-mix(in srgb, var(--color-accent) 60%, black) 100%)",
        boxShadow:
          "0 0 0 1px color-mix(in srgb, var(--color-accent) 35%, transparent), 0 0 12px color-mix(in srgb, var(--color-accent) 22%, transparent)",
      }}
    >
      {avatar && (
        <span
          className="absolute rounded-full"
          style={{
            top: "12%",
            left: "16%",
            width: "34%",
            height: "22%",
            transform: "rotate(-28deg)",
            background:
              "radial-gradient(ellipse at center, rgb(255 255 255 / 0.7) 0%, rgb(255 255 255 / 0) 70%)",
          }}
        />
      )}
    </span>
  );

  if (!avatar) return orb;

  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-accent/30"
      style={{ padding: Math.max(3, Math.round(size * 0.1)) }}
    >
      {orb}
    </span>
  );
}
