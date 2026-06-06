# CBR Theory Exam Trainer

Practice app for the Dutch driving theory exam (CBR) — English version.

Live at: https://drivertest.vercel.app

## Current practice format

- 50 practice questions
- Practice pass target: 44/50
- Study time target: 30 minutes
- Question types: Knowledge and Insight

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

- `index.html` — app, styles, question bank and logic
- `vercel.json` — static deployment configuration
- `README.md` — project documentation

## Next recommended phase

Phase 2 should refactor the static app into separate files:

- `index.html`
- `styles.css`
- `app.js`
- `questions.js`

This will improve maintainability before adding Exam Mode, timer, progress tracking and review of wrong answers.
