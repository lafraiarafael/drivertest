// CBR Extra Questions — Edge cases and tricky situations
// These are the "uitdagende vragen" that catch most candidates
// Author: Rafael Lafraia

window.EXTRA_QUESTIONS = [

{c:'Priority',t:'I',
q:'A police officer at an intersection signals you to stop, but the traffic light is green. What do you do?',
o:['Follow the green light — it is automated and always correct','Obey the police officer — their instructions always override traffic lights and signs','Sound your horn to alert the officer that you have a green','Only stop if the officer makes eye contact with you'],
a:1,
e:'A <strong>police officer\'s manual directions always override traffic lights, signs and road markings</strong>. Their authority is absolute at an intersection. Ignore the green light completely and follow the officer\'s instruction. Disobeying is a criminal offence.'},

{c:'Priority',t:'I',
q:'You are driving on a priority road. The yellow diamond signs have disappeared from the roadside. What do you assume?',
o:['You still have priority — the signs may just be missing or damaged','Priority has likely ended — treat the next intersection as unmarked and apply right-before-left','You now have even higher priority as the main road','Priority only ends at a specific "end of priority" sign'],
a:1,
e:'If yellow diamond signs disappear without an end-of-priority sign, you should <strong>not assume priority continues</strong>. In the Netherlands, priority roads are continuously marked. If signs are absent, treat the situation as an unmarked intersection (right-before-left). Never assume priority without clear markings.'},

{c:'Priority',t:'I',
q:'You are on a priority road approaching an intersection. A funeral procession with an escort vehicle is crossing. What do you do?',
o:['Continue — you have absolute priority on a priority road','Stop and give way to the entire funeral procession, including all vehicles in the cortège','Only give way to the escort vehicle (with lights), then proceed','Sound your horn politely to indicate your right of way'],
a:1,
e:'A <strong>funeral procession or military convoy with escort</strong> has exceptional right of way in the Netherlands. Even if you are on a priority road, you must give way to the entire procession. Once the convoy is underway, individual vehicles may not legally cut into it. This overrides your priority status.'},

{c:'Speed limits',t:'I',
q:'The overhead motorway sign shows a flashing 60 km/h. There is no visible hazard. What does this mean?',
o:['It is malfunctioning — continue at normal speed','A temporary maximum of 60 km/h is legally in force, even if you cannot see the reason. You must comply.','60 km/h is a recommendation, not legally binding if conditions appear safe','Slow to 80 km/h as a compromise'],
a:1,
e:'A <strong>flashing overhead speed sign is legally binding</strong>. It may be responding to an incident you cannot yet see, or to queue-buildup, fog or ice ahead. You must comply immediately. Ignoring a dynamic traffic management sign is a traffic violation.'},

{c:'Speed limits',t:'I',
q:'You are on a rural road (80 km/h limit) in dense fog with visibility of approximately 30 metres. What is the maximum safe and legal speed?',
o:['80 km/h — that is the legal limit','50 km/h — fog automatically applies the urban default','As fast as you can stop within what you can see — likely 20–30 km/h given 30 m visibility','60 km/h — a 25% fog reduction is standard practice'],
a:2,
e:'The <strong>"sight distance" rule</strong>: you must always be able to stop within the distance you can see. At 30 m visibility, maximum safe speed is approximately 20–30 km/h (total stopping distance at 30 km/h ≈ 20m). Driving at 80 km/h with 30m visibility is extremely dangerous and potentially criminal (reckless endangerment).'},

{c:'Traffic signs',t:'K',
q:'You see a rectangular orange sign with black text "WERK IN UITVOERING". This is placed above a 70 km/h speed sign. Does the 70 km/h limit apply when workers are not present (weekend/night)?',
o:['No — temporary signs only apply when work is actively ongoing','Yes — the 70 km/h applies 24/7 as long as the sign is erected, unless a sub-plate specifies hours','Only on weekdays between 7:00–18:00 by default','Only if the sign is accompanied by traffic cones'],
a:1,
e:'A temporary speed limit at roadworks applies <strong>continuously while the sign is displayed</strong>, regardless of whether workers are present. The only exception is if a time sub-plate (tijdsbord) specifies hours. At night and weekends, 70 km/h still applies — this is a very common CBR exam question.'},

{c:'Traffic signs',t:'K',
q:'A round sign has a white background with a red border and shows a car and a bicycle with a red line through it. What does this prohibit?',
o:['All motor traffic','All bicycle traffic','Both motor vehicles AND bicycles — all vehicle traffic is prohibited','Only motorised cycles (mopeds)'],
a:2,
e:'A red circle with both a car and a bicycle crossed out = <strong>prohibited for both motor vehicles AND cyclists</strong>. This often appears at the entrance to pedestrian zones or living streets (erven) where only pedestrians and resident vehicle access is permitted.'},

{c:'Overtaking',t:'I',
q:'You want to overtake a cyclist on a road with a solid white centre line. Is overtaking permitted?',
o:['No — a solid white line always prohibits overtaking of all road users','Yes — solid white lines only prohibit overtaking of motor vehicles; cyclists may always be overtaken if safe','Only if you can maintain 1.5 metres clearance and do not cross into the oncoming lane','Solid white lines are only advisory in the Netherlands'],
a:1,
e:'In the Netherlands, <strong>solid white centre lines prohibit crossing to overtake motor vehicles</strong>. However, overtaking a cyclist while staying within your lane (or partially crossing with no oncoming traffic hazard) is not always prohibited if sufficient space exists. In practice, if you must cross the solid line, you should not overtake. The 1.5m rule still applies.'},

{c:'Overtaking',t:'I',
q:'You are being overtaken by a car. The overtaking car is drawing level with you. At this moment, what must you NOT do?',
o:['Accelerate to help the car complete the manoeuvre faster','Maintain your speed — any acceleration or braking while being overtaken creates danger','Steer slightly left to create more space','Switch on your right indicator'],
a:0,
e:'When being overtaken, <strong>do not accelerate</strong>. This prevents the overtaking car from passing you safely and can force them back across with oncoming traffic. Maintain your current speed. You may slightly move right if safe, but do not steer left (into the overtaker). Do not brake unnecessarily either.'},

{c:'Motorway',t:'I',
q:'You are in lane 2 of a 3-lane motorway. The left lane (lane 1) is empty. Lane 3 (right) is flowing slowly. What should you do?',
o:['Stay in lane 2 — you are in the middle and it is comfortable','Move to the right (lane 3) — the keep-right rule requires you to use the rightmost available lane unless overtaking','Move to lane 1 to avoid the slow right lane','You are allowed to use any lane on a 3-lane motorway'],
a:1,
e:'The Dutch <strong>keep-right rule (rechts houden)</strong> requires you to use the rightmost available lane when not overtaking — even if a middle lane is more comfortable. Being in lane 2 when lane 3 is available (even if slower) without actively overtaking is technically a violation. This is heavily enforced on Dutch motorways.'},

{c:'Motorway',t:'I',
q:'You miss your motorway exit. What is the correct action?',
o:['Reverse on the hard shoulder to reach the exit','Cross the solid white exit line at speed if you can still make it','Continue to the next exit — do not attempt a last-minute exit or reverse','Stop on the hard shoulder and wait for traffic to clear before reversing'],
a:2,
e:'Missing an exit: <strong>continue to the next exit</strong>. Never reverse on a motorway or hard shoulder — it is illegal and extremely dangerous. Never cross solid white lines at speed. The detour costs a few minutes; a wrong manoeuvre could cost lives. This is one of the most common causes of serious motorway accidents.'},

{c:'Lights',t:'I',
q:'You are dazzled by oncoming full-beam headlights. You react by switching on your own full beam to "signal" the other driver. Is this correct?',
o:['Yes — a brief full-beam flash is the standard way to warn drivers to dip','No — switching to full beam when dazzled is dangerous and illegal. Look to the right road edge, reduce speed, and do not retaliate with light','Yes but only one brief flash, not sustained','It depends on whether the other driver reacts'],
a:1,
e:'When dazzled: <strong>look toward the right road edge</strong> (away from the lights), reduce speed, and be prepared to stop. Retaliating with full beam is illegal (you will dazzle oncoming traffic too) and dangerous — you cannot see what is ahead while doing so. A brief single warning flash before you are dazzled is acceptable; sustained retaliation is not.'},

{c:'Insight',t:'I',
q:'You are at a give-way line at the end of a slip road merging onto a busy dual carriageway. Traffic is flowing at 100 km/h with no gaps. What should you do?',
o:['Drive straight onto the dual carriageway — you have enough speed from the slip road','Wait on the slip road for a safe gap, however long it takes — entering without a safe gap is dangerous and illegal','Creep forward slowly until traffic gaps appear','Sound the horn to indicate your intention to merge'],
a:1,
e:'At a give-way line at a slip road, you <strong>must wait for a safe gap</strong> in traffic, however long it takes. "Give way" means exactly that — traffic on the main road has priority. Never force a merge. If the slip road ends in a dead stop area (not an acceleration lane), you may have to wait for a significant gap before it is safe to go.'},

{c:'Insight',t:'I',
q:'You approach a level crossing with flashing red lights but no barriers. A train passed 10 seconds ago and the lights are still flashing. Can you cross?',
o:['Yes — the train has passed so the danger is gone','No — flashing lights must be obeyed until they stop. A second train could be approaching from the other direction.','Yes if you look both ways and see no train','Only if the road behind you is clear'],
a:1,
e:'Level crossing lights must be obeyed until they stop flashing — full stop. <strong>A second train can approach from the opposite direction</strong> immediately after the first. Level crossings are also a frequent site of visibility problems. The law is absolute: red flashing lights = stop. Do not cross until all lights are off.'},

{c:'Insight',t:'I',
q:'It is freezing and your car windows are foggy inside. You turn on the heater and defogger and start driving before the windows are fully clear. Is this legal?',
o:['Legal — the defogger will clear the windows as you drive','Illegal — you must have full visibility through all windows before moving the car','Legal if you drive slowly until windows clear','Legal only for short distances in your own street'],
a:1,
e:'Driving with obscured windows is <strong>illegal in the Netherlands</strong>. You must have full, clear visibility through all windows before moving. Driving with a fogged or frost-covered screen is a direct traffic violation and extremely dangerous. Wait until all windows are fully clear.'},

{c:'Vehicle & docs',t:'K',
q:'Your car insurance policy expired last month. Can you legally drive to the insurance office to renew it today?',
o:['Yes — a short trip to fix the situation is logically permitted','No — driving without valid third-party insurance (WA) is illegal from the moment of expiry, for any distance or purpose','Yes if you drive carefully and avoid accidents','Only on quiet roads with little traffic'],
a:1,
e:'Third-party car insurance (WA — Wettelijke Aansprakelijkheid) is <strong>mandatory at all times</strong> in the Netherlands. There is no grace period. Driving without it is illegal from the moment of expiry, regardless of the reason. The RDW can detect uninsured vehicles via number plate cameras within minutes. Arrange renewal by phone or online before driving.'},

{c:'Insight',t:'I',
q:'You are driving in a residential area (30 km/h zone). A child on a bicycle suddenly swerves into your path from between parked cars. You were going 25 km/h. Could you have prevented this?',
o:['No — at 25 km/h you were already 5 under the limit and could not have done more','Possibly — in areas with parked cars and children, the CBR expects you to anticipate precisely this hazard and be ready to stop at any moment, even below the speed limit','No — the child was at fault for not looking','Only if there was a school zone sign'],
a:1,
e:'This is the essence of CBR <strong>insight questions</strong>: the speed limit is a maximum, not a target. In a 30 km/h zone with parked cars and children, you are expected to anticipate hazards from between parked cars (known as "doods hoeken") and be ready to stop at any moment. Driving at 25 km/h is not automatically safe if you were not prepared to stop.'},

];
