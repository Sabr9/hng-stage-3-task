import { describe, it, expect } from 'vitest';
import { validateHabitName } from '../../src/utils/validators';

describe('validateHabitName', () => {
  it('returns an error when habit name is empty', () => {
    const result = validateHabitName('');
    expect(result.error).toBeDefined();
  });

  it('returns an error when habit name exceeds 60 characters', () => {
    const result = validateHabitName('a'.repeat(61));
    expect(result.error).toBeDefined();
  });

  it('returns a trimmed value when habit name is valid', () => {
    const result = validateHabitName('  Read Quran  ');
    expect(result.value).toBe('Read Quran');
  });
});