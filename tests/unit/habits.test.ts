import { describe, it, expect } from 'vitest';
import { toggleHabitCompletion } from '../../src/utils/habits';

describe('toggleHabitCompletion', () => {
  const habit = { id: '1', name: 'Pray', completions: [] };
  const date = '2026-04-29';

  it('adds a completion date when the date is not present', () => {
    const result = toggleHabitCompletion(habit, date);
    expect(result.completions).toContain(date);
  });

  it('removes a completion date when the date already exists', () => {
    const habitWithDate = { ...habit, completions: [date] };
    const result = toggleHabitCompletion(habitWithDate, date);
    expect(result.completions).not.toContain(date);
  });

  it('does not mutate the original habit object', () => {
    const originalCompletionsCount = habit.completions.length;
    toggleHabitCompletion(habit, date);
    expect(habit.completions.length).toBe(originalCompletionsCount);
  });

  it('does not return duplicate completion dates', () => {
    const result = toggleHabitCompletion(habit, date);
    const secondaryResult = toggleHabitCompletion(result, date); // This should remove it
    expect(new Set(result.completions).size).toBe(result.completions.length);
  });
});