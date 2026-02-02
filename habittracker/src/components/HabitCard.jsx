import ProgressBar from "./ProgressBar";

export default function HabitCard({ title, value, unit, onAdd, goal }) {
  return (
    <div className="habit-card">
      <h3>{title}</h3>
      <p>{value} {unit}</p>
      {goal && <ProgressBar value={value} max={goal} />}
      {onAdd && <button onClick={onAdd}>+ Add</button>}
    </div>
  );
}
