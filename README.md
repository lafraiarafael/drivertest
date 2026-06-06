# CBR Theory Exam Trainer

Practice app for the Dutch driving theory exam (CBR) — English version.

Live at: https://drivertest.vercel.app

## Current status

- ✅ Phase 1: Content correction pass
- ✅ Phase 2: Static app refactor into separate files
- ✅ Phase 3: Practice Mode and Exam Mode
- ▶️ Next: progress tracking and review of wrong answers

## Current modes

### Practice Mode

- Category training
- Immediate feedback after each answer
- Explanation shown after each answer
- Score visible during practice

### Exam Mode

- 50-question full simulation
- 30-minute countdown timer
- No instant feedback
- Score hidden during the exam
- Final pass/fail result shown at the end
- Pass target: 44/50

## Topics covered

- Priority rules
- Speed limits
- Traffic signs
- Alcohol & drugs
- Overtaking
- Motorway rules
- Lights
- Vehicle documents
- Parking
- Cyclists & pedestrians
- Insight / hazard awareness
- Emergency vehicles
- Environment

## Phase 1 content review

This version applies the first content correction pass:

- Corrected the novice-driver alcohol limit from 0.0‰ to 0.2‰.
- Added a separate alcohol question for novice drivers.
- Adjusted absolute wording such as "always" and "never" where road signs, markings, local rules or traffic situations may create exceptions.
- Updated the full practice set to exactly 50 questions.
- Kept the full-practice pass target at 44/50.
- Added a clear study-tool disclaimer inside the app.
- Reworded several explanations to be safer and less legally absolute.

## Disclaimer

This is a study aid, not an official CBR product. Traffic rules can change, and local signs, markings, traffic lights and road conditions always prevail. Always verify final details with official CBR, RDW or Dutch government material before the real exam.

## Technical setup

Static single-page app deployed on Vercel.

Files:

- `index.html` — HTML structure and mode screens
- `styles.css` — styling and responsive layout
- `questions.js` — question bank
- `app.js` — application logic, modes and timer
- `vercel.json` — static deployment configuration
- `README.md` — project documentation

## Next recommended phase

Phase 4 should add local progress tracking:

- Save practice attempts in `localStorage`
- Save wrong answers
- Add a "Review mistakes" mode
- Show weak categories
- Add reset-progress control
