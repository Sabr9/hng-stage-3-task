import React, { useState } from 'react';
import { getHabitSlug } from '../utils/slug';

const HabitForm = () => {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Create New Habit</h2>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="habit-name" style={{ display: 'block', marginBottom: '5px' }}>
          Habit Name:
        </label>
        <input
          id="habit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Drink Water"
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
      </div>

      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
        <strong>Slug Preview:</strong> 
        <span data-testid="slug-preview" style={{ marginLeft: '10px', color: '#007bff' }}>
          {getHabitSlug(name) || 'no-slug-yet'}
        </span>
      </div>
    </div>
  );
};

export default HabitForm;