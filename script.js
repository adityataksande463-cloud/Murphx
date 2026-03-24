// ==================== COMPLETE TECHNIQUES DATA - 112 METHODS FROM VIGYAN BHAIRAV TANTRA ====================
// Based on Osho's "Book of Secrets" and the ancient Kashmir Shaivism text
// Each technique includes: Meaning, How to Practice, Essence, Step-by-Step, Posture & Mudra, Benefits, and Osho's Insight

const techniquesData = [
    // ==================== SECTION 1: BREATH-CENTERED TECHNIQUES (1-20) ====================
    {
        id: 1,
        name: "The Radiant Breath",
        sanskrit: "Pranavayu Dhyana",
        meaning: "Become aware of the space between two breaths.",
        howTo: "Sit comfortably. Observe your natural breath. Notice the pause between inhalation and exhalation, and between exhalation and inhalation. Rest your awareness in that gap.",
        essence: "The gap between two breaths is the doorway to the timeless. When you enter that pause, the mind stops, and pure consciousness reveals itself.",
        steps: [
            "Find a comfortable seated position with spine erect.",
            "Close your eyes and take a few natural breaths.",
            "Shift your attention to the moment when inhalation ends and before exhalation begins.",
            "Stay in that gap, however brief it may be.",
            "If the mind wanders, gently return to the breath and the space between."
        ],
        postureMudra: "Any comfortable seated posture. Chin Mudra (thumb and index finger touching, hands on knees).",
        benefits: ["Calms mental chatter", "Increases present-moment awareness", "Opens door to thoughtless awareness"],
        category: "Breath",
        oshoInsight: "This gap is the most precious thing. It is not a gap in breathing but a gap in thinking. When you find it, you have found the eternal."
    },
    {
        id: 2,
        name: "The Central Channel",
        sanskrit: "Sushumna Awakening",
        meaning: "Feel the breath flowing through the central channel of the spine.",
        howTo: "As you breathe, imagine the breath energy moving up and down the spine. On inhalation, energy rises from the base to the crown. On exhalation, it descends from crown to base.",
        essence: "When breath moves in the central channel, duality dissolves. Left and right, hot and cold, good and bad—all merge into one unified flow of awareness.",
        steps: [
            "Sit with spine straight and shoulders relaxed.",
            "Visualize a luminous channel running from the base of the spine to the top of the head.",
            "With each inhale, feel energy rising through this channel.",
            "With each exhale, feel energy descending.",
            "Continue for 10-20 minutes, maintaining awareness of the central flow."
        ],
        postureMudra: "Sukhasana or Padmasana. Hands in lap, one over the other, thumbs touching.",
        benefits: ["Balances left and right brain hemispheres", "Awakens kundalini energy", "Creates inner alignment"],
        category: "Breath",
        oshoInsight: "Sushumna is the path of the middle way—neither left nor right, neither this nor that. When breath enters it, you enter the door of the ultimate."
    },
    {
        id: 3,
        name: "Reverse Flow",
        sanskrit: "Viparita Prana",
        meaning: "Reverse the flow of breath and energy to discover inner stillness.",
        howTo: "Inhale slowly, feeling the breath enter not through the nose but through the crown of the head. Exhale through the base of the spine. Let the breath move opposite to its normal direction.",
        essence: "What you call 'in' is actually 'out' in the cosmos. When you reverse the current, you discover that the universe breathes you, not the other way around.",
        steps: [
            "Sit in a quiet place. Close your eyes.",
            "Imagine breath entering through the crown of your head and traveling down to the navel or base of spine.",
            "On exhalation, feel breath leaving through the base of spine or the soles of feet.",
            "Maintain this reverse flow awareness for 15 minutes.",
            "Gradually return to normal breathing and sit in silence."
        ],
        postureMudra: "Any steady posture. Hands in Gyan Mudra (thumb and index finger touching).",
        benefits: ["Shifts identification from body to consciousness", "Creates sense of cosmic unity", "Dissolves ego boundaries"],
        category: "Breath",
        oshoInsight: "The ordinary breath makes you ordinary. The reversed breath makes you extraordinary—not because you become special, but because you become one with the whole."
    },
    {
        id: 4,
        name: "Nostril Awareness",
        sanskrit: "Nasikagra Drishti",
        meaning: "Become aware of breath at the nostrils, neither controlling nor resisting.",
        howTo: "Sit silently. Bring your attention to the tip of the nose. Feel the sensation of air entering and leaving. Do not change the breath—simply observe.",
        essence: "The breath at the nostrils is the bridge between inner and outer. By watching it without interference, the boundary between self and world begins to dissolve.",
        steps: [
            "Close your eyes and relax your face muscles.",
            "Focus attention on the area where breath enters and leaves the nostrils.",
            "Notice the coolness of inhalation and warmth of exhalation.",
            "When thoughts arise, return awareness to the breath sensations.",
            "Continue for 10-20 minutes."
        ],
        postureMudra: "Sukhasana or Vajrasana. Hands resting on knees or in lap.",
        benefits: ["Develops concentration", "Grounds awareness in the present", "Prepares mind for deeper meditation"],
        category: "Breath",
        oshoInsight: "The breath is the only thing that is always with you. It is the thread that connects body and soul. Hold it, and you hold both."
    },
    {
        id: 5,
        name: "Fire and Nectar",
        sanskrit: "Agni-Amrita",
        meaning: "Visualize fire rising with inhalation and nectar descending with exhalation.",
        howTo: "As you breathe in, imagine a purifying fire rising from the base of the spine, burning all impurities. As you breathe out, imagine cool nectar descending, healing and soothing every cell.",
        essence: "Fire burns the past; nectar nourishes the present. In this rhythm, purification and renewal happen effortlessly. The false is consumed, and the true is fed.",
        steps: [
            "Sit with spine erect. Close your eyes.",
            "Inhale deeply. Visualize a golden flame rising through the spine, burning all tension and thoughts.",
            "Exhale slowly. Visualize a stream of cool, luminous nectar flowing down, refreshing body and mind.",
            "Continue this cycle for 15 minutes.",
            "Rest in stillness, feeling the balance of fire and nectar within."
        ],
        postureMudra: "Padmasana or Siddhasana. Hands in lap, palms up.",
        benefits: ["Releases stored emotional tension", "Creates inner purification", "Balances masculine and feminine energies"],
        category: "Breath",
        oshoInsight: "This fire is not ordinary fire—it is the fire of awareness. This nectar is not ordinary water—it is the water of life. Together they create the alchemy of transformation."
    },
    {
        id: 6,
        name: "Hollow Bamboo",
        sanskrit: "Venu Dhyana",
        meaning: "Become like a hollow bamboo, allowing breath to flow through without resistance.",
        howTo: "Imagine your body as a hollow bamboo tube. Let breath flow in and out freely, without any obstruction. You are not doing the breathing—you are simply the space through which breath moves.",
        essence: "The ego is the knot in the bamboo. When you become hollow, there is nothing to resist life. The breath moves through you, and so does existence itself.",
        steps: [
            "Lie down or sit comfortably. Relax completely.",
            "Visualize your body as an empty tube, open at both ends.",
            "Feel breath entering through the top of your head, flowing down through emptiness, and leaving through the base of your spine or soles of feet.",
            "Continue this visualization for 15 minutes.",
            "Gradually return to normal awareness."
        ],
        postureMudra: "Shavasana or any comfortable seated pose. Hands relaxed at sides or in lap.",
        benefits: ["Releases body armoring", "Creates sense of spaciousness", "Dissolves physical tension"],
        category: "Breath",
        oshoInsight: "Become like a flute. The divine can then play through you. When you are hollow, the song of existence can flow without distortion."
    },
    {
        id: 7,
        name: "Breath as Mantra",
        sanskrit: "So'ham Pranava",
        meaning: "Hear the natural sound of breath as 'So' on inhalation and 'Hum' on exhalation.",
        howTo: "Listen to your breath. As you inhale, hear the sound 'So' (Sah). As you exhale, hear the sound 'Hum' (Ham). The mantra 'So'ham' means 'I am That'—the recognition of your identity with universal consciousness.",
        essence: "Every breath is a repetition of the cosmic mantra. You have been saying it since birth, but unconsciously. Now hear it consciously, and you will remember who you truly are.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Listen to the natural sound of inhalation—it sounds like 'So'.",
            "Listen to the natural sound of exhalation—it sounds like 'Hum'.",
            "Allow the mantra to repeat itself without effort.",
            "Continue for 15-20 minutes, letting the sound merge with the breath."
        ],
        postureMudra: "Any posture. Hands in Chin Mudra or resting in lap.",
        benefits: ["Aligns individual with cosmic consciousness", "Natural mantra without effort", "Deepens self-recognition"],
        category: "Breath",
        oshoInsight: "So'ham is not a mantra you repeat—it is the mantra that repeats itself through you. You are that mantra. You are the cosmic pulse of existence."
    },
    {
        id: 8,
        name: "Dissolving in Breath",
        sanskrit: "Prana Laya",
        meaning: "Dissolve your sense of self into the breath, letting the breath be the only reality.",
        howTo: "Focus entirely on the breath. Feel that you are not the breather—you are the breath itself. When the breath flows in, you flow in. When it flows out, you flow out. There is no separate self.",
        essence: "The identification with the breath is a trick: when you become the breath, the ego disappears. What remains is pure being, without boundaries, without form.",
        steps: [
            "Sit in a quiet place. Close your eyes.",
            "Follow the breath deeply, feeling its movement throughout the body.",
            "Gradually drop the sense of 'I am breathing.' Instead, feel 'I am the breath.'",
            "When the breath moves, you move. When it stops, you stop.",
            "Rest in this dissolution for 20 minutes."
        ],
        postureMudra: "Sukhasana or lying down. Hands relaxed.",
        benefits: ["Dissolves ego identification", "Creates non-dual awareness", "Deep sense of unity"],
        category: "Breath",
        oshoInsight: "The one who breathes is the breath itself. There is no 'I' separate from it. When you realize this, all suffering ends."
    },
    {
        id: 9,
        name: "Breath in All Limbs",
        sanskrit: "Sarva Anga Prana",
        meaning: "Feel the breath not only in the lungs but in every limb, every cell of the body.",
        howTo: "As you breathe, feel that the breath energy is entering and leaving through every pore of your skin, every fingertip, every toe. The whole body breathes, not just the lungs.",
        essence: "You are not a body that breathes—you are a breathing that has a body. When you realize this, the boundaries of the body dissolve into the infinity of the breath.",
        steps: [
            "Stand or sit with eyes closed. Relax completely.",
            "Take a few deep breaths, feeling air in the lungs.",
            "Gradually expand awareness to feel breath energy in your arms, legs, fingertips, and toes.",
            "Feel the whole body as a single field of breathing energy.",
            "Maintain this awareness for 15 minutes."
        ],
        postureMudra: "Tadasana (Mountain Pose) or Sukhasana. Arms relaxed at sides.",
        benefits: ["Expands body awareness", "Increases vital energy flow", "Creates holistic sense of self"],
        category: "Breath",
        oshoInsight: "Your lungs are not the only organs that breathe. Every cell breathes. When you become aware of this, you become aware of life itself."
    },
    {
        id: 10,
        name: "Serpent's Path",
        sanskrit: "Bhujangini Prana",
        meaning: "Guide the breath energy up the spine like a serpent rising toward awakening.",
        howTo: "With a slow, deep inhalation, feel the breath energy moving from the base of the spine upward, vertebra by vertebra. At the top, pause briefly. Exhale slowly, letting energy settle.",
        essence: "The serpent is kundalini—the sleeping energy at the base of the spine. When awakened by awareness, it rises, piercing the chakras, opening the doors of consciousness.",
        steps: [
            "Sit in Siddhasana or Padmasana. Spine straight.",
            "Begin with a slow, deep inhalation. Visualize a serpent of light rising through the spine.",
            "Hold briefly at the crown with awareness at the third eye.",
            "Exhale slowly, visualizing the serpent returning to rest.",
            "Repeat 12-15 times, then sit in stillness."
        ],
        postureMudra: "Siddhasana or Padmasana. Khechari Mudra (tongue touching roof of mouth).",
        benefits: ["Awakens kundalini energy", "Activates chakras", "Deepens meditative states"],
        category: "Breath",
        oshoInsight: "This serpent is not a myth—it is the potential energy in every human being. When awareness moves, it moves. When it rises, you rise."
    },
    {
        id: 11,
        name: "Moon and Sun",
        sanskrit: "Chandra Surya",
        meaning: "Become aware of the lunar and solar currents in the breath.",
        howTo: "Notice which nostril is dominant. The left nostril is the moon (cooling, receptive); the right is the sun (warming, active). Observe the flow without judgment, watching how it shifts.",
        essence: "The breath is the rhythm of the cosmos. Moon and sun, night and day, receiving and acting—all within you. When you see this, you become the witness of all duality.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Become aware of your breath at the nostrils.",
            "Notice which nostril has the stronger flow—left or right.",
            "Observe without trying to change it. Watch the flow shift naturally.",
            "Continue for 15 minutes, witnessing the rhythm."
        ],
        postureMudra: "Any comfortable posture. Hands in Gyan Mudra.",
        benefits: ["Balances sympathetic and parasympathetic systems", "Creates inner harmony", "Develops witnessing awareness"],
        category: "Breath",
        oshoInsight: "The alternation of the breath is the alternation of life itself. When you can witness it, you are no longer caught in the alternation—you become the unchanging."
    },
    {
        id: 12,
        name: "Breath as Bridge",
        sanskrit: "Setu Pranayama",
        meaning: "Use breath as a bridge between the conscious and unconscious, the inner and outer.",
        howTo: "With each inhalation, draw energy from the outer world into your inner being. With each exhalation, send your inner peace out into the world. Feel the breath connecting you to everything.",
        essence: "You are not separate from existence. Breath is the constant exchange—you give to the world, the world gives to you. In this exchange, the illusion of separation dissolves.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Inhale deeply, feeling that you are receiving life from the universe.",
            "Exhale completely, feeling that you are offering your peace back to the universe.",
            "Feel the continuous exchange, the bridge of breath.",
            "Continue for 15-20 minutes."
        ],
        postureMudra: "Any posture. Hands open in lap, palms up.",
        benefits: ["Dissolves sense of separation", "Creates ecological consciousness", "Deepens connection to life"],
        category: "Breath",
        oshoInsight: "You are not a separate island—you are a wave in the ocean of existence. Breath is the movement of the wave. Recognize it, and you recognize yourself."
    },
    {
        id: 13,
        name: "Witnessing the Breath",
        sanskrit: "Anapanasati",
        meaning: "Simply watch the breath as a silent observer, neither controlling nor judging.",
        howTo: "Sit with eyes closed. Watch the breath as if it belongs to someone else. You are not the breather; you are the one who watches the breather. Remain aloof, separate, witnessing.",
        essence: "When you witness the breath, you discover that you are not the breath. When you witness the thoughts, you discover you are not the thoughts. Who is the witness? That is who you are.",
        steps: [
            "Find a comfortable seat. Close your eyes.",
            "Allow the breath to flow naturally—do not control it.",
            "Watch it as a spectator watches a river flowing.",
            "If you lose awareness, gently return to watching.",
            "Continue for 20 minutes or more."
        ],
        postureMudra: "Any posture. Hands in lap or on knees.",
        benefits: ["Develops non-attachment", "Cultivates witness consciousness", "Foundation for all meditation"],
        category: "Breath",
        oshoInsight: "The watcher on the hill is the real you. The breath, the body, the thoughts—they are the valley. Watch from the hill, and you are free."
    },
    {
        id: 14,
        name: "Breath Without Breaths",
        sanskrit: "Kevala Kumbhaka",
        meaning: "Experience the spontaneous suspension of breath that comes in deep meditation.",
        howTo: "Meditate on the breath as before. When the mind becomes still, you will notice that the breath becomes very subtle, almost stopping. Do not force this—allow it to happen naturally. Rest in that suspension.",
        essence: "When the mind stops, the breath stops. When the breath stops, the mind stops. In that complete stillness, the truth reveals itself—not as a thought, but as direct experience.",
        steps: [
            "Practice breath awareness until the mind is calm.",
            "Watch as the breath becomes more subtle, more refined.",
            "Notice the moments of suspension between breaths.",
            "Allow these pauses to become longer, more profound.",
            "Rest in the breathless state without fear or effort."
        ],
        postureMudra: "Padmasana or Siddhasana. Yoni Mudra (hands cupped, thumbs touching).",
        benefits: ["Leads to thoughtless awareness", "Experience of samadhi", "Deep rest for nervous system"],
        category: "Breath",
        oshoInsight: "Breath is the bridge between body and mind. When the bridge is no longer needed, it disappears. You have arrived home."
    },
    {
        id: 15,
        name: "Breath of Fire",
        sanskrit: "Bhastrika",
        meaning: "Use rapid, forceful breaths to burn through mental resistance.",
        howTo: "Take 20-30 rapid breaths, forcefully exhaling and allowing inhalation to happen naturally. After this, hold the breath out for a moment, then breathe deeply and rest in stillness.",
        essence: "Fire purifies. The rapid breath is the fire of life, burning through layers of tension, stored emotion, and mental habits. After the fire comes the cool silence of meditation.",
        steps: [
            "Sit with spine straight. Relax shoulders.",
            "Take 20-30 rapid, strong exhalations, letting inhalation occur passively.",
            "After the final exhalation, hold the breath out for a few seconds.",
            "Inhale deeply and hold briefly.",
            "Rest in natural breath, observing the stillness that follows."
        ],
        postureMudra: "Vajrasana or Padmasana. Hands on knees.",
        benefits: ["Releases deep-seated tension", "Energizes the entire system", "Clears mental fog"],
        category: "Breath",
        oshoInsight: "Sometimes you need fire before you can receive light. Bhastrika is that fire. It cleans the room so that silence can enter."
    },
    {
        id: 16,
        name: "Humming Bee",
        sanskrit: "Bhramari",
        meaning: "Create a humming sound on exhalation, feeling the vibration in the head and heart.",
        howTo: "Inhale deeply. On exhalation, make a soft humming sound like a bee. Feel the vibration resonating in the skull, the throat, the heart center. Continue for 10-12 breaths.",
        essence: "Sound is the bridge between silence and expression. The humming bee sound is not music—it is the vibration of existence itself. When you hum, you vibrate with the cosmos.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Inhale deeply through the nose.",
            "Exhale slowly, making a soft 'M' sound like a bee humming.",
            "Feel the vibration in the head, throat, and chest.",
            "Repeat 10-15 times, then sit in silence."
        ],
        postureMudra: "Any posture. Shanmukhi Mudra (closing ears, eyes, nose with fingers) optional.",
        benefits: ["Calms the nervous system", "Reduces mental noise", "Opens the heart center"],
        category: "Sound",
        oshoInsight: "The bee is small, but its hum can fill a garden. Your hum can fill the universe. In that vibration, the boundaries of the self dissolve."
    },
    {
        id: 17,
        name: "The Soundless Sound",
        sanskrit: "Anahata Nada",
        meaning: "Listen to the subtle, unstruck sound that is always present within.",
        howTo: "Close your ears with your thumbs. Turn your attention inward. Listen for the faint, continuous sound that is not produced by any external source. It is always there—you just need to hear it.",
        essence: "This is the sound of silence itself—the vibration of pure consciousness. The Hindus call it 'Anahata'—the unstruck sound. It is not created; it simply is. Merging with it, you merge with the source.",
        steps: [
            "Sit in a quiet place. Close your eyes.",
            "Gently plug your ears with your thumbs or fingers.",
            "Turn your attention inward. Listen for a subtle, continuous sound.",
            "At first it may be barely audible. Be patient.",
            "As you follow it, the sound becomes clearer, and stillness deepens."
        ],
        postureMudra: "Sukhasana or Vajrasana. Shanmukhi Mudra (blocking external senses).",
        benefits: ["Develops inner listening", "Deep concentration", "Path to samadhi"],
        category: "Sound",
        oshoInsight: "The world is full of noise. The inner sound is always there, waiting. When you hear it, you hear the heartbeat of the universe."
    },
    {
        id: 18,
        name: "Chanting Om",
        sanskrit: "Omkara Japa",
        meaning: "Chant Om with full awareness, feeling its resonance in every part of being.",
        howTo: "Take a deep breath. On exhalation, chant 'Om' slowly, feeling the sound start at the navel, rise through the chest, vibrate in the throat, and resonate in the head. Feel the silence that follows.",
        essence: "Om is not a word—it is the sound of creation, the vibration from which all existence emerges. When you chant Om, you are not repeating a mantra; you are becoming one with the cosmic vibration.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Inhale deeply, feeling the breath fill your abdomen and chest.",
            "Exhale slowly, chanting 'Aaa...' as the sound moves from the navel to the heart.",
            "Transition to 'Ooo...' as it moves through the throat.",
            "Finish with 'Mmm...' as it resonates in the head and fills the entire being.",
            "Rest in the silence that follows the sound."
        ],
        postureMudra: "Padmasana or Sukhasana. Gyan Mudra.",
        benefits: ["Centers awareness", "Aligns with cosmic vibration", "Deepens meditation"],
        category: "Sound",
        oshoInsight: "Om is the mother of all mantras. Chant it, and you chant the whole existence. Feel it, and you feel the source."
    },
    {
        id: 19,
        name: "Fading Sound",
        sanskrit: "Dhvani Kshaya",
        meaning: "Intone a sound audibly, then let it become quieter until it is only in the mind, then let even that fade into silence.",
        howTo: "Begin by chanting a sound (Om, Aum, or any sacred syllable) out loud. Gradually make it softer, until it becomes a whisper, then a mental repetition, then let even that dissolve into pure silence.",
        essence: "Sound is the outer form of vibration. Silence is the inner reality. By tracing sound back to its source, you trace consciousness back to its origin. Where does sound go when it stops? That is where you are going.",
        steps: [
            "Sit in a quiet place. Close your eyes.",
            "Chant a sound out loud for several minutes.",
            "Gradually reduce volume until it is a whisper.",
            "Continue the sound silently in the mind.",
            "Let even the mental sound fade, resting in pure silence.",
            "Remain in that silence for as long as possible."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Traces consciousness to its source", "Experiences the silence beneath sound", "Deep inner peace"],
        category: "Sound",
        oshoInsight: "Sound is born in silence and returns to silence. Follow it home, and you find yourself home as well."
    },
    {
        id: 20,
        name: "Sacred Utterance",
        sanskrit: "Mantra Japa",
        meaning: "Repeat a mantra without effort, letting it become automatic, then falling away into silence.",
        howTo: "Choose a mantra (Om, Ram, or any sacred word). Repeat it mentally, effortlessly. Do not force the repetition. Let it become natural, like breathing. Eventually, it will dissolve into silence.",
        essence: "A mantra is a tool to occupy the mind so that the mind can be transcended. When the mantra becomes automatic, the mind falls away, and only awareness remains.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Begin repeating your chosen mantra mentally.",
            "Let the repetition become effortless, rhythmic.",
            "When distractions arise, return to the mantra gently.",
            "Notice when the mantra begins to fade on its own.",
            "Rest in the silence that appears when the mantra stops."
        ],
        postureMudra: "Any posture. Japa Mala (prayer beads) optional.",
        benefits: ["Calms the thinking mind", "Creates mental focus", "Opens to thoughtless awareness"],
        category: "Sound",
        oshoInsight: "The mantra is a boat to cross the river. Once you reach the other shore, you don't carry the boat on your head. Use it, then leave it."
    },

    // ==================== SECTION 2: SENSORY & VISUALIZATION TECHNIQUES (21-40) ====================
    {
        id: 21,
        name: "Candle Flame",
        sanskrit: "Trataka",
        meaning: "Gaze at a flame until the form dissolves, then close your eyes and see the inner light.",
        howTo: "Place a candle at eye level, about arm's length away. Gaze at the flame without blinking. When tears come, close your eyes and watch the afterimage. See it in the space between the eyebrows.",
        essence: "The flame is the outer light. The inner light is the same. When the outer flame becomes the inner flame, the duality of seer and seen dissolves, and only light remains.",
        steps: [
            "Set up a candle in a dark, quiet room.",
            "Sit comfortably with spine straight. Gaze at the flame.",
            "Keep eyes open, blinking only when necessary.",
            "After 5-10 minutes, close your eyes and observe the afterimage.",
            "Watch it between the eyebrows until it fades.",
            "Repeat the cycle 2-3 times."
        ],
        postureMudra: "Sukhasana or sitting in a chair. Hands in lap.",
        benefits: ["Strengthens concentration", "Activates third eye", "Calms the mind"],
        category: "Visualization",
        oshoInsight: "The flame is the symbol of life. Watch it, and you watch your own consciousness. When the outer flame becomes inner light, you have found your true self."
    },
    {
        id: 22,
        name: "Inner Light",
        sanskrit: "Jyoti Dhyana",
        meaning: "Visualize a point of light in the heart, the throat, or between the eyebrows, and let it expand.",
        howTo: "Close your eyes. See a small flame or point of light at a chosen center. Watch it. Let it grow, filling the center, then the whole body, then the entire universe. You are that light.",
        essence: "Light is the nature of consciousness. When you visualize light, you are not imagining something foreign—you are remembering your own nature. The light is already there; you only need to see it.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Visualize a small, bright flame in the heart center.",
            "Watch it without strain, letting it become clearer.",
            "Allow it to expand, filling the chest, the whole body.",
            "Let it expand further, filling the room, the universe.",
            "Rest as that light for as long as possible."
        ],
        postureMudra: "Any posture. Gyan Mudra or hands in lap.",
        benefits: ["Expands consciousness", "Creates inner radiance", "Dissolves darkness of ignorance"],
        category: "Visualization",
        oshoInsight: "You are not the body—you are the light that lives in the body. See it, and you see yourself."
    },
    {
        id: 23,
        name: "Blue Sky",
        sanskrit: "Nabhasa Dhyana",
        meaning: "Visualize the clear blue sky, empty and infinite, as the nature of your own mind.",
        howTo: "Close your eyes. See the sky—limitless, clear, blue. Let the mind become like that sky: empty of clouds, spacious, untouched. When thoughts arise, see them as clouds passing through the vast sky.",
        essence: "The sky does not cling to clouds, and the mind need not cling to thoughts. When you know yourself as the sky, you are free. The clouds come and go; you remain unchanged.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Imagine a clear, blue sky, infinite in all directions.",
            "Feel your mind expanding like that sky.",
            "When thoughts arise, see them as clouds appearing and dissolving.",
            "Rest as the sky itself, not the clouds.",
            "Continue for 15-20 minutes."
        ],
        postureMudra: "Any posture. Hands open, palms up.",
        benefits: ["Cultivates spacious awareness", "Non-attachment to thoughts", "Experience of pure consciousness"],
        category: "Visualization",
        oshoInsight: "Your mind is the sky—thoughts are clouds. Don't fight the clouds, don't cling to them. Simply be the sky. In that vastness, you are free."
    },
    {
        id: 24,
        name: "Empty Vessel",
        sanskrit: "Shunya Patra",
        meaning: "Visualize yourself as an empty vessel, waiting to be filled with the divine.",
        howTo: "See your body as a hollow container—empty, open, receptive. Feel that you are nothing but space. Let existence fill you. You do not need to do anything; simply be empty and open.",
        essence: "Emptiness is not absence—it is the highest presence. When you are empty, you are ready to receive. The ego is the fullness of illusion; emptiness is the openness to truth.",
        steps: [
            "Sit with eyes closed. Relax deeply.",
            "Visualize your body as a hollow vessel—empty inside.",
            "Feel the space within you, the spaciousness.",
            "Open yourself to receive. Let existence pour in.",
            "Remain as the empty vessel, filled by the infinite."
        ],
        postureMudra: "Shavasana or any relaxed posture. Hands open at sides or in lap.",
        benefits: ["Cultivates receptivity", "Dissolves ego", "Openness to grace"],
        category: "Visualization",
        oshoInsight: "The empty vessel is the most useful. When you are full of yourself, nothing can enter. When you are empty, the whole existence rushes in."
    },
    {
        id: 25,
        name: "Cosmic Fire",
        sanskrit: "Mahagni Dhyana",
        meaning: "See the entire universe as a mass of flames, consuming all form and leaving only pure awareness.",
        howTo: "Visualize a great fire that burns everything—the body, the world, all thoughts. Nothing remains but the witness. You are not the burning; you are the one who watches the fire.",
        essence: "Everything that can be burned is not you. The body burns, the world burns, thoughts burn. What remains? The witness. That is your true nature—eternal, unchanging, untouched by the fire.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Visualize a great fire consuming your body, dissolving it into light.",
            "Let the fire spread, consuming the room, the city, the world.",
            "Feel that you are the witness of this cosmic fire.",
            "Rest in the awareness that remains when everything else is gone."
        ],
        postureMudra: "Any posture. Gyan Mudra.",
        benefits: ["Detachment from body and world", "Experience of pure witness", "Liberation from identification"],
        category: "Visualization",
        oshoInsight: "The fire is a great teacher. It shows you what is real and what is not. What burns is not you. What remains is you."
    },
    {
        id: 26,
        name: "Cremation Ground",
        sanskrit: "Shmashana Dhyana",
        meaning: "Meditate on the body as a corpse, burning or decaying, to realize its impermanence.",
        howTo: "Visualize your own body lying on a funeral pyre. See it burning, turning to ash. Feel that you are not the body—you are the one watching the body burn. Let this awareness free you from attachment.",
        essence: "Death is the great teacher. When you see that the body is temporary, you stop clinging to it. The one who clings dies with the body. The one who knows they are not the body is free.",
        steps: [
            "Sit in a quiet place. Close your eyes.",
            "Visualize your body as it would be on a funeral pyre.",
            "See it burning slowly, turning to ash.",
            "Feel that you are not the body—you are watching it.",
            "Let the experience deepen your awareness of impermanence.",
            "After the visualization, sit in the silence that follows."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Detachment from body", "Acceptance of mortality", "Freedom from fear of death"],
        category: "Visualization",
        oshoInsight: "Death is not the end of you—it is the end of what you are not. Meditate on death, and you discover what never dies."
    },
    {
        id: 27,
        name: "Burning World",
        sanskrit: "Jagat Agni",
        meaning: "See the whole make-believe world burning to ashes, and become the being above all.",
        howTo: "Extend the cremation ground meditation. See not only your body burning, but the entire world—all forms, all names, all distinctions—dissolving into fire. What remains? Pure consciousness. Be that.",
        essence: "The world is a dream. When the dreamer awakens, the dream dissolves. See it all as fire—not destructive fire, but the fire of awareness that consumes illusion. What is left is reality.",
        steps: [
            "Begin with body burning visualization.",
            "Expand awareness: see the room, the building, the city burning.",
            "See the whole earth, the solar system, the galaxy consumed.",
            "Let all forms dissolve into light, into fire, into nothing.",
            "Remain as the vast, empty awareness that witnesses all."
        ],
        postureMudra: "Padmasana or Sukhasana. Gyan Mudra.",
        benefits: ["Dissolves world attachment", "Non-dual awareness", "Experience of absolute"],
        category: "Visualization",
        oshoInsight: "If you can see the world as fire, you are already above it. The world is a show; don't get lost in it. Watch it burn, and you are free."
    },
    {
        id: 28,
        name: "Point in Space",
        sanskrit: "Bindu Dhyana",
        meaning: "Concentrate on a single point in space, letting the mind converge and dissolve.",
        howTo: "Fix your attention on a point—a dot on the wall, the tip of your nose, or an imagined point in the space before you. Let everything else fade. Only the point remains. Then let even the point dissolve.",
        essence: "The mind cannot hold two things at once. Give it one point to hold, and it becomes concentrated. When concentration becomes intense, even the point disappears, and only consciousness remains.",
        steps: [
            "Choose a point to focus on (a dot, a candle, or the space between eyebrows).",
            "Fix your gaze or attention on that point without wavering.",
            "Let all other perceptions fade into the background.",
            "When the point becomes the only reality, let it dissolve.",
            "Rest in the vastness that remains."
        ],
        postureMudra: "Any posture. Nasikagra Mudra (gazing at nose tip) or Shambhavi Mudra (gazing at third eye).",
        benefits: ["Develops one-pointed concentration", "Leads to samadhi", "Stillness of mind"],
        category: "Visualization",
        oshoInsight: "One point, one focus, one awareness. When the many become one, the one becomes none. That none is everything."
    },
    {
        id: 29,
        name: "The Void",
        sanskrit: "Shunyata",
        meaning: "Enter the space that is supportless, eternal, and still.",
        howTo: "Let go of all supports. No mantra, no visualization, no breath control. Simply fall into the emptiness that is always present. Do not resist the fear of nothingness. Let it consume you.",
        essence: "The mind fears emptiness because it knows it will disappear there. But you are not the mind. When you enter the void, the mind disappears, and you—the real you—are revealed. The void is your home.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Let go of all techniques, all supports, all effort.",
            "Allow yourself to fall into the emptiness within.",
            "Do not resist the fear or the nothingness.",
            "Be the space itself—supportless, eternal, still.",
            "Rest in this vastness for as long as possible."
        ],
        postureMudra: "Any posture. Hands open and relaxed.",
        benefits: ["Direct experience of pure consciousness", "Freedom from all supports", "Ultimate meditation"],
        category: "Emptiness",
        oshoInsight: "The void is not empty—it is full of the infinite. But it appears empty to the mind because the mind cannot grasp it. Let the mind go, and you will see."
    },
    {
        id: 30,
        name: "See Your Inner Being",
        sanskrit: "Antaratma Darshana",
        meaning: "With eyes closed, see your inner being in detail—see your true nature.",
        howTo: "Close your eyes. Look inward. What do you see? Not the body, not thoughts—look deeper. See the light within, the presence within. See yourself as pure awareness, free of form.",
        essence: "You have spent a lifetime looking outward. Now look inward. What you find there is not a thing—it is the seer itself. When you see the seer, you have seen the truth.",
        steps: [
            "Close your eyes. Turn your gaze inward.",
            "Look past the darkness, past the thoughts, past the body.",
            "Search for the one who is looking.",
            "When you find that presence, rest in it.",
            "See that this presence is your true nature."
        ],
        postureMudra: "Any posture. Hands in lap or on knees.",
        benefits: ["Self-realization", "Direct knowledge of self", "End of seeking"],
        category: "Self-Inquiry",
        oshoInsight: "The seeker is the sought. The one looking is what is to be found. When you see that, the search is over."
    },
    {
        id: 31,
        name: "Kundalini Awakening",
        sanskrit: "Kundalini Bodhana",
        meaning: "Feel the energy at the base of the spine rising like a serpent through the chakras.",
        howTo: "Focus on the base of the spine. Feel a subtle warmth or vibration. With awareness, guide this energy upward through the spine, pausing at each chakra. Let it rise to the crown and beyond.",
        essence: "Kundalini is the sleeping potential in every human being. When awakened by awareness, it rises, purifying and opening each center. At the crown, it unites with pure consciousness, and you are transformed.",
        steps: [
            "Sit in Siddhasana or Padmasana. Spine straight.",
            "Focus awareness at the base of the spine (muladhara).",
            "Feel a subtle energy, like a coiled serpent, begin to stir.",
            "Guide it upward with awareness, not force.",
            "Let it rise through sacral, solar plexus, heart, throat, third eye.",
            "At the crown, let it merge with infinite consciousness."
        ],
        postureMudra: "Siddhasana or Padmasana. Khechari Mudra.",
        benefits: ["Awakens spiritual energy", "Activates chakras", "Transforms consciousness"],
        category: "Energy",
        oshoInsight: "The serpent sleeps because you sleep. When you awaken, it awakens. When it rises, you rise. You are the serpent and the one it rises to meet."
    },
    {
        id: 32,
        name: "Chakra Meditation",
        sanskrit: "Chakra Bhedana",
        meaning: "Concentrate on each chakra in turn, feeling its qualities and dissolving blockages.",
        howTo: "Begin at the base chakra. Feel its qualities: stability, security. Move upward through each center, spending several minutes at each. At the crown, feel the connection to all that is.",
        essence: "The chakras are gateways between body and spirit. When they are open, energy flows freely. When they are blocked, consciousness is limited. By focusing on them, you open the doors of perception.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Focus on the base of spine: red, stability.",
            "Move to sacral: orange, creativity.",
            "Move to solar plexus: yellow, power.",
            "Move to heart: green, love.",
            "Move to throat: blue, expression.",
            "Move to third eye: indigo, intuition.",
            "Move to crown: violet or white, transcendence.",
            "Rest in the open, flowing energy."
        ],
        postureMudra: "Sukhasana or Padmasana. Hands in Gyan Mudra.",
        benefits: ["Balances energy centers", "Opens spiritual perception", "Heals emotional blockages"],
        category: "Energy",
        oshoInsight: "The chakras are the flowers on the stem of the spine. When the energy flows, they bloom. When they bloom, you become a garden of divine consciousness."
    },
    {
        id: 33,
        name: "Three Centers",
        sanskrit: "Tri Sthana",
        meaning: "Move awareness through three centers: navel, heart, and throat, feeling the unique quality of each.",
        howTo: "Begin at the navel, feeling its vital energy. Move to the heart, feeling love and compassion. Move to the throat, feeling truth and expression. Cycle through them, resting in each.",
        essence: "The lower center is vitality, the middle is love, the upper is truth. When all three are awakened, you become whole—neither stuck in instinct, nor lost in emotion, nor trapped in thought.",
        steps: [
            "Sit with eyes closed. Relax.",
            "Focus on the navel. Feel warmth, vitality, life force.",
            "Move to the heart. Feel love, compassion, openness.",
            "Move to the throat. Feel truth, expression, clarity.",
            "Cycle through these three centers for 15 minutes.",
            "Finally, rest in the space between and beyond them."
        ],
        postureMudra: "Any posture. Hands at the corresponding centers as you focus.",
        benefits: ["Balances body, heart, and mind", "Integrates instinct, emotion, and intellect", "Holistic awareness"],
        category: "Energy",
        oshoInsight: "The navel is your connection to the earth, the heart to others, the throat to truth. When all are aligned, you become a channel for the divine."
    },
    {
        id: 34,
        name: "Serpent and Deer",
        sanskrit: "Bhujanga Mriga",
        meaning: "Visualize a serpent and a deer—the serpent represents energy, the deer represents the mind chasing it.",
        howTo: "See a serpent coiled at the base. See a deer running, seeking, searching. Let the deer stop. Let it become still. As the deer becomes still, the serpent rises.",
        essence: "The mind is always chasing, seeking, running. When it stops, energy rises. The deer is the mind; the serpent is life force. When the mind is still, life force awakens spontaneously.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Visualize a deer running restlessly.",
            "See it gradually slow, stop, and stand still.",
            "As it stops, see a serpent at the base begin to stir.",
            "Watch the serpent rise as the deer remains still.",
            "Rest in the stillness that allows energy to flow."
        ],
        postureMudra: "Any posture. Hands in Shambhavi Mudra.",
        benefits: ["Calms the mind", "Awakens energy", "Harmony of mind and prana"],
        category: "Visualization",
        oshoInsight: "The deer runs because it thinks something is missing. When it stops, it realizes it has always been home. The serpent rises in welcome."
    },
    {
        id: 35,
        name: "Pervade the Armpits",
        sanskrit: "Kaksha Vyapaka",
        meaning: "In an easy position, gradually pervade the area between the armpits with great peace.",
        howTo: "Sit or lie in a comfortable position. Bring your awareness to the area between the armpits—the chest and heart region. Feel that space filling with peace. Let it expand until peace pervades your whole being.",
        essence: "The heart is the seat of peace. When you relax the area around it, peace naturally arises. Not a peace you create, but the peace that is already there, waiting to be felt.",
        steps: [
            "Find an easy, relaxed position.",
            "Bring attention to the area between the armpits: the chest, the heart.",
            "Feel that area softening, opening, relaxing.",
            "Sense peace beginning to fill that space.",
            "Let the peace expand to fill the whole chest, the whole body.",
            "Rest in this peace for 15-20 minutes."
        ],
        postureMudra: "Any easy posture. Hands relaxed, possibly in lap.",
        benefits: ["Activates heart center", "Deep peace", "Emotional balance"],
        category: "Heart",
        oshoInsight: "Peace is not something to achieve—it is something to allow. When you relax the heart, peace flows in. It was always there, waiting for you to stop fighting."
    },
    {
        id: 36,
        name: "Heart Lotus",
        sanskrit: "Hridaya Kamala",
        meaning: "See a lotus in the heart, closed at first, then opening petal by petal with each breath.",
        howTo: "Visualize a lotus bud in the center of your chest. With each inhalation, see it open one petal. With each exhalation, feel love radiating from it. Continue until the lotus is fully open.",
        essence: "The heart is a lotus that opens when touched by awareness. Each petal is a quality: love, compassion, joy, peace, understanding. When fully open, you are a flower of divine consciousness.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Visualize a lotus bud in your heart center.",
            "With each breath, see one petal slowly open.",
            "Feel the qualities of each petal as it opens.",
            "When the lotus is fully open, feel love radiating in all directions.",
            "Rest as the open lotus for as long as possible."
        ],
        postureMudra: "Any posture. Anjali Mudra (hands at heart) or hands in lap.",
        benefits: ["Opens the heart", "Cultivates compassion", "Heals emotional wounds"],
        category: "Heart",
        oshoInsight: "Your heart is a lotus that has forgotten how to open. Awareness is the sun that calls it to bloom. Let the sun shine, and the flower opens of its own accord."
    },
    {
        id: 37,
        name: "Fifth Space",
        sanskrit: "Akasha Dharana",
        meaning: "Meditate on the space of the heart, which is vast and infinite.",
        howTo: "Focus on the heart center. Feel it not as a physical organ, but as a vast, open space—limitless, without walls. Sit in that space as if in a great sky.",
        essence: "The heart is not small—it is as vast as the universe. When you enter it, you enter the infinite. All boundaries dissolve. You are not a body with a heart; you are a heart that contains the cosmos.",
        steps: [
            "Close your eyes. Relax.",
            "Bring awareness to the chest, the heart region.",
            "Feel it expanding, opening, becoming vast.",
            "Let go of the idea of a physical heart. See it as infinite space.",
            "Sit in this inner space, feeling its boundlessness.",
            "Rest here for 15-20 minutes."
        ],
        postureMudra: "Any posture. Hridaya Mudra (ring finger and thumb touching, others extended).",
        benefits: ["Expands consciousness", "Experience of the infinite within", "Deep heart-centered awareness"],
        category: "Heart",
        oshoInsight: "The heart is not a pump—it is a temple. Enter it, and you enter the shrine of the infinite. There, you are not a visitor; you are the deity."
    },
    {
        id: 38,
        name: "Touching the Eyeballs",
        sanskrit: "Netra Sparsha",
        meaning: "Touch the eyeballs lightly like a feather; lightness between them opens into the heart and permeates the cosmos.",
        howTo: "Close your eyes. Place your fingertips lightly on your eyelids. Feel the gentle pressure. Notice the lightness between the eyes—the third eye. Let that lightness open into the heart and expand to infinity.",
        essence: "The eyes are the windows of the soul. When you touch them with reverence, the inner eye opens. From the third eye, a path leads to the heart, and from the heart, to the cosmos.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Place fingertips gently on closed eyelids.",
            "Feel the subtle pressure, the darkness, the inner space.",
            "Notice the area between the eyebrows, the third eye.",
            "Feel a lightness there, opening, expanding.",
            "Let it flow down to the heart, then out to the whole universe."
        ],
        postureMudra: "Sukhasana. Chin Mudra or hands gently on eyelids.",
        benefits: ["Activates third eye", "Connects third eye to heart", "Expands to cosmic awareness"],
        category: "Sensory",
        oshoInsight: "The third eye is the door, the heart is the temple. Touch the door with reverence, and it opens. Enter the temple, and you find the cosmos."
    },
    {
        id: 39,
        name: "Sound and Ear",
        sanskrit: "Shrotra Dhyana",
        meaning: "Meditate on the space between sound and ear, and the space after sound ends.",
        howTo: "Listen to a sound—a bell, a bird, or a mantra. Notice the space between the sound and your ear. When the sound ends, feel the silence that follows. Rest in that silence.",
        essence: "Sound appears in silence and disappears into silence. By following sound back to its source, you follow consciousness back to its source. The space before sound, after sound—that is your true home.",
        steps: [
            "Create a sound (ring a bell, chant, or use a recording).",
            "Listen to the sound carefully.",
            "Notice the space between the sound and your ear.",
            "When the sound ends, rest in the silence that follows.",
            "Repeat, each time resting longer in the silence.",
            "Eventually, let go of the sound and rest in silence alone."
        ],
        postureMudra: "Any posture. Shanmukhi Mudra (closing ears) optional.",
        benefits: ["Traces consciousness to source", "Deep silence", "Inner listening"],
        category: "Sensory",
        oshoInsight: "Sound is a wave on the ocean of silence. Follow it to the ocean, and you find yourself. The wave returns; the ocean remains."
    },
    {
        id: 40,
        name: "Taste and Tongue",
        sanskrit: "Rasana Dhyana",
        meaning: "Become aware of the space between taste and tongue, and the taste of no taste.",
        howTo: "Take a sip of water or a small piece of food. Notice the taste as it touches the tongue. Notice the moment when taste arises and when it fades. What is there between tastes? That is awareness itself.",
        essence: "The tongue tastes sweetness, but what tastes the sweetness? The awareness behind the tongue. When you rest in that awareness, you taste the divine—not as a flavor, but as presence.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Place a raisin, a drop of honey, or water on your tongue.",
            "Notice the taste arising, changing, fading.",
            "Feel the awareness that perceives the taste.",
            "When taste fades, rest in the awareness that remains.",
            "Repeat several times."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Distinguishes awareness from sensation", "Cultivates inner presence", "Detachment from sensory pleasure"],
        category: "Sensory",
        oshoInsight: "The tongue tastes the sweet, but you are the taster. The sweet comes and goes; the taster remains. Find the taster, and you have found the eternal."
    },

    // ==================== SECTION 3: CONTEMPLATION & SELF-INQUIRY TECHNIQUES (41-60) ====================
    {
        id: 41,
        name: "Who Am I?",
        sanskrit: "Koham",
        meaning: "Ask yourself repeatedly, 'Who am I?' Not seeking an answer, but letting the question dissolve the ego.",
        howTo: "Sit quietly. Ask, 'Who am I?' Do not answer with words. Let the question penetrate deeply. When thoughts arise, ask, 'To whom do these thoughts come?' The answer is 'to me.' Then ask, 'Who am I?'",
        essence: "The question 'Who am I?' is a sword that cuts through all identifications. You are not the body, not the mind, not the thoughts. When all false identities are stripped away, what remains is the self.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Ask yourself, 'Who am I?'",
            "When a thought arises, ask, 'To whom does this thought come?'",
            "The answer is 'to me.' Then ask again, 'Who am I?'",
            "Let this inquiry continue, sinking deeper.",
            "Eventually, the question itself dissolves, and only pure awareness remains."
        ],
        postureMudra: "Any posture. Hands in Chin Mudra.",
        benefits: ["Self-realization", "End of seeking", "Direct knowledge of self"],
        category: "Self-Inquiry",
        oshoInsight: "The question 'Who am I?' is like a fire that burns all answers. When nothing remains, the question itself burns, and you are left—not as a person, but as pure presence."
    },
    {
        id: 42,
        name: "Not This, Not This",
        sanskrit: "Neti Neti",
        meaning: "Negate all that you are not: 'Not this, not this.' What remains is the self.",
        howTo: "Go through all your identifications: 'I am not the body,' 'I am not the mind,' 'I am not the emotions,' 'I am not the thoughts.' Negate everything that can be perceived. What cannot be negated is you.",
        essence: "The self cannot be described; it can only be pointed to by negating what it is not. Like carving a statue by removing everything that is not the figure, you reveal yourself by removing all that you are not.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Begin with the body: 'I am not this body.'",
            "Move to the breath: 'I am not this breath.'",
            "Move to the mind: 'I am not these thoughts.'",
            "Move to the emotions: 'I am not these feelings.'",
            "Continue until all that can be negated is negated.",
            "Rest in what remains—the unnegatable, the self."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Removes false identifications", "Direct experience of self", "Freedom from objects of awareness"],
        category: "Self-Inquiry",
        oshoInsight: "Neti neti is a great cleansing. It removes everything you are not. When the house is empty, the owner appears. That owner is you."
    },
    {
        id: 43,
        name: "Witnessing Thoughts",
        sanskrit: "Sakshi Bhav",
        meaning: "Watch thoughts as a witness, neither accepting nor rejecting them.",
        howTo: "Sit and let thoughts come. Do not engage with them, do not fight them. Simply watch them as if they belong to someone else. You are the silent witness, the screen on which thoughts appear and disappear.",
        essence: "Thoughts are clouds passing through the sky of awareness. The sky does not judge the clouds, does not try to stop them, does not hold onto them. Be the sky, not the clouds.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Allow whatever thoughts to arise.",
            "Watch them as if from a distance, without involvement.",
            "Do not label them good or bad, do not follow them.",
            "Simply witness—they come, they go.",
            "Rest as the witness, not the thoughts."
        ],
        postureMudra: "Any posture. Hands in lap or on knees.",
        benefits: ["Develops detachment", "Reduces identification with mind", "Cultivates witness consciousness"],
        category: "Witnessing",
        oshoInsight: "You are not the actor on the stage—you are the audience. Watch the play of thoughts without getting up on stage. The play continues, but you remain free."
    },
    {
        id: 44,
        name: "Gap Between Thoughts",
        sanskrit: "Vichara Antara",
        meaning: "Notice the gap between two thoughts, and rest in that gap.",
        howTo: "Watch your thoughts closely. Between one thought ending and the next beginning, there is a gap, a pause. Catch that gap. Rest in it. Let the gap grow longer.",
        essence: "The gap between thoughts is the doorway to the timeless. In the gap, the mind stops, and pure consciousness is revealed. The gap is your true nature—not the thoughts that fill it.",
        steps: [
            "Sit quietly. Observe the flow of thoughts.",
            "Be alert for the moment when one thought ends.",
            "Before the next thought arises, there is a gap.",
            "Rest in that gap, however brief it may be.",
            "With practice, the gap will lengthen.",
            "Eventually, you can rest in the gap for long periods."
        ],
        postureMudra: "Any posture. Hands in Dhyana Mudra.",
        benefits: ["Experiences thoughtless awareness", "Discovers the self beyond mind", "Deep peace"],
        category: "Witnessing",
        oshoInsight: "Thoughts are the waves, the gap is the ocean. Don't focus on the waves—they come and go. Find the ocean. The ocean is always there, deep, still, waiting."
    },
    {
        id: 45,
        name: "Space Between",
        sanskrit: "Madhya Darshan",
        meaning: "Focus on the space between two objects, two thoughts, two breaths—the space that connects.",
        howTo: "Look at two objects. Notice not the objects, but the space between them. Similarly, notice the space between two thoughts, the space between inhalation and exhalation. Rest in that space.",
        essence: "Things come and go, but space remains. The objects are temporary; the space is permanent. By focusing on the space, you shift from the temporary to the eternal.",
        steps: [
            "Sit with eyes open or closed.",
            "If open, look at two objects and notice the space between.",
            "If closed, notice the space between two thoughts.",
            "Rest your awareness in that space.",
            "Let the space expand, filling your awareness.",
            "Remain as the space itself."
        ],
        postureMudra: "Any posture. Shuni Mudra (middle finger touching thumb).",
        benefits: ["Shift from form to formless", "Experience of background consciousness", "Non-attachment to phenomena"],
        category: "Witnessing",
        oshoInsight: "The space between is more real than the things it connects. Find the space, and you find the reality that holds all things."
    },
    {
        id: 46,
        name: "Dream and Sleep",
        sanskrit: "Swapna Sushupti",
        meaning: "Meditate on the states of dream and deep sleep as doors to the transcendent.",
        howTo: "Reflect on your dreams: who is the dreamer? Reflect on deep sleep: who is the one who rests? Between waking, dreaming, and sleeping, there is the fourth state—turiya—the witness of all three.",
        essence: "You exist in all three states, but you are none of them. The dreamer is not the dream. The sleeper is not the sleep. You are the one who knows waking, dreaming, and sleeping. That knower is your true self.",
        steps: [
            "Sit quietly. Recall last night's dream.",
            "Ask: who was the dreamer?",
            "Consider deep sleep: who rested there?",
            "Notice that you know both states.",
            "That which knows all states is the fourth—turiya.",
            "Rest as that witnessing presence."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Transcends the three states", "Realizes the fourth (turiya)", "Witness consciousness"],
        category: "Contemplation",
        oshoInsight: "You are not the waking self, not the dreaming self, not the sleeping self. You are the one who watches them all. Find that watcher, and you have found the eternal."
    },
    {
        id: 47,
        name: "Like a Feather",
        sanskrit: "Tula Lakhu",
        meaning: "Feel yourself as light as a feather, floating in infinite space.",
        howTo: "Lie down or sit comfortably. Imagine your body becoming lighter and lighter, like a feather floating on air. Let go of all weight, all gravity. Float in the vastness of inner space.",
        essence: "Weight is gravity, and gravity is attachment. When you feel light, you let go of all that weighs you down. The feather floats because it does not cling. Be the feather, and you are free.",
        steps: [
            "Lie in Shavasana or sit comfortably.",
            "Close your eyes. Relax completely.",
            "Imagine your body becoming lighter, less dense.",
            "Feel yourself floating, like a feather on the wind.",
            "Let go of all effort, all resistance.",
            "Float in the vast, empty sky of awareness."
        ],
        postureMudra: "Shavasana or any relaxed posture. Hands open at sides.",
        benefits: ["Releases physical tension", "Cultivates lightness of being", "Freedom from attachment"],
        category: "Relaxation",
        oshoInsight: "The feather does not try to float—it simply lets go. Let go of your weight, your gravity, your clinging. Then you too will float, not in air, but in the infinite."
    },
    {
        id: 48,
        name: "Empty House",
        sanskrit: "Shunya Griha",
        meaning: "Feel yourself as an empty house, with all doors and windows open.",
        howTo: "Visualize your body as a house. All doors and windows are open. The wind of existence blows through freely. Nothing is locked, nothing is held. You are empty, open, available.",
        essence: "The ego is the locked door, the closed window. When you open everything, the ego disappears. What is left is openness itself—not a house, but the space that the house contained.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Visualize your body as a house with many rooms.",
            "Open all doors, all windows, all shutters.",
            "Let the breeze of existence flow through freely.",
            "Feel yourself becoming empty, open, spacious.",
            "Be that openness for 15-20 minutes."
        ],
        postureMudra: "Any posture. Hands open, palms up.",
        benefits: ["Openness to existence", "Dissolves ego boundaries", "Receptivity"],
        category: "Openness",
        oshoInsight: "When the house is empty, it is no longer a house—it is space. When you are empty, you are no longer a person—you are presence. And presence is the door to the divine."
    },
    {
        id: 49,
        name: "Circle of Fire",
        sanskrit: "Agni Mandala",
        meaning: "Visualize yourself surrounded by a circle of fire, burning all that is false.",
        howTo: "See yourself sitting in the center of a circle of fire. The fire burns brightly all around you. It burns only the false—your fears, your attachments, your illusions. You remain untouched, pure awareness.",
        essence: "The fire is awareness itself. It consumes everything that is not you. When all is burned away, what remains? The witness. The one who watches the fire is the one who is free.",
        steps: [
            "Sit with eyes closed. Relax.",
            "Visualize a circle of fire surrounding you.",
            "Feel its warmth, its purifying power.",
            "Let it burn away all thoughts, all attachments, all fears.",
            "Know that you are not the fire—you are the one sitting within it.",
            "When all is burned, rest in the pure awareness that remains."
        ],
        postureMudra: "Any posture. Agni Mudra (ring finger touching thumb).",
        benefits: ["Purifies the mind", "Burns attachments", "Reveals true self"],
        category: "Visualization",
        oshoInsight: "The fire does not burn you—it burns what you are not. Let it burn. When the false is gone, the true is revealed. You are the one who has always been sitting in the center, untouched."
    },
    {
        id: 50,
        name: "Cosmic Mother",
        sanskrit: "Jagadamba",
        meaning: "Feel yourself as a child in the lap of the cosmic mother, safe and loved.",
        howTo: "Visualize the universe as a mother. Feel yourself as a child, completely safe, completely loved, completely held. Surrender all care, all fear, all responsibility. Be the child, held in infinite arms.",
        essence: "The universe is not hostile—it is your mother. When you surrender to that truth, all fear disappears. You are not a separate being fighting for survival; you are a child held in the lap of existence.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Visualize the universe as a vast, loving mother.",
            "Feel yourself as a small child, held in her arms.",
            "Surrender all fear, all worry, all effort.",
            "Feel her love surrounding you, supporting you, nurturing you.",
            "Rest in this safety for 15-20 minutes."
        ],
        postureMudra: "Any posture. Balasana (Child's Pose) physically or in imagination.",
        benefits: ["Heals primal fear", "Creates sense of security", "Surrender to existence"],
        category: "Devotion",
        oshoInsight: "The mother holds the child not because the child deserves it, but because it is her nature. Existence holds you not because you are worthy, but because it is its nature. Rest in that holding."
    },
    {
        id: 51,
        name: "Guru's Grace",
        sanskrit: "Guru Kripa",
        meaning: "Feel the presence of the master, the guru, within your heart.",
        howTo: "Visualize your guru, or the embodiment of wisdom, sitting in your heart center. Feel their grace flowing through you. Let their presence guide you, teach you, awaken you.",
        essence: "The true guru is not outside—it is the wisdom within. When you connect with that inner wisdom, you are never alone. The guru is the voice of your own deepest knowing.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Bring to mind your guru, or a being of wisdom.",
            "Visualize them sitting in the lotus of your heart.",
            "Feel their grace, their love, their presence.",
            "Let them guide you from within.",
            "Rest in the feeling of being held by wisdom."
        ],
        postureMudra: "Any posture. Anjali Mudra (hands at heart).",
        benefits: ["Connection to inner wisdom", "Surrender to guidance", "Feeling of being held"],
        category: "Devotion",
        oshoInsight: "The guru is not a person—it is the presence that awakens when the disciple is ready. Find that presence within, and you have found the true master."
    },
    {
        id: 52,
        name: "Beloved's Face",
        sanskrit: "Priya Mukha",
        meaning: "See the face of the beloved in everything—in the sky, in the earth, in every being.",
        howTo: "Look at the world. See the divine beloved in every form. The tree is the beloved, the cloud is the beloved, the person passing by is the beloved. Let love transform your perception.",
        essence: "When you see the divine in everything, you are no longer separate. The world becomes a mirror reflecting the beloved. And in that reflection, you see yourself—for you too are the beloved.",
        steps: [
            "Open your eyes. Look at the world around you.",
            "See the divine presence in everything you see.",
            "Let love arise for all forms, all beings.",
            "Feel the unity behind the diversity.",
            "Let this vision become continuous.",
            "Rest in the feeling of universal love."
        ],
        postureMudra: "Any posture. Hands in Anjali Mudra or open.",
        benefits: ["Universal love", "Non-dual vision", "End of separation"],
        category: "Devotion",
        oshoInsight: "The beloved is not far away—it is the very ground of existence. When you see it everywhere, you have found it within yourself. For the seer and the seen are one."
    },
    {
        id: 53,
        name: "Everything is Shiva",
        sanskrit: "Shivam Advaitam",
        meaning: "See that everything is Shiva—the formless consciousness that takes all forms.",
        howTo: "Contemplate: all that exists is Shiva. The mountains, the rivers, the stars, yourself—all are expressions of one consciousness. See the unity beneath the diversity.",
        essence: "Shiva is not a god—it is the name for pure consciousness. When you see that everything is consciousness, duality ends. You are not separate; you are that consciousness itself.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Reflect: all that I see is Shiva.",
            "All that I hear is Shiva.",
            "All that I feel is Shiva.",
            "I am Shiva, and Shiva is all.",
            "Rest in this non-dual awareness."
        ],
        postureMudra: "Any posture. Gyan Mudra.",
        benefits: ["Non-dual awareness", "Unity consciousness", "End of separation"],
        category: "Contemplation",
        oshoInsight: "There is only one thing—call it Shiva, call it Buddha, call it God. When you know this, you are not a drop in the ocean—you are the ocean itself."
    },
    {
        id: 54,
        name: "Everything is Shakti",
        sanskrit: "Shaktim Advaitam",
        meaning: "See that everything is Shakti—the energy that manifests as the universe.",
        howTo: "Contemplate: all that exists is energy. The solid body is energy vibrating slowly. The thought is energy vibrating quickly. The universe is a dance of energy. You are that energy.",
        essence: "Shakti is the dynamic aspect of consciousness—the power that creates, sustains, and dissolves the universe. When you know yourself as Shakti, you know yourself as the creative force of existence.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Feel the energy in your body: the warmth, the vibration.",
            "See the world as energy: light, sound, movement.",
            "Know that you are that energy.",
            "Feel yourself as the dance of Shakti.",
            "Rest as that dynamic, creative presence."
        ],
        postureMudra: "Any posture. Hands in Shakti Mudra (ring and little fingers touching, others extended).",
        benefits: ["Aliveness", "Creativity", "Dynamic awareness"],
        category: "Contemplation",
        oshoInsight: "You are not a thing—you are a vibration. Not a noun, but a verb. Not a being, but a becoming. Dance with the Shakti, and you dance with existence itself."
    },
    {
        id: 55,
        name: "Darkness and Light",
        sanskrit: "Tamo Jyoti",
        meaning: "Meditate on darkness and light as two aspects of the same reality.",
        howTo: "Close your eyes. See the darkness. Then, within that darkness, see a point of light. Watch them together. They are not opposites—they are one. The light is born of darkness; darkness is the mother of light.",
        essence: "Darkness is not the absence of light—it is its source. The visible emerges from the invisible, the form from the formless. Meditate on this, and you return to the source.",
        steps: [
            "Sit in a dark room or close your eyes.",
            "Rest in the darkness for several minutes.",
            "See a small point of light appear within the darkness.",
            "Watch the light grow, expand.",
            "See that the light and darkness are one.",
            "Rest in the unity of both."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Accepts both manifest and unmanifest", "Unity of opposites", "Return to source"],
        category: "Contemplation",
        oshoInsight: "Darkness is not your enemy—it is your womb. Out of it comes all light. Go back into darkness, and you find the source of all illumination."
    },
    {
        id: 56,
        name: "The Unborn",
        sanskrit: "Aja",
        meaning: "Meditate on that which is never born and never dies.",
        howTo: "Contemplate: what in you was there before birth? What will be there after death? Find that which is always present, unchanging, untouched by time. That is the unborn, the deathless.",
        essence: "All that is born must die. You are not born, so you cannot die. The body is born, the mind is born, but you—the witness—were never born. Find that, and you find immortality.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Ask: what was I before birth?",
            "Go back, back, back, to before conception.",
            "What remains? Not the body, not the mind.",
            "Find that which has always been present.",
            "Rest as the unborn, the undying."
        ],
        postureMudra: "Any posture. Dhyana Mudra.",
        benefits: ["Immortality", "Freedom from fear of death", "Eternal awareness"],
        category: "Contemplation",
        oshoInsight: "You are not born, you have never died. The body comes and goes like a wave on the ocean. But you are the ocean. Find the ocean, and you are free."
    },
    {
        id: 57,
        name: "The Center of the Wheel",
        sanskrit: "Chakra Nabhi",
        meaning: "Meditate on the center of the wheel—the unmoving point around which everything turns.",
        howTo: "See the world as a wheel, turning and turning. Find the center—the point that does not move. You are that center. Everything moves around you, but you remain still.",
        essence: "The world moves, thoughts move, emotions move. You are the still point around which all revolves. When you know yourself as the center, you are no longer caught in the movement.",
        steps: [
            "Sit quietly. Close your eyes.",
            "See your life as a wheel, turning.",
            "Find the hub of the wheel—the still center.",
            "Rest as that center, unmoving.",
            "Watch the wheel turn, but do not turn with it.",
            "Remain in the stillness."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Stillness amid movement", "Centeredness", "Witness consciousness"],
        category: "Contemplation",
        oshoInsight: "The wheel turns, but the center does not. Find the center, and you find the peace that the world cannot give and cannot take away."
    },
    {
        id: 58,
        name: "Like a Mirror",
        sanskrit: "Darpana",
        meaning: "Let your mind be like a mirror—reflecting everything, holding nothing.",
        howTo: "See the mind as a mirror. All things appear in it, but nothing sticks. The mirror does not judge what it reflects, does not hold onto the image. Be the mirror.",
        essence: "The mirror is pure awareness. It reflects without distortion, without attachment. When the image goes, the mirror remains empty. Be that emptiness that reflects all without being touched.",
        steps: [
            "Sit quietly. Close your eyes.",
            "See the mind as a clean, clear mirror.",
            "Allow thoughts, sensations, feelings to appear in the mirror.",
            "Let them go without holding, without judging.",
            "Notice that the mirror remains unaffected.",
            "Rest as the mirror itself."
        ],
        postureMudra: "Any posture. Hands open, palms up.",
        benefits: ["Non-attachment", "Clear perception", "Reflective awareness"],
        category: "Witnessing",
        oshoInsight: "The mirror does not choose what to reflect—it reflects everything and clings to nothing. Be the mirror, and you are free. The images come and go; you remain pure."
    },
    {
        id: 59,
        name: "Like a Crystal",
        sanskrit: "Sphatika",
        meaning: "Let your mind be like a crystal, taking on the color of whatever is near, but remaining pure in itself.",
        howTo: "See the mind as a clear crystal. When a red flower is near, it appears red. When a blue flower is near, it appears blue. But the crystal remains colorless. You are that crystal.",
        essence: "You take on the colors of the world—the roles, the emotions, the identities—but you are not those colors. You are the pure awareness that reflects all without being any.",
        steps: [
            "Sit quietly. Close your eyes.",
            "See yourself as a clear crystal, pure, transparent.",
            "Notice the colors that appear: roles you play, emotions you feel.",
            "Know that you are not those colors.",
            "Return to the clear, colorless awareness.",
            "Rest as that pure crystal."
        ],
        postureMudra: "Any posture. Hands in Gyan Mudra.",
        benefits: ["Freedom from roles", "Pure awareness", "Non-identification"],
        category: "Witnessing",
        oshoInsight: "You are not the roles you play, the emotions you feel, the thoughts you think. You are the crystal—clear, pure, untouched. Find that, and you are free."
    },
    {
        id: 60,
        name: "Like Space",
        sanskrit: "Akasha",
        meaning: "Let your mind be like space—vast, empty, containing all without being contained.",
        howTo: "Feel your mind as space. Thoughts are clouds passing through. Emotions are storms. But the space remains. It is not disturbed by the clouds, not changed by the storms. Be the space.",
        essence: "Space is the ultimate metaphor for consciousness. It contains everything but is contained by nothing. It is not touched by what passes through it. You are that space.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Feel your awareness expanding, becoming vast.",
            "Let it be like space: empty, infinite, containing all.",
            "Let thoughts, feelings, sensations arise and dissolve in this space.",
            "Remain as the space itself, untouched.",
            "Rest in this vastness."
        ],
        postureMudra: "Any posture. Hands open, palms up.",
        benefits: ["Vast awareness", "Non-attachment", "Freedom from identification"],
        category: "Witnessing",
        oshoInsight: "The sky does not become dirty when clouds pass through. You do not become disturbed when thoughts pass through. Know yourself as the sky, and you are free."
    },

    // ==================== SECTION 4: SOUND & MANTRA TECHNIQUES (61-80) ====================
    {
        id: 61,
        name: "Mantra in the Heart",
        sanskrit: "Hridaya Mantra",
        meaning: "Let the mantra vibrate in the heart, not in the mind.",
        howTo: "Chant a mantra silently, but feel it originating from the heart center, not from the throat or mind. Let it be a vibration of the heart, a sound of love.",
        essence: "The mind's mantra is thought. The heart's mantra is feeling. When the mantra comes from the heart, it is not a repetition—it is a prayer, a love song to existence.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Choose a mantra (Om, Ram, or any sacred sound).",
            "Let the mantra arise from the heart center.",
            "Feel it vibrating in the chest, in the heart.",
            "Let it be a feeling more than a sound.",
            "Rest in the heart's vibration."
        ],
        postureMudra: "Any posture. Anjali Mudra at the heart.",
        benefits: ["Heart-centered awareness", "Devotional feeling", "Deepened mantra practice"],
        category: "Mantra",
        oshoInsight: "The mind's mantra is a technique. The heart's mantra is a love affair. When the mantra comes from the heart, it carries you to the beloved."
    },
    {
        id: 62,
        name: "Silent Mantra",
        sanskrit: "Mauna Japa",
        meaning: "Repeat the mantra silently, then let even the silent repetition stop, resting in the silence.",
        howTo: "Begin repeating the mantra mentally. Let it become effortless. Then, when it feels natural, let the repetition stop. Rest in the silence that was always there beneath the mantra.",
        essence: "The mantra is a boat to cross the river. When you reach the other shore, you leave the boat. The silence is the shore. The mantra takes you there; then it dissolves.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Begin repeating a mantra mentally, effortlessly.",
            "Let it become natural, like breathing.",
            "When it feels right, let the repetition stop.",
            "Rest in the silence that follows.",
            "If thoughts arise, return to the mantra, then let it go again."
        ],
        postureMudra: "Any posture. Japa Mala optional.",
        benefits: ["Traces sound back to silence", "Deep meditation", "Thoughtless awareness"],
        category: "Mantra",
        oshoInsight: "The mantra is a finger pointing to the moon. When you see the moon, you forget the finger. When you reach silence, you forget the mantra. The silence is the goal."
    },
    {
        id: 63,
        name: "Letters of the Alphabet",
        sanskrit: "Varnamala",
        meaning: "Meditate on the letters of the Sanskrit alphabet as vibrations of consciousness.",
        howTo: "Take each letter of the Sanskrit alphabet (or any sacred script). Meditate on its sound, its shape, its vibration. Feel it as a pure expression of consciousness.",
        essence: "Sound is the first manifestation of consciousness. The letters are the building blocks of sound. By meditating on them, you trace manifestation back to its source.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Choose a sacred letter (Aum, Hrim, or any).",
            "Visualize its shape. Hear its sound.",
            "Feel its vibration in your body.",
            "Let it dissolve into pure consciousness.",
            "Repeat with another letter, or rest in silence."
        ],
        postureMudra: "Any posture. Chin Mudra.",
        benefits: ["Deepens understanding of sound", "Traces manifestation to source", "Concentration"],
        category: "Mantra",
        oshoInsight: "The alphabet is the grammar of creation. Each letter is a key that opens a door to the cosmos. Meditate on them, and you meditate on the building blocks of existence."
    },
    {
        id: 64,
        name: "Sound Without Sound",
        sanskrit: "Nada Brahma",
        meaning: "Listen to the sound that is beyond sound—the silence that contains all sound.",
        howTo: "Sit in silence. Listen not to external sounds, but to the sound of silence itself. It is not an absence—it is a presence. A subtle, continuous vibration that is the ground of all sound.",
        essence: "There is a sound that is not made by anything—the sound of existence itself. The ancients called it 'Anahata Nada,' the unstruck sound. When you hear it, you hear the universe humming.",
        steps: [
            "Sit in a quiet place. Close your eyes.",
            "Listen past all external sounds.",
            "Listen for the subtle, continuous sound within.",
            "It may sound like a hum, a vibration, a stillness.",
            "Let yourself merge with that sound.",
            "Become the sound itself."
        ],
        postureMudra: "Any posture. Shanmukhi Mudra (closing ears) helpful.",
        benefits: ["Deep inner listening", "Union with cosmic vibration", "Beyond duality"],
        category: "Sound",
        oshoInsight: "There is a sound that never stops—the heartbeat of the universe. Listen, and you hear it. Become it, and you are it. That is the sound of your own being."
    },
    {
        id: 65,
        name: "Loud to Soft",
        sanskrit: "Uccaih Mandra",
        meaning: "Intone a sound loudly, then gradually softer, until it becomes silence.",
        howTo: "Begin chanting loudly. Gradually reduce the volume. Let it become a whisper. Then let it become silent repetition in the mind. Then let even that stop. Rest in the silence that follows.",
        essence: "Sound is born in silence and returns to silence. By consciously moving from loud to soft, you trace sound back to its source. That source is your own being.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Chant 'Om' or another mantra loudly.",
            "Gradually reduce volume with each repetition.",
            "Let it become a whisper, then silent repetition.",
            "Let the silent repetition fade and stop.",
            "Rest in the silence for as long as possible."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Traces sound to source", "Deep silence", "Concentration"],
        category: "Sound",
        oshoInsight: "Sound is a wave on the ocean of silence. Follow the wave back to the ocean. When you reach the ocean, you have reached yourself."
    },
    {
        id: 66,
        name: "Bija Mantra",
        sanskrit: "Bija Japa",
        meaning: "Repeat a seed mantra (Lam, Vam, Ram, Yam, Ham, Om) associated with each chakra.",
        howTo: "Focus on the base chakra, repeat 'Lam.' Move to sacral, 'Vam.' Solar plexus, 'Ram.' Heart, 'Yam.' Throat, 'Ham.' Third eye, 'Om.' Crown, silence. Feel each vibration activate its center.",
        essence: "Seed mantras are the pure vibrations of each chakra. When you repeat them with awareness, you tune the chakra to its natural frequency, clearing blockages and awakening energy.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Focus on base chakra. Chant 'Lam.' Feel vibration there.",
            "Move to sacral. Chant 'Vam.' Feel the vibration.",
            "Solar plexus: 'Ram.' Heart: 'Yam.' Throat: 'Ham.'",
            "Third eye: 'Om.' Crown: silence.",
            "Rest in the open, flowing energy."
        ],
        postureMudra: "Padmasana or Sukhasana. Hands in corresponding mudras optional.",
        benefits: ["Activates chakras", "Clears energy blockages", "Awakens subtle body"],
        category: "Mantra",
        oshoInsight: "Each seed contains a tree. Each bija contains a universe. Chant it, and you plant the seed of awakening. Water it with awareness, and it grows."
    },
    {
        id: 67,
        name: "Echo in the Cave",
        sanskrit: "Guha Pratidhvani",
        meaning: "Chant into the cave of the heart and listen to the echo.",
        howTo: "Chant a mantra. As you chant, feel it entering the cave of your heart. Listen as it echoes back. Chant again, and listen again. The echo is the heart's response.",
        essence: "The heart is a cave. When you call into it, it answers. Not with words, but with silence, with presence, with love. The echo is the beloved's voice.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Chant a mantra out loud or silently.",
            "Feel it entering the heart center, like a sound entering a cave.",
            "Listen for the echo—the heart's response.",
            "It may be silence, peace, or a subtle vibration.",
            "Rest in the heart's response."
        ],
        postureMudra: "Any posture. Hridaya Mudra.",
        benefits: ["Heart-centered awareness", "Devotion", "Inner listening"],
        category: "Sound",
        oshoInsight: "The heart is a cave that holds the entire universe. Call into it, and the universe answers. That answer is you, responding to yourself."
    },
    {
        id: 68,
        name: "Mantra as Breath",
        sanskrit: "Prana Mantra",
        meaning: "Let the mantra synchronize with the breath, so that breath and sound become one.",
        howTo: "With inhalation, hear or feel the mantra. With exhalation, hear or feel the mantra. Let the mantra ride on the breath. When the breath is smooth, the mantra is smooth.",
        essence: "Breath is life. Mantra is consciousness. When they merge, life becomes conscious, and consciousness becomes alive. You are no longer doing either—they are happening together, effortlessly.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Choose a mantra (So'ham works naturally: 'So' on inhale, 'Ham' on exhale).",
            "Let the mantra arise with the breath, effortlessly.",
            "If the mind wanders, return to the breath-mantra.",
            "Continue for 15-20 minutes.",
            "Rest in the union of breath and sound."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Union of prana and mantra", "Effortless repetition", "Natural meditation"],
        category: "Mantra",
        oshoInsight: "So'ham is not a mantra you repeat—it is the mantra of your own breath. You have been saying it since birth. Now hear it consciously, and you hear your true name."
    },
    {
        id: 69,
        name: "Unspoken Word",
        sanskrit: "Anakshara",
        meaning: "Meditate on the word that is never spoken—the sound beyond sound.",
        howTo: "Do not repeat any mantra. Instead, listen for the mantra that is not spoken, the word that is always present but never uttered. It is silence itself. Rest in that unspoken word.",
        essence: "All spoken words arise from silence. The unspoken word is the source of all mantras. When you rest in it, you rest in the source of all sound, all creation.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Do not repeat anything, do not chant anything.",
            "Listen for the word that is never spoken.",
            "It is not a sound—it is the space in which sound arises.",
            "Rest in that space, that silence.",
            "Be that unspoken word."
        ],
        postureMudra: "Any posture. Hands in Dhyana Mudra.",
        benefits: ["Source of all mantras", "Pure silence", "Beyond technique"],
        category: "Silence",
        oshoInsight: "The ultimate mantra is not a sound—it is the silence from which all sounds emerge. Find that silence, and you have found the mother of all mantras."
    },
    {
        id: 70,
        name: "Song of the Bird",
        sanskrit: "Vihanga Gita",
        meaning: "Listen to the birds singing, and feel that the song is coming from within you.",
        howTo: "Sit in nature or listen to birdsong. As you listen, feel that the song is not outside—it is arising from your own heart. You are the bird, the song, and the listener all at once.",
        essence: "The bird's song is the sound of existence. When you hear it as your own, the separation between inner and outer dissolves. You are the universe singing to itself.",
        steps: [
            "Find a place where you can hear birds, or use a recording.",
            "Listen to the birdsong with full attention.",
            "Feel that the song is not separate from you.",
            "Let it enter your heart, become your own song.",
            "Feel yourself singing with the bird.",
            "Rest in the unity of singer and song."
        ],
        postureMudra: "Any posture. Hands open.",
        benefits: ["Union with nature", "Dissolves inner/outer boundary", "Joy"],
        category: "Sound",
        oshoInsight: "The bird sings because existence sings. When you hear that, you realize you are not separate from the song. You are the singer, the song, and the one who listens."
    },
    {
        id: 71,
        name: "Music of the Spheres",
        sanskrit: "Jyotir Gana",
        meaning: "Listen to the music of the cosmos—the vibration of the stars and planets.",
        howTo: "Sit under the night sky. Listen not with ears, but with your whole being. Feel the silence, the vastness, the subtle vibration. This is the music of the spheres—the sound of the cosmos turning.",
        essence: "The cosmos is not silent—it is humming with vibration. When you become still enough, you can hear it. It is the sound of existence itself, the music of creation.",
        steps: [
            "Sit under the night sky, or visualize it.",
            "Close your eyes. Feel the vastness around you.",
            "Listen with your whole being, not just your ears.",
            "Feel the subtle vibration, the hum of existence.",
            "Let yourself merge with that cosmic music.",
            "Be the music."
        ],
        postureMudra: "Any posture. Hands open.",
        benefits: ["Cosmic awareness", "Union with the universe", "Transcendence of the personal"],
        category: "Sound",
        oshoInsight: "The stars are not silent—they sing. But their song is not for the ears; it is for the soul. When you hear it, you hear the heartbeat of the cosmos."
    },
    {
        id: 72,
        name: "Silence After Thunder",
        sanskrit: "Stanayitnu Shanti",
        meaning: "After a loud sound, meditate on the silence that follows.",
        howTo: "Create a loud sound—clap your hands, ring a bell, or wait for thunder. After the sound, rest in the silence. Notice that the silence was there before the sound and remains after.",
        essence: "Sound comes from silence and returns to silence. The silence is always there, unchanging. By resting in the silence after sound, you rest in the eternal.",
        steps: [
            "Sit in a quiet place. Create a loud sound (clap, bell, thunder).",
            "After the sound, rest in the silence that follows.",
            "Notice the quality of that silence.",
            "Let it deepen, expand.",
            "Remain in the silence as long as possible.",
            "Repeat if desired."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Experiences silence as ground", "Rest in the eternal", "Beyond sound"],
        category: "Silence",
        oshoInsight: "Thunder comes and goes, but silence remains. The noise of life comes and goes, but the silence within remains. Find that silence, and you have found what never changes."
    },
    {
        id: 73,
        name: "Sound of Water",
        sanskrit: "Jala Dhvani",
        meaning: "Listen to the sound of flowing water, and feel your mind flowing with it.",
        howTo: "Sit by a stream, fountain, or listen to a recording of water. Let your mind flow with the water. Let thoughts come and go like ripples. Become the flow itself.",
        essence: "Water is the great teacher of letting go. It flows without resistance, adapts to any shape, always moves toward the ocean. Listen to water, and you learn to flow.",
        steps: [
            "Sit by water or use a recording.",
            "Listen to the sound of flowing water.",
            "Let your breath synchronize with the flow.",
            "Let your thoughts flow like water, without resistance.",
            "Feel yourself becoming the flow.",
            "Rest in the flowing."
        ],
        postureMudra: "Any posture. Varuna Mudra (little finger touching thumb).",
        benefits: ["Letting go", "Flowing with life", "Emotional release"],
        category: "Sound",
        oshoInsight: "Water does not resist—it flows. Listen to it, and you learn the secret of life: flow with existence, not against it. The ocean is waiting."
    },
    {
        id: 74,
        name: "Wind in the Trees",
        sanskrit: "Vayu Vana",
        meaning: "Listen to the wind in the trees, and feel the breath of the universe.",
        howTo: "Sit in a forest or near trees. Listen to the wind moving through leaves. Feel it as the breath of the cosmos. With each rustle, feel yourself breathing with the trees.",
        essence: "The wind is the breath of the earth. When you listen to it, you are listening to the breathing of existence. You are not separate—you are breathing with the trees, with the sky, with all.",
        steps: [
            "Sit among trees or use a recording.",
            "Listen to the wind moving through leaves.",
            "Feel the rhythm of the wind as breath.",
            "Breathe with the wind—in, out, in, out.",
            "Feel yourself part of the breathing of the earth.",
            "Rest in that shared breath."
        ],
        postureMudra: "Any posture. Vayu Mudra (index finger touching thumb).",
        benefits: ["Connection with nature", "Universal breath", "Letting go of separation"],
        category: "Sound",
        oshoInsight: "The wind does not ask permission—it simply blows. Learn from it. Let your spirit blow through life without asking permission. You are the wind, and the wind is you."
    },
    {
        id: 75,
        name: "Silence of Snow",
        sanskrit: "Hima Shanti",
        meaning: "Meditate on the silence of falling snow—the silence that blankets the world.",
        howTo: "Watch snow falling, or imagine it. Feel the silence that comes with snow. It is not an absence of sound—it is a presence, a softness, a stillness that covers everything.",
        essence: "Snow teaches the silence that comes when you let go. When thoughts settle like snowflakes, the mind becomes still, white, peaceful. That stillness is your nature.",
        steps: [
            "Sit quietly. Visualize snow falling.",
            "Watch each flake fall, settle, become part of the whiteness.",
            "Feel the silence that comes with snow.",
            "Let your thoughts settle like snowflakes.",
            "Let your mind become like a field of fresh snow—still, white, peaceful.",
            "Rest in that stillness."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Deep stillness", "Mental quiet", "Peace"],
        category: "Silence",
        oshoInsight: "Snow does not fall noisily. It falls softly, silently. When it settles, the world becomes quiet. Let your thoughts fall like snow, and you too will know that quiet."
    },
    {
        id: 76,
        name: "Echo in the Mountain",
        sanskrit: "Giri Pratidhvani",
        meaning: "Call into the mountain and listen to the echo, as the universe answering itself.",
        howTo: "In a canyon or near a mountain, call out. Listen to the echo. Feel that the echo is the mountain answering you. Then realize that the call and the echo are one—the universe speaking to itself.",
        essence: "You are the call; the universe is the echo. Or the universe is the call, and you are the echo. When you hear the echo, you hear yourself. There is no separation.",
        steps: [
            "Find a place with echo (canyon, large hall) or visualize.",
            "Call out loudly. Listen to the echo.",
            "Notice the pause, the silence, then the return.",
            "Feel that you are the call and the echo.",
            "Let the distinction dissolve.",
            "Rest in the unity of sound and silence."
        ],
        postureMudra: "Any posture. Hands open.",
        benefits: ["Union of self and other", "Dissolution of boundaries", "Ego transcendence"],
        category: "Sound",
        oshoInsight: "You call, the mountain answers. But the mountain is you, and you are the mountain. The call and echo are one. In that oneness, you find yourself."
    },
    {
        id: 77,
        name: "Bell at Dawn",
        sanskrit: "Ghanta Pratah",
        meaning: "Listen to the temple bell at dawn, letting it call you awake.",
        howTo: "Listen to a bell ringing. Let it be an alarm—not to wake the body, but to wake the soul. With each ring, feel yourself becoming more alert, more aware, more present.",
        essence: "The bell is the voice of the divine, calling you to wake up. Every sound can be such a call if you listen. The universe is constantly ringing the bell; are you awake?",
        steps: [
            "Use a bell, a gong, or a recording.",
            "Ring the bell, or listen as it rings.",
            "Let the sound wake you—not from sleep, but from unconsciousness.",
            "With each ring, become more alert, more present.",
            "After the sound, rest in the wakefulness it brings.",
            "Let that wakefulness continue."
        ],
        postureMudra: "Any posture. Hands in lap.",
        benefits: ["Wakefulness", "Presence", "Awareness"],
        category: "Sound",
        oshoInsight: "The bell rings to wake the sleeping. But the real sleep is not of the body—it is of the soul. When you hear the bell, wake up. Wake up to who you really are."
    },
    {
        id: 78,
        name: "Sacred Chant",
        sanskrit: "Stotra",
        meaning: "Chant sacred verses with full feeling, letting the meaning dissolve into silence.",
        howTo: "Chant sacred verses (from any tradition). Let the words carry feeling, devotion, love. Then let the words fall away, and rest in the feeling they evoked. The feeling is the real chant.",
        essence: "The words of a chant are boats carrying the feeling. When the feeling arises, the words are no longer needed. The feeling is the prayer, the love, the meditation.",
        steps: [
            "Choose a sacred chant or prayer.",
            "Chant it aloud, with feeling and devotion.",
            "Let the words carry you into the feeling they express.",
            "When the feeling is strong, let the words stop.",
            "Rest in the feeling—love, devotion, peace, joy.",
            "Let that feeling be your meditation."
        ],
        postureMudra: "Any posture. Anjali Mudra at heart.",
        benefits: ["Devotion", "Heart-opening", "Surrender"],
        category: "Devotion",
        oshoInsight: "The words of a chant are like a raft. They carry you across the river. When you reach the other shore—the feeling—you leave the raft. The feeling is the destination."
    },
    {
        id: 79,
        name: "Humming of the Earth",
        sanskrit: "Prithvi Nada",
        meaning: "Feel the deep, low hum of the earth beneath you, and let it resonate in your being.",
        howTo: "Lie on the earth or sit with your hands on the ground. Feel the deep, low vibration of the earth. It is always there—a constant hum. Let your body resonate with it.",
        essence: "The earth is not dead—it is alive, vibrating. When you tune into that vibration, you tune into life itself. You are the earth's hum made conscious.",
        steps: [
            "Lie on the earth or sit with hands on the ground.",
            "Close your eyes. Feel the earth beneath you.",
            "Listen for the deep, low hum—not with ears, but with your body.",
            "Let your body vibrate with the earth.",
            "Feel yourself as part of the earth's resonance.",
            "Rest in that vibration."
        ],
        postureMudra: "Shavasana or sitting with hands on ground. Bhumisparsha Mudra (hand touching earth).",
        benefits: ["Grounding", "Connection with earth", "Stability"],
        category: "Sound",
        oshoInsight: "The earth hums with life. That hum is your hum. When you feel it, you are no longer walking on the earth—you are walking as the earth. You are the earth dancing."
    },
    {
        id: 80,
        name: "Silence Between Words",
        sanskrit: "Vak Antara",
        meaning: "In conversation, notice the silence between words, and rest there.",
        howTo: "While talking with someone, become aware of the gaps between words. Rest in those gaps. Then, when you speak, let your words arise from that silence.",
        essence: "Words are born in silence and return to silence. When you speak from silence, your words carry presence. When you listen from silence, you hear not just words but the speaker's being.",
        steps: [
            "In conversation, stay aware of the pauses.",
            "Rest in the silence between sentences.",
            "Let your own words arise from that silence.",
            "Listen to others from that silence.",
            "Let the silence be the ground of your communication.",
            "Return to silence often."
        ],
        postureMudra: "Any posture. Hands in Gyan Mudra.",
        benefits: ["Mindful communication", "Presence in speech", "Deep listening"],
        category: "Silence",
        oshoInsight: "Words are the waves; silence is the ocean. Speak from the ocean, and your words will have depth. Listen from the ocean, and you will hear not just words but the truth."
    },

    // ==================== SECTION 5: ENERGY & CHAKRA TECHNIQUES (81-100) ====================
    {
        id: 81,
        name: "Prana Rising",
        sanskrit: "Pranotthana",
        meaning: "Feel the life energy rising from the feet to the crown, and beyond.",
        howTo: "Sit with eyes closed. Feel the energy in your feet. Let it rise slowly, filling the legs, the body, the arms, the head. At the crown, let it flow out, connecting you to the infinite.",
        essence: "Prana is the energy of life. It moves through you constantly, but you are usually unaware of it. When you become aware, you become aligned with the flow of existence itself.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Feel the energy in your feet, the soles, the toes.",
            "Let it rise to the ankles, calves, knees.",
            "Continue upward: thighs, pelvis, abdomen, chest.",
            "Through the arms, shoulders, neck, head.",
            "At the crown, let it flow out like a fountain.",
            "Feel yourself as a fountain of prana."
        ],
        postureMudra: "Sukhasana or Padmasana. Hands in Gyan Mudra.",
        benefits: ["Awakens prana", "Increases vitality", "Clears energy blockages"],
        category: "Energy",
        oshoInsight: "You are not a body with energy—you are energy that has taken form. Feel that energy, and you feel the life that animates all things. You are that life."
    },
    {
        id: 82,
        name: "Prana Descending",
        sanskrit: "Pranavapana",
        meaning: "Feel the energy descending from the crown to the feet, grounding you.",
        howTo: "Sit with eyes closed. Feel energy entering through the crown of your head. Let it flow down through the body, filling every cell, and out through the feet into the earth.",
        essence: "Energy flows both ways—rising and descending. Rising connects you to the infinite; descending grounds you in the earth. Both are needed for balance, for wholeness.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Feel energy entering the crown of your head.",
            "Let it flow down through the head, neck, shoulders.",
            "Continue down through the chest, abdomen, legs.",
            "Let it flow out through the feet into the earth.",
            "Feel yourself grounded, connected to the earth."
        ],
        postureMudra: "Sukhasana. Hands on knees, palms down.",
        benefits: ["Grounding", "Stability", "Connection to earth"],
        category: "Energy",
        oshoInsight: "The tree reaches to the sky and roots into the earth. So too must you. Rise to the infinite, root in the finite. In this balance, you are whole."
    },
    {
        id: 83,
        name: "Spine as Channel",
        sanskrit: "Meru Danda",
        meaning: "Feel the spine as a hollow channel, with energy flowing freely through it.",
        howTo: "Sit with spine straight. Visualize the spine as a luminous channel. Feel energy moving up and down this channel with each breath. Let it flow freely, without obstruction.",
        essence: "The spine is the axis of the body, the central channel of energy. When it is clear, energy flows freely, and consciousness expands. When it is blocked, you are blocked.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Visualize the spine as a column of light.",
            "Feel energy moving up the spine with inhalation.",
            "Feel energy moving down the spine with exhalation.",
            "Let the flow be smooth, continuous, effortless.",
            "Rest in the flowing energy."
        ],
        postureMudra: "Padmasana or Siddhasana. Merudanda Mudra (hands in lap, spine straight).",
        benefits: ["Clears spinal energy", "Awakens kundalini", "Central channel balance"],
        category: "Energy",
        oshoInsight: "The spine is the mountain of the body. Energy flows along it like a river. When the river flows freely, you are alive. When it is blocked, you are dead. Be the river."
    },
    {
        id: 84,
        name: "Warmth at the Navel",
        sanskrit: "Nabhi Tapa",
        meaning: "Feel a warmth at the navel, like a small sun, radiating energy.",
        howTo: "Sit with eyes closed. Focus on the navel center. Feel a warmth there, like a small sun. Let it grow, radiating warmth throughout the body, filling you with vitality.",
        essence: "The navel is the center of vitality, the place where life enters the body. When it is warm, alive, you are full of energy. When it is cold, you are depleted.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Focus attention on the navel, about two inches below the navel.",
            "Feel a warmth there, like a small sun.",
            "Let the warmth grow, expand, radiate.",
            "Feel it filling the abdomen, the whole body.",
            "Rest in this vital warmth."
        ],
        postureMudra: "Any posture. Nabhi Mudra (hands on navel).",
        benefits: ["Increases vitality", "Digestive health", "Center of life force"],
        category: "Energy",
        oshoInsight: "The navel is your first connection to life. It is where you were fed, where you were connected to your mother. Reconnect to it, and you reconnect to the source of life."
    },
    {
        id: 85,
        name: "Heart as Sun",
        sanskrit: "Hridaya Surya",
        meaning: "Feel the heart as a sun, radiating light and love in all directions.",
        howTo: "Sit with eyes closed. Focus on the heart center. Feel it as a sun, bright and warm. Let its light radiate outward, filling your body, then the room, then the universe.",
        essence: "The heart is not a pump—it is a sun. It radiates love, compassion, warmth. When you feel this radiance, you are not a separate being—you are a source of light.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Focus on the center of the chest, the heart.",
            "Feel it as a small sun, warm and bright.",
            "Let it radiate light in all directions.",
            "Feel the light filling your chest, your whole body.",
            "Let it expand outward, touching all beings.",
            "Rest as that radiant heart."
        ],
        postureMudra: "Any posture. Anjali Mudra at heart or hands in lap.",
        benefits: ["Heart-opening", "Compassion", "Radiant love"],
        category: "Heart",
        oshoInsight: "The sun does not decide to shine—it shines. Your heart is the same. It does not decide to love—it loves. Let it shine. Let it love. That is its nature."
    },
    {
        id: 86,
        name: "Third Eye as Door",
        sanskrit: "Ajna Dvara",
        meaning: "Focus between the eyebrows, feeling it as a door to higher consciousness.",
        howTo: "Sit with eyes closed. Bring attention to the point between the eyebrows. Feel it as a door, a portal. As you focus, feel it opening, and consciousness flowing through.",
        essence: "The third eye is the door between the personal and the universal. When it opens, you see not with the eyes, but with the whole being. You see the truth.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Bring awareness to the point between the eyebrows.",
            "Feel it as a door, a portal.",
            "Let your attention rest there, gently.",
            "Feel it opening, expanding.",
            "See not with the eyes, but with awareness itself.",
            "Rest in the open third eye."
        ],
        postureMudra: "Sukhasana or Padmasana. Shambhavi Mudra (gazing at third eye).",
        benefits: ["Intuition", "Inner vision", "Higher consciousness"],
        category: "Third Eye",
        oshoInsight: "The third eye is the eye of the soul. When it opens, you see what has always been there but was hidden by the two physical eyes. Open it, and you see the truth."
    },
    {
        id: 87,
        name: "Crown as Lotus",
        sanskrit: "Sahasrara Kamala",
        meaning: "Feel the crown of the head as a thousand-petaled lotus, opening to the infinite.",
        howTo: "Sit with eyes closed. Focus on the crown of the head. Feel it as a lotus bud, closed. With each breath, feel it opening, petal by petal. When fully open, feel the infinite flowing in.",
        essence: "The crown is the gateway to transcendence. When it opens, you are no longer a person—you are a vessel for the infinite. The lotus opens to receive the sun.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Focus on the crown of the head.",
            "Feel it as a lotus bud, closed.",
            "With each breath, feel petals opening.",
            "Let it open fully, like a flower in the sun.",
            "Feel the infinite flowing in through the open lotus.",
            "Rest as that openness."
        ],
        postureMudra: "Padmasana or Siddhasana. Brahma Mudra (hands in lap, awareness at crown).",
        benefits: ["Transcendence", "Union with infinite", "Cosmic consciousness"],
        category: "Crown",
        oshoInsight: "The lotus opens to the sun. Your crown opens to the infinite. When it opens, you are no longer a flower—you are the sun itself, shining through the flower."
    },
    {
        id: 88,
        name: "Spiral Energy",
        sanskrit: "Kundalini Bhramari",
        meaning: "Feel energy spiraling up the spine, like a snake uncoiling.",
        howTo: "Sit with spine straight. Feel a spiral of energy at the base of the spine. Watch it begin to move upward, spiraling around the spine. Let it rise slowly, opening each center.",
        essence: "Kundalini is not a force to be controlled—it is a movement to be allowed. When awareness rests at the base, the energy awakens. When it spirals upward, consciousness expands.",
        steps: [
            "Sit in Siddhasana or Padmasana. Close your eyes.",
            "Feel a spiral of energy at the base of the spine.",
            "Watch it begin to move, spiraling upward.",
            "Let it spiral around the spine, through each chakra.",
            "At the crown, let it spiral out into infinity.",
            "Rest in the expanded awareness."
        ],
        postureMudra: "Siddhasana or Padmasana. Khechari Mudra.",
        benefits: ["Awakens kundalini", "Expands consciousness", "Spiral of evolution"],
        category: "Energy",
        oshoInsight: "The serpent sleeps at the base. When it awakens, it spirals upward. It is not a snake—it is your own consciousness, coiling and uncoiling, rising to meet itself."
    },
    {
        id: 89,
        name: "Five Pranas",
        sanskrit: "Pancha Prana",
        meaning: "Feel the five life energies: prana (inhalation), apana (exhalation), samana (digestion), vyana (circulation), udana (expression).",
        howTo: "Become aware of the five functions of prana: the inward breath, the outward breath, the digestive fire, the circulating energy, the upward-moving expression. Feel them as one unified life force.",
        essence: "The one prana manifests in five functions. When you know them as one, you know the unity of all life processes. You are not doing them—life is doing them through you.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Feel the inward breath (prana).",
            "Feel the outward breath (apana).",
            "Feel the digestive fire (samana) at the navel.",
            "Feel the circulating energy (vyana) throughout the body.",
            "Feel the upward-moving expression (udana) in the throat.",
            "Know them all as one life force moving through you."
        ],
        postureMudra: "Any posture. Hands in Gyan Mudra.",
        benefits: ["Awareness of life processes", "Integration of functions", "Unity of being"],
        category: "Energy",
        oshoInsight: "The one breath becomes five, like a river becoming streams. But the streams are the river, and the river is you. Know the one in the many, and you know yourself."
    },
    {
        id: 90,
        name: "Subtle Body",
        sanskrit: "Sukshma Sharira",
        meaning: "Feel the body as energy, not as flesh and bone.",
        howTo: "Close your eyes. Feel your body from within. Instead of bones and muscles, feel it as a field of energy—vibrating, alive, fluid. Let the solid dissolve into vibration.",
        essence: "What you call 'body' is not solid matter—it is energy vibrating. When you feel it as energy, you feel the truth: you are not a thing, but a process, a vibration, a dance.",
        steps: [
            "Sit or lie comfortably. Close your eyes.",
            "Feel your body from within, not as form but as sensation.",
            "Let go of the image of bones, muscles, organs.",
            "Feel it as a field of energy, vibrating, flowing.",
            "Let the boundaries of the body dissolve.",
            "Feel yourself as energy, as vibration, as life."
        ],
        postureMudra: "Shavasana or Sukhasana. Hands relaxed.",
        benefits: ["Dissolves body identification", "Subtle body awareness", "Energy perception"],
        category: "Energy",
        oshoInsight: "The body is not a solid thing—it is a river of energy. You cannot step into the same river twice, and you cannot be the same body twice. Flow with the river."
    },
    {
        id: 91,
        name: "Energy in the Fingertips",
        sanskrit: "Anguli Jyoti",
        meaning: "Feel energy radiating from the fingertips, connecting you to the universe.",
        howTo: "Sit with hands open, palms up. Feel energy flowing from the heart to the fingertips. Let it radiate from the fingertips, connecting you to everything around you.",
        essence: "Your hands are not just tools—they are antennas, radiating energy. When you feel that radiation, you feel your connection to all that is. Your fingertips touch the universe.",
        steps: [
            "Sit comfortably. Place hands on knees, palms up.",
            "Feel energy flowing from the heart down the arms.",
            "Feel it reaching the fingertips, radiating outward.",
            "Feel the connection to the air, to space, to all that is.",
            "Let your fingertips be the source of that connection.",
            "Rest in the radiance."
        ],
        postureMudra: "Any posture. Hands open, palms up. Chin Mudra.",
        benefits: ["Subtle sensitivity", "Connection to environment", "Healing energy"],
        category: "Energy",
        oshoInsight: "The fingers are the end of the body, but the beginning of the world. Through them, you touch and are touched. Feel that connection, and you feel the web of life."
    },
    {
        id: 92,
        name: "Energy in the Feet",
        sanskrit: "Pada Jyoti",
        meaning: "Feel energy radiating from the soles of the feet, grounding you and connecting you to the earth.",
        howTo: "Stand or sit. Feel energy flowing down from the body to the soles of the feet. Let it radiate into the earth, and feel the earth's energy rising back to meet it.",
        essence: "The feet are your connection to the earth. When you feel that connection, you are no longer walking on the earth—you are walking with the earth. You are earth, walking.",
        steps: [
            "Stand or sit with feet flat on the ground.",
            "Feel energy flowing down to the soles of the feet.",
            "Let it radiate into the earth below.",
            "Feel the earth's energy rising to meet it.",
            "Feel the exchange, the connection, the grounding.",
            "Rest in the connection."
        ],
        postureMudra: "Tadasana or sitting with feet flat. Hands at sides.",
        benefits: ["Grounding", "Stability", "Connection to earth"],
        category: "Energy",
        oshoInsight: "Your feet are where you meet the earth. Through them, you are held, supported, grounded. Feel that support, and you feel the earth holding you. You are never alone."
    },
    {
        id: 93,
        name: "Aura Expansion",
        sanskrit: "Prabha Mandala",
        meaning: "Feel your energy field expanding beyond your body, touching everything around you.",
        howTo: "Sit with eyes closed. Feel the energy field around your body. Let it expand, extending beyond the skin, beyond the room, beyond all boundaries. Feel yourself as a field, not a form.",
        essence: "You are not contained by your skin—you extend in all directions. Your energy field is infinite. When you feel it, you feel your true size: not a body, but a presence.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Feel the energy field immediately around your body.",
            "Let it expand, extending further and further.",
            "Let it fill the room, the building, the city.",
            "Let it expand to the earth, the sky, the universe.",
            "Feel yourself as that expansive field.",
            "Rest as the field."
        ],
        postureMudra: "Any posture. Hands open, palms up.",
        benefits: ["Expands sense of self", "Dissolves boundaries", "Cosmic consciousness"],
        category: "Energy",
        oshoInsight: "Your skin is not your boundary—it is your interface. You extend beyond it in all directions. Feel that extension, and you feel the truth: you are as vast as the universe."
    },
    {
        id: 94,
        name: "Energy Vortex",
        sanskrit: "Bhramari Chakra",
        meaning: "Feel energy swirling in vortices at each chakra, like whirlpools of light.",
        howTo: "Focus on each chakra in turn. Feel it as a vortex, a whirlpool of energy, spinning. Let it spin faster, clearer, brighter. Feel the energy flowing through each center.",
        essence: "Each chakra is a vortex, a point where energy concentrates and distributes. When they spin freely, energy flows. When they are clear, consciousness expands.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Focus on the base chakra. Feel it as a spinning vortex.",
            "Let it spin, feel the energy moving.",
            "Move upward to each chakra, feeling each vortex.",
            "See them as spinning wheels of light.",
            "Feel the energy flowing through all of them, connected."
        ],
        postureMudra: "Padmasana or Sukhasana. Hands in lap.",
        benefits: ["Activates chakras", "Energy flow", "Clears blockages"],
        category: "Energy",
        oshoInsight: "The chakras are wheels, spinning, creating energy. When they spin, you are alive. When they stop, you are dead. Keep them spinning, keep them alive, and you are a vortex of consciousness."
    },
    {
        id: 95,
        name: "Energy and Sound",
        sanskrit: "Nada Prana",
        meaning: "Feel the vibration of sound as energy, and energy as vibration.",
        howTo: "Chant a mantra. As you chant, feel the vibration not just in the throat, but in the whole body. Feel it as energy moving, vibrating, awakening. Sound and energy are one.",
        essence: "Sound is vibration, and vibration is energy. When you chant, you are not just making sound—you are moving energy, awakening consciousness, calling yourself to life.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Chant a mantra (Om, Ram, or any).",
            "Feel the vibration in your throat, your chest.",
            "Let it spread to the whole body, vibrating every cell.",
            "Feel the energy moving with the sound.",
            "Rest in the vibration after the sound stops."
        ],
        postureMudra: "Any posture. Hands in Gyan Mudra.",
        benefits: ["Union of sound and energy", "Awakening through vibration", "Deep resonance"],
        category: "Energy",
        oshoInsight: "Sound is energy made audible. Energy is sound made silent. When you chant, you are the bridge between the audible and the silent, the manifest and the unmanifest."
    },
    {
        id: 96,
        name: "Energy as Light",
        sanskrit: "Prakasha Prana",
        meaning: "Feel energy as light—radiant, luminous, illuminating everything.",
        howTo: "Sit with eyes closed. Feel the energy in your body. Now see it as light—bright, clear, radiant. Let the light grow, illuminating every cell, every thought, every feeling.",
        essence: "Energy is not just force—it is light. Consciousness is not just awareness—it is radiance. When you feel yourself as light, you feel yourself as consciousness itself.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Feel the energy in your body, subtle and alive.",
            "Now see it as light, as radiance.",
            "Let the light grow, brighter and brighter.",
            "Feel it illuminating your whole being.",
            "Be the light."
        ],
        postureMudra: "Any posture. Jyoti Mudra (hands forming circle, thumbs touching).",
        benefits: ["Radiant awareness", "Illumination of being", "Light consciousness"],
        category: "Energy",
        oshoInsight: "You are not a body with a light—you are light that has taken form. When you feel that, you see through the darkness of ignorance. You are the light you seek."
    },
    {
        id: 97,
        name: "Energy and Stillness",
        sanskrit: "Sthira Prana",
        meaning: "Feel the energy within, but let it be still—not moving, but present.",
        howTo: "Sit with eyes closed. Feel the energy in your body. Now let it be still—not flowing, not moving, just present. Rest in the stillness that contains all energy.",
        essence: "Energy is movement, but movement arises from stillness. In the depths of your being, there is a stillness that is the source of all movement. Rest there.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Feel the energy in your body, the aliveness.",
            "Now let it settle, let it become still.",
            "Do not suppress it—let it rest naturally.",
            "Feel the stillness beneath the movement.",
            "Rest in that stillness."
        ],
        postureMudra: "Any posture. Dhyana Mudra.",
        benefits: ["Deep stillness", "Source of energy", "Rest in the source"],
        category: "Energy",
        oshoInsight: "The ocean is in constant motion, but the depths are still. You are like that: the surface moves, but the depths are silent. Find the depths, and you find peace."
    },
    {
        id: 98,
        name: "Energy as Bliss",
        sanskrit: "Ananda Prana",
        meaning: "Feel energy as bliss—not pleasure, but the joy of being alive.",
        howTo: "Sit with eyes closed. Feel the energy in your body. Notice the quality of that energy—it is not neutral, it is blissful. It is the joy of existence, the delight of being.",
        essence: "Life is not just movement—it is joy. Consciousness is not just awareness—it is bliss. When you feel your own energy, you feel the joy that is your true nature.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Feel the energy in your body, the aliveness.",
            "Notice its quality—not just movement, but joy.",
            "Let that joy expand, fill your whole being.",
            "Feel yourself as bliss, as joy, as delight.",
            "Rest in that bliss."
        ],
        postureMudra: "Any posture. Ananda Mudra (hands in lap, palms up, one over the other).",
        benefits: ["Experience of bliss", "Joy of being", "Ananda"],
        category: "Energy",
        oshoInsight: "Bliss is not something you achieve—it is what you are when you stop blocking yourself. Feel your own energy, and you feel the bliss that has always been there."
    },
    {
        id: 99,
        name: "Sushumna Awakening",
        sanskrit: "Sushumna Bodhana",
        meaning: "Feel the central channel of the spine, and let energy flow freely through it.",
        howTo: "Sit with spine straight. Focus on the central channel running from the base to the crown. Feel energy rising and falling freely through this channel, without obstruction.",
        essence: "Sushumna is the path of balance, the middle way. When energy flows through it, you are neither caught in the left nor the right, the past nor the future, the good nor the bad. You are free.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Feel the central channel from base to crown.",
            "Let energy rise through it with inhalation.",
            "Let energy fall through it with exhalation.",
            "Feel the flow, smooth and unobstructed.",
            "Rest in the balanced flow."
        ],
        postureMudra: "Siddhasana or Padmasana. Gyan Mudra.",
        benefits: ["Balance", "Central channel flow", "Awakening"],
        category: "Energy",
        oshoInsight: "The left is the past, the right is the future. The center is the now. Walk the center, and you walk in eternity. Let energy flow in the center, and you live in the now."
    },
    {
        id: 100,
        name: "Ida and Pingala",
        sanskrit: "Ida Pingala",
        meaning: "Feel the two side channels—ida (left, moon, cooling) and pingala (right, sun, warming)—and let them balance.",
        howTo: "Sit with eyes closed. Feel the left channel, ida, running from the base to the left nostril. Feel the right channel, pingala, running from the base to the right nostril. Let them balance, let them become equal.",
        essence: "Ida is the feminine, the receptive, the cooling. Pingala is the masculine, the active, the warming. When they balance, you are whole—neither too passive nor too active, but fully alive.",
        steps: [
            "Sit with spine straight. Close your eyes.",
            "Feel the left channel, ida, cool and receptive.",
            "Feel the right channel, pingala, warm and active.",
            "Let them flow equally, in balance.",
            "Feel the breath moving through both nostrils equally.",
            "Rest in the balance."
        ],
        postureMudra: "Any posture. Gyan Mudra.",
        benefits: ["Balance of masculine and feminine", "Harmony", "Whole being"],
        category: "Energy",
        oshoInsight: "The moon and the sun dance within you. When they dance together, you are whole. When one dominates, you are out of balance. Let them dance, and you become the dance."
    },

    // ==================== SECTION 6: EMPTINESS & TRANSCENDENCE TECHNIQUES (101-112) ====================
    {
        id: 101,
        name: "Enter the Void",
        sanskrit: "Shunya Pravesha",
        meaning: "Enter the space that is supportless, eternal, still.",
        howTo: "Let go of all supports—no mantra, no visualization, no breath control. Simply fall into the emptiness that is always present. Do not resist the fear. Let it consume you.",
        essence: "The mind fears emptiness because it knows it will disappear there. But you are not the mind. When you enter the void, the mind disappears, and you—the real you—are revealed.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Let go of all techniques, all supports, all effort.",
            "Allow yourself to fall into the emptiness within.",
            "Do not resist the fear or the nothingness.",
            "Be the space itself—supportless, eternal, still.",
            "Rest in this vastness."
        ],
        postureMudra: "Any posture. Hands open and relaxed.",
        benefits: ["Direct experience of pure consciousness", "Freedom from all supports", "Ultimate meditation"],
        category: "Emptiness",
        oshoInsight: "The void is not empty—it is full of the infinite. But it appears empty to the mind because the mind cannot grasp it. Let the mind go, and you will see."
    },
    {
        id: 102,
        name: "Supportless",
        sanskrit: "Niralambana",
        meaning: "Rest in the state of no support, no object, no focus.",
        howTo: "Do not focus on anything. Do not hold onto anything. Let the mind be without any object, like a sky without clouds. Rest in this objectless awareness.",
        essence: "The mind is used to holding onto something—a thought, a feeling, a sensation. When you let go of all objects, the mind dissolves, and what remains is pure awareness.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Let go of any focus, any object of attention.",
            "Do not meditate on anything, not even emptiness.",
            "Simply rest, without support, without object.",
            "When the mind reaches for something, let it go.",
            "Rest in the objectless, supportless awareness."
        ],
        postureMudra: "Any posture. Dhyana Mudra.",
        benefits: ["Objectless awareness", "Pure consciousness", "Beyond technique"],
        category: "Emptiness",
        oshoInsight: "The bird needs a branch to rest on. You need nothing. Rest in your own nature, without support, without object. That is true rest."
    },
    {
        id: 103,
        name: "Eternal Stillness",
        sanskrit: "Nitya Shanti",
        meaning: "Rest in the stillness that has no beginning and no end.",
        howTo: "Sit and feel the stillness beneath all movement. It is always there, unchanging, eternal. Do not try to create it—simply recognize it. It is your true nature.",
        essence: "Movement comes and goes, but stillness remains. Thoughts come and go, but awareness remains. Find the stillness that has always been there, and you find yourself.",
        steps: [
            "Sit comfortably. Close your eyes.",
            "Notice the stillness beneath all sounds.",
            "Notice the stillness beneath all thoughts.",
            "Notice the stillness beneath all sensations.",
            "Rest in that stillness.",
            "Know that it has no beginning and no end."
        ],
        postureMudra: "Any posture. Dhyana Mudra.",
        benefits: ["Eternal peace", "Beyond time", "True nature"],
        category: "Emptiness",
        oshoInsight: "Stillness is not the absence of movement—it is the ground of all movement. Find the ground, and you are no longer shaken by the movement. You are the stillness."
    },
    {
        id: 104,
        name: "Neither This nor That",
        sanskrit: "Neti Neti",
        meaning: "Negate all that can be named, all that can be known. What remains is you.",
        howTo: "Go through everything you can experience: 'I am not this thought, not this feeling, not this sensation, not this body, not this mind.' When all is negated, what remains is the self.",
        essence: "Neti neti is the great cleansing. It removes all identifications, all limitations. When the house is empty, the owner appears. When you are not anything, you are everything.",
        steps: [
            "Sit quietly. Close your eyes.",
            "Take each thought: '
