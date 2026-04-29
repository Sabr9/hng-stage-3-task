export const validateHabitName = (name: string) => {
  if (!name || name.trim().length === 0) {
    return { error: 'Habit name is required' };
  }
  if (name.length > 60) {
    return { error: 'Habit name must be 60 characters or less' };
  }
  return { value: name.trim() };
};