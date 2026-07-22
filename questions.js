// RYA Day Skipper Theory — question bank
// Each question: { id, category, q, options[], answer (index), explain }
// Covers the RYA Day Skipper shorebased syllabus. Educational practice only —
// always navigate using official, up-to-date charts and publications.

const QUESTIONS = [
  // ---------------- Charts & Chartwork ----------------
  {
    id: 1, category: "Charts & Chartwork",
    q: "On a nautical chart, which scale do you use to measure distance?",
    options: [
      "The longitude scale along the top or bottom edge",
      "The latitude scale up the left or right side",
      "The compass rose",
      "Any convenient printed scale"
    ],
    answer: 1,
    explain: "1 minute of latitude = 1 nautical mile, so distance is always measured on the latitude (side) scale, level with the area you are measuring. The longitude scale must never be used for distance."
  },
  {
    id: 2, category: "Charts & Chartwork",
    q: "What is the chart datum to which charted depths (soundings) are referenced on Admiralty charts?",
    options: [
      "Mean Sea Level",
      "Mean High Water Springs",
      "Lowest Astronomical Tide (LAT)",
      "Highest Astronomical Tide (HAT)"
    ],
    answer: 2,
    explain: "Charted depths are referenced to Chart Datum, which is approximately the Lowest Astronomical Tide (LAT). This is a 'worst case' so the actual depth is almost always at least the charted value plus the height of tide."
  },
  {
    id: 3, category: "Charts & Chartwork",
    q: "A depth figure on the chart is underlined, e.g. 2₃. What does this indicate?",
    options: [
      "A charted depth of 2.3 m below chart datum",
      "A drying height of 2.3 m ABOVE chart datum (uncovers at low water)",
      "A wreck 2.3 m deep",
      "A recommended anchoring depth"
    ],
    answer: 1,
    explain: "An underlined figure is a drying height — the amount it dries ABOVE chart datum. Here the feature dries 2.3 m, so it is only covered when the height of tide exceeds 2.3 m."
  },
  {
    id: 4, category: "Charts & Chartwork",
    q: "What does 'DR' (Dead Reckoning) position account for?",
    options: [
      "Course steered and distance run only",
      "Course, distance, tidal stream and leeway",
      "A confirmed fix from two position lines",
      "GPS position"
    ],
    answer: 0,
    explain: "A DR position uses only the course steered and the distance run (speed × time). When you additionally apply tidal stream and leeway you get an Estimated Position (EP), drawn with a triangle symbol."
  },
  {
    id: 5, category: "Charts & Chartwork",
    q: "Which symbol is used on the chart to mark an Estimated Position (EP)?",
    options: [
      "A dot inside a circle",
      "A triangle",
      "A square",
      "A cross"
    ],
    answer: 1,
    explain: "A Fix or observed position is a dot within a circle; a DR position is a short line with a single bar; an EP is marked with a triangle. Knowing the symbols keeps a plot readable."
  },

  // ---------------- Compass, Course & Position ----------------
  {
    id: 6, category: "Compass & Position",
    q: "What is 'variation'?",
    options: [
      "The angle between the boat's heading and its track",
      "The angle between True North and Magnetic North at that place and time",
      "Compass error caused by the boat's own magnetism",
      "The difference between course steered and course made good"
    ],
    answer: 1,
    explain: "Variation is the angle between True and Magnetic North. It depends on your location and changes slowly year on year; the value and annual change are printed inside the compass rose."
  },
  {
    id: 7, category: "Compass & Position",
    q: "What causes 'deviation' of the steering compass?",
    options: [
      "The difference between True and Magnetic North",
      "The boat's own magnetic influences (engine, electronics, ferrous metal)",
      "Tidal stream pushing the boat sideways",
      "Errors in the chart"
    ],
    answer: 1,
    explain: "Deviation is caused by the boat's own magnetism acting on the compass. Crucially it changes with the vessel's heading, so it is read from a deviation card for the course being steered."
  },
  {
    id: 8, category: "Compass & Position",
    q: "Variation is 5°W. To convert a True bearing of 100° to a Magnetic bearing you should:",
    options: [
      "Subtract 5° to get 095°M",
      "Add 5° to get 105°M",
      "Leave it unchanged",
      "Add 10° to get 110°M"
    ],
    answer: 1,
    explain: "'Variation West, Magnetic best' — with westerly variation the magnetic value is larger than true. Going from True to Magnetic you ADD westerly variation: 100° + 5° = 105°M."
  },
  {
    id: 9, category: "Compass & Position",
    q: "One knot is equal to:",
    options: [
      "One statute mile per hour",
      "One kilometre per hour",
      "One nautical mile per hour",
      "One minute of longitude per hour"
    ],
    answer: 2,
    explain: "A knot is one nautical mile (1852 m, ≈ one minute of latitude) per hour. Speed × time therefore gives distance directly in nautical miles."
  },
  {
    id: 10, category: "Compass & Position",
    q: "What is 'leeway'?",
    options: [
      "The tide carrying the boat downstream",
      "The sideways push of the wind moving the boat off its heading",
      "The distance to the nearest lee shore",
      "The turning circle of the vessel"
    ],
    answer: 1,
    explain: "Leeway is the difference between the boat's heading (where the bow points) and its actual track through the water, caused by the wind blowing the boat sideways. It is applied down-wind when plotting an EP."
  },

  // ---------------- Tides ----------------
  {
    id: 11, category: "Tides",
    q: "Spring tides occur:",
    options: [
      "Only in the spring season",
      "Around the times of full moon and new moon",
      "Around the first and last quarter moon",
      "Once a year at the equinox"
    ],
    answer: 1,
    explain: "Springs occur roughly every two weeks near full and new moon, when the sun and moon pull in line. They give the largest range — higher HW and lower LW. Neaps (smallest range) occur near the quarter moons."
  },
  {
    id: 12, category: "Tides",
    q: "Using the Rule of Twelfths, how much of the tidal range rises during the third hour after low water?",
    options: [
      "One twelfth",
      "Two twelfths",
      "Three twelfths",
      "Six twelfths"
    ],
    answer: 2,
    explain: "The Rule of Twelfths estimates the rise per hour as 1, 2, 3, 3, 2, 1 twelfths of the range. The third hour (and the fourth) each give 3/12 — the tide runs fastest around mid-tide."
  },
  {
    id: 13, category: "Tides",
    q: "'Height of tide' is best described as:",
    options: [
      "The depth of water shown on the chart",
      "The height of water above chart datum at a given time",
      "The range between HW and LW",
      "The height of the tide tables' reference port"
    ],
    answer: 1,
    explain: "Height of tide is the vertical distance of the water surface above chart datum at a particular time. Add it to the charted depth to get the actual depth of water: Depth = Charted depth + Height of tide."
  },
  {
    id: 14, category: "Tides",
    q: "Tidal 'range' means:",
    options: [
      "How far the tidal stream reaches",
      "The difference in height between successive high water and low water",
      "The maximum depth in the channel",
      "The distance between springs and neaps"
    ],
    answer: 1,
    explain: "Range = HW height − LW height. A large range means springs; a small range means neaps. Range is the figure you apply in the Rule of Twelfths."
  },
  {
    id: 15, category: "Tides",
    q: "A tidal stream atlas / tidal diamond tells you:",
    options: [
      "The height of tide at a port",
      "The set (direction) and drift (rate) of the tidal stream",
      "The times of sunrise and sunset",
      "The depth of water"
    ],
    answer: 1,
    explain: "Tidal streams (horizontal movement of water) are found from tidal diamonds and stream atlases, giving set (direction the stream flows TOWARDS) and drift (rate in knots), referenced to HW at a standard port."
  },
  {
    id: 16, category: "Tides",
    q: "Tidal streams are generally at their strongest:",
    options: [
      "At high water and low water (slack)",
      "Around mid-tide, between HW and LW",
      "Only at spring tides at HW",
      "They flow at a constant rate throughout"
    ],
    answer: 1,
    explain: "The stream is usually weakest (slack) near HW and LW and strongest around mid-tide — mirroring the Rule of Twelfths, where the greatest change of height happens in the middle hours."
  },

  // ---------------- Buoyage (IALA Region A) ----------------
  {
    id: 17, category: "Buoyage",
    q: "In IALA Region A, when entering a harbour from seaward, a port-hand mark is:",
    options: [
      "Green and conical",
      "Red and can-shaped, kept on your port (left) side",
      "Yellow with a St Andrew's cross",
      "Black and yellow"
    ],
    answer: 1,
    explain: "In Region A (UK/Europe) port-hand marks are red cans; starboard marks are green cones. Entering from seaward you keep red to port and green to starboard — 'is there any red port left in the can?'"
  },
  {
    id: 18, category: "Buoyage",
    q: "A North cardinal mark indicates:",
    options: [
      "Safe water lies to the north; pass on the north side",
      "The deepest/safest water is to the NORTH of the mark",
      "A wreck exactly north of your position",
      "The harbour entrance is north"
    ],
    answer: 1,
    explain: "A cardinal mark shows where the safe water is relative to the danger. Pass to the NORTH of a North cardinal. Its topmarks are two black cones pointing UP, and it is black above yellow."
  },
  {
    id: 19, category: "Buoyage",
    q: "The two black cone topmarks of a South cardinal mark point:",
    options: [
      "Both upwards",
      "Both downwards",
      "Points together (towards each other)",
      "Bases together"
    ],
    answer: 1,
    explain: "South cardinal cones point DOWN (pointing to the south/safe water below), colour yellow above black. North = points up; West = points together (like a wine glass, 'W'); East = bases together."
  },
  {
    id: 20, category: "Buoyage",
    q: "An isolated danger mark is:",
    options: [
      "Red and white vertical stripes with a red sphere",
      "Yellow with a yellow cross",
      "Black with red horizontal bands and two black spheres as a topmark",
      "Green with a single cone"
    ],
    answer: 2,
    explain: "An isolated danger mark is placed on a small danger with navigable water all round: black with one or more red horizontal bands and two black spheres (one above the other) as its topmark."
  },
  {
    id: 21, category: "Buoyage",
    q: "A safe water mark (e.g. a landfall or mid-channel buoy) is:",
    options: [
      "Red and white vertical stripes, often with a single red sphere topmark",
      "Yellow with a cross",
      "Black and yellow",
      "Green and conical"
    ],
    answer: 0,
    explain: "Safe water marks have red and white VERTICAL stripes and a single red sphere topmark. They indicate navigable water all around, e.g. a fairway or landfall buoy, and can be passed on either side."
  },
  {
    id: 22, category: "Buoyage",
    q: "A yellow buoy carrying a yellow 'X' (St Andrew's cross) topmark is a:",
    options: [
      "Starboard-hand mark",
      "Special mark",
      "Cardinal mark",
      "Isolated danger mark"
    ],
    answer: 1,
    explain: "A special mark is yellow with a yellow X topmark and any yellow light. It marks a special feature — spoil ground, pipeline, recreation zone, etc. — not primarily a navigational danger."
  },

  // ---------------- Lights ----------------
  {
    id: 23, category: "Lights",
    q: "A light characteristic 'Iso' (isophase) means:",
    options: [
      "Equal periods of light and darkness",
      "Light shown longer than the dark period",
      "Dark shown longer than the light",
      "A single flash every few seconds"
    ],
    answer: 0,
    explain: "Isophase = equal light and dark. Occulting (Oc) = light longer than dark (brief eclipses). Flashing (Fl) = dark longer than light. These are the key rhythms to identify from the chart abbreviation."
  },
  {
    id: 24, category: "Lights",
    q: "A charted light reads 'Fl(3) R 10s 15m 6M'. What does the '10s' mean?",
    options: [
      "The light is 10 metres high",
      "The light flashes 3 times every 10 seconds (the period of the whole pattern)",
      "It is visible for 10 seconds",
      "The range is 10 miles"
    ],
    answer: 1,
    explain: "The pattern is a group of 3 red flashes repeating every 10 seconds (the period). '15m' is the height of the light above datum and '6M' is its nominal luminous range in nautical miles."
  },
  {
    id: 25, category: "Lights",
    q: "'Occulting' (Oc) describes a light where:",
    options: [
      "The light and dark periods are equal",
      "The period of light is longer than the period of darkness",
      "The light never goes out",
      "There are rapid flashes of 50–60 per minute"
    ],
    answer: 1,
    explain: "In an occulting light the light is ON longer than it is OFF — it is briefly 'eclipsed'. It is effectively the opposite of a flashing light, where darkness dominates."
  },

  // ---------------- IRPCS / Collision Regulations ----------------
  {
    id: 26, category: "Collision Regs (IRPCS)",
    q: "Two power-driven vessels are meeting head-on, each seeing the other's masthead lights in line and both sidelights. What should each do?",
    options: [
      "Both alter course to port",
      "Both alter course to starboard",
      "The larger vessel holds course, the smaller gives way",
      "Both stop"
    ],
    answer: 1,
    explain: "Rule 14: in a head-on situation each power-driven vessel alters course to STARBOARD so they pass port-to-port. The alteration should be bold and made in good time."
  },
  {
    id: 27, category: "Collision Regs (IRPCS)",
    q: "Two power-driven vessels are crossing so as to involve risk of collision. Which vessel must give way?",
    options: [
      "The vessel which has the other on her own PORT side",
      "The vessel which has the other on her own STARBOARD side",
      "The faster vessel",
      "The vessel to windward"
    ],
    answer: 1,
    explain: "Rule 15: the vessel that has the other on her own starboard side is the give-way vessel and must keep clear — typically by altering to starboard to pass astern. 'If to starboard red appear, 'tis your duty to keep clear.'"
  },
  {
    id: 28, category: "Collision Regs (IRPCS)",
    q: "Two sailing vessels are approaching with the wind on different sides. Which one keeps clear?",
    options: [
      "The vessel with the wind on her starboard side",
      "The vessel on port tack (wind on her port side) keeps clear",
      "The vessel to leeward",
      "The larger vessel"
    ],
    answer: 1,
    explain: "Rule 12: when each sailing vessel has the wind on a different side, the one on PORT tack (wind on the port side) keeps clear of the one on starboard tack. If both are on the same tack, the windward boat keeps clear."
  },
  {
    id: 29, category: "Collision Regs (IRPCS)",
    q: "An overtaking vessel is one approaching another from more than how many degrees abaft the beam?",
    options: [
      "22.5°",
      "45°",
      "112.5°",
      "Any vessel approaching from ahead"
    ],
    answer: 0,
    explain: "Rule 13: overtaking means coming up from more than 22.5° abaft the beam (i.e. where at night you would see only the sternlight). The overtaking vessel must keep clear, and this duty overrides other rules — even a power boat overtaking a sailing yacht must give way."
  },
  {
    id: 30, category: "Collision Regs (IRPCS)",
    q: "In a narrow channel (Rule 9), a vessel should normally keep:",
    options: [
      "To the centre of the channel",
      "To the outer limit on her starboard side",
      "To whichever side has deepest water",
      "To the port side"
    ],
    answer: 1,
    explain: "Rule 9 requires vessels to keep as near to the outer limit of the channel on their STARBOARD side as is safe and practicable. Small craft and sailing vessels must not impede a vessel that can only navigate within the channel."
  },
  {
    id: 31, category: "Collision Regs (IRPCS)",
    q: "Which document defines the give-way rules, lights and shapes for vessels at sea?",
    options: [
      "The Merchant Shipping Act",
      "The International Regulations for Preventing Collisions at Sea (IRPCS / COLREGs)",
      "The RYA G Series",
      "The Almanac"
    ],
    answer: 1,
    explain: "The IRPCS (COLREGs) is the international 'rules of the road' governing conduct, lights, shapes and sound signals. Rule 5 (keep a proper lookout) and Rule 7 (risk of collision) underpin everything else."
  },
  {
    id: 32, category: "Collision Regs (IRPCS)",
    q: "At night you see a vessel showing a green light over a white light (both all-round). This most likely indicates:",
    options: [
      "A vessel at anchor",
      "A vessel trawling",
      "A vessel not under command",
      "A pilot vessel"
    ],
    answer: 1,
    explain: "'Green over white, trawling at night.' A vessel not under command shows two all-round reds; a pilot vessel shows white over red ('white over red, pilot ahead'). Learning these verses is the quickest way to recall them."
  },
  {
    id: 33, category: "Collision Regs (IRPCS)",
    q: "A power-driven vessel under 50 m under way at night shows, as a minimum:",
    options: [
      "Sidelights and a sternlight only",
      "One masthead (steaming) light, sidelights and a sternlight",
      "Two masthead lights and sidelights",
      "An all-round white light only"
    ],
    answer: 1,
    explain: "A power-driven vessel under 50 m shows one masthead light forward, red/green sidelights and a sternlight. A sailing vessel under way shows sidelights and a sternlight but NO masthead light — that difference is the key identifier."
  },
  {
    id: 34, category: "Collision Regs (IRPCS)",
    q: "In the 'pecking order' of Rule 18, which of these normally has the greatest right of way?",
    options: [
      "A power-driven vessel",
      "A sailing vessel",
      "A vessel engaged in fishing",
      "A vessel not under command (NUC)"
    ],
    answer: 3,
    explain: "The order (most privileged first) is roughly: Not Under Command, Restricted in Ability to Manoeuvre, Constrained by Draught, Fishing, Sailing, Power. But every vessel must still keep a lookout and act to avoid collision."
  },

  // ---------------- Safety ----------------
  {
    id: 35, category: "Safety",
    q: "The correct spoken word to begin a distress message on VHF, indicating grave and imminent danger to life or vessel, is:",
    options: [
      "PAN PAN",
      "SÉCURITÉ",
      "MAYDAY",
      "HELLO ALL SHIPS"
    ],
    answer: 2,
    explain: "MAYDAY (×3) signals grave and imminent danger requiring immediate assistance. PAN PAN is urgency (serious but not immediately life-threatening); SÉCURITÉ precedes safety/navigational or weather information."
  },
  {
    id: 36, category: "Safety",
    q: "Which VHF channel is the international distress, safety and calling channel?",
    options: [
      "Channel 6",
      "Channel 16",
      "Channel 72",
      "Channel 70"
    ],
    answer: 1,
    explain: "Channel 16 is the voice distress, safety and calling channel and is monitored by the Coastguard. Channel 70 is reserved for DSC (digital) distress alerts only and is never used for voice."
  },
  {
    id: 37, category: "Safety",
    q: "A red parachute rocket or red hand-held flare signifies:",
    options: [
      "A vessel requesting a radio check",
      "Distress — I require immediate assistance",
      "A harbour is closed",
      "Anti-collision warning only"
    ],
    answer: 1,
    explain: "Red flares (parachute and hand-held) and orange smoke are distress signals. White flares are NOT distress signals — they are used to warn of your presence to avoid a collision."
  },
  {
    id: 38, category: "Safety",
    q: "On VHF DSC, a distress alert is transmitted on:",
    options: [
      "Channel 16",
      "Channel 70",
      "Channel 67",
      "Channel 6"
    ],
    answer: 1,
    explain: "DSC (Digital Selective Calling) distress alerts go out on Channel 70, automatically sending your identity and (if connected to GPS) position. You then follow up with a voice MAYDAY on Channel 16."
  },
  {
    id: 39, category: "Safety",
    q: "The recommended minimum information in a MAYDAY call includes your vessel's name, position and:",
    options: [
      "Engine make and fuel level",
      "The nature of the distress, number of people on board and assistance required",
      "Your home port and mooring number",
      "The names of everyone on board"
    ],
    answer: 1,
    explain: "A MAYDAY should give: MAYDAY ×3, vessel name/callsign, position, nature of distress, assistance required, number of persons on board (POB) and any other useful information. Position and nature of distress are the priorities."
  },

  // ---------------- Meteorology ----------------
  {
    id: 40, category: "Meteorology",
    q: "On the Beaufort scale, a 'gale' is:",
    options: [
      "Force 6",
      "Force 7",
      "Force 8",
      "Force 10"
    ],
    answer: 2,
    explain: "Force 8 (34–40 knots) is a gale. Force 6 is a 'strong breeze' (often called a yachtsman's gale), Force 9 a severe gale and Force 10 a storm. A gale warning is issued for Force 8 or gusts of 43–51 knots."
  },
  {
    id: 41, category: "Meteorology",
    q: "In the shipping forecast, 'imminent' means the warning is expected within:",
    options: [
      "6 hours of the time of issue",
      "12 hours of the time of issue",
      "24 hours of the time of issue",
      "48 hours"
    ],
    answer: 0,
    explain: "Timings in gale warnings: 'imminent' = within 6 hours of issue, 'soon' = 6–12 hours, and 'later' = more than 12 hours. Knowing these lets you judge how urgently to act."
  },
  {
    id: 42, category: "Meteorology",
    q: "A rapidly falling barometer usually indicates:",
    options: [
      "Improving, settled weather",
      "Approaching low pressure — strengthening wind and deteriorating weather",
      "No significant change",
      "Fog is certain"
    ],
    answer: 1,
    explain: "A rapid fall in pressure signals an approaching depression, typically bringing stronger winds and worsening conditions. The faster the fall, the stronger the wind change likely to follow."
  },
  {
    id: 43, category: "Meteorology",
    q: "In the northern hemisphere, wind circulates around a low-pressure system (depression):",
    options: [
      "Clockwise and outward",
      "Anticlockwise and inward towards the centre",
      "Clockwise and inward",
      "There is no consistent pattern"
    ],
    answer: 1,
    explain: "In the northern hemisphere air flows anticlockwise around and inward toward a low (depression), and clockwise around a high. Buys Ballot's Law: stand back to the wind and low pressure is on your left."
  },
  {
    id: 44, category: "Meteorology",
    q: "Sea breezes on a warm, sunny afternoon typically blow:",
    options: [
      "From the land out to sea",
      "From the sea onto the land",
      "Parallel to the coast only",
      "They do not occur in the UK"
    ],
    answer: 1,
    explain: "By day the land heats faster than the sea; rising warm air over the land draws cooler air IN from the sea, giving an onshore sea breeze that can reinforce or oppose the gradient wind."
  },

  // ---------------- Passage Planning & Pilotage ----------------
  {
    id: 45, category: "Passage Planning",
    q: "The four stages of passage planning are Appraisal, Planning, Execution and:",
    options: [
      "Monitoring",
      "Mooring",
      "Maintenance",
      "Manoeuvring"
    ],
    answer: 0,
    explain: "The recognised stages are Appraisal (gather information), Planning (draw up the plan), Execution (carry it out) and Monitoring (continuously check progress against the plan). SOLAS requires a passage plan for every voyage."
  },
  {
    id: 46, category: "Passage Planning",
    q: "A 'transit' used in pilotage is:",
    options: [
      "A single compass bearing to one object",
      "Two identifiable objects seen in line, giving a precise position line",
      "The tidal stream direction",
      "The ship's speed over ground"
    ],
    answer: 1,
    explain: "A transit is two charted objects lined up one behind the other. It gives a very accurate position line needing no compass, and is invaluable for pilotage, checking for cross-track drift or clearing a danger."
  },
  {
    id: 47, category: "Passage Planning",
    q: "A 'clearing bearing' is used to:",
    options: [
      "Find the exact position of the boat",
      "Keep the vessel safely clear of a charted danger",
      "Measure the tidal height",
      "Calculate ETA"
    ],
    answer: 1,
    explain: "A clearing bearing (or clearing line) defines a bearing you must keep on the safe side of to avoid a hazard, e.g. 'keep the church bearing more than 040° to stay clear of the rocks'. It's a simple, robust pilotage safety tool."
  },
  {
    id: 48, category: "Passage Planning",
    q: "'Course to steer' differs from 'course made good (track)' because the course to steer allows for:",
    options: [
      "Only the boat's speed",
      "Tidal stream and leeway, so the resulting track is the desired one",
      "The variation only",
      "Nothing — they are the same"
    ],
    answer: 1,
    explain: "To make good a desired track you must steer 'up-tide' and up-wind to counter the tidal stream and leeway. The course to steer is found by constructing the tidal vector triangle on the chart."
  },
  {
    id: 49, category: "Passage Planning",
    q: "When should you ideally check that your intended harbour has enough water for your draught?",
    options: [
      "Only on arrival",
      "During the planning stage, using tide tables and charted depths",
      "It is never necessary for small craft",
      "Only if the harbour master requests it"
    ],
    answer: 1,
    explain: "Depth availability, especially over a bar or in a drying harbour, must be worked out in the planning stage from charted depths/drying heights plus the height of tide, so you arrive within a safe tidal window."
  },

  // ---------------- Boat handling, Anchoring & Ropework ----------------
  {
    id: 50, category: "Seamanship",
    q: "A commonly recommended minimum scope of ALL-CHAIN anchor rode in calm conditions is about:",
    options: [
      "1.5 times the depth of water",
      "3–4 times the depth of water",
      "10 times the depth of water",
      "Equal to the depth of water"
    ],
    answer: 1,
    explain: "A common guide is at least 4× depth for chain and 6× or more for rope (measuring depth at high water). More scope is laid in strong wind or poor holding; a snubber reduces snatch loads on all-chain rodes."
  },
  {
    id: 51, category: "Seamanship",
    q: "Which knot forms a secure, non-slipping fixed loop in the end of a rope (e.g. round a post or through a ring)?",
    options: [
      "Reef knot",
      "Clove hitch",
      "Bowline",
      "Figure-of-eight"
    ],
    answer: 2,
    explain: "The bowline makes a fixed loop that will not slip or jam and is easy to untie after loading — ideal for mooring lines and sheets. A figure-of-eight is a stopper knot; a clove hitch secures to a rail or post."
  },
  {
    id: 52, category: "Seamanship",
    q: "When picking up a mooring or coming alongside in a tidal river with wind and tide opposed, you would normally approach:",
    options: [
      "Downwind and down-tide as fast as possible",
      "Into whichever of wind or tide is the stronger, to keep steerage while slowing",
      "Beam-on to the tide",
      "It makes no difference"
    ],
    answer: 1,
    explain: "You approach into the dominant force (usually the tidal stream in a river) so you can control your speed over the ground and stop while still having water flow over the rudder for steerage. Judging which is stronger is the key skill."
  },
  {
    id: 53, category: "Seamanship",
    q: "A 'figure-of-eight' knot is used as a:",
    options: [
      "Fixed loop",
      "Stopper knot to prevent a line running out through a block or fairlead",
      "Join between two ropes of different sizes",
      "Quick-release mooring hitch"
    ],
    answer: 1,
    explain: "The figure-of-eight is a stopper knot tied in the end of a sheet or halyard so it cannot run out through a block or fairlead. It is easy to untie even after loading, unlike a simple overhand knot which can jam."
  },
  {
    id: 54, category: "Seamanship",
    q: "'Windward' means:",
    options: [
      "The side of the boat away from the wind",
      "The side of the boat towards the wind (the side the wind hits first)",
      "Directly astern",
      "The direction of the tide"
    ],
    answer: 1,
    explain: "Windward is the side towards the wind; leeward (pronounced 'loo-ard') is the sheltered side away from the wind. In the sailing collision rules the windward boat keeps clear when two boats are on the same tack."
  },

  // ---------------- Electronic navigation ----------------
  {
    id: 55, category: "Electronic Navigation",
    q: "A GPS receiver gives an extremely accurate position, but a prudent navigator still keeps a manual plot because:",
    options: [
      "GPS is always wrong near the coast",
      "Electronics can fail and datum/charting or input errors can put the plotted position in the wrong place",
      "GPS does not work in daylight",
      "It is illegal to rely on GPS"
    ],
    answer: 1,
    explain: "GPS is accurate but not infallible — power/antenna failure, wrong chart datum, or entering waypoints incorrectly can all mislead. Good practice is to cross-check GPS against a traditional plot, depth and visual/transit information."
  },
  {
    id: 56, category: "Electronic Navigation",
    q: "'COG' displayed on a chartplotter or GPS stands for:",
    options: [
      "Course Over Ground — the actual track being made good over the seabed",
      "Compass Offset Gauge",
      "Course Of the Gale",
      "Centre Of Gravity"
    ],
    answer: 0,
    explain: "COG is Course Over Ground (the real track including tide and leeway) and SOG is Speed Over Ground. They differ from heading and boat speed through the water whenever there is a tidal stream or leeway."
  },
  {
    id: 57, category: "Electronic Navigation",
    q: "A 'waypoint' is:",
    options: [
      "A point where two tidal streams meet",
      "A position defined by latitude and longitude used as a mark to navigate to",
      "The point of no return on passage",
      "A type of buoy"
    ],
    answer: 1,
    explain: "A waypoint is a stored position (lat/long) used as a target or turning point on a route. Always sanity-check a waypoint against the chart so you don't lay a course straight across a hazard."
  },

  // ---------------- General knowledge / terms ----------------
  {
    id: 58, category: "Nautical Terms",
    q: "The 'starboard' side of a vessel is:",
    options: [
      "The left side when facing forward",
      "The right side when facing forward",
      "The front of the boat",
      "The back of the boat"
    ],
    answer: 1,
    explain: "Facing forward (towards the bow), starboard is on your right and port is on your left. Memory aid: 'port' and 'left' both have four letters, and port navigation lights are red — 'is there any red port left?'"
  },
  {
    id: 59, category: "Nautical Terms",
    q: "The 'draught' of a vessel is:",
    options: [
      "Its overall length",
      "The vertical distance from the waterline to the lowest point of the keel",
      "The height of the mast",
      "The width of the hull"
    ],
    answer: 1,
    explain: "Draught is how deep the boat sits — from the waterline to the bottom of the keel. It determines the minimum depth of water you need and is fundamental to passage planning in shallow or drying areas."
  },
  {
    id: 60, category: "Nautical Terms",
    q: "'Freeboard' refers to:",
    options: [
      "The distance from the waterline up to the deck edge",
      "The area of free deck space",
      "A spare plank carried aboard",
      "The unladen weight of the vessel"
    ],
    answer: 0,
    explain: "Freeboard is the height of the hull between the waterline and the main deck edge. Greater freeboard generally means a drier, more seaworthy boat in a seaway; low freeboard is more easily swamped."
  },

  // ---------------- Charts & Chartwork (more) ----------------
  {
    id: 61, category: "Charts & Chartwork",
    q: "How is a position conventionally written?",
    options: [
      "Longitude first, then latitude",
      "Latitude first, then longitude",
      "In any order as long as N/S and E/W are shown",
      "Always as a bearing and distance from a landmark"
    ],
    answer: 1,
    explain: "Position is written latitude first, then longitude, e.g. 50°45'.3N 001°17'.6W. Latitude is measured N/S of the equator, longitude E/W of the Greenwich meridian."
  },
  {
    id: 62, category: "Charts & Chartwork",
    q: "One degree of latitude is equal to how many nautical miles?",
    options: ["10", "60", "100", "360"],
    answer: 1,
    explain: "One degree = 60 minutes, and 1 minute of latitude = 1 nautical mile, so one degree of latitude equals 60 nautical miles. This is why the latitude scale is used for distance."
  },
  {
    id: 63, category: "Charts & Chartwork",
    q: "Lines of latitude (parallels) on a chart run:",
    options: [
      "North–south, from pole to pole",
      "East–west, parallel to the equator",
      "Diagonally across the chart",
      "Only around the compass rose"
    ],
    answer: 1,
    explain: "Parallels of latitude run east–west (parallel to the equator). Meridians of longitude run north–south from pole to pole. Distance is measured on the latitude (side) scale."
  },
  {
    id: 64, category: "Charts & Chartwork",
    q: "On a chart's compass rose, the OUTER ring shows:",
    options: [
      "Magnetic directions",
      "True directions",
      "Tidal stream directions",
      "Deviation values"
    ],
    answer: 1,
    explain: "The outer ring of the compass rose is aligned to True north; the inner ring is offset to Magnetic north, with the variation and its annual change printed at the centre."
  },
  {
    id: 65, category: "Charts & Chartwork",
    q: "A depth measured on a chart is given in:",
    options: [
      "Fathoms only",
      "Metres and decimetres below chart datum",
      "Feet above sea level",
      "Metres above mean high water"
    ],
    answer: 1,
    explain: "Modern metric Admiralty charts show soundings in metres and decimetres (the small subscript) below chart datum. Older fathoms charts exist but metric is standard — always check the units in the chart title."
  },

  // ---------------- Compass & Position (more) ----------------
  {
    id: 66, category: "Compass & Position",
    q: "A bearing taken with a hand-bearing compass is a:",
    options: [
      "True bearing",
      "Magnetic bearing (still needs deviation/variation applied to plot as true)",
      "Relative bearing only",
      "Grid bearing"
    ],
    answer: 1,
    explain: "A hand-bearing compass gives a magnetic bearing. To plot it against the chart's true rose you apply variation (and any deviation), or plot it against the magnetic rose directly."
  },
  {
    id: 67, category: "Compass & Position",
    q: "Using 'Error East, compass least', if variation is 6°E, a compass reading of 090° converts to a True bearing of:",
    options: ["084°T", "090°T", "096°T", "086°T"],
    answer: 2,
    explain: "'Error East, compass least' means the compass reads LESS than true when the error is easterly. Going compass → true you ADD easterly error: 090° + 6° = 096°T."
  },
  {
    id: 68, category: "Compass & Position",
    q: "Why must deviation be read for the vessel's current heading rather than used as a single fixed value?",
    options: [
      "Because variation changes each year",
      "Because deviation changes as the boat's heading changes relative to its own magnetic field",
      "Because the tide alters the compass",
      "It doesn't — deviation is always constant"
    ],
    answer: 1,
    explain: "The boat's own magnetism sits at a fixed position in the hull, so as the boat turns, its effect on the compass changes. Deviation is therefore listed against heading on a deviation card."
  },
  {
    id: 69, category: "Compass & Position",
    q: "A 'cocked hat' on a chart is:",
    options: [
      "A symbol for an anchorage",
      "The small triangle formed when three position lines of a fix don't cross at a single point",
      "A type of tidal diamond",
      "The give-way marking in a channel"
    ],
    answer: 1,
    explain: "When three bearings are plotted they rarely meet exactly, forming a small triangle — the cocked hat. Assume your position is at the corner nearest any danger, and re-check if the triangle is large."
  },
  {
    id: 70, category: "Compass & Position",
    q: "For the most reliable three-bearing fix, the charted objects should be:",
    options: [
      "As close together in bearing as possible",
      "Well spread out, ideally with bearings roughly 60°–120° apart",
      "All dead ahead",
      "All astern"
    ],
    answer: 1,
    explain: "Objects spread around 60°–120° apart give position lines that cross at good angles, producing a tight, accurate fix. Objects close together in bearing give a shallow cut and a poor fix."
  },

  // ---------------- Tides (more) ----------------
  {
    id: 71, category: "Tides",
    q: "Neap tides (the smallest range) occur around:",
    options: [
      "Full and new moon",
      "The first and last quarter of the moon",
      "The spring equinox",
      "Every high water"
    ],
    answer: 1,
    explain: "Neaps occur near the quarter moons, when the sun and moon pull at right angles, giving the smallest range — lower HW and higher LW. Springs (largest range) occur near full and new moon."
  },
  {
    id: 72, category: "Tides",
    q: "Around the UK coast there are typically how many high waters each day?",
    options: [
      "One (diurnal)",
      "Two (semi-diurnal), roughly every 12 hours 25 minutes",
      "Four",
      "It varies randomly"
    ],
    answer: 1,
    explain: "UK tides are semi-diurnal — two highs and two lows a day, each HW about 12h25m after the last. This is why HW times advance by roughly 50 minutes each day."
  },
  {
    id: 73, category: "Tides",
    q: "In the almanac, tidal predictions for a 'secondary port' are found by:",
    options: [
      "Reading them directly from a full tide table",
      "Applying time and height differences to a related 'standard port'",
      "Using the Rule of Twelfths only",
      "Assuming they are the same as the nearest standard port"
    ],
    answer: 1,
    explain: "Secondary ports don't have full daily predictions; instead you apply published time and height differences to the associated standard port's HW and LW to work out the secondary port's tide."
  },
  {
    id: 74, category: "Tides",
    q: "The actual depth of water at a spot equals:",
    options: [
      "Charted depth minus height of tide",
      "Charted depth plus height of tide",
      "Height of tide only",
      "Charted depth only"
    ],
    answer: 1,
    explain: "Actual depth = charted depth (sounding below datum) + height of tide (water above datum). Over a drying patch, actual depth = height of tide − drying height, and is only positive once the tide covers it."
  },
  {
    id: 75, category: "Tides",
    q: "A tidal curve in the almanac is used to find:",
    options: [
      "The set and rate of the tidal stream",
      "The height of tide at a time between HW and LW (or the time a required height occurs)",
      "The variation for the year",
      "The distance to the next port"
    ],
    answer: 1,
    explain: "The tidal curve lets you interpolate the height of tide at any time between HW and LW — essential for checking clearance over a bar or under a bridge, and for finding your tidal window."
  },
  {
    id: 76, category: "Tides",
    q: "The best time to cross a shallow, drying harbour bar is usually:",
    options: [
      "At low water",
      "Around high water, within a calculated tidal window of sufficient depth",
      "Exactly at mid-tide on the ebb",
      "It makes no difference"
    ],
    answer: 1,
    explain: "You cross when there is enough height of tide over the bar — normally around HW. Calculate the window (rise and fall) from the tidal curve so you enter and, importantly, still have water to leave."
  },

  // ---------------- Buoyage (more) ----------------
  {
    id: 77, category: "Buoyage",
    q: "In IALA Region A, a starboard-hand mark (entering from seaward) is:",
    options: [
      "Red and can-shaped",
      "Green and conical",
      "Yellow with a cross",
      "Black with red bands"
    ],
    answer: 1,
    explain: "Starboard-hand marks in Region A are green cones, kept to starboard when entering from seaward. Port-hand marks are red cans kept to port — 'red to port coming home'."
  },
  {
    id: 78, category: "Buoyage",
    q: "The topmark of an East cardinal mark is two black cones arranged:",
    options: [
      "Points up",
      "Points down",
      "Base to base (bases together, like an egg)",
      "Point to point"
    ],
    answer: 2,
    explain: "East cardinal cones are base-to-base (egg-shaped), and the buoy is black with a single broad yellow band (black-yellow-black). Pass to the east of it."
  },
  {
    id: 79, category: "Buoyage",
    q: "A West cardinal mark's two black cone topmarks:",
    options: [
      "Point away from each other",
      "Point towards each other (points together, like a wine glass 'W')",
      "Both point up",
      "Both point down"
    ],
    answer: 1,
    explain: "West cardinal cones point together (a 'wine glass' shape — W for West). Colour is yellow-black-yellow. Pass to the west of it, where the safe water lies."
  },
  {
    id: 80, category: "Buoyage",
    q: "A red buoy with a single broad green horizontal band is a:",
    options: [
      "Special mark",
      "Preferred channel to STARBOARD mark (treat mainly as a port-hand mark)",
      "Isolated danger mark",
      "Safe water mark"
    ],
    answer: 1,
    explain: "At a channel division, a red buoy with a green band marks the preferred (main) channel to starboard — its body colour (red) tells you the primary rule: keep it to port if following the main channel."
  },
  {
    id: 81, category: "Buoyage",
    q: "What colour light is shown by a cardinal mark?",
    options: [
      "Red or green depending on side",
      "Always white (quick or very quick flashing)",
      "Yellow",
      "Blue"
    ],
    answer: 1,
    explain: "Cardinal marks always show a WHITE light, quick (Q) or very quick (VQ) flashing. The flash pattern indicates the quadrant: N continuous, E three, S six + a long flash, W nine."
  },
  {
    id: 82, category: "Buoyage",
    q: "An East cardinal light flashes in a group of:",
    options: ["Three", "Six plus a long flash", "Nine", "Continuous"],
    answer: 0,
    explain: "Think of a clock face: East = 3 o'clock = 3 flashes; South = 6 o'clock = 6 flashes plus a long flash; West = 9 o'clock = 9 flashes; North = continuous quick/very-quick flashing."
  },

  // ---------------- Lights (more) ----------------
  {
    id: 83, category: "Lights",
    q: "A 'Q' (quick flashing) light flashes at about:",
    options: [
      "10 flashes per minute",
      "50–60 flashes per minute",
      "120 flashes per minute",
      "One flash every 10 seconds"
    ],
    answer: 1,
    explain: "Quick flashing (Q) is about 50–60 per minute; Very Quick (VQ) is about 100–120 per minute. Both are commonly used on cardinal marks to attract attention."
  },
  {
    id: 84, category: "Lights",
    q: "A light charted as 'Mo(A)' flashes:",
    options: [
      "Two flashes then a pause",
      "The Morse code letter A (short-long), often marking safe water",
      "A continuous beam",
      "Alternating red and green"
    ],
    answer: 1,
    explain: "Mo(A) repeats the Morse letter 'A' (dot-dash: a short flash then a long flash). It is frequently used on safe water / landfall marks and by some offshore structures."
  },
  {
    id: 85, category: "Lights",
    q: "Leading lights (a leading line) are used to:",
    options: [
      "Warn of an isolated danger",
      "Guide a vessel along a safe track when the two lights are kept vertically in line",
      "Indicate tidal height",
      "Mark the centre of a traffic separation scheme"
    ],
    answer: 1,
    explain: "Two leading lights (or marks) at different heights are kept in transit — one above the other — to hold a precise safe track into or out of a harbour. If they open out, you have drifted off the line."
  },
  {
    id: 86, category: "Lights",
    q: "'Fl(2) 10s' describes a light that shows:",
    options: [
      "Two flashes every 2 seconds",
      "A group of two flashes repeating every 10 seconds",
      "A steady light for 10 seconds",
      "Ten flashes then darkness"
    ],
    answer: 1,
    explain: "Fl(2) is a group of two flashes, and 10s is the period of the whole pattern — so two flashes, then a pause, repeating every 10 seconds. Timing the period helps you identify the light."
  },

  // ---------------- Collision Regs (more) ----------------
  {
    id: 87, category: "Collision Regs (IRPCS)",
    q: "One short blast on the horn from a power-driven vessel means:",
    options: [
      "I am altering my course to STARBOARD",
      "I am altering my course to PORT",
      "I am operating astern propulsion",
      "I am in distress"
    ],
    answer: 0,
    explain: "Manoeuvring signals: one short blast = 'I am altering to starboard', two = 'altering to port', three = 'operating astern propulsion'. They signal your action, they are not a request."
  },
  {
    id: 88, category: "Collision Regs (IRPCS)",
    q: "Two short blasts on the horn mean:",
    options: [
      "I am altering to starboard",
      "I am altering my course to PORT",
      "I am going astern",
      "I do not understand your intentions"
    ],
    answer: 1,
    explain: "Two short blasts = 'I am altering my course to port'. Remember: one short = starboard, two short = port, three short = engines astern."
  },
  {
    id: 89, category: "Collision Regs (IRPCS)",
    q: "Five or more short, rapid blasts on the horn indicate:",
    options: [
      "A friendly greeting",
      "Doubt about the other vessel's intentions or actions — a warning of danger",
      "A vessel leaving harbour",
      "A request to pass on the port side"
    ],
    answer: 1,
    explain: "Five (or more) short rapid blasts is the 'doubt' or wake-up signal, used when you do not understand another vessel's intentions or think she is not taking enough action to avoid collision."
  },
  {
    id: 90, category: "Collision Regs (IRPCS)",
    q: "In restricted visibility, a power-driven vessel making way through the water sounds:",
    options: [
      "Two prolonged blasts every 2 minutes",
      "One prolonged blast at intervals of not more than 2 minutes",
      "Rapid ringing of a bell",
      "One short blast every minute"
    ],
    answer: 1,
    explain: "Making way: one prolonged blast every ≤2 minutes. Underway but stopped (not making way): two prolonged blasts every ≤2 minutes. These fog signals warn others you cannot yet see them."
  },
  {
    id: 91, category: "Collision Regs (IRPCS)",
    q: "By day, a vessel at anchor displays:",
    options: [
      "A single black ball forward",
      "A black cone point down",
      "Two black balls",
      "A black cylinder"
    ],
    answer: 0,
    explain: "One black ball (a 'day shape') hoisted forward indicates a vessel at anchor. Two black balls or a ball-diamond-ball arrangement indicate other statuses (e.g. not under command / restricted in ability to manoeuvre)."
  },
  {
    id: 92, category: "Collision Regs (IRPCS)",
    q: "A sailing vessel that is also being driven by her engine (motor-sailing) must, by day, display:",
    options: [
      "A black ball",
      "A black cone, point DOWN, forward",
      "A black cone, point up",
      "Nothing extra"
    ],
    answer: 1,
    explain: "Motor-sailing counts as a power-driven vessel under the rules, and by day must show a black cone point-down forward. At night she shows the lights of a power-driven vessel, not a sailing vessel."
  },
  {
    id: 93, category: "Collision Regs (IRPCS)",
    q: "Under Rule 5, every vessel must at all times:",
    options: [
      "Travel at maximum speed",
      "Maintain a proper look-out by sight and hearing",
      "Monitor VHF channel 16 only",
      "Fly the correct ensign"
    ],
    answer: 1,
    explain: "Rule 5 requires a proper look-out by sight and hearing, and by all available means, to make a full appraisal of the situation and risk of collision. It underpins every other steering rule."
  },
  {
    id: 94, category: "Collision Regs (IRPCS)",
    q: "Under Rule 7, which observation is a strong indication that risk of collision exists?",
    options: [
      "The other vessel is larger than yours",
      "The compass bearing of the approaching vessel does not appreciably change while the range decreases",
      "The other vessel is under sail",
      "You are both in a marina"
    ],
    answer: 1,
    explain: "A steady (constant) compass bearing with a decreasing range means you are on a collision course. Take and watch a series of bearings; if it isn't changing, risk of collision exists and you must act early."
  },
  {
    id: 95, category: "Collision Regs (IRPCS)",
    q: "The 'stand-on' vessel (Rule 17) should normally:",
    options: [
      "Alter course early to help",
      "Keep her course and speed, while watching the give-way vessel",
      "Stop immediately",
      "Turn to port"
    ],
    answer: 1,
    explain: "The stand-on vessel keeps her course and speed so her movements are predictable. If it becomes clear the give-way vessel is not acting, the stand-on vessel may — and eventually must — take avoiding action herself."
  },
  {
    id: 96, category: "Collision Regs (IRPCS)",
    q: "At night you see two all-round RED lights in a vertical line. This indicates a vessel that is:",
    options: [
      "At anchor",
      "Not under command (unable to manoeuvre)",
      "Trawling",
      "A pilot vessel"
    ],
    answer: 1,
    explain: "Two all-round reds in a vertical line = 'not under command' — the vessel cannot manoeuvre as required (e.g. breakdown). Restricted in ability to manoeuvre shows red-white-red; give both a wide berth."
  },

  // ---------------- Safety (more) ----------------
  {
    id: 97, category: "Safety",
    q: "The correct spoken word for an URGENCY message (serious, but not immediate danger to life) is:",
    options: ["MAYDAY", "PAN PAN", "SÉCURITÉ", "RELAY"],
    answer: 1,
    explain: "PAN PAN (×3) is the urgency signal — a serious situation not yet an immediate threat to life, e.g. mechanical failure with no immediate danger. MAYDAY is reserved for grave and imminent danger."
  },
  {
    id: 98, category: "Safety",
    q: "The signal SÉCURITÉ on VHF precedes:",
    options: [
      "A distress message",
      "A safety message — navigational or meteorological warning",
      "A radio check",
      "A request to change channel"
    ],
    answer: 1,
    explain: "SÉCURITÉ (×3) introduces a safety message, such as a navigational warning or gale warning, usually broadcast by the Coastguard. It tells listeners important safety information follows on a working channel."
  },
  {
    id: 99, category: "Safety",
    q: "When activated, a 406 MHz EPIRB alerts the rescue services via:",
    options: [
      "VHF line-of-sight only",
      "The Cospas-Sarsat satellite system, sending its identity and (with GPS) position",
      "A loud siren only",
      "Mobile phone network"
    ],
    answer: 1,
    explain: "A 406 MHz EPIRB (or personal PLB) transmits a coded distress alert via satellite, including your registered identity and, if GPS-equipped, your position — giving global coverage beyond VHF range."
  },
  {
    id: 100, category: "Safety",
    q: "On a boat driven by an outboard or petrol engine, the kill cord should be:",
    options: [
      "Left coiled by the throttle",
      "Attached to the helmsman so the engine stops if they are thrown from the helm",
      "Removed while under way",
      "Only used at night"
    ],
    answer: 1,
    explain: "The kill cord clips to the helmsman (leg or lifejacket) and cuts the engine if they fall or move away from the helm — preventing a runaway boat circling back over people in the water. Always clip on before starting."
  },
  {
    id: 101, category: "Safety",
    q: "An orange smoke signal is used to indicate:",
    options: [
      "That a harbour is closed",
      "Distress by DAY, showing your position to searching aircraft or vessels",
      "Anti-collision warning at night",
      "A man overboard drill only"
    ],
    answer: 1,
    explain: "Orange smoke is a daytime distress signal, very visible from the air. Red flares (hand and parachute) are the other distress pyrotechnics; white flares are for warning of your presence to avoid collision, not distress."
  },
  {
    id: 102, category: "Safety",
    q: "From a mobile phone ashore, how do you contact HM Coastguard in an emergency?",
    options: [
      "Dial 111",
      "Dial 999 (or 112) and ask for the Coastguard",
      "Send a text to 16",
      "Call the local marina"
    ],
    answer: 1,
    explain: "Dial 999 or 112 and ask for the Coastguard. Afloat, the primary means is a DSC distress alert and a MAYDAY on VHF Channel 16, which also alerts nearby vessels who may assist fastest."
  },

  // ---------------- Meteorology (more) ----------------
  {
    id: 103, category: "Meteorology",
    q: "A wind that 'veers' has changed direction:",
    options: [
      "Anticlockwise (e.g. NW to SW)",
      "Clockwise (e.g. SW to W to NW)",
      "Increased in strength only",
      "Reversed completely"
    ],
    answer: 1,
    explain: "Veering = a clockwise change of wind direction (SW → W → NW). Backing = an anticlockwise change. The wind typically veers as a cold front passes."
  },
  {
    id: 104, category: "Meteorology",
    q: "Isobars drawn close together on a synoptic (weather) chart indicate:",
    options: [
      "Light winds",
      "Strong winds (a steep pressure gradient)",
      "Fog",
      "No wind at all"
    ],
    answer: 1,
    explain: "Closely spaced isobars mean a steep pressure gradient and therefore strong winds. Widely spaced isobars mean light winds. The spacing is your quickest visual guide to wind strength."
  },
  {
    id: 105, category: "Meteorology",
    q: "Sea fog (advection fog) typically forms when:",
    options: [
      "Cold dry air sinks over warm land",
      "Warm, moist air flows over a colder sea surface and is cooled below its dew point",
      "The sun heats the sea rapidly",
      "A thunderstorm passes"
    ],
    answer: 1,
    explain: "Advection (sea) fog forms when warm moist air moves over a cooler sea and is chilled to condensation. It can persist in a moderate breeze and is a real hazard for coastal passages in spring/early summer."
  },
  {
    id: 106, category: "Meteorology",
    q: "The passage of a cold front is usually followed by:",
    options: [
      "Steady rain and a backing wind",
      "A veer in the wind, clearing skies and cooler, brighter, showery conditions",
      "Thick fog and no wind",
      "A long period of drizzle"
    ],
    answer: 1,
    explain: "As a cold front passes, the wind veers, a band of heavy rain clears through, and it turns brighter, cooler and often showery with gusty winds behind it. A warm front instead brings gradually lowering cloud and steady rain ahead."
  },
  {
    id: 107, category: "Meteorology",
    q: "On the Beaufort scale, Force 4 is described as a:",
    options: [
      "Light air",
      "Moderate breeze (about 11–16 knots)",
      "Strong breeze",
      "Gale"
    ],
    answer: 1,
    explain: "Force 4 is a moderate breeze, roughly 11–16 knots — pleasant sailing with small waves and frequent white horses. Force 6 (22–27 kt) is a strong breeze, and Force 8 (34–40 kt) is a gale."
  },
  {
    id: 108, category: "Meteorology",
    q: "In the northern hemisphere, using Buys Ballot's Law, if you stand with your back to the wind, low pressure lies:",
    options: [
      "To your right",
      "To your left",
      "Directly ahead",
      "Directly behind"
    ],
    answer: 1,
    explain: "Buys Ballot's Law (northern hemisphere): back to the wind, low pressure is on your left (and slightly forward). This helps you visualise the depression's position and how the weather may develop."
  },

  // ---------------- Passage Planning (more) ----------------
  {
    id: 109, category: "Passage Planning",
    q: "A 'tidal gate' is:",
    options: [
      "A lock at a marina entrance",
      "A place (e.g. a headland or narrows) that can only be passed favourably at certain states of the tide",
      "The gate on a tidal barrier",
      "A type of waypoint"
    ],
    answer: 1,
    explain: "A tidal gate is a point where strong tidal streams mean you must time your passage — arriving with a fair (or slack) tide. Planning a passage often means linking several tidal gates together."
  },
  {
    id: 110, category: "Passage Planning",
    q: "At a boat speed of 5 knots, how long will it take to cover 15 nautical miles (ignoring tide)?",
    options: ["1 hour", "2 hours", "3 hours", "5 hours"],
    answer: 2,
    explain: "Time = distance ÷ speed = 15 ÷ 5 = 3 hours. The classic navigation triangle Distance = Speed × Time (D = S × T) lets you find any one value from the other two."
  },
  {
    id: 111, category: "Passage Planning",
    q: "'Cross-track error' (XTE) shown on a chartplotter is:",
    options: [
      "The distance still to run to the waypoint",
      "The perpendicular distance you are off the intended track between two waypoints",
      "The difference between COG and heading",
      "The tidal set for the hour"
    ],
    answer: 1,
    explain: "XTE is how far, and to which side, you are off the straight line between waypoints. Monitoring XTE lets you correct back toward track — but always check the track itself is clear of hazards."
  },
  {
    id: 112, category: "Passage Planning",
    q: "Which regulation requires that a passage plan be prepared for a voyage?",
    options: [
      "The Highway Code",
      "SOLAS Chapter V (Safety of Life at Sea)",
      "The Merchant Shipping (Registration) Regulations",
      "IALA buoyage rules"
    ],
    answer: 1,
    explain: "SOLAS Chapter V applies to all vessels, including small craft, and requires voyage/passage planning. Good practice covers appraisal, planning, execution and monitoring, with attention to tides, weather, and safe depths."
  },

  // ---------------- Seamanship (more) ----------------
  {
    id: 113, category: "Seamanship",
    q: "The 'no-go zone' when sailing is:",
    options: [
      "The area directly downwind",
      "The arc roughly 45° either side of the wind, into which a boat cannot sail directly",
      "Any water shallower than 2 m",
      "The zone around a harbour entrance"
    ],
    answer: 1,
    explain: "A yacht cannot sail directly into the wind; the no-go zone is about 45° either side of the true wind. To make ground to windward the boat must tack — sailing close-hauled on alternate sides of the wind."
  },
  {
    id: 114, category: "Seamanship",
    q: "Turning the bow through the wind so the wind comes onto the other side of the boat is called:",
    options: ["Gybing", "Tacking (going about)", "Heaving to", "Reefing"],
    answer: 1,
    explain: "Tacking (going about) turns the bow through the eye of the wind. Gybing turns the stern through the wind when sailing downwind — a gybe can be more violent, so the mainsail is controlled through the turn."
  },
  {
    id: 115, category: "Seamanship",
    q: "A boat sailing as close to the wind as she effectively can is said to be:",
    options: ["Running", "On a beam reach", "Close-hauled", "Hove to"],
    answer: 2,
    explain: "Close-hauled means sailing as near to the wind as possible (~45°) with sails hauled in tight. Other points of sail, from the wind aft, are close reach, beam reach, broad reach and running (dead downwind)."
  },
  {
    id: 116, category: "Seamanship",
    q: "A mooring 'spring' line is rigged to:",
    options: [
      "Hold the bow off the pontoon",
      "Stop the boat surging forwards or backwards along the berth",
      "Act as the main anchor rode",
      "Raise the mainsail"
    ],
    answer: 1,
    explain: "Springs run diagonally fore and aft to prevent the boat moving forward or back along the berth. With bow and stern lines plus fore and aft springs, the boat is held securely against tide and wind — and springs help when manoeuvring off."
  },
  {
    id: 117, category: "Seamanship",
    q: "A good early sign that your anchor is dragging is:",
    options: [
      "The anchor chain goes slack",
      "Transit marks ashore start to move / your position shifts relative to charted features",
      "The depth increases slightly",
      "The wind drops"
    ],
    answer: 1,
    explain: "Pick a transit (two objects in line) or watch your position against charted marks and the plotter; if they change, you are dragging. Taking an anchor bearing/transit when you set the hook makes dragging obvious."
  },
  {
    id: 118, category: "Seamanship",
    q: "Reducing the area of sail set in strengthening wind is called:",
    options: ["Reefing", "Tacking", "Trimming", "Luffing"],
    answer: 0,
    explain: "Reefing reduces sail area to keep the boat balanced, upright and under control as the wind builds. The old adage: reef early — the first time you think about it is usually the right time to do it."
  },

  // ---------------- Electronic Navigation (more) ----------------
  {
    id: 119, category: "Electronic Navigation",
    q: "AIS (Automatic Identification System) allows you to:",
    options: [
      "Measure the depth of water",
      "See the identity, position, course and speed of other AIS-equipped vessels",
      "Predict the tide",
      "Steer the boat automatically"
    ],
    answer: 1,
    explain: "AIS exchanges vessel data (name, MMSI, position, course, speed, and often CPA/TCPA) over VHF. It's a powerful aid to collision avoidance — but not every vessel carries it, so keep a visual and radar lookout too."
  },
  {
    id: 120, category: "Electronic Navigation",
    q: "An echo sounder measures:",
    options: [
      "Speed through the water",
      "The depth of water below the transducer",
      "Wind speed",
      "Distance to the next waypoint"
    ],
    answer: 1,
    explain: "An echo sounder times an acoustic pulse to the seabed and back to give depth. Know whether yours reads from the waterline, the keel or the transducer, and set an alarm for a safe minimum depth."
  },
  {
    id: 121, category: "Electronic Navigation",
    q: "Radar is especially useful for:",
    options: [
      "Reading the tidal height",
      "Detecting vessels and land, and measuring their range and bearing, in poor visibility or darkness",
      "Charging the batteries",
      "Forecasting the weather a week ahead"
    ],
    answer: 1,
    explain: "Radar detects targets (vessels, buoys, coastline) and gives their range and bearing, invaluable in fog or at night. Interpreting the display and using it for collision avoidance is a skill worth practising in clear conditions first."
  },

  // ---------------- Nautical Terms (more) ----------------
  {
    id: 122, category: "Nautical Terms",
    q: "The 'beam' of a vessel is:",
    options: [
      "Its overall length",
      "Its maximum width",
      "The height of the mast",
      "The depth of the keel"
    ],
    answer: 1,
    explain: "Beam is the boat's greatest width. 'On the beam' also means abeam — at 90° to the fore-and-aft line, i.e. directly to the side of the vessel."
  },
  {
    id: 123, category: "Nautical Terms",
    q: "'Aft' means:",
    options: [
      "Towards the bow (front)",
      "Towards the stern (back)",
      "To the left",
      "Below deck"
    ],
    answer: 1,
    explain: "Aft is towards the stern; forward (or 'for'ard') is towards the bow. 'Abaft' means further towards the stern than something, e.g. 'abaft the beam'."
  },
  {
    id: 124, category: "Nautical Terms",
    q: "'Amidships' refers to:",
    options: [
      "The very front of the boat",
      "The middle of the vessel",
      "The top of the mast",
      "The area behind the transom"
    ],
    answer: 1,
    explain: "Amidships is the middle of the boat, both along its length and across its beam. 'Midships' is also an order to centre the helm/rudder."
  },
  {
    id: 125, category: "Nautical Terms",
    q: "The 'keel' of a yacht is:",
    options: [
      "The sail at the front",
      "The structural backbone along the bottom of the hull, usually ballasted for stability",
      "The rear rail",
      "The steering wheel"
    ],
    answer: 1,
    explain: "The keel runs along the bottom of the hull; on a sailing yacht it is usually weighted (ballasted) low down to resist heeling and to stop the boat being blown sideways, providing stability and lateral resistance."
  },
  {
    id: 126, category: "Nautical Terms",
    q: "'Leeward' (pronounced 'loo-ard') means:",
    options: [
      "The side towards the wind",
      "The side away from the wind (downwind, the sheltered side)",
      "Straight ahead",
      "The deepest part of a channel"
    ],
    answer: 1,
    explain: "Leeward is the sheltered side, away from the wind; windward is the side the wind hits first. A 'lee shore' is a coast downwind of you — hazardous, because wind and waves set you towards it."
  },
  {
    id: 127, category: "Nautical Terms",
    q: "The 'transom' of a boat is:",
    options: [
      "The flat surface across the stern",
      "The tip of the bow",
      "The base of the mast",
      "The anchor locker"
    ],
    answer: 0,
    explain: "The transom is the (usually flat) athwartships surface that forms the back of the hull. Outboard engines, boarding ladders and self-draining cockpit outlets are often fitted on or through it."
  },
  {
    id: 128, category: "Nautical Terms",
    q: "A vessel's 'displacement' is:",
    options: [
      "How far it has travelled",
      "Its weight, equal to the weight of water it displaces when floating",
      "Its top speed",
      "The distance it can anchor from shore"
    ],
    answer: 1,
    explain: "Displacement is the weight of the vessel — by Archimedes' principle equal to the weight of the water it pushes aside. It's a truer measure of a boat's size and load-carrying than length alone."
  },

  // ================= IMAGE QUESTIONS =================
  // ---------------- Buoyage: cardinal marks ----------------
  {
    id: 129, category: "Buoyage", image: DIAGRAMS.cardinal("N"),
    q: "You see this buoy by day. What is it, and where is the safe water?",
    options: [
      "North cardinal — safe water is to the north; pass to the NORTH of it",
      "South cardinal — pass to the south of it",
      "Isolated danger mark — the danger is directly beneath it",
      "Port-hand mark — leave it to port"
    ],
    answer: 0,
    explain: "Both topmark cones point UP and the colour is black above yellow — a North cardinal mark. The safe, deep water lies to the north, so you pass to the north of it."
  },
  {
    id: 130, category: "Buoyage", image: DIAGRAMS.cardinal("E"),
    q: "Identify this cardinal mark and the side on which to pass it.",
    options: [
      "West cardinal — pass to the west",
      "East cardinal — pass to the EAST of it",
      "North cardinal — pass to the north",
      "Safe water mark — pass either side"
    ],
    answer: 1,
    explain: "The cones are base-to-base (an 'egg' shape) and the colours are black-yellow-black — an East cardinal mark. Pass to the east of it. Its light flashes in a group of three."
  },
  {
    id: 131, category: "Buoyage", image: DIAGRAMS.cardinal("S"),
    q: "What is this mark, and how should you pass it?",
    options: [
      "North cardinal — pass to the north",
      "South cardinal — pass to the SOUTH of it",
      "Special mark — a non-navigational feature",
      "Starboard-hand mark — leave to starboard"
    ],
    answer: 1,
    explain: "Both cones point DOWN and the colour is yellow above black — a South cardinal mark. Pass to the south. Its light shows six quick flashes plus one long flash."
  },
  {
    id: 132, category: "Buoyage", image: DIAGRAMS.cardinal("W"),
    q: "Identify this cardinal mark.",
    options: [
      "East cardinal — pass to the east",
      "West cardinal — pass to the WEST of it",
      "Isolated danger mark",
      "Port-hand mark"
    ],
    answer: 1,
    explain: "The cones point towards each other (a 'wine glass' — W for West) and the colours are yellow-black-yellow — a West cardinal mark. Pass to the west of it. Its light flashes in a group of nine."
  },

  // ---------------- Buoyage: lateral & other marks ----------------
  {
    id: 133, category: "Buoyage", image: DIAGRAMS.lateralPort(),
    q: "In IALA Region A, entering harbour from seaward, how should you treat this mark?",
    options: [
      "Leave it to STARBOARD",
      "Leave it to PORT (keep red to port coming in)",
      "Pass either side — it marks safe water",
      "Keep well clear — isolated danger"
    ],
    answer: 1,
    explain: "A red, can-shaped mark is a port-hand mark in Region A. Entering from seaward you keep it on your port (left) side — 'is there any red port left in the can?'."
  },
  {
    id: 134, category: "Buoyage", image: DIAGRAMS.lateralStbd(),
    q: "Entering harbour from seaward in IALA Region A, this mark should be:",
    options: [
      "Left to port",
      "Left to STARBOARD (kept on your right)",
      "Passed only on its seaward side",
      "Treated as a special mark"
    ],
    answer: 1,
    explain: "A green, conical mark is a starboard-hand mark in Region A. Entering from seaward you keep it on your starboard (right) side; leaving, you would keep it to port."
  },
  {
    id: 135, category: "Buoyage", image: DIAGRAMS.isolatedDanger(),
    q: "What does this mark indicate?",
    options: [
      "Safe water all around — a mid-channel mark",
      "An isolated danger with navigable water all around it",
      "A port-hand mark",
      "A special/recreational area"
    ],
    answer: 1,
    explain: "Black with red horizontal band(s) and a topmark of two black spheres is an isolated danger mark. It stands on a small danger (e.g. a rock or wreck) with navigable water all around — keep clear of the mark itself."
  },
  {
    id: 136, category: "Buoyage", image: DIAGRAMS.safeWater(),
    q: "You reach this red-and-white striped buoy. What is it?",
    options: [
      "An isolated danger mark — keep clear",
      "A safe water mark (e.g. landfall/mid-channel) — safe water all around, pass either side",
      "A starboard-hand mark",
      "A north cardinal mark"
    ],
    answer: 1,
    explain: "Red and white VERTICAL stripes with a single red sphere topmark is a safe water mark — a landfall, fairway or mid-channel buoy. There is navigable water all round and you may pass either side."
  },
  {
    id: 137, category: "Buoyage", image: DIAGRAMS.specialMark(),
    q: "This yellow buoy with a yellow 'X' topmark is a:",
    options: [
      "Starboard-hand mark",
      "Special mark — indicates a special feature, not primarily a navigational danger",
      "Cardinal mark",
      "Safe water mark"
    ],
    answer: 1,
    explain: "Yellow with a yellow St Andrew's cross (X) topmark is a special mark. It denotes a special feature such as a spoil ground, cable, pipeline or recreation area, and shows a yellow light if lit."
  },

  // ---------------- Collision Regs: vessel lights at night ----------------
  {
    id: 138, category: "Collision Regs (IRPCS)", image: DIAGRAMS.lights(["R", "R"]),
    q: "At night you see these two all-round lights in a vertical line. The vessel is:",
    options: [
      "At anchor",
      "Not under command (unable to manoeuvre)",
      "A pilot vessel",
      "Engaged in trawling"
    ],
    answer: 1,
    explain: "Two all-round RED lights in a vertical line = 'not under command' — she cannot manoeuvre as required (e.g. steering or engine failure). Keep well clear and do not expect her to give way."
  },
  {
    id: 139, category: "Collision Regs (IRPCS)", image: DIAGRAMS.lights(["G", "W"]),
    q: "You see these two all-round lights (green over white) at night. This vessel is:",
    options: [
      "A pilot vessel",
      "Trawling",
      "At anchor",
      "Aground"
    ],
    answer: 1,
    explain: "'Green over white, trawling at night.' An all-round green light above an all-round white light identifies a vessel engaged in trawling — give her a wide berth as she is towing gear."
  },
  {
    id: 140, category: "Collision Regs (IRPCS)", image: DIAGRAMS.lights(["R", "W"]),
    q: "These two all-round lights (red over white) at night indicate a vessel:",
    options: [
      "Engaged in fishing (other than trawling)",
      "Not under command",
      "Restricted in her ability to manoeuvre",
      "Constrained by her draught"
    ],
    answer: 0,
    explain: "'Red over white, fishing at night.' Red over white marks a vessel fishing other than trawling (e.g. with nets or lines out) — keep clear of her and any gear that may extend from her."
  },
  {
    id: 141, category: "Collision Regs (IRPCS)", image: DIAGRAMS.lights(["W", "R"]),
    q: "A vessel showing an all-round white light above an all-round red light is a:",
    options: [
      "Trawler",
      "Vessel not under command",
      "Pilot vessel on duty",
      "Vessel at anchor"
    ],
    answer: 2,
    explain: "'White over red, pilot ahead.' An all-round white over all-round red identifies a pilot vessel engaged on pilotage duty. Expect her to be manoeuvring near a ship she is boarding or leaving."
  },

  // ---------------- Collision Regs: day shapes ----------------
  {
    id: 142, category: "Collision Regs (IRPCS)", image: DIAGRAMS.dayShape("ball"),
    q: "By day a vessel displays this single black shape forward. She is:",
    options: [
      "Motor-sailing",
      "At anchor",
      "Not under command",
      "Restricted in ability to manoeuvre"
    ],
    answer: 1,
    explain: "A single black ball displayed forward is the day signal for a vessel at anchor. At night she would instead show an all-round white anchor light (two if 50 m or longer)."
  },
  {
    id: 143, category: "Collision Regs (IRPCS)", image: DIAGRAMS.dayShape("cone-down"),
    q: "A sailing yacht displays this black shape (point down). This means she is:",
    options: [
      "At anchor",
      "Also being driven by her engine (motor-sailing)",
      "Fishing",
      "Aground"
    ],
    answer: 1,
    explain: "A black cone, point DOWN, shows that a sailing vessel is also using her engine (motor-sailing). Under the rules she then counts as a power-driven vessel and must give way accordingly."
  },
  {
    id: 144, category: "Collision Regs (IRPCS)", image: DIAGRAMS.dayShape("ball-diamond-ball"),
    q: "By day you see this ball–diamond–ball shape hoisted vertically. The vessel is:",
    options: [
      "At anchor",
      "Restricted in her ability to manoeuvre",
      "Not under command",
      "A sailing vessel"
    ],
    answer: 1,
    explain: "Ball–diamond–ball (in a vertical line) is the day signal for a vessel restricted in her ability to manoeuvre — e.g. dredging, laying cable or servicing a mark. Keep clear and pass on her safe side."
  },

  // ---------------- Lights: characteristics ----------------
  {
    id: 145, category: "Lights", image: DIAGRAMS.rhythm("iso"),
    q: "A light shows this rhythm — equal periods of light and darkness. Its characteristic is:",
    options: [
      "Flashing (Fl)",
      "Isophase (Iso)",
      "Occulting (Oc)",
      "Quick flashing (Q)"
    ],
    answer: 1,
    explain: "Equal durations of light and dark is 'isophase' (Iso). Compare: occulting is light longer than dark, and flashing is dark longer than light."
  },
  {
    id: 146, category: "Lights", image: DIAGRAMS.rhythm("occulting"),
    q: "This light is on for longer than it is off, with brief eclipses. It is:",
    options: [
      "Occulting (Oc)",
      "Flashing (Fl)",
      "Isophase (Iso)",
      "Fixed (F)"
    ],
    answer: 0,
    explain: "When the light period is longer than the dark period (short eclipses), the light is 'occulting' (Oc) — effectively the opposite of a flashing light."
  },
  {
    id: 147, category: "Lights", image: DIAGRAMS.rhythm("flashing"),
    q: "This light shows brief flashes with longer periods of darkness between them. It is:",
    options: [
      "Isophase (Iso)",
      "Occulting (Oc)",
      "Flashing (Fl)",
      "Fixed (F)"
    ],
    answer: 2,
    explain: "Short flashes separated by longer dark periods (dark longer than light) is a 'flashing' (Fl) light. If the flashes came in groups you would see e.g. Fl(2); very rapid flashes would be quick (Q)."
  }
];

// Make available to app.js (module-free, works straight from file:// or Pages)
if (typeof module !== "undefined") { module.exports = QUESTIONS; }
