import { useState } from 'react';

const HabitForm = ({ onAdd }: { onAdd: (habit: any) => void }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, id: Date.now(), completed: false, streak: 0 });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Habit Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="e.g. Drink Water" 
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;