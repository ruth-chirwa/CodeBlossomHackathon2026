import { useState, useEffect } from "react";
import HabitCard from "../components/HabitCard";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [water, setWater] = useState(() => Number(localStorage.getItem("water")) || 0);
  const [steps, setSteps] = useState(() => Number(localStorage.getItem("steps")) || 0);

  useEffect(() => {
    localStorage.setItem("water", water);
    localStorage.setItem("steps", steps);
  }, [water, steps]);

  return (
    <div className="dashboard">
      <h1>Daily Habits</h1>

      <div className="grid">
        <HabitCard
          title="Water Intake"
          value={water}
          unit="glasses"
          goal={8}
          onAdd={() => setWater(water + 1)}
        />

        <HabitCard
          title="Physical Activity"
          value={steps}
          unit="steps"
          goal={5000}
          onAdd={() => setSteps(steps + 500)}
        />
      </div>
    </div>
  );
}
