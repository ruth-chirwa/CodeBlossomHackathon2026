export default function ProgressBar({ value, max }) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
