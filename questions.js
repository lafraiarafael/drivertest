// CBR Theory Exam — Question Bank
// Realistic situational questions aligned with the 2025 CBR format
// Focus: inzicht (insight/application), not just fact recall
// Author: Rafael Lafraia

window.QUESTIONS = [

// ── PRIORITY & RIGHT OF WAY ─────────────────────────────────────────────────
{c:'Priority',t:'K',
q:'You are at an unmarked intersection. A vehicle approaches from your right on the pavement level — but it is a cyclist, not a car. Do you still have to give way?',
o:['No — right-before-left only applies to motor vehicles','Yes — cyclists are road users and right-before-left applies to all traffic','Only if the cyclist is on a designated cycle path','Only outside built-up areas'],
a:1,
e:'<strong>Right before left (rechts voor links) applies to ALL road users</strong>, including cyclists, mopeds and horse riders — not just motor vehicles. The only exceptions are vehicles on priority roads, trams, and emergency services.'},

{c:'Priority',t:'I',
q:'You are on a priority road (yellow diamond). You approach an intersection where the side road has a shark-teeth marking. A van is already halfway into the intersection from the right. What do you do?',
o:['Continue at full speed — you have absolute priority','Slow down and pass behind the van if needed — a priority road does not override a real collision risk','Sound your horn and maintain speed','Stop and wait for the van to clear completely'],
a:1,
e:'A priority road gives you the <strong>legal</strong> right of way, but never the right to cause a collision. If a vehicle has already entered the intersection, you must adapt your speed. Dutch traffic law states you must always drive in a way that prevents accidents, regardless of who has formal priority.'},

{c:'Priority',t:'I',
q:'You are turning left at an intersection. Oncoming traffic is flowing. A cyclist is also coming from the right on a cycle path that crosses the road you are turning into. Who do you give way to?',
o:['Only oncoming motor traffic — cyclists on cycle paths can wait','Both: oncoming traffic AND the cyclist on the crossing cycle path','Neither — you have right of turn','Only the cyclist, because cycle paths have absolute priority'],
a:1,
e:'When turning left you must give way to <strong>two groups simultaneously</strong>: oncoming traffic, AND cyclists/pedestrians crossing the road you are entering. This is one of the most tested situations on the CBR exam.'},

{c:'Priority',t:'I',
q:'A tram is approaching from your left on a road without tram priority signs. At the same time, a car is coming from your right. Which vehicle do you yield to first?',
o:['The car from the right — right-before-left always comes first','The tram — trams always have priority over other road users in the Netherlands','The vehicle that arrives first','Neither — they must give way to each other'],
a:1,
e:'<strong>Trams always have priority</strong> over all other road traffic in the Netherlands, even on unmarked intersections where right-before-left normally applies. After yielding to the tram, then apply the right-before-left rule for remaining vehicles.'},

{c:'Priority',t:'I',
q:'You are waiting to turn right onto a main road. A pedestrian steps off the pavement onto the road you want to enter, walking slowly from the right. No zebra crossing is present. What do you do?',
o:['Drive — there is no zebra crossing so the pedestrian must give way to you','Wait — a pedestrian already on the road has priority over your turning movement','Sound your horn to warn the pedestrian to hurry','Proceed slowly and hope the pedestrian stops'],
a:1,
e:'When turning, you must give way to <strong>pedestrians who are already crossing the road you are entering</strong>, whether or not a zebra crossing is present. The pedestrian stepped onto the road first — they have priority over your turn.'},

{c:'Priority',t:'I',
q:'You are driving on a road without a centre line. An oncoming vehicle is approaching on a narrow section. Both of you want to pass. Who has to give way?',
o:['The vehicle coming downhill must give way','The lighter vehicle gives way to the heavier one','There is no fixed rule — both must cooperate and one side must pull over where space allows','The vehicle going uphill has priority'],
a:2,
e:'On narrow roads without specific signs, there is <strong>no fixed priority rule</strong>. Both drivers must cooperate. The one who has room to pull over or reverse should do so. The vehicle that can most easily give way is expected to do so. Practically, the vehicle going downhill often has more control and visibility.'},

// ── SPEED LIMITS ──────────────────────────────────────────────────────────────
{c:'Speed limits',t:'K',
q:'You enter a built-up area and the speed limit sign shows 50 km/h. You pass a school zone sign. What is your speed limit now?',
o:['Still 50 km/h — only a speed sign changes the limit','30 km/h — school zones always override the built-up area limit','A school zone sign is only advisory, not a legal limit','60 km/h because school is in session'],
a:0,
e:'A <strong>school zone warning sign</strong> is a hazard warning, not a speed limit sign. It warns of children crossing but does NOT change the legal speed limit. The limit stays at 50 km/h unless a separate 30 km/h zone sign is posted. You must however drive with extra caution.'},

{c:'Speed limits',t:'K',
q:'You are towing a caravan on a motorway where the overhead matrix sign shows 100 km/h. What is your maximum speed?',
o:['100 km/h — the overhead sign applies to all vehicles','90 km/h — towing a trailer limits you regardless of the signed speed','80 km/h — caravans are always limited to 80','120 km/h — the default motorway limit overrides towing restrictions'],
a:1,
e:'When towing a trailer or caravan, your maximum speed on a motorway is <strong>90 km/h</strong>, regardless of what the overhead sign shows. An overhead sign showing 100 km/h means the limit for regular cars is 100, but your personal limit as a towing vehicle is still 90.'},

{c:'Speed limits',t:'I',
q:'You are driving on a motorway at 130 km/h. There is wet rain. You approach roadworks with a temporary 90 km/h sign. What speed applies?',
o:['130 km/h — wet conditions do not change the legal limit','90 km/h — the roadworks sign overrides the default','A bit under 130 — just slow down slightly for the rain','100 km/h — rain automatically lowers the limit by 30'],
a:1,
e:'A temporary <strong>roadworks speed sign (orange/yellow background or white with red border) is legally binding</strong>. You must comply with 90 km/h regardless of other conditions. Wet weather is an additional reason to stay within or below this limit.'},

{c:'Speed limits',t:'I',
q:'You are in a 30 km/h zone and you see a sign indicating the end of the zone. The next speed sign is 200 metres ahead and shows 50 km/h. What speed limit applies in the gap between the two signs?',
o:['30 km/h — the zone limit continues until you see 50','50 km/h — the end-of-zone sign restores the default','80 km/h — outside a zone, the rural default applies','No limit — gaps between signs are unregulated'],
a:1,
e:'When you pass an <strong>end-of-zone sign</strong>, you immediately return to the applicable default for that road type. Inside a built-up area (bebouwde kom), that is 50 km/h. So between the end-of-zone sign and the next 50 km/h sign, 50 km/h already applies by default.'},

{c:'Speed limits',t:'I',
q:'You have a driving licence that is less than 5 years old. It is foggy and visibility is under 50 metres on a motorway. What speed applies to you?',
o:['130 km/h — your age of licence does not affect motorway speed','The standard 130 km/h but with extra caution required','A maximum of 50 km/h in fog under 50m visibility, for all drivers','The visibility rule and your novice status both restrict you — drive at a safe speed, not exceeding 50 km/h in poor visibility'],
a:3,
e:'When visibility is under 50 metres, Dutch law requires you to drive so you can stop within the visible distance — effectively <strong>max 50 km/h</strong> for all drivers. Additionally, novice drivers (licence under 5 years) should always drive with extra margin. Both factors apply here simultaneously.'},

// ── TRAFFIC SIGNS ─────────────────────────────────────────────────────────────
{c:'Traffic signs',t:'K',
q:'You see a rectangular blue sign with an arrow pointing left and the text "Omrijden". What does this mean?',
o:['No left turn ahead','Detour to the left — the main road ahead is closed','Mandatory left turn for all vehicles','Parking to the left'],
a:1,
e:'"<strong>Omrijden</strong>" = detour. A blue rectangular sign with an arrow and this text indicates a diversion route. The main road ahead is blocked and you must follow this temporary route. These signs use different arrow colours or symbols to guide different traffic types.'},

{c:'Traffic signs',t:'K',
q:'A round blue sign shows two arrows: one pointing up (straight ahead) and one pointing right. What does it mean?',
o:['You may go straight or turn right — both are permitted','You must go straight AND turn right — both are mandatory simultaneously','One-way street in two directions','The sign only applies to cyclists'],
a:0,
e:'A <strong>blue circle with multiple arrows</strong> means all indicated directions are mandatory options — you may choose one. So this sign means: you may go straight OR turn right. You are forbidden from turning left or making a U-turn.'},

{c:'Traffic signs',t:'K',
q:'You see a white rectangular sign with a red border showing "70" and below it a smaller white plate with "Bij gladheid" (In icy conditions). When exactly does this limit apply?',
o:['Always — the 70 km/h is the standard limit regardless of the sub-plate','Only when road surface conditions are icy or slippery','Only during winter months (November–March)','Only at night when temperatures drop'],
a:1,
e:'<strong>Sub-plates (onderborden)</strong> modify the conditions under which the sign applies. "Bij gladheid" means the 70 km/h limit ONLY applies when the road is icy or slippery. When conditions are normal, the default limit for that road type applies. This is a frequently tested CBR concept.'},

{c:'Traffic signs',t:'K',
q:'A round sign has a red border, white background, and shows a car overtaking a truck with a line through it. What does this prohibit?',
o:['All overtaking is forbidden for all vehicles','Only trucks are forbidden from overtaking cars','Cars are forbidden from overtaking trucks — overtaking other vehicles is still allowed','All vehicles are forbidden from overtaking trucks'],
a:3,
e:'The sign "verbod voor motorvoertuigen om motorvoertuigen van een andere soort in te halen" specifically prohibits <strong>all motor vehicles from overtaking trucks/lorries</strong>. Regular car-to-car overtaking is still permitted. This often appears near roadworks or on busy two-lane roads.'},

{c:'Traffic signs',t:'I',
q:'You are on a road marked with a yellow diamond (priority road). You see a yellow diamond with a black stripe through it. What does this mean and what must you do next?',
o:['You are entering a higher-priority zone — you now have even more right of way','The priority road ends here — apply right-before-left at the next intersection','You must stop completely at the next junction','The sign is only relevant if there is a side road visible'],
a:1,
e:'A yellow diamond with a black diagonal stripe through it = <strong>end of priority road</strong>. From this point, right-before-left (rechts voor links) applies again at uncontrolled intersections. You must be ready to yield to traffic from the right immediately after this sign.'},

{c:'Traffic signs',t:'K',
q:'A triangular warning sign shows a silhouette of a child. Below it is a rectangular sub-plate reading "7:30–8:30 and 15:00–16:00". When must you be especially careful?',
o:['At all times — warning signs are always permanently active','Only during the times shown on the sub-plate','Only on school days, during those times','The sub-plate is advisory only — the warning is always valid'],
a:1,
e:'When a warning sign has a <strong>time sub-plate (tijdsbord)</strong>, the warning is only active during those specific hours. Outside those times, normal rules apply. This is important for school zone signs — be alert during stated hours, but they do not legally restrict you outside them.'},

// ── ALCOHOL & DRUGS ───────────────────────────────────────────────────────────
{c:'Alcohol & drugs',t:'K',
q:'You are 23 years old and got your driving licence 3 years ago. You drink two glasses of wine at dinner. Can you drive home?',
o:['Yes — two glasses is within the 0.5 mg/ml limit for all drivers','No — novice drivers (licence under 5 years) have a 0.2 mg/ml limit, which two glasses likely exceeds','Yes — the 0.5 limit applies from age 18','Depends on your body weight and gender'],
a:1,
e:'You have held your licence for <strong>under 5 years</strong> → the <strong>0.2 mg/ml limit</strong> applies. Two glasses of wine typically produces 0.4–0.8 mg/ml depending on body weight, gender and metabolism — almost certainly over 0.2. You must wait or arrange another way home.'},

{c:'Alcohol & drugs',t:'I',
q:'You took a prescribed sleeping pill last night. You feel fine this morning. Can you drive to work?',
o:['Yes — if you feel fine, the medication has worn off','Yes — prescribed medication is always legal to drive with','Not necessarily — many sleeping pills impair driving for 10–12 hours after taking them; check the packaging and consult your doctor','Only if the prescription is less than 3 months old'],
a:2,
e:'Many sleeping pills (benzodiazepines, antihistamines) have a <strong>10–12 hour impairment window</strong>. Feeling fine does not mean you are unimpaired. Dutch law uses a "Code 95" system on medication packaging. If your pill carries a Code 95 warning (steering wheel symbol), driving may be illegal. Always check the label and consult a pharmacist or doctor.'},

{c:'Alcohol & drugs',t:'K',
q:'Your breathalyser reading is 0.25 mg/l (AAG). You are an experienced driver (licence 7 years). Are you over the limit?',
o:['No — the limit is 0.5 mg/ml blood, which is 0.25 mg/l in breath (same value)','Yes — 0.25 mg/l breath equals approximately 0.5 mg/ml blood, which is exactly at the limit','No — 0.25 is below 0.5 so you are within the limit','Yes — 0.25 mg/l breath exceeds the 0.2 mg/ml limit'],
a:1,
e:'The breath limit (AAG) is <strong>0.22 mg/l = 0.5 mg/ml blood</strong>. At 0.25 mg/l breath you are <strong>slightly over the legal limit</strong>. The conversion is approximately 1 mg/l breath ≈ 2.3 mg/ml blood. This is a classic CBR precision question — know both units.'},

// ── OVERTAKING ────────────────────────────────────────────────────────────────
{c:'Overtaking',t:'I',
q:'You are driving at 90 km/h behind a tractor doing 25 km/h on a rural road. You can see clearly ahead. You start to overtake. During the overtake, a car appears at the horizon going the same direction at 120 km/h and catching up fast. What do you do?',
o:['Accelerate hard to complete the overtake','Immediately pull back behind the tractor if it is safe to do so','Flash your lights to warn the car behind you','Complete the overtake — you started it so you have right of way'],
a:1,
e:'<strong>An overtake can and must be abandoned if the situation changes</strong>. If it is still safe to slot back in behind the tractor, do so immediately. Never accelerate recklessly to complete an overtake. The oncoming fast vehicle has not yet appeared — "behind you catching up" means they are in the same lane. Abort if possible.'},

{c:'Overtaking',t:'K',
q:'You want to overtake a long lorry on a two-lane road. You can see 300 metres ahead and the lorry is 20 metres long. Is this enough distance to overtake safely at 90 km/h?',
o:['Yes — 300 metres is always sufficient','No — at 90 km/h you need significantly more distance when accounting for the lorry length, your acceleration time and safety margins','It depends on whether there are signs','Yes, if you accelerate quickly at the start of the overtake'],
a:1,
e:'Overtaking a lorry at 90 km/h: you need roughly 250–400 metres of clear road depending on speed difference. 300 metres sounds like a lot but when you add the lorry length, time to accelerate past, and a safety margin before returning to lane, it is often <strong>not enough</strong>. The CBR teaches: if in doubt, do not overtake. Patience saves lives.'},

{c:'Overtaking',t:'I',
q:'You are on a motorway in the left lane overtaking a car. As you return to the right lane, the car you just passed speeds up and tailgates you. Do you have to speed up to create more space?',
o:['Yes — you must maintain the speed difference or return to the left lane','No — once you are safely back in the right lane, you have no obligation to speed up. If the car behind drives too close, that is their violation','Yes but only if you cannot safely move back left','Flash your hazard lights to warn them to back off'],
a:1,
e:'Once you have safely completed the overtake and returned to the right lane, <strong>you have no obligation to speed up</strong>. The driver behind who tailgates is committing a violation (minimum 2-second following distance). Never speed up to "solve" someone else's tailgating — that can take you over the speed limit.'},

// ── MOTORWAY RULES ────────────────────────────────────────────────────────────
{c:'Motorway',t:'I',
q:'You are on the motorway approaching a broken-down car in the right lane. Blue hazard lights are flashing. Traffic is merging left. What is the safe and legal minimum lateral clearance you should aim to leave?',
o:['One car width','As much as traffic allows — move one lane left if possible, or slow to 70 km/h if not possible to move over','10 metres','No specific rule — just slow down slightly'],
a:1,
e:'Dutch law requires you to <strong>move to the adjacent lane if safe</strong> when passing an emergency or broken-down vehicle at the roadside. If moving over is not possible due to traffic, you must reduce speed to 70 km/h (in some cases lower). This rule ("rijstrookgebruik bij pech") protects rescue workers and is tested on the CBR exam.'},

{c:'Motorway',t:'I',
q:'You are driving on a motorway at 120 km/h. Your back-right tyre suddenly blows out. You feel the car pulling strongly to the right. What is the CORRECT sequence of actions?',
o:['Brake hard immediately and steer hard left to counteract the pull','Hold the wheel firmly with both hands, do NOT brake hard, let the car slow naturally, steer gently to correct, then steer to the hard shoulder and stop','Immediately indicate right and brake firmly to the hard shoulder','Sound the horn, switch on hazard lights and brake normally'],
a:1,
e:'A tyre blowout at high speed: <strong>do NOT brake hard</strong> — this can cause a spin. Grip the wheel firmly, ease off the throttle, let the car slow through natural resistance, make gentle steering corrections, then when speed has dropped, carefully steer to the hard shoulder. Switch on hazard lights once stable.'},

{c:'Motorway',t:'K',
q:'You are on the hard shoulder (vluchtstrook) after breaking down. You have placed a warning triangle 30 metres behind your car. Where should YOU stand while waiting for help?',
o:['In the car with your seatbelt on','Behind the car, next to the triangle','Behind the crash barrier or as far from the road as possible','On the hard shoulder between your car and the triangle'],
a:2,
e:'<strong>Never stay near or in your vehicle on the hard shoulder.</strong> The hard shoulder is extremely dangerous — vehicles occasionally veer onto it at high speed. Stand <strong>behind the crash barrier</strong> or as far from the road as possible. Leave the car and get everyone to safety first.'},

{c:'Motorway',t:'K',
q:'At a motorway merge (zipper/rits), which driver must give way?',
o:['The driver in the merging lane always gives way','The driver in the continuing lane always gives way','The driver arriving later at the merge point gives way — one from each lane alternates','The heavier vehicle continues, the lighter vehicle merges'],
a:2,
e:'The <strong>zipper merge (rits)</strong> rule: both lanes use the full available road to the actual merge point. At that point, vehicles take turns one-by-one from each lane. Neither lane has absolute priority — it is based on position at the merge point. Moving over early disrupts traffic flow and is discouraged.'},

// ── LIGHTS & VISIBILITY ───────────────────────────────────────────────────────
{c:'Lights',t:'K',
q:'It is daytime and raining heavily. Your daytime running lights (DRLs) are on automatically. Is this sufficient?',
o:['Yes — DRLs are designed for exactly this purpose','No — in poor visibility due to rain, fog or snow, you must switch to full dipped headlights (dimlichten), which also activate your rear lights','DRLs and hazard lights together are sufficient in heavy rain','Yes if visibility is above 100 metres'],
a:1,
e:'<strong>DRLs are NOT sufficient in poor visibility.</strong> DRLs illuminate the front but most cars do NOT activate rear lights with DRLs. In heavy rain, fog or snow, you must use <strong>dipped headlights (dimlichten)</strong> — this lights up both front and rear. Driving with only DRLs in poor visibility is illegal in the Netherlands.'},

{c:'Lights',t:'K',
q:'When may you use rear fog lights (achtermistlichten)?',
o:['Whenever it is dark and raining','Only when visibility is less than 50 metres due to fog, heavy snow or heavy rain','Whenever you feel they improve safety','On motorways whenever it is raining'],
a:1,
e:'Rear fog lights may ONLY be used when <strong>visibility is less than 50 metres</strong>. Using them in normal rain, darkness or light fog is illegal and dazzles drivers behind you — a common cause of accidents. The 50-metre rule is a hard legal threshold.'},

{c:'Lights',t:'I',
q:'You are approaching a tunnel. Your dipped headlights are on. What else must you do before entering?',
o:['Nothing extra is needed if headlights are already on','Remove sunglasses — your eyes need time to adapt to lower light levels inside the tunnel','Switch to full beam (grootlicht) so others can see you better','Sound your horn to warn pedestrians in the tunnel'],
a:1,
e:'Entering a tunnel with sunglasses is dangerous. Your eyes need to <strong>adapt from bright daylight to tunnel darkness</strong>. Remove sunglasses before entering. Also: dipped headlights are mandatory in tunnels regardless of length or lighting. Full beam is generally NOT used in tunnels as it reflects off walls.'},

// ── FOLLOWING DISTANCE & BRAKING ──────────────────────────────────────────────
{c:'Following distance',t:'I',
q:'You are driving at 80 km/h in dry conditions. The car in front brakes suddenly. Your reaction time is 1 second. How many metres do you travel before you even start braking?',
o:['About 10 metres','About 22 metres','About 50 metres','About 80 metres'],
a:1,
e:'At 80 km/h, you travel <strong>80 ÷ 3.6 ≈ 22 metres per second</strong>. With a 1-second reaction time, you cover approximately 22 metres before your foot even touches the brake. Then add braking distance (roughly 30–35 m in dry conditions) for a total stopping distance of ~55 metres. This is why 2–3 second following distance is essential.'},

{c:'Following distance',t:'I',
q:'You are driving on a wet motorway at 120 km/h with 3 seconds of following distance. Is this sufficient?',
o:['Yes — 3 seconds meets the recommended standard','No — on a wet motorway at 120 km/h, at least 4–6 seconds is recommended because braking distances roughly double on wet roads','3 seconds is more than enough in any conditions','Wet roads only add about 10% to stopping distance, so 3 seconds is fine'],
a:1,
e:'Wet roads <strong>double or more the braking distance</strong> at motorway speeds. At 120 km/h in wet conditions, your stopping distance can exceed 130 metres. 3 seconds = roughly 100 metres at 120 km/h — potentially not enough. The Dutch driving handbook recommends <strong>4–6 seconds on wet motorways</strong>.'},

// ── CHILDREN, PEDESTRIANS & CYCLISTS ──────────────────────────────────────────
{c:'Pedestrians & cyclists',t:'I',
q:'You are driving down a residential street. You see a football rolling across the road from between two parked cars. What should you do?',
o:['Swerve around the ball and continue','Brake immediately — a child may follow the ball into the road within seconds','Sound your horn to warn the child','This is normal — children know to stay on the pavement'],
a:1,
e:'A ball rolling into the road is one of the most classic CBR hazard perception scenarios. <strong>A child is almost certainly about to follow that ball.</strong> Brake immediately and be prepared to stop. This is called "gevaarherkenning" — recognising a danger before it becomes a crisis.'},

{c:'Pedestrians & cyclists',t:'I',
q:'You are overtaking a cyclist on a rural road at 80 km/h. How much lateral distance must you keep, and what must you do if you cannot achieve this?',
o:['0.5 metres is enough — cyclists are used to traffic','At least 1.5 metres at speeds above 50 km/h; if you cannot achieve this safely, wait and do not overtake','Exactly 1 metre — that is the legal minimum','No legal minimum exists — use your judgement'],
a:1,
e:'Dutch law requires at least <strong>1 metre at up to 50 km/h</strong> and <strong>1.5 metres above 50 km/h</strong> when overtaking cyclists. At 80 km/h on a narrow road, if you cannot guarantee 1.5 metres clearance, you must wait. Overtaking a cyclist with insufficient space is one of the most common causes of serious cyclist fatalities.'},

{c:'Pedestrians & cyclists',t:'I',
q:'You are waiting to exit a car park onto a public road. A pedestrian is walking along the pavement in front of the exit. Who has priority?',
o:['You, as you are already moving forward in the car park exit','The pedestrian on the pavement — you are crossing their path','Neither — it is a shared responsibility','Only if there is a Give Way sign at the exit'],
a:1,
e:'When exiting a car park, garage or side road onto a pavement or road, <strong>you must give way to ALL road users already on the pavement or road</strong> — pedestrians, cyclists, and vehicle traffic. This applies even without signs. You are crossing their right of way.'},

// ── VEHICLE & ENVIRONMENT ─────────────────────────────────────────────────────
{c:'Vehicle & docs',t:'K',
q:'Your brake warning light illuminates on the dashboard while driving. What should you do?',
o:['Ignore it if the brakes still feel normal — warning lights are often oversensitive','Stop safely as soon as possible and do not continue driving until the cause is investigated','Only stop if the brake pedal feels spongy','Check the handbrake is fully released and continue driving'],
a:1,
e:'A <strong>brake warning light</strong> can indicate critically low brake fluid, a brake system fault, or brake pad failure. Even if brakes feel normal, you could have seconds before brake failure. <strong>Stop safely as soon as possible</strong> and call for assistance. Do not continue driving.'},

{c:'Vehicle & docs',t:'K',
q:'Your car\'s APK (roadworthiness certificate) expired yesterday. You drive to the garage for an inspection appointment this morning. Is this legal?',
o:['Yes — a short grace period of one week applies after expiry','No — driving with an expired APK is illegal immediately from the date of expiry, even for short distances','Yes — driving to an official APK station is an exemption','Only legal if you have written proof of your appointment'],
a:1,
e:'There is <strong>no grace period</strong> for an expired APK in the Netherlands. Driving with an expired APK is illegal from the moment it expires, even for a few hundred metres to a garage. You can receive a fine. The only safe option is to arrange transport (flatbed/tow truck) to the inspection station.'},

{c:'Environment',t:'K',
q:'Which driving technique saves the most fuel while maintaining safe speed on a motorway?',
o:['Drive in the lowest gear possible to keep revs high for engine braking','Accelerate quickly to target speed then maintain it steadily, use engine braking early, avoid unnecessary gear changes','Use cruise control at the maximum allowed speed at all times','Brake and accelerate frequently to stay alert'],
a:1,
e:'<strong>Anticipatory driving</strong> (vooruit kijken) saves the most fuel: accelerate smoothly to your target speed, look ahead to anticipate slowdowns, take your foot off the accelerator early and let the engine brake, avoid unnecessary braking and acceleration. This also significantly reduces wear.'},

// ── EMERGENCY SITUATIONS ──────────────────────────────────────────────────────
{c:'Emergency vehicles',t:'I',
q:'You are in a traffic jam on a two-lane motorway. You hear sirens. What must you do to create an emergency corridor (reddingsstrook)?',
o:['All vehicles move to the right shoulder','Left lane vehicles move left, right lane vehicles move right — creating a gap in the middle','All vehicles stop immediately where they are','Only large vehicles need to move — small cars are already small enough'],
a:1,
e:'The <strong>emergency corridor (reddingsstrook)</strong> is created by: left-lane vehicles moving as far LEFT as possible, right-lane (and middle-lane if 3 lanes) moving as far RIGHT as possible. This creates a clear corridor between the leftmost and adjacent lane for emergency services. Required by Dutch law since 2019.'},

{c:'Emergency vehicles',t:'I',
q:'An ambulance with blue lights and siren is approaching from behind on a single-lane road (no possibility to pull over). What do you do?',
o:['Accelerate to get out of the way as fast as possible','Brake sharply and stop in the lane','Move as far to the right as safely possible, reduce speed, and allow the ambulance to overtake — even if this means briefly going onto the shoulder','Flash your hazard lights and maintain speed'],
a:2,
e:'When you cannot safely pull off the road: <strong>move as far right as possible</strong> within the lane or onto the shoulder, reduce speed significantly, and allow the ambulance to pass on your left. Braking sharply in the middle of the lane creates a new hazard for the ambulance. Never accelerate — that delays clearance.'},

// ── INSIGHT — COMPLEX SITUATIONS ──────────────────────────────────────────────
{c:'Insight',t:'I',
q:'You stop at a red light. The light turns green. The driver in front does not move immediately. What do you do?',
o:['Sound your horn immediately — green means go','Wait briefly and allow time for the driver to react — then gently sound the horn if necessary after a few seconds','Flash your lights repeatedly to prompt them','Overtake on the left if space allows'],
a:1,
e:'At a green light, allow a <strong>moment for the driver ahead to react</strong>. Not everyone reacts instantly — they may be checking a blind spot or managing a distraction. Immediately sounding the horn is aggressive and unnecessary. After 3–5 seconds with no movement, a brief horn tap is reasonable. Overtaking in an intersection is illegal.'},

{c:'Insight',t:'I',
q:'You are on a two-lane road at night behind a slow lorry. You want to overtake. As you pull out to assess the road ahead, your headlights reveal tyre debris on the left lane. What do you do?',
o:['Swerve to avoid the debris and continue overtaking','Abort the overtake, pull back behind the lorry, and keep left within the right lane','Straddle the debris at speed','Sound the horn to warn oncoming traffic of the debris'],
a:1,
e:'Discovering a hazard during an overtake is exactly why the CBR tests insight: <strong>abort the manoeuvre</strong> safely and return behind the lorry. Do not swerve violently at speed — that creates a new danger. Alert following traffic with hazard lights after returning to your lane, and report the debris to police or road authority.'},

{c:'Insight',t:'I',
q:'You are driving in heavy fog at 50 km/h with rear fog lights on. Another driver flashes their lights repeatedly at you. What might they be signalling?',
o:['They want you to speed up — you are too slow for the conditions','Your rear fog lights may be dazzling them — and they are asking you to turn them off','They want to overtake you','They are warning you of a hazard ahead'],
a:1,
e:'A driver flashing at you from behind when your rear fog lights are on is almost certainly signalling that <strong>your fog lights are dazzling them</strong>. Rear fog lights are only legal when visibility is under 50 metres. If visibility is better and you have left the lights on, they are illegally dazzling following drivers. Check the conditions and turn them off if appropriate.'},

{c:'Insight',t:'I',
q:'You are driving on an unfamiliar country road at night at 80 km/h with dipped headlights. Your headlights illuminate approximately 40 metres ahead. Are you driving at a safe speed?',
o:['Yes — 80 km/h is the legal limit on this road','No — you must always be able to stop within the distance you can see. At 80 km/h your total stopping distance is ~55 m, which exceeds your 40 m visibility','Yes — as long as no hazard signs are present','Only unsafe if road markings are absent'],
a:1,
e:'This is the <strong>"sight distance" rule</strong>: you must always be able to stop within the illuminated/visible distance ahead. At 80 km/h your stopping distance is ~55 metres. Your visibility is only 40 metres. You are driving too fast for conditions — a legal speed can still be an unsafe speed. Reduce speed until stopping distance ≤ visible distance.'},

{c:'Insight',t:'I',
q:'You park your car facing downhill on a steep road. Which way should you turn your front wheels, and should you engage the handbrake?',
o:['Wheels straight, handbrake on','Wheels turned TOWARD the kerb (right if facing downhill on the right side), handbrake on','Wheels turned AWAY from the kerb, handbrake off','It does not matter as long as the handbrake is on'],
a:1,
e:'When parking facing downhill: turn wheels <strong>toward the kerb</strong> (right on the right side of the road). If the handbrake fails, the wheel will catch on the kerb and stop the car. Always apply the handbrake regardless. On a slope, also engage first gear (manual) or Park (automatic). This is a classic CBR knowledge question.'},

];
