export const signup = async (email: string, pass: string) => {
  if (email === 'exists@test.com') throw new Error('Email already in use');
  return { id: '1', email, session: 'mock-session-token' };
};

export const login = async (email: string, pass: string) => {
  if (pass !== 'password123') throw new Error('Invalid credentials');
  return { id: '1', email, session: 'mock-session-token' };
};