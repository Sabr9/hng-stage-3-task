import { useState } from 'react';
// Import your components (adjust paths if your files are named differently)
import HabitForm from './components/HabitForm'; 
import './App.css';

function App() {
  // Simple state to hold habits
  const [habits, setHabits] = useState<any[]>([]);

  return (
    <div className="app-container">
      <header>
        <h1>Habit Tracker</h1>
      </header>

      <main>
        {/* Render your HabitForm component here */}
        <section className="form-section">
          <h2>Create New Habit</h2>
          <HabitForm onAdd={(newHabit: any) => setHabits([...habits, newHabit])} />
        </section>

        <section className="list-section">
          <h2>Your Habits</h2>
          {habits.length === 0 ? (
            <p>No habits yet. Start by adding one above!</p>
          ) : (
            <ul>
              {habits.map((habit, index) => (
                <li key={index}>
                  <strong>{habit.name}</strong> - Streak: {habit.streak || 0}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;