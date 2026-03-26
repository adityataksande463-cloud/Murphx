/**
 * Vigyan Bhairav - 112 Portals to Infinity
 * Professional Script
 * Spiritual platform combining Tantra meditation, breathwork, and cosmic wisdom
 */

(function() {
    'use strict';

    // ======================================================
    // DATA MODELS
    // ======================================================

    // 112 authentic techniques (generated)
    const techniques = {};

    const techniqueNames = [
        "Witnessing the Breath","Awareness of the Gap Between Breaths","Breath Traveling Through the Spine","Concentration on the Third Eye","Witnessing Thoughts",
        "Listening to Inner Resonance","Gazing into Darkness","Heart Center Meditation","Body Sensation Awareness","Slow Breath Meditation",
        "Walking Awareness","Observation of Emotions","Listening to Silence","Whole-Body Awareness","Expansion of Awareness",
        "Spine Awareness","Total Relaxation","Edge of Sleep","Momentary Suspension","Perceiving the Space Between",
        "Feeling the Void","Embodied Light","Dissolving into Sound","Touching the Sky","Savoring the Source",
        "Radiating Love","Itching and Tingling","Flame Contemplation","Pulse of Life","Empty Sky",
        "Luminous Void","Elemental Contact","Breath as Cosmic Wind","Stillness Between Heartbeats","Spontaneous Satori",
        "Scent of the Absolute","Expanding to Horizon","Centering in Navel","Cave of the Heart","Unstruck Sound",
        "Shakti Rising","Kundalini Awakening","Absorption in Color","Inner Moon","Sun in Solar Plexus",
        "Void Gazing","Darkness Beyond Form","Guru's Grace","Dissolving Ego","Surrendering to What Is",
        "Non-Doing","Effortless Being","Resting in Natural State","Unconditional Love","Compassion Meditation",
        "Joy Unbound","Equanimity","Forgiveness Practice","Gratitude Shower","Body as Temple",
        "Skeleton Awareness","Dissolving Boundaries","Elemental Purification","Fire Offering Within","Waterfall of Grace",
        "Mountain Stillness","Wind of Change","Space Unbounded","Earth Rooting","Cosmic Dance",
        "Timeless Awareness","Dreamlike Illusion","Lucid Waking","Sleep as Yoga","Twilight Contemplation",
        "Midnight Vigil","Dawn Awakening","Noon Radiance","Dusk Surrender","Seasons Within",
        "Age as Wisdom","Death Awareness","Rebirth Visualization","Ancestor Connection","Guardian Spirits",
        "Divine Child","Inner Mother","Cosmic Father","Friend of All","Teacher Within",
        "Healer's Touch","Warrior's Courage","Sage's Silence","Lover's Embrace","Creator's Joy",
        "Destroyer's Clarity","Preserver's Patience","Dancer's Grace","Beggar's Humility","King's Sovereignty",
        "Jester's Laughter","Fool's Leap","Seeker's Quest","Finder's Rest","Praise to the Void",
        "Hymn to the Heart","Mantra of Light","Seed Syllable","Whispered Prayer","Silent Reverence",
        "Offering of Breath","Gift of Presence","Service to All","Union with All"
    ];

    const categories = ['breath','body','heart','sound','gaze','void','energy','light','touch','space','stillness','emotion','awareness','devotion'];
    const postures = ['Sukhasana','Padmasana','Vajrasana','Shavasana','Siddhasana','Standing','Walking','Ardha Padmasana'];
    const mudrasList = ['Chin mudra','Jnana mudra','Dhyana mudra','Bhairavi mudra','Shambhavi mudra','Khechari mudra','Yoni mudra','Viparita Karani'];
    const breaths = ['Natural','Ujjayi','Nadi Shodhana','Kapalabhati','Sama Vritti','Dirga','Bhastrika','Visualized'];

    for (let i = 1; i <= 112; i++) {
        const idx = i-1;
        const cat = categories[idx % categories.length];
        const name = techniqueNames[idx % techniqueNames.length];
        const sanskrit = `Sūtra ${i}: ${name.replace(/ /g, '')}`;
        const essence = `A profound ${cat} practice that opens the door to direct experience.`;
        const wisdom = `Osho: "In this technique, you become the witness. Let the experience wash over you."`;
        const posture = postures[idx % postures.length];
        const mudra = mudrasList[idx % mudrasList.length];
        const breath = breaths[idx % breaths.length];
        const duration = `${10 + (idx % 15)}-${20 + (idx % 15)} min`;
        const steps = [
            `Find a comfortable ${posture.toLowerCase()} posture.`,
            `Allow the body to relax completely.`,
            `Bring awareness to ${cat === 'breath' ? 'the natural flow of breath' : cat === 'sound' ? 'subtle sounds around you' : cat === 'gaze' ? 'a single point' : 'the chosen object of meditation'}.`,
            `When distracted, gently return without judgment.`,
            `Stay present for the duration.`
        ];
        const benefits = {
            student: "enhanced focus and memory",
            employee: "reduced stress and increased clarity",
            seeker: "deeper connection to inner self"
        };
        techniques[i] = { id:i, name, sanskrit, category:cat, essence, wisdom, posture, mudra, breath, duration, steps, benefits };
    }

    // Override key techniques with authentic details
    techniques[1] = {
        id:1, name:"Witnessing the Breath", sanskrit:"Śvāsa–Praśvāsa Dharana", category:"breath",
        essence:"Breath is the bridge between body and mind.",
        wisdom:"Osho: 'Just watch the breath. Don't control it.'",
        posture:"Sukhasana", mudra:"Chin mudra", breath:"Natural", duration:"10-20 min",
        steps:["Sit comfortably.","Close eyes.","Observe natural breath.","Return when distracted."],
        benefits:{ student:"concentration", employee:"stress relief", seeker:"calm mind" }
    };
    techniques[4] = {
        id:4, name:"Concentration on the Third Eye", sanskrit:"Bhrūmadhya Dharana", category:"gaze",
        essence:"Attention becomes powerful when gathered in one point.",
        wisdom:"Osho: 'Between the eyebrows is the center of intuition.'",
        posture:"Comfortable", mudra:"Jnana mudra", breath:"Natural", duration:"10-20 min",
        steps:["Close eyes.","Focus between eyebrows.","Return when distracted."],
        benefits:{ student:"memory", employee:"stability", seeker:"meditation depth" }
    };

    // Professions / Archetypes
    const professions = [
        { name:"Student", icon:"fa-graduation-cap", desc:"focus · exams", fullDesc:"Ideal for students seeking improved concentration, memory retention, and exam performance.", keywords:["focus","concentration","memory","exam","study"] },
        { name:"Employee", icon:"fa-briefcase", desc:"stress · work-life", fullDesc:"Helps manage workplace stress, improve work-life balance, and maintain calm under pressure.", keywords:["stress","work","balance","employee"] },
        { name:"CEO", icon:"fa-chart-line", desc:"clarity · decisions", fullDesc:"Enhances clarity of thought, sharp decision-making, and leadership presence.", keywords:["clarity","decision","leadership"] },
        { name:"Seeker", icon:"fa-infinity", desc:"spiritual path", fullDesc:"For those on a spiritual journey—deepens awareness, expands consciousness, and opens the heart.", keywords:["spiritual","awareness","consciousness"] },
        { name:"Anxious", icon:"fa-heartbeat", desc:"calm · anxiety", fullDesc:"Soothes anxiety, calms the nervous system, and restores inner peace.", keywords:["anxiety","calm","fear","peace"] },
        { name:"Overthinker", icon:"fa-brain", desc:"still mind", fullDesc:"Quiets mental chatter, stops overthinking, and brings stillness to the restless mind.", keywords:["overthink","mind","thoughts","stillness"] },
        { name:"Healthcare", icon:"fa-hospital-user", desc:"compassion", fullDesc:"Nurtures compassion, emotional resilience, and healing presence for caregivers.", keywords:["compassion","healing","care"] },
        { name:"Teacher", icon:"fa-chalkboard", desc:"patience", fullDesc:"Cultivates patience, empathy, and the ability to inspire others.", keywords:["patience","teach","guide"] },
        { name:"Developer", icon:"fa-laptop-code", desc:"focus", fullDesc:"Sharpens mental focus, reduces burnout, and enhances problem-solving skills.", keywords:["focus","code","mental clarity"] },
        { name:"Artist", icon:"fa-paint-brush", desc:"flow", fullDesc:"Unlocks creative flow, dissolves blocks, and connects with inspiration.", keywords:["creativity","flow","inspiration"] },
        { name:"Parent", icon:"fa-child", desc:"self-care", fullDesc:"Balances nurturing others with self-care, reducing parental stress and increasing presence.", keywords:["parent","care","balance","self-care"] },
        { name:"Entrepreneur", icon:"fa-rocket", desc:"resilience", fullDesc:"Builds resilience, mental toughness, and the ability to pivot under pressure.", keywords:["resilience","drive","stress"] },
        { name:"FirstResponder", icon:"fa-fire-extinguisher", desc:"grounding", fullDesc:"Provides grounding techniques to process trauma and maintain stability in high-stress roles.", keywords:["grounding","trauma","calm"] },
        { name:"Retiree", icon:"fa-umbrella-beach", desc:"peace", fullDesc:"Invites deep relaxation, contentment, and the wisdom of aging gracefully.", keywords:["peace","relaxation","wisdom"] },
        { name:"Freelancer", icon:"fa-user-tie", desc:"balance", fullDesc:"Helps balance work deadlines with personal well-being, preventing burnout.", keywords:["balance","work-life","focus"] },
        { name:"Athlete", icon:"fa-running", desc:"performance", fullDesc:"Optimizes focus, body awareness, and mental toughness for peak performance.", keywords:["performance","focus","body awareness"] }
    ];

    // Mudras data (spiritual depth)
    const mudrasData = [
        { name:"Bhumisparsa", sanskrit:"Bhūmisparśa Mudrā", meaning:"Earth-Touching Gesture", how:"Sit in meditation posture. Left hand rests in lap. Right hand reaches down and touches the earth.", essence:"When the mind disappears, the whole existence becomes your witness. Buddha touched the earth not to ask for testimony, but to declare his unity with existence. You are not separate from the earth; your body is dust of the same soil. The gesture says: 'I belong to existence. Existence supports my awakening.'", meditation:"Sit silently. Touch the ground. Feel that the whole universe supports your consciousness. A deep grounding meditation.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M50,70 L50,30 M30,50 L70,50 M40,60 L60,40 M40,40 L60,60"/><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor"/><path d="M35,45 L45,55 M55,45 L65,55" stroke="currentColor"/></svg>` },
        { name:"Dhyana", sanskrit:"Dhyāna Mudrā", meaning:"Meditation Gesture", how:"Sit in lotus or any meditation posture. Both hands rest in lap, right hand over left. Thumbs lightly touching, forming a triangle.", essence:"This mudra represents perfect equilibrium. Meditation is not concentration; it is relaxation into your own being. The triangle formed by the thumbs represents body, mind, and consciousness. When these three become balanced, awareness blooms naturally.", meditation:"Hold the mudra, breathe slowly, observe thoughts. Don't control anything. Slowly you will notice a gap between thoughts. That gap is the doorway to inner silence.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M35,65 L65,65 M40,55 L60,55 M45,45 L55,45"/><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor"/><circle cx="50" cy="50" r="15" fill="none" stroke="currentColor"/></svg>` },
        { name:"Abhaya", sanskrit:"Abhaya Mudrā", meaning:"Fearlessness Gesture", how:"Raise the right hand. Palm faces outward, fingers pointing upward.", essence:"Fear exists because the ego exists. The ego fears death, rejection, loss, uncertainty. When you realize your true consciousness, fear begins to dissolve. The gesture silently says: 'Do not be afraid.' Not because danger does not exist—but because your awareness is deeper than fear.", meditation:"Raise the hand in Abhaya Mudra and feel life flowing through you, existence supporting you. It creates deep psychological courage.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M40,60 L60,60 M50,70 L50,40"/><path d="M35,50 L45,50 M55,50 L65,50"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor"/></svg>` },
        { name:"Dharmachakra", sanskrit:"Dharmacakra Mudrā", meaning:"Turning the Wheel of Dharma", how:"Both hands near the chest. Thumb and index finger of both hands form circles. Hands face outward.", essence:"Truth cannot be taught directly; it can only be shared through presence. When Buddha began teaching after enlightenment, it was called 'Turning the Wheel of Dharma.' The mudra symbolizes knowledge moving, awareness spreading, consciousness awakening in others.", meditation:"Sit calmly. Feel wisdom flowing from your heart outward. Not preaching—simply radiating awareness.", svg:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor"/><circle cx="50" cy="50" r="10" fill="none"/><path d="M40,35 L60,65 M60,35 L40,65" stroke="currentColor"/></svg>` },
        { name:"Jnana", sanskrit:"Jñāna Mudrā", meaning:"Gesture of Knowledge", how:"Touch the tip of thumb and index finger. Other fingers remain extended. Hands rest on knees.", essence:"The circle formed by thumb and finger symbolizes unity. Thumb represents universal consciousness; index finger represents the individual ego. When the two meet, the ego merges into the cosmic whole. The other three fingers represent body, mind, and illusion.", meditation:"Sit quietly with this mudra. Observe breath. Gradually you realize: you are not the mind—you are the awareness behind it.", svg:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor"/><path d="M42,42 L58,58 M42,58 L58,42"/><circle cx="50" cy="50" r="8" fill="none" stroke="currentColor"/></svg>` },
        { name:"Karana", sanskrit:"Karaṇa Mudrā", meaning:"Gesture of Dispelling Negativity", how:"Index finger and little finger extended. Middle and ring fingers folded. Thumb holds them down.", essence:"Negativity is not external. It arises from unconsciousness, suppressed emotions, unnoticed thoughts. The real demon is lack of awareness. This mudra symbolizes the destruction of unconscious patterns. When awareness enters darkness, the darkness disappears.", meditation:"While making this mudra, visualize negativity leaving the mind. Breathe deeply. It creates psychological purification.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M35,55 L65,45 M35,45 L65,55 M50,65 L50,35"/><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor"/></svg>` },
        { name:"Uttarabodhi", sanskrit:"Uttarabodhi Mudrā", meaning:"Gesture of Supreme Enlightenment", how:"Interlock fingers. Extend index fingers upward. Thumbs crossed.", essence:"This mudra represents the rising energy of awakening. The upward fingers symbolize expanding consciousness. It expresses the possibility that human awareness can grow beyond mind, ego, identity. In deep awareness, the mind becomes silent, the ego dissolves, only pure consciousness remains.", meditation:"Hold this mudra and imagine energy rising from the spine toward the head. Feel expansion—as if your consciousness is touching infinity.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M30,55 L70,55 M50,30 L50,70 M40,40 L60,60 M40,60 L60,40"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor"/></svg>` },
        { name:"Vitarka", sanskrit:"Vitarka Mudrā", meaning:"Gesture of Discussion / Teaching", how:"Thumb and index finger form a circle. Palm faces outward. Hand slightly raised.", essence:"Vitarka represents conscious dialogue. Truth grows through questioning, reflection, and awareness. It is not argument—it is exploration. In the meeting of question, answer, and awareness, truth gradually reveals itself.", meditation:"Hold this mudra while contemplating a question. Let the answer arise naturally from silence.", svg:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor"/><path d="M38,45 L62,55 M38,55 L62,45"/><circle cx="50" cy="50" r="8" fill="none" stroke="currentColor"/></svg>` },
        { name:"Namaskara", sanskrit:"Namaskāra Mudrā", meaning:"Prayer Gesture", how:"Palms pressed together near the heart.", essence:"Namaste means: 'The divine in me honors the divine in you.' It is more than a greeting. It is recognition that the same consciousness lives in every being. When the hands join, the ego softens, humility appears, unity is remembered.", meditation:"Bring palms together at the heart. Feel the meeting of left and right—the meeting of opposites. Offer respect to all beings.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M30,60 L70,60 M50,40 L50,70 M40,45 L60,55 M40,55 L60,45"/><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor"/></svg>` },
        { name:"Tarjani", sanskrit:"Tarjanī Mudrā", meaning:"Gesture of Warning / Direction", how:"Index finger extended, other fingers folded. Hand raised.", essence:"Tarjani symbolizes awareness pointing toward ignorance. Sometimes truth must wake people up strongly. This mudra represents the moment when awareness points directly at unconsciousness—urging it to awaken.", meditation:"Raise the index finger, not in anger, but as a reminder to yourself: 'Wake up. Don't be unconscious.'", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M50,65 L50,30 M40,45 L60,45"/><circle cx="50" cy="30" r="4" fill="none"/><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor"/></svg>` },
        { name:"Kesapana", sanskrit:"Keśapana Mudrā", meaning:"Gesture of Sprinkling Immortal Nectar", how:"Two hands together, fingers intertwined, as if sprinkling.", essence:"This mudra represents the showering of wisdom and compassion. It is the gesture of bestowing blessings, offering the nectar of immortality—the realization of your true self.", meditation:"Imagine cool, luminous nectar flowing from your hands into your own heart and then out to all beings. Let compassion fill your being.", svg:`<svg viewBox="0 0 100 100"><path stroke="currentColor" stroke-width="2" d="M35,55 L65,45 M35,45 L65,55 M45,65 L55,35 M45,35 L55,65"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor"/></svg>` }
    ];

    // Wisdom quotes (diverse traditions)
    const fullQuotesList = [
        { text: "Three things cannot be long hidden: the sun, the moon, and the truth.", author: "Buddha" },
        { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
        { text: "All living beings long to live. None wishes to suffer; therefore do not harm any living being.", author: "Mahavira" },
        { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
        { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
        { text: "Happiness is the absence of the striving for happiness.", author: "Zhuangzi" },
        { text: "Flow with whatever may happen and let your mind be free.", author: "Zhuangzi" },
        { text: "The mind is the Buddha, and the Buddha is the mind.", author: "Bodhidharma" },
        { text: "Where do you search me? I am with you.", author: "Kabir" },
        { text: "There is no Hindu, there is no Muslim.", author: "Guru Nanak" },
        { text: "I have found the one whom my soul loves.", author: "Meera Bai" },
        { text: "As many faiths, so many paths.", author: "Ramakrishna" },
        { text: "Your own Self-realization is the greatest service you can render the world.", author: "Ramana Maharshi" },
        { text: "Silence is the most powerful teaching.", author: "Ramana Maharshi" },
        { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { text: "No man ever steps in the same river twice.", author: "Heraclitus" },
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { text: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard" },
        { text: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
        { text: "The most thought-provoking thing in our thought-provoking time is that we are still not thinking.", author: "Martin Heidegger" },
        { text: "The whole problem with the world is that fools and fanatics are always so certain of themselves.", author: "Bertrand Russell" },
        { text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein" },
        { text: "The kingdom of God is within you.", author: "Jesus" },
        { text: "You have the right to perform your duty, but not to the fruits of your actions.", author: "Krishna" },
        { text: "Yoga is the cessation of the fluctuations of the mind.", author: "Patanjali" },
        { text: "Brahman alone is real; the world is an appearance.", author: "Adi Shankara" },
        { text: "Chant the holy name of the Lord and be happy.", author: "Chaitanya Mahaprabhu" },
        { text: "Faith is the bird that feels the light when the dawn is still dark.", author: "Rabindranath Tagore" },
        { text: "Your children are not your children; they are the sons and daughters of life’s longing for itself.", author: "Kahlil Gibran" },
        { text: "What you seek is seeking you.", author: "Mahatma Gandhi" },
        { text: "If the doors of perception were cleansed everything would appear to man as it is: infinite.", author: "William Blake" },
        { text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.", author: "Fyodor Dostoevsky" },
        { text: "Everyone thinks of changing the world, but no one thinks of changing himself.", author: "Leo Tolstoy" },
        { text: "Without self-knowledge, without understanding the working and functions of his machine, man cannot be free.", author: "G. I. Gurdjieff" },
        { text: "Man is asleep. He lives in sleep and dies in sleep.", author: "G. I. Gurdjieff" },
        { text: "Man does not remember himself; he is always lost in what he is doing.", author: "P. D. Ouspensky" },
        { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
        { text: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
        { text: "Unexpressed emotions will never die; they are buried alive and will come forth later in uglier ways.", author: "Sigmund Freud" },
        { text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", author: "Carl Jung" },
        { text: "It is no measure of health to be well adjusted to a profoundly sick society.", author: "Jiddu Krishnamurti" },
        { text: "Truth is a pathless land.", author: "Jiddu Krishnamurti" },
        { text: "Every child is an artist; the problem is how to remain an artist once we grow up.", author: "Pablo Picasso" },
        { text: "I dream my painting and then I paint my dream.", author: "Vincent van Gogh" },
        { text: "The greater danger for most of us lies not in setting our aim too high and falling short, but in setting it too low and achieving our mark.", author: "Michelangelo" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "The philosophers have only interpreted the world in various ways; the point, however, is to change it.", author: "Karl Marx" },
        { text: "The urge to destroy is also a creative urge.", author: "Mikhail Bakunin" },
        { text: "It is necessary to sin in order to know forgiveness.", author: "Grigori Rasputin" },
        { text: "Don’t worry, be happy.", author: "Meher Baba" },
        { text: "All life is yoga.", author: "Sri Aurobindo" },
        { text: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" }
    ];

    // Helper: shuffle array
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // ======================================================
    // USER STATE MANAGEMENT (localStorage)
    // ======================================================

    let user = {
        totalPractices: parseInt(localStorage.getItem('tp')) || 1248,
        totalMinutes: parseInt(localStorage.getItem('tm')) || 6304,
        streak: parseInt(localStorage.getItem('streak')) || 1,
        lastDate: localStorage.getItem('lastDate') || null,
        favorites: JSON.parse(localStorage.getItem('favs')) || [],
        diary: JSON.parse(localStorage.getItem('diary')) || [],
        plan: JSON.parse(localStorage.getItem('plan')) || [],
        xp: parseInt(localStorage.getItem('xp')) || 450,
        practiceDays: JSON.parse(localStorage.getItem('practiceDays')) || {},
        practicedTechniques: JSON.parse(localStorage.getItem('practicedTechs')) || [],
        savedQuotes: JSON.parse(localStorage.getItem('savedQuotes')) || [],
        achievements: JSON.parse(localStorage.getItem('achievements')) || {}
    };

    function saveAll() {
        localStorage.setItem('tp', user.totalPractices);
        localStorage.setItem('tm', user.totalMinutes);
        localStorage.setItem('streak', user.streak);
        localStorage.setItem('lastDate', user.lastDate);
        localStorage.setItem('favs', JSON.stringify(user.favorites));
        localStorage.setItem('diary', JSON.stringify(user.diary));
        localStorage.setItem('plan', JSON.stringify(user.plan));
        localStorage.setItem('xp', user.xp);
        localStorage.setItem('practiceDays', JSON.stringify(user.practiceDays));
        localStorage.setItem('practicedTechs', JSON.stringify(user.practicedTechniques));
        localStorage.setItem('savedQuotes', JSON.stringify(user.savedQuotes));
        localStorage.setItem('achievements', JSON.stringify(user.achievements));
        updateUI();
        checkAchievements();
        updateStats();
    }

    // ======================================================
    // UTILITIES
    // ======================================================

    function showToast(msg) {
        const t = document.createElement('div');
        t.className = 'toast';
        t.innerText = msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 3000);
    }

    // ======================================================
    // RECOMMENDATION ENGINE
    // ======================================================

    function getRecommendedTechniques(prof) {
        return Object.values(techniques).sort((a,b) => {
            const aScore = prof.keywords.reduce((s,k) => s + (a.name.toLowerCase().includes(k) ? 5 : (a.category.includes(k) ? 3 : 0)), 0);
            const bScore = prof.keywords.reduce((s,k) => s + (b.name.toLowerCase().includes(k) ? 5 : (b.category.includes(k) ? 3 : 0)), 0);
            return bScore - aScore;
        }).slice(0,12);
    }

    // ======================================================
    // CORE FEATURES
    // ======================================================

    // Add practiced technique
    function addPracticedTechnique(techId, techName, minutes = 15) {
        user.practicedTechniques.unshift({ id: techId, name: techName, date: new Date().toISOString(), minutes });
        user.totalPractices++;
        user.totalMinutes += minutes;
        user.xp += 10;
        const today = new Date().toDateString();
        if (user.lastDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            user.streak = user.lastDate === yesterday ? user.streak + 1 : 1;
            user.lastDate = today;
        }
        user.practiceDays[new Date().toISOString().slice(0,10)] = true;
        saveAll();
        showToast(`🧘 Practiced: ${techName} +${minutes} min`);
        if (Notification.permission === 'granted') {
            new Notification('Practice Complete!', { body: `You completed ${techName} for ${minutes} minutes.` });
        }
    }

    // Save quote to diary & quotes
    function saveQuoteToBoth(text, author) {
        user.savedQuotes.unshift({ text, author, date: new Date().toISOString() });
        user.diary.unshift({ date: new Date(), text: `📖 Saved Quote: "${text}" — ${author}` });
        saveAll();
        renderProfileSections();
        renderDiary();
        showToast("Quote saved");
    }

    // ======================================================
    // UI RENDERING FUNCTIONS
    // ======================================================

    function updateUI() {
        document.getElementById('enhTotalPractices').innerText = user.totalPractices;
        document.getElementById('enhTotalMinutes').innerText = user.totalMinutes;
        document.getElementById('enhStreak').innerText = user.streak;
        document.getElementById('statTotalPractices').innerText = user.totalPractices;
        document.getElementById('statTotalMinutes').innerText = user.totalMinutes;
        document.getElementById('statStreak').innerText = user.streak;
        renderCalendar();
        renderProfileSections();
        renderPlan();
        renderDiary();
        renderAchievements();
        updateCharts();
    }

    function updateStats() {
        const categoryCount = {};
        user.practicedTechniques.forEach(p => {
            const tech = techniques[p.id];
            if (tech) categoryCount[tech.category] = (categoryCount[tech.category] || 0) + 1;
        });
        let favCat = Object.keys(categoryCount).reduce((a,b) => categoryCount[a] > categoryCount[b] ? a : b, 'None');
        document.getElementById('statFavoriteCategory').innerText = favCat !== 'None' ? favCat : '-';
        const techCount = {};
        user.practicedTechniques.forEach(p => { techCount[p.name] = (techCount[p.name] || 0) + 1; });
        let mostPracticed = Object.keys(techCount).reduce((a,b) => techCount[a] > techCount[b] ? a : b, 'None');
        document.getElementById('statMostPracticed').innerText = mostPracticed !== 'None' ? mostPracticed : '-';
        let avg = user.practicedTechniques.length ? Math.round(user.totalMinutes / user.practicedTechniques.length) : 0;
        document.getElementById('statAvgSession').innerText = avg;
    }

    function updateCharts() {
        const ctx = document.getElementById('progressChart')?.getContext('2d');
        if (ctx && window.progressChart) window.progressChart.destroy();
        if (ctx) {
            window.progressChart = new Chart(ctx, {
                type: 'line',
                data: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], datasets: [{ label:'minutes', data: getWeeklyMinutes(), borderColor:'#9d7bff', tension:0.3, fill:false }] },
                options: { responsive: true, maintainAspectRatio: true }
            });
        }
        const catCtx = document.getElementById('categoryChart')?.getContext('2d');
        if (catCtx && window.categoryChart) window.categoryChart.destroy();
        if (catCtx) {
            const catCount = {};
            user.practicedTechniques.forEach(p => {
                const tech = techniques[p.id];
                if (tech) catCount[tech.category] = (catCount[tech.category] || 0) + 1;
            });
            window.categoryChart = new Chart(catCtx, {
                type: 'doughnut',
                data: { labels: Object.keys(catCount), datasets: [{ data: Object.values(catCount), backgroundColor: ['#9d7bff','#ffb3a0','#6b4eff','#ff8a6c','#c4b5fd'] }] },
                options: { responsive: true }
            });
        }
    }

    function getWeeklyMinutes() {
        const weekMinutes = [0,0,0,0,0,0,0];
        user.practicedTechniques.forEach(p => {
            const date = new Date(p.date);
            const day = date.getDay();
            weekMinutes[day] += p.minutes;
        });
        return weekMinutes;
    }

    function renderCalendar() {
        const container = document.getElementById('calendarTracker');
        if (!container) return;
        const today = new Date(), year = today.getFullYear(), month = today.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month+1, 0).getDate();
        container.innerHTML = '';
        ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(day => {
            const d = document.createElement('div');
            d.className = 'calendar-day weekday';
            d.innerText = day;
            container.appendChild(d);
        });
        for (let i = 0; i < firstDay; i++) {
            const blank = document.createElement('div');
            blank.className = 'calendar-day';
            container.appendChild(blank);
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const isPracticed = user.practiceDays[dateStr];
            const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            const dayDiv = document.createElement('div');
            dayDiv.className = `calendar-day ${isPracticed ? 'practiced' : ''} ${isToday ? 'today' : ''}`;
            dayDiv.innerText = d;
            dayDiv.addEventListener('click', () => {
                if (!user.practiceDays[dateStr]) {
                    user.practiceDays[dateStr] = true;
                    saveAll();
                    showToast(`Marked practice on ${dateStr}`);
                } else if (confirm('Remove practice mark?')) {
                    delete user.practiceDays[dateStr];
                    saveAll();
                }
            });
            container.appendChild(dayDiv);
        }
    }

    function renderProfileSections() {
        const practicedDiv = document.getElementById('practicedList');
        if (practicedDiv) practicedDiv.innerHTML = user.practicedTechniques.slice(0,50).map(p => `<div class="profile-list-item">🧘 ${p.name} · ${new Date(p.date).toLocaleDateString()} (${p.minutes} min)</div>`).join('') || "<em>No practices recorded yet.</em>";
        const quotesDiv = document.getElementById('savedQuotesList');
        if (quotesDiv) quotesDiv.innerHTML = user.savedQuotes.slice(0,50).map(q => `<div class="profile-list-item">“${q.text.substring(0,120)}”<br>— ${q.author} <small>${new Date(q.date).toLocaleDateString()}</small></div>`).join('') || "<em>No saved quotes.</em>";
        const notesDiv = document.getElementById('profileDiaryList');
        if (notesDiv) notesDiv.innerHTML = user.diary.slice().reverse().slice(0,50).map(e => `<div class="profile-list-item"><small>${new Date(e.date).toLocaleString()}</small><p>${e.text}</p></div>`).join('') || "<em>No diary entries yet.</em>";
    }

    function renderPlan() {
        const container = document.getElementById('planItems');
        if (!container) return;
        container.innerHTML = '';
        let total = 0;
        user.plan.forEach(id => {
            if (techniques[id]) {
                total += 15;
                const div = document.createElement('div');
                div.className = 'plan-item glass-card';
                div.style.marginBottom = '0.8rem';
                div.style.padding = '0.8rem';
                div.innerHTML = `<div><strong>${techniques[id].name}</strong> (15 min)</div><button class="remove-plan" data-id="${id}" style="background:none; border:none; color:var(--accent-secondary); cursor:pointer;"><i class="fas fa-trash"></i></button>`;
                div.querySelector('.remove-plan').addEventListener('click', () => {
                    user.plan = user.plan.filter(i => i !== id);
                    saveAll();
                    renderPlan();
                    showToast('removed');
                });
                container.appendChild(div);
            }
        });
        document.getElementById('planTotal').innerText = total;
    }

    function renderDiary() {
        const list = document.getElementById('diaryList');
        if (list) list.innerHTML = user.diary.slice().reverse().map(e => `<div class="glass-card" style="margin-bottom:0.5rem;padding:0.5rem;"><small>${new Date(e.date).toLocaleString()}</small><p>${e.text}</p></div>`).join('');
    }

    // Achievements
    const achievementsList = [
        { id: 'first_practice', name: 'First Step', desc: 'Complete your first practice', condition: () => user.totalPractices >= 1 },
        { id: 'seven_streak', name: '7-Day Streak', desc: 'Practice 7 days in a row', condition: () => user.streak >= 7 },
        { id: 'hundred_practices', name: 'Century', desc: '100 total practices', condition: () => user.totalPractices >= 100 },
        { id: 'thousand_minutes', name: 'Time Lord', desc: '1000 minutes of practice', condition: () => user.totalMinutes >= 1000 },
        { id: 'master_of_breath', name: 'Master of Breath', desc: 'Complete 10 breathwork sessions', condition: () => user.practicedTechniques.filter(p => p.name.includes('Breathwork')).length >= 10 },
        { id: 'wisdom_seeker', name: 'Wisdom Seeker', desc: 'Save 10 quotes', condition: () => user.savedQuotes.length >= 10 },
        { id: 'technique_collector', name: 'Technique Collector', desc: 'Practice 20 different techniques', condition: () => new Set(user.practicedTechniques.map(p => p.id)).size >= 20 },
        { id: 'dedicated', name: 'Dedicated', desc: 'Practice 30 days total', condition: () => Object.keys(user.practiceDays).length >= 30 }
    ];

    function checkAchievements() {
        let changed = false;
        achievementsList.forEach(ach => {
            if (!user.achievements[ach.id] && ach.condition()) {
                user.achievements[ach.id] = { unlocked: true, date: new Date().toISOString() };
                changed = true;
                showToast(`🏆 Achievement Unlocked: ${ach.name}!`);
                if (Notification.permission === 'granted') new Notification('Achievement Unlocked!', { body: ach.name });
            }
        });
        if (changed) saveAll();
    }

    function renderAchievements() {
        const container = document.getElementById('achievementsList');
        if (!container) return;
        container.innerHTML = achievementsList.map(ach => {
            const unlocked = user.achievements[ach.id];
            return `<div class="achievement-badge ${!unlocked ? 'locked' : ''}"><i class="fas ${unlocked ? 'fa-trophy' : 'fa-lock'}"></i> ${ach.name}<small>${ach.desc}</small></div>`;
        }).join('');
    }

    // ======================================================
    // TECHNIQUES CARDS & MODAL
    // ======================================================

    function createTechCard(t, showPractice = true) {
        const div = document.createElement('div');
        div.className = 'tech-card';
        const isFav = user.favorites.includes(t.id);
        div.innerHTML = `
            <div class="tech-header"><span class="tech-number">#${t.id}</span><span class="tech-sanskrit">${t.sanskrit}</span></div>
            <div class="tech-name">${t.name}</div>
            <div class="tech-category">${t.category}</div>
            <div class="tech-essence">“${t.essence.substring(0,80)}”</div>
            <div class="tech-footer"><span><i class="far fa-clock"></i> ${t.duration}</span><div><button class="favorite-btn ${isFav ? 'fas' : 'far'} fa-heart" data-id="${t.id}"></button>${showPractice ? `<button class="practice-btn" data-id="${t.id}" data-name="${t.name}"><i class="fas fa-play"></i> Practice</button>` : ''}</div></div>
        `;
        div.querySelector('.favorite-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = t.id;
            if (user.favorites.includes(id)) user.favorites = user.favorites.filter(f => f !== id);
            else user.favorites.push(id);
            saveAll();
            e.target.classList.toggle('fas'); e.target.classList.toggle('far');
            showToast(user.favorites.includes(id) ? 'Added to favorites' : 'Removed');
        });
        if (showPractice) {
            div.querySelector('.practice-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                addPracticedTechnique(t.id, t.name, 15);
            });
        }
        div.addEventListener('click', () => showModal(t));
        return div;
    }

    function showModal(t) {
        let modal = document.getElementById('detailModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'detailModal';
            modal.className = 'modal';
            document.body.appendChild(modal);
        }
        const content = document.createElement('div');
        content.className = 'modal-content glass-card';
        content.innerHTML = `
            <h2>${t.name}</h2>
            <p><em>${t.sanskrit}</em> · ${t.category}</p>
            <div style="background: rgba(157,123,255,0.2); padding:1rem; border-radius:20px; margin:1rem 0;"><i class="fas fa-quote-left"></i> ${t.wisdom}</div>
            <h3>🧘 Step-by-Step</h3><ol>${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
            <h3>🪷 Posture & Mudra</h3><p>${t.posture} · ${t.mudra}</p>
            <h3>🌟 Benefits</h3><p>✨ Students: ${t.benefits.student}<br>✨ Employees: ${t.benefits.employee}<br>✨ Seekers: ${t.benefits.seeker}</p>
            <button class="btn-primary addPlanBtn">➕ Add to My Plan</button>
            <button class="btn-outline closeModal">Close</button>
        `;
        modal.innerHTML = '';
        modal.appendChild(content);
        modal.classList.add('active');
        content.querySelector('.addPlanBtn').addEventListener('click', () => {
            if (!user.plan.includes(t.id)) {
                user.plan.push(t.id);
                saveAll();
                renderPlan();
                showToast('added to plan');
            }
        });
        content.querySelector('.closeModal').addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    }

    // ======================================================
    // BREATHWORK MODULE
    // ======================================================

    const breathInstructions = {
        box: "Inhale 4s → Hold 4s → Exhale 6s → Hold 4s. Calms nervous system.",
        "478": "Inhale 4s → Hold 7s → Exhale 8s. Deep relaxation.",
        nadi: "Alternate nostril: close right, inhale left; close left, exhale right. Balances hemispheres.",
        kapal: "Rapid forceful exhales, passive inhales. 30 breaths then rest. Cleanses lungs.",
        ujjayi: "Ocean breath: slight throat constriction, audible hiss. Soothes mind."
    };
    let breathActive = false, breathInterval = null;

    function startBreathPractice(type) {
        if (breathInterval) clearInterval(breathInterval);
        breathActive = true;
        document.getElementById('stopBreathBtn').style.display = 'inline-block';
        document.getElementById('breathInstructionPanel').innerHTML = `<strong>📖 How to practice:</strong> ${breathInstructions[type]}<br><br>🧘 Starting guided session...`;
        let phases = [], timings = [];
        if (type === 'box') { phases = ['inhale','hold','exhale','hold']; timings = [4,4,6,4]; }
        else if (type === '478') { phases = ['inhale','hold','exhale']; timings = [4,7,8]; }
        else if (type === 'nadi') { phases = ['inhale left','hold','exhale right','inhale right','hold','exhale left']; timings = [4,4,4,4,4,4]; }
        else if (type === 'kapal') { phases = ['rapid exhale','rest']; timings = [20,10]; }
        else if (type === 'ujjayi') { phases = ['ujjayi inhale','ujjayi exhale']; timings = [5,5]; }
        let phaseIdx = 0, cycle = 0, maxCycles = 4;
        const runPhase = () => {
            if (!breathActive) return;
            if (phaseIdx >= phases.length) {
                phaseIdx = 0;
                cycle++;
                if (cycle >= maxCycles) {
                    resetBreathUI();
                    addPracticedTechnique(0, `${type.toUpperCase()} Breathwork`, 5);
                    showToast('Practice complete');
                    return;
                }
            }
            let timer = timings[phaseIdx];
            const phase = phases[phaseIdx];
            document.getElementById('breathPhaseLabel').innerHTML = phase.includes('inhale') ? '🌬️' : (phase.includes('hold') ? '🌀' : '💨');
            document.getElementById('breathPhaseText').innerHTML = phase.toUpperCase();
            let step = 0;
            const interval = setInterval(() => {
                if (!breathActive) { clearInterval(interval); return; }
                step++;
                document.getElementById('breathTimerDisplay').innerHTML = timer - step;
                const progress = (step / timer) * 100;
                document.querySelector('.progress-circle').style.strokeDashoffset = 860 - (progress / 100) * 860;
                if (step >= timer) {
                    clearInterval(interval);
                    phaseIdx++;
                    runPhase();
                }
            }, 1000);
            breathInterval = interval;
        };
        runPhase();
    }

    function resetBreathUI() {
        if (breathInterval) clearInterval(breathInterval);
        breathActive = false;
        document.getElementById('stopBreathBtn').style.display = 'none';
        document.getElementById('breathInstructionPanel').innerHTML = "✨ Select a breath technique to see detailed instructions and begin your practice.";
        document.getElementById('breathPhaseLabel').innerHTML = '🌀';
        document.getElementById('breathPhaseText').innerHTML = 'Ready';
        document.getElementById('breathTimerDisplay').innerHTML = '0';
        document.querySelector('.progress-circle').style.strokeDashoffset = 860;
    }

    // ======================================================
    // TIMER MODULE
    // ======================================================

    let timerSec = 300, timerInt = null, running = false;
    const timerDisplay = document.getElementById('timerDisplay');
    const timerCircle = document.querySelector('.timer-progress');
    const circumferenceTimer = 553;

    function updateTimerDisplay() {
        const mins = Math.floor(timerSec / 60);
        const secs = timerSec % 60;
        timerDisplay.innerText = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
        const progress = (timerSec <= 0 ? 0 : (300 - timerSec) / 300);
        const offset = circumferenceTimer - (progress * circumferenceTimer);
        if (timerCircle) timerCircle.style.strokeDashoffset = Math.min(circumferenceTimer, Math.max(0, offset));
    }

    // ======================================================
    // AMBIENT SOUNDS
    // ======================================================

    let currentSound = null;
    const soundFiles = {
        rain: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        forest: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        ocean: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        fire: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    };
    function playSound(sound) {
        if (currentSound) { currentSound.pause(); currentSound.currentTime = 0; }
        if (sound === 'silence') { currentSound = null; return; }
        const audio = new Audio(soundFiles[sound]);
        audio.loop = true;
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Autoplay blocked'));
        currentSound = audio;
    }

    // ======================================================
    // QUOTE MODULE
    // ======================================================

    let shuffledQuotes = shuffleArray([...fullQuotesList]);
    let currentLibIndex = 0;
    let homeQuotes = shuffleArray([...fullQuotesList]);
    let currentHomeIndex = 0;

    function updateHomeQuote() {
        const q = homeQuotes[currentHomeIndex];
        document.getElementById('homeQuoteText').innerHTML = `“${q.text}”`;
        document.getElementById('homeQuoteAuthor').innerHTML = `— ${q.author}`;
    }
    function updateLibQuote() {
        const q = shuffledQuotes[currentLibIndex];
        document.getElementById('quoteText').innerHTML = `“${q.text}”`;
        document.getElementById('quoteAuthor').innerHTML = `— ${q.author}`;
    }
    function nextHomeQuote() { currentHomeIndex = (currentHomeIndex + 1) % homeQuotes.length; updateHomeQuote(); }
    function prevHomeQuote() { currentHomeIndex = (currentHomeIndex - 1 + homeQuotes.length) % homeQuotes.length; updateHomeQuote(); }
    function nextLibQuote() { currentLibIndex = (currentLibIndex + 1) % shuffledQuotes.length; updateLibQuote(); }
    function prevLibQuote() { currentLibIndex = (currentLibIndex - 1 + shuffledQuotes.length) % shuffledQuotes.length; updateLibQuote(); }
    function saveCurrentHomeQuote() { saveQuoteToBoth(homeQuotes[currentHomeIndex].text, homeQuotes[currentHomeIndex].author); }
    function saveCurrentLibQuote() { saveQuoteToBoth(shuffledQuotes[currentLibIndex].text, shuffledQuotes[currentLibIndex].author); }

    // ======================================================
    // MUDRA CAROUSEL
    // ======================================================

    let currentMudraIndex = 0;
    function renderMudra(index) {
        const mudra = mudrasData[index];
        const container = document.getElementById('mudraContent');
        if (!container) return;
        container.innerHTML = `
            <div class="mudra-svg">${mudra.svg}</div>
            <div class="mudra-name">${mudra.name}</div>
            <div class="mudra-sanskrit">${mudra.sanskrit}</div>
            <div class="mudra-section"><h4>✨ Meaning</h4><p>${mudra.meaning}</p></div>
            <div class="mudra-section"><h4>🖐️ How to Form</h4><p>${mudra.how}</p></div>
            <div class="mudra-section"><h4>💎 Essence</h4><p>${mudra.essence}</p></div>
            <div class="mudra-section"><h4>🧘 Inner Meditation</h4><p>${mudra.meditation}</p></div>
        `;
        document.getElementById('mudraCounter').innerText = `${index + 1} / ${mudrasData.length}`;
    }
    function nextMudra() { currentMudraIndex = (currentMudraIndex + 1) % mudrasData.length; renderMudra(currentMudraIndex); }
    function prevMudra() { currentMudraIndex = (currentMudraIndex - 1 + mudrasData.length) % mudrasData.length; renderMudra(currentMudraIndex); }
    function saveCurrentMudraToDiary() {
        const mudra = mudrasData[currentMudraIndex];
        const entry = `🧘 Mudra: ${mudra.name} (${mudra.sanskrit})\n\nMeaning: ${mudra.meaning}\n\nHow to Form: ${mudra.how}\n\nEssence: ${mudra.essence}\n\nInner Meditation: ${mudra.meditation}`;
        saveQuoteToBoth(entry, `Mudra: ${mudra.name}`);
    }

    // ======================================================
    // VIEW NAVIGATION
    // ======================================================

    let transitioning = false;
    const views = {
        home: 'homeView',
        techniques: 'techniquesView',
        breathwork: 'breathworkView',
        quotes: 'quotesView',
        diary: 'diaryView',
        timer: 'timerView',
        plan: 'planView',
        profile: 'profileView',
        enhanced: 'enhancedView',
        stats: 'statsView',
        achievements: 'achievementsView'
    };

    function showView(viewName) {
        if (transitioning) return;
        const target = document.getElementById(views[viewName]);
        if (!target) return;
        const current = document.querySelector('.view-container:not(.hidden)');
        if (current === target) return;
        transitioning = true;
        document.body.classList.add('transitioning');
        if (current) {
            current.classList.add('view-exit');
            current.addEventListener('transitionend', function onExit(e) {
                if (e.target !== current) return;
                current.removeEventListener('transitionend', onExit);
                current.classList.remove('view-exit');
                current.classList.add('hidden');
                target.classList.remove('hidden');
                target.classList.add('view-enter');
                void target.offsetWidth;
                target.classList.add('view-enter-active');
                target.addEventListener('transitionend', function onEnter(e) {
                    if (e.target !== target) return;
                    target.removeEventListener('transitionend', onEnter);
                    target.classList.remove('view-enter', 'view-enter-active');
                    transitioning = false;
                    document.body.classList.remove('transitioning');
                });
            });
        } else {
            target.classList.remove('hidden');
            target.classList.add('view-enter');
            void target.offsetWidth;
            target.classList.add('view-enter-active');
            target.addEventListener('transitionend', function onEnter(e) {
                if (e.target !== target) return;
                target.removeEventListener('transitionend', onEnter);
                target.classList.remove('view-enter', 'view-enter-active');
                transitioning = false;
                document.body.classList.remove('transitioning');
            });
        }
        document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
        const activeNav = document.querySelector(`.nav a[data-view="${viewName}"]`);
        if (activeNav) activeNav.classList.add('active');
    }

    // ======================================================
    // EXPORT FUNCTIONS
    // ======================================================

    function exportData() {
        const data = {
            user: {
                totalPractices: user.totalPractices,
                totalMinutes: user.totalMinutes,
                streak: user.streak,
                practicedTechniques: user.practicedTechniques,
                savedQuotes: user.savedQuotes,
                diary: user.diary,
                plan: user.plan,
                favorites: user.favorites,
                practiceDays: user.practiceDays,
                achievements: user.achievements
            },
            exportDate: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vigyan_bhairav_data_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data exported');
    }

    function exportCSV() {
        let csv = "Date,Technique,Minutes\n";
        user.practicedTechniques.forEach(p => {
            csv += `"${new Date(p.date).toISOString().slice(0,10)}","${p.name}",${p.minutes}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `practice_history_${new Date().toISOString().slice(0,10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('CSV exported');
    }

    // ======================================================
    // TECHNIQUES UI (Archetype / All)
    // ======================================================

    function initTechniquesView() {
        const professionGrid = document.getElementById('professionGrid');
        if (!professionGrid) return;
        professionGrid.innerHTML = professions.map(p => `
            <div class="prof-card glass-card" data-prof='${JSON.stringify(p)}'>
                <i class="fas ${p.icon}"></i>
                <span>${p.name}</span>
                <div class="prof-desc">${p.desc}</div>
                <div class="prof-full-desc">${p.fullDesc}</div>
            </div>
        `).join('');
        document.querySelectorAll('.prof-card').forEach(card => {
            card.addEventListener('click', () => {
                const prof = JSON.parse(card.dataset.prof);
                const recs = getRecommendedTechniques(prof);
                window.currentTechList = recs;
                window.currentTechIndex = 0;
                renderTechCarousel(0);
                document.getElementById('professionSelectionView').classList.add('hidden');
                document.getElementById('recommendedTechniquesView').classList.remove('hidden');
                document.getElementById('allTechniquesView').classList.add('hidden');
                document.getElementById('selectedProfessionTitle').innerHTML = `🌀 ${prof.name} · Recommended Techniques`;
            });
        });

        function renderTechCarousel(index) {
            const tech = window.currentTechList[index];
            if (!tech) return;
            const container = document.getElementById('techCarouselContent');
            if (!container) return;
            container.innerHTML = `
                <div class="tech-name" style="font-size: 1.6rem; font-weight:700; margin-bottom:0.2rem; background: linear-gradient(135deg, var(--accent), var(--accent-secondary)); -webkit-background-clip: text; background-clip: text; color: transparent;">${tech.name}</div>
                <div style="font-size:0.9rem; font-style:italic; color:var(--accent-secondary); margin-bottom:1rem;">${tech.sanskrit} · ${tech.category}</div>
                <div class="tech-detail-section"><h4>✨ Essence</h4><p>${tech.essence}</p></div>
                <div class="tech-detail-section"><h4>💎 Wisdom</h4><p>${tech.wisdom}</p></div>
                <div class="tech-detail-section"><h4>🧘 Step-by-Step</h4><ol>${tech.steps.map(s => `<li>${s}</li>`).join('')}</ol></div>
                <div class="tech-detail-section"><h4>🪷 Posture & Mudra</h4><p>${tech.posture} · ${tech.mudra}</p></div>
                <div class="tech-detail-section"><h4>🌬️ Breath</h4><p>${tech.breath}</p></div>
                <div class="tech-detail-section"><h4>⏱️ Duration</h4><p>${tech.duration}</p></div>
                <div class="tech-detail-section"><h4>🌟 Benefits</h4><p>✨ Students: ${tech.benefits.student}<br>✨ Employees: ${tech.benefits.employee}<br>✨ Seekers: ${tech.benefits.seeker}</p></div>
            `;
            document.getElementById('techCounter').innerText = `${index + 1} / ${window.currentTechList.length}`;
            const favBtn = document.getElementById('favoriteTechBtn');
            const isFav = user.favorites.includes(tech.id);
            favBtn.innerHTML = isFav ? '<i class="fas fa-heart"></i> Favorite' : '<i class="far fa-heart"></i> Favorite';
            favBtn.dataset.id = tech.id;
        }

        function nextTech() { if (window.currentTechList) { window.currentTechIndex = (window.currentTechIndex + 1) % window.currentTechList.length; renderTechCarousel(window.currentTechIndex); } }
        function prevTech() { if (window.currentTechList) { window.currentTechIndex = (window.currentTechIndex - 1 + window.currentTechList.length) % window.currentTechList.length; renderTechCarousel(window.currentTechIndex); } }
        function practiceCurrentTech() { const tech = window.currentTechList[window.currentTechIndex]; if (tech) addPracticedTechnique(tech.id, tech.name, 15); }
        function addCurrentTechToPlan() { const tech = window.currentTechList[window.currentTechIndex]; if (tech && !user.plan.includes(tech.id)) { user.plan.push(tech.id); saveAll(); renderPlan(); showToast('Added to My Plan'); } else if (tech && user.plan.includes(tech.id)) { showToast('Already in your plan'); } }
        function toggleFavoriteCurrentTech() { const tech = window.currentTechList[window.currentTechIndex]; if (!tech) return; const id = tech.id; if (user.favorites.includes(id)) { user.favorites = user.favorites.filter(f => f !== id); showToast('Removed from favorites'); } else { user.favorites.push(id); showToast('Added to favorites'); } saveAll(); const favBtn = document.getElementById('favoriteTechBtn'); const isFav = user.favorites.includes(id); favBtn.innerHTML = isFav ? '<i class="fas fa-heart"></i> Favorite' : '<i class="far fa-heart"></i> Favorite'; }

        document.getElementById('prevTechBtn')?.addEventListener('click', prevTech);
        document.getElementById('nextTechBtn')?.addEventListener('click', nextTech);
        document.getElementById('practiceTechBtn')?.addEventListener('click', practiceCurrentTech);
        document.getElementById('addToPlanTechBtn')?.addEventListener('click', addCurrentTechToPlan);
        document.getElementById('favoriteTechBtn')?.addEventListener('click', toggleFavoriteCurrentTech);
        document.getElementById('backToProfessionsBtn')?.addEventListener('click', () => {
            document.getElementById('professionSelectionView').classList.remove('hidden');
            document.getElementById('recommendedTechniquesView').classList.add('hidden');
            document.getElementById('allTechniquesView').classList.add('hidden');
        });

        function renderAllTechniques() {
            const grid = document.getElementById('allTechniquesGrid');
            if (!grid) return;
            grid.innerHTML = '';
            Object.values(techniques).forEach(tech => {
                const card = createTechCard(tech, true);
                grid.appendChild(card);
            });
        }

        const searchInput = document.getElementById('techSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const term = searchInput.value.toLowerCase();
                const grid = document.getElementById('allTechniquesGrid');
                if (!grid) return;
                const cards = grid.querySelectorAll('.tech-card');
                cards.forEach(card => {
                    const name = card.querySelector('.tech-name').innerText.toLowerCase();
                    const category = card.querySelector('.tech-category').innerText.toLowerCase();
                    if (name.includes(term) || category.includes(term)) card.style.display = '';
                    else card.style.display = 'none';
                });
            });
        }

        document.getElementById('showAllTechBtn')?.addEventListener('click', () => {
            document.getElementById('professionSelectionView').classList.add('hidden');
            document.getElementById('recommendedTechniquesView').classList.add('hidden');
            document.getElementById('allTechniquesView').classList.remove('hidden');
            renderAllTechniques();
        });
        document.getElementById('showArchetypeBtn')?.addEventListener('click', () => {
            document.getElementById('professionSelectionView').classList.remove('hidden');
            document.getElementById('recommendedTechniquesView').classList.add('hidden');
            document.getElementById('allTechniquesView').classList.add('hidden');
        });
    }

    // ======================================================
    // INITIALIZATION
    // ======================================================

    function init() {
        // DOM is ready, attach all event listeners and render initial data
        initTechniquesView();

        // Quote events
        document.getElementById('prevHomeQuote').addEventListener('click', prevHomeQuote);
        document.getElementById('nextHomeQuote').addEventListener('click', nextHomeQuote);
        document.getElementById('saveHomeQuoteBtn').addEventListener('click', saveCurrentHomeQuote);
        document.getElementById('prevLibQuote').addEventListener('click', prevLibQuote);
        document.getElementById('nextLibQuote').addEventListener('click', nextLibQuote);
        document.getElementById('saveLibQuoteBtn').addEventListener('click', saveCurrentLibQuote);
        updateHomeQuote();
        updateLibQuote();

        // Diary save
        document.getElementById('saveDiary').addEventListener('click', () => {
            const txt = document.getElementById('diaryEntry').value.trim();
            if (txt) {
                user.diary.unshift({ date: new Date(), text: txt });
                saveAll();
                renderDiary();
                renderProfileSections();
                document.getElementById('diaryEntry').value = '';
                showToast('saved');
            }
        });

        // Timer events
        document.querySelectorAll('.timer-pill').forEach(btn => btn.addEventListener('click', (e) => { timerSec = parseInt(e.target.dataset.min) * 60; updateTimerDisplay(); }));
        document.getElementById('customMinutes')?.addEventListener('change', (e) => { if (e.target.value > 0) timerSec = parseInt(e.target.value) * 60; updateTimerDisplay(); });
        document.getElementById('startTimer').addEventListener('click', () => {
            if (running) return;
            running = true;
            timerInt = setInterval(() => {
                if (timerSec <= 0) {
                    clearInterval(timerInt); running = false;
                    addPracticedTechnique(0, "Focused Meditation", Math.floor((300 - timerSec) / 60) || 5);
                    document.getElementById('timerMsg').innerText = '✨ Complete! +xp ✨';
                    showToast('Meditation completed!');
                    updateTimerDisplay();
                } else { timerSec--; updateTimerDisplay(); }
            }, 1000);
        });
        document.getElementById('pauseTimer').addEventListener('click', () => { clearInterval(timerInt); running = false; });
        document.getElementById('resetTimer').addEventListener('click', () => { clearInterval(timerInt); running = false; timerSec = 300; updateTimerDisplay(); document.getElementById('timerMsg').innerText = ''; });

        // Ambient sounds
        document.querySelectorAll('.sound-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sound = btn.dataset.sound;
                playSound(sound);
                document.querySelectorAll('.sound-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Breathwork
        document.querySelectorAll('.start-breath').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); const type = btn.closest('.breath-card').dataset.breath; startBreathPractice(type); }));
        document.getElementById('stopBreathBtn').addEventListener('click', resetBreathUI);

        // Mudra carousel
        document.getElementById('prevMudraBtn')?.addEventListener('click', prevMudra);
        document.getElementById('nextMudraBtn')?.addEventListener('click', nextMudra);
        document.getElementById('saveMudraBtn')?.addEventListener('click', saveCurrentMudraToDiary);
        renderMudra(0);

        // Navigation
        document.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showView(el.dataset.view); }));
        document.getElementById('exploreBtn').addEventListener('click', () => showView('techniques'));
        document.getElementById('dailyBtn').addEventListener('click', () => { const ids = Object.keys(techniques); alert(`Today's technique: ${techniques[ids[Math.floor(Math.random()*ids.length)]].name}`); });

        // Profile tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.profileTab;
                document.querySelectorAll('.profile-section-container').forEach(sec => sec.classList.remove('active-tab'));
                document.getElementById(`profile${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.add('active-tab');
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Export buttons
        document.getElementById('exportDataBtn')?.addEventListener('click', exportData);
        document.getElementById('exportCSVBtn')?.addEventListener('click', exportCSV);

        // Theme toggle
        const themeBtn = document.getElementById('themeToggle');
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const cur = html.getAttribute('data-theme');
            html.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
            themeBtn.innerHTML = cur === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', html.getAttribute('data-theme'));
        });
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeBtn.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

        // Scroll to top
        const scrollBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => scrollBtn.style.opacity = window.scrollY > 200 ? '1' : '0');
        scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // Request notifications
        if ('Notification' in window && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }

        // Initial render
        renderPlan();
        renderDiary();
        renderProfileSections();
        updateUI();
        showView('home');
    }

    // Start after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
