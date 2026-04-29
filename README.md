# Habit Tracker PWA - HNG Stage 3
This is a high-performance Habit Tracker Progressive Web App built with React, TypeScript, and Vite. The project follows a disciplined engineering approach, strictly adhering to the technical specification and behavioral contracts provided in the Stage 3 brief.

# How to Run the App
Install Dependencies:

* Bash
npm install
Run Development Server:

* Bash
npm run dev
Build for Production:

* Bash
npm run build
# How to Run Tests
The project uses Vitest for unit and integration testing and Playwright for end-to-end testing.

- Run All Vitest Tests with Coverage:

* Bash
npx vitest run --coverage
Run E2E Tests:

* Bash
npx playwright test
# Technical Requirement Mapping
This project maps directly to the required test files and naming contracts defined in the technical document:

# Unit Tests (tests/unit/)
slug.test.ts: Verifies getHabitSlug logic (lowercase, hyphenation, and character removal).

- validators.test.ts: Verifies validateHabitName (empty checks, length limits, and trimming).

- streaks.test.ts: Verifies calculateCurrentStreak (consecutive days, duplicate handling, and missing day logic).

habits.test.ts: Verifies toggleHabitCompletion (immutability and completion toggling).

# Integration Tests (tests/integration/)
auth-flow.test.tsx: Verifies signup/login form submissions and session creation.

habit-form.test.tsx: Verifies CRUD operations and streak display updates.

# E2E Tests (tests/e2e/)
app.spec.ts: Comprehensive Playwright suite covering the splash screen, dashboard redirection, offline capabilities, and data persistence.

# Assumptions & Trade-offs
- Streak Logic: The current streak resets to zero if the habit is not completed on the current calendar day.

- Storage: For this stage, data persistence is handled via localStorage to ensure requirements for page reload persistence are met without a backend.

- Auth Flow: Authentication is mocked to verify the UI and session logic as per the integration test contract.