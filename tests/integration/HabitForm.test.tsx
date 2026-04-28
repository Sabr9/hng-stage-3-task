import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HabitForm from '../../src/components/HabitForm';
import '@testing-library/jest-dom';

describe('HabitForm Integration', () => {
  it('updates the slug preview when the user types a habit name', () => {
    render(<HabitForm />);
    
    const input = screen.getByPlaceholderText(/e.g. Drink Water/i);
    const preview = screen.getByTestId('slug-preview');

    fireEvent.change(input, { target: { value: 'Read   Qur\'an' } });

    expect(preview.textContent).toBe('read-quran');
  });
});