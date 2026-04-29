import { render, screen, fireEvent } from '@testing-library/react';
import HabitForm from '../../src/components/HabitForm';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

describe('HabitForm Integration', () => {
  it('should call onAdd when the form is submitted with a valid habit', () => {
    const onAddMock = vi.fn();
    render(<HabitForm onAdd={onAddMock} />);
    
    const input = screen.getByPlaceholderText(/e.g. Drink Water/i);
    const button = screen.getByRole('button', { name: /add habit/i });

    fireEvent.change(input, { target: { value: 'New Habit' } });
    fireEvent.click(button);

    expect(onAddMock).toHaveBeenCalledWith(expect.objectContaining({ 
      name: 'New Habit' 
    }));
  });
});