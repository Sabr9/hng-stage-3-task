export interface Habit {
  id: string;
  name: string;
  completions: string[];
}

export const toggleHabitCompletion = (habit: Habit, date: string): Habit => {
  const isCompleted = habit.completions.includes(date);
  
  const newCompletions = isCompleted
    ? habit.completions.filter((d) => d !== date)
    : [...habit.completions, date];

  // Ensure no duplicates
  const finalCompletions = Array.from(new Set(newCompletions));

  return {
    ...habit,
    completions: finalCompletions,
  };
};