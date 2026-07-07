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
  }
];

// Make available to app.js (module-free, works straight from file:// or Pages)
if (typeof module !== "undefined") { module.exports = QUESTIONS; }
