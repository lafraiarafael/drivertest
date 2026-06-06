# CBR Theory Exam Trainer

Practice app for the Dutch driving theory exam (CBR) — English version.

Live at: https://drivertest.vercel.app

## Current status

- ✅ Phase 1: Content correction pass
- ✅ Phase 2: Static app refactor into separate files
- ✅ Phase 3: Practice Mode and Exam Mode
- ✅ Phase 4: Local progress tracking and Review Mistakes
- ✅ Phase 5: Expanded rotating question pool
- ▶️ Next: accessibility, keyboard controls and SEO

## Current modes

### Practice Mode

- Category training
- Immediate feedback after each answer
- Explanation shown after each answer
- Score visible during practice
- Wrong answers are saved for later review
- Uses the expanded question pool

### Exam Mode

- 50-question full simulation
- Questions are selected from a larger rotating pool
- Lower-repeat selection prioritises questions used less often
- 30-minute countdown timer
- No instant feedback
- Score hidden during the exam
- Final pass/fail result shown at the end
- Pass target: 44/50
- Exam attempts and best score are saved locally

### Review Mistakes

- Repeats previously missed questions
- Correct answers remove questions from the mistake queue
- Weak categories are shown in the progress panel

## Question pool

The app uses two question files:

- `questions.js` — base 50-question set
- `extra-questions.js` — additional original questions based on official CBR exam topics and Dutch traffic-rule study areas

The app does not copy protected real CBR exam questions. New questions are original practice questions aligned with the official CBR topic structure.

## Local progress tracking

Progress is stored in the browser with `localStorage`:

- Total attempts
- Best exam score
- Overall accuracy
- Saved mistakes
- Weak categories
- Question rotation usage

The user can reset saved progress from the progress panel.

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
- `styles.css` — main styling and responsive layout
- `progress.css` — progress panel styling
- `questions.js` — base question bank
- `extra-questions.js` — expanded question bank
- `app.js` — core application logic, modes, timer and rotation
- `progress.js` — local progress tracking and mistake review
- `vercel.json` — static deployment configuration
- `README.md` — project documentation

## Next recommended phase

Phase 6 should improve accessibility, keyboard control and SEO:

- Answer using A/B/C/D keys
- Continue with Enter
- Improve focus states
- Add ARIA live feedback
- Add meta description and Open Graph tags
- Add favicon / preview image
