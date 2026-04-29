export const calculateCurrentStreak = (dates: string[]): number => {
  if (dates.length === 0) return 0;

  // Remove duplicates and sort descending
  const uniqueDates = Array.from(new Set(dates)).sort((a, b) => b.localeCompare(a));
  
  const today = new Date().toISOString().split('T')[0];
  if (uniqueDates[0] !== today) return 0;

  let streak = 0;
  let currentDate = new Date();

  for (const dateStr of uniqueDates) {
    const expectedStr = currentDate.toISOString().split('T')[0];
    if (dateStr === expectedStr) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};