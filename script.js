// ==================== SPIRITUAL WELLNESS APP ====================
// Complete JavaScript for the Spiritual Wellness Website
// Features: Quotes, Diary, Timer, Ambient Sounds, Breathwork, Mudras, Techniques, Profile, Achievements

(function() {
    // ==================== DATA ====================
    const fullQuotesList = [
        // ... (same as in original HTML, but we'll keep it concise here)
        // For brevity, I'll assume the same array from the original HTML is used.
        // In a real implementation, you would copy the entire array from the original code.
    ];

    const mudrasData = [
        // ... (same as in original HTML)
    ];

    const techniques = {
        meditation: { name: "Meditation", xp: 10, description: "Sit quietly and observe your thoughts." },
        breathwork: { name: "Breathwork", xp: 8, description: "Practice conscious breathing techniques." },
        mudra: { name: "Mudra Practice", xp: 5, description: "Hold a mudra while meditating." },
        journaling: { name: "Journaling", xp: 5, description: "Write down your thoughts and reflections." }
    };

    // Default user data
    let user = {
        diary: [],
        stats: {
            totalSessions: 0,
            totalXp: 0,
            level: 1,
            techniquesPracticed: {}
        },
        achievements: []
    };

    // ==================== HELPER FUNCTIONS ====================
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }

    function saveToLocalStorage() {
        localStorage.setItem('spiritualAppUser', JSON.stringify(user));
    }

    function loadFromLocalStorage() {
        const saved = localStorage.getItem('spiritualAppUser');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                user = { ...user, ...parsed };
                // Ensure arrays exist
                if (!user.diary) user.diary = [];
                if (!user.stats) user.stats = { totalSessions: 0, totalXp: 0, level: 1, techniquesPracticed: {} };
                if (!user.achievements) user.achievements = [];
            } catch(e) { console.warn("Failed to load user data", e); }
        }
    }

    function addPracticedTechnique(techniqueId, techniqueName, xpEarned) {
        if (!user.stats.techniquesPracticed[techniqueId]) {
            user.stats.techniquesPracticed[techniqueId] = { name: techniqueName, count: 0, totalXp: 0 };
        }
        user.stats.techniquesPracticed[techniqueId].count += 1;
        user.stats.techniquesPracticed[techniqueId].totalXp += xpEarned;
        user.stats.totalSessions += 1;
        user.stats.totalXp += xpEarned;
        updateLevelAndAchievements();
        saveToLocalStorage();
        updateUI();
    }

    function updateLevelAndAchievements() {
        // Simple leveling: level = floor(totalXp / 100) + 1
        const newLevel = Math.floor(user.stats.totalXp / 100) + 1;
        if (newLevel > user.stats.level) {
            user.stats.level = newLevel;
            showToast(`🎉 Congratulations! You've reached level ${newLevel}!`);
        }
        // Check achievements (simple examples)
        const achievementsToUnlock = [];
        if (user.stats.totalSessions >= 10 && !user.achievements.includes('consistent')) {
            achievementsToUnlock.push('consistent');
        }
        if (user.stats.totalXp >= 500 && !user.achievements.includes('master')) {
            achievementsToUnlock.push('master');
        }
        achievementsToUnlock.forEach(ach => {
            user.achievements.push(ach);
            showToast(`🏆 Achievement unlocked: ${ach}`);
        });
    }

    function updateUI() {
        // Update profile stats, level, XP bar, etc.
        const xpNeeded = (user.stats.level) * 100;
        const currentXp = user.stats.totalXp - (user.stats.level - 1) * 100;
        const xpPercent = (currentXp / 100) * 100;
        const levelEl = document.getElementById('userLevel');
        if (levelEl) levelEl.innerText = user.stats.level;
        const xpBar = document.getElementById('xpBarFill');
        if (xpBar) xpBar.style.width = `${Math.min(100, xpPercent)}%`;
        const xpText = document.getElementById('xpText');
        if (xpText) xpText.innerText = `${currentXp} / 100 XP`;
    }

    // ==================== QUOTES ====================
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

    function nextHomeQuote() {
        currentHomeIndex = (currentHomeIndex + 1) % homeQuotes.length;
        updateHomeQuote();
    }

    function prevHomeQuote() {
        currentHomeIndex = (currentHomeIndex - 1 + homeQuotes.length) % homeQuotes.length;
        updateHomeQuote();
    }

    function nextLibQuote() {
        currentLibIndex = (currentLibIndex + 1) % shuffledQuotes.length;
        updateLibQuote();
    }

    function prevLibQuote() {
        currentLibIndex = (currentLibIndex - 1 + shuffledQuotes.length) % shuffledQuotes.length;
        updateLibQuote();
    }

    function saveCurrentHomeQuote() {
        const q = homeQuotes[currentHomeIndex];
        saveQuoteToBoth(q.text, q.author);
    }

    function saveCurrentLibQuote() {
        const q = shuffledQuotes[currentLibIndex];
        saveQuoteToBoth(q.text, q.author);
    }

    function saveQuoteToBoth(text, author) {
        const entry = `✨ Quote: "${text}" — ${author}`;
        user.diary.unshift({ date: new Date(), text: entry });
        saveToLocalStorage();
        renderDiary();
        showToast('Quote saved to diary');
    }

    // ==================== DIARY ====================
    function renderDiary() {
        const diaryList = document.getElementById('diaryList');
        if (!diaryList) return;
        diaryList.innerHTML = '';
        if (user.diary.length === 0) {
            diaryList.innerHTML = '<p class="text-center" style="color: var(--text-secondary);">Your diary is empty. Save some quotes or write your own entries.</p>';
            return;
        }
        user.diary.slice().reverse().forEach(entry => {
            const div = document.createElement('div');
            div.className = 'diary-item';
            const dateStr = new Date(entry.date).toLocaleString();
            div.innerHTML = `
                <div class="diary-date">${dateStr}</div>
                <div class="diary-text">${escapeHtml(entry.text)}</div>
            `;
            diaryList.appendChild(div);
        });
    }

    // Simple HTML escaping to prevent XSS
    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== TIMER ====================
    let timerSec = 300, timerInt = null, running = false;
    const timerDisplay = document.getElementById('timerDisplay');
    const timerCircle = document.querySelector('.timer-progress');
    const circumferenceTimer = 553; // 2*pi*r where r=88

    function updateTimerDisplay() {
        const mins = Math.floor(timerSec / 60);
        const secs = timerSec % 60;
        if (timerDisplay) timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (timerCircle) {
            const progress = timerSec <= 0 ? 0 : (300 - timerSec) / 300;
            const offset = circumferenceTimer - (progress * circumferenceTimer);
            timerCircle.style.strokeDashoffset = Math.min(circumferenceTimer, Math.max(0, offset));
        }
    }

    function startTimer() {
        if (running) return;
        running = true;
        timerInt = setInterval(() => {
            if (timerSec <= 0) {
                clearInterval(timerInt);
                running = false;
                addPracticedTechnique('meditation', 'Focused Meditation', Math.floor((300 - timerSec) / 60) || 5);
                document.getElementById('timerMsg').innerText = '✨ Complete! +xp ✨';
                showToast('Meditation completed!');
                updateTimerDisplay();
            } else {
                timerSec--;
                updateTimerDisplay();
            }
        }, 1000);
    }

    function pauseTimer() {
        if (timerInt) clearInterval(timerInt);
        running = false;
    }

    function resetTimer() {
        pauseTimer();
        timerSec = 300;
        updateTimerDisplay();
        document.getElementById('timerMsg').innerText = '';
    }

    function setTimerPreset(minutes) {
        timerSec = minutes * 60;
        updateTimerDisplay();
    }

    // ==================== AMBIENT SOUNDS ====================
    let currentSound = null;
    const soundFiles = {
        rain: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        forest: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        ocean: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        fire: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    };

    function playSound(sound) {
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        if (sound === 'silence') {
            currentSound = null;
            return;
        }
        const audio = new Audio(soundFiles[sound]);
        audio.loop = true;
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Autoplay blocked:', e));
        currentSound = audio;
    }

    // ==================== BREATHWORK ====================
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
        const instructionPanel = document.getElementById('breathInstructionPanel');
        if (instructionPanel) {
            instructionPanel.innerHTML = `<strong>📖 How to practice:</strong> ${breathInstructions[type]}<br><br>🧘 Starting guided session...`;
        }
        let phases = [], timings = [];
        if (type === 'box') {
            phases = ['inhale', 'hold', 'exhale', 'hold'];
            timings = [4, 4, 6, 4];
        } else if (type === '478') {
            phases = ['inhale', 'hold', 'exhale'];
            timings = [4, 7, 8];
        } else if (type === 'nadi') {
            phases = ['inhale left', 'hold', 'exhale right', 'inhale right', 'hold', 'exhale left'];
            timings = [4, 4, 4, 4, 4, 4];
        } else if (type === 'kapal') {
            phases = ['rapid exhale', 'rest'];
            timings = [20, 10];
        } else if (type === 'ujjayi') {
            phases = ['ujjayi inhale', 'ujjayi exhale'];
            timings = [5, 5];
        } else {
            return;
        }

        let phaseIdx = 0, cycle = 0, maxCycles = 4;
        const runPhase = () => {
            if (!breathActive) return;
            if (phaseIdx >= phases.length) {
                phaseIdx = 0;
                cycle++;
                if (cycle >= maxCycles) {
                    resetBreathUI();
                    addPracticedTechnique('breathwork', `${type.toUpperCase()} Breathwork`, 5);
                    showToast('Practice complete');
                    return;
                }
            }
            let timer = timings[phaseIdx];
            const phase = phases[phaseIdx];
            const breathPhaseLabel = document.getElementById('breathPhaseLabel');
            const breathPhaseText = document.getElementById('breathPhaseText');
            const breathTimerDisplay = document.getElementById('breathTimerDisplay');
            const progressCircle = document.querySelector('.progress-circle');
            if (breathPhaseLabel) breathPhaseLabel.innerHTML = phase.includes('inhale') ? '🌬️' : (phase.includes('hold') ? '🌀' : '💨');
            if (breathPhaseText) breathPhaseText.innerHTML = phase.toUpperCase();
            let step = 0;
            const interval = setInterval(() => {
                if (!breathActive) {
                    clearInterval(interval);
                    return;
                }
                step++;
                if (breathTimerDisplay) breathTimerDisplay.innerHTML = timer - step;
                const progress = (step / timer) * 100;
                if (progressCircle) progressCircle.style.strokeDashoffset = 860 - (progress / 100) * 860;
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
        const stopBtn = document.getElementById('stopBreathBtn');
        if (stopBtn) stopBtn.style.display = 'none';
        const instructionPanel = document.getElementById('breathInstructionPanel');
        if (instructionPanel) instructionPanel.innerHTML = "✨ Select a breath technique to see detailed instructions and begin your practice.";
        const breathPhaseLabel = document.getElementById('breathPhaseLabel');
        const breathPhaseText = document.getElementById('breathPhaseText');
        const breathTimerDisplay = document.getElementById('breathTimerDisplay');
        const progressCircle = document.querySelector('.progress-circle');
        if (breathPhaseLabel) breathPhaseLabel.innerHTML = '🌀';
        if (breathPhaseText) breathPhaseText.innerHTML = 'Ready';
        if (breathTimerDisplay) breathTimerDisplay.innerHTML = '0';
        if (progressCircle) progressCircle.style.strokeDashoffset = 860;
    }

    // ==================== MUDRA CAROUSEL ====================
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
        const counter = document.getElementById('mudraCounter');
        if (counter) counter.innerText = `${index + 1} / ${mudrasData.length}`;
    }

    function nextMudra() {
        currentMudraIndex = (currentMudraIndex + 1) % mudrasData.length;
        renderMudra(currentMudraIndex);
    }

    function prevMudra() {
        currentMudraIndex = (currentMudraIndex - 1 + mudrasData.length) % mudrasData.length;
        renderMudra(currentMudraIndex);
    }

    function saveCurrentMudraToDiary() {
        const mudra = mudrasData[currentMudraIndex];
        const entry = `🧘 Mudra: ${mudra.name} (${mudra.sanskrit})\n\nMeaning: ${mudra.meaning}\n\nHow to Form: ${mudra.how}\n\nEssence: ${mudra.essence}\n\nInner Meditation: ${mudra.meditation}`;
        user.diary.unshift({ date: new Date(), text: entry });
        saveToLocalStorage();
        renderDiary();
        showToast('Mudra saved to diary');
    }

    // ==================== PLAN (placeholder) ====================
    function renderPlan() {
        // Simple plan generation based on user stats
        const planContainer = document.getElementById('planContent');
        if (!planContainer) return;
        const suggested = [];
        if (user.stats.totalSessions < 5) {
            suggested.push("Start with a 5-minute meditation each morning.");
        }
        if (Object.keys(user.stats.techniquesPracticed).length < 3) {
            suggested.push("Try a new breathwork technique this week.");
        }
        if (user.diary.length < 3) {
            suggested.push("Write down one reflection each day.");
        }
        if (suggested.length === 0) {
            planContainer.innerHTML = "<p>Great job! You're on a consistent path. Consider exploring a new mudra or increasing your meditation duration.</p>";
        } else {
            planContainer.innerHTML = "<ul>" + suggested.map(s => `<li>${s}</li>`).join('') + "</ul>";
        }
    }

    // ==================== PROFILE SECTIONS ====================
    function renderProfileSections() {
        // Profile Overview
        const overviewDiv = document.getElementById('profileOverview');
        if (overviewDiv) {
            overviewDiv.innerHTML = `
                <div class="stat-grid">
                    <div class="stat-card">Level: ${user.stats.level}</div>
                    <div class="stat-card">Total XP: ${user.stats.totalXp}</div>
                    <div class="stat-card">Sessions: ${user.stats.totalSessions}</div>
                </div>
            `;
        }
        // Techniques practiced
        const techniquesDiv = document.getElementById('profileTechniques');
        if (techniquesDiv) {
            if (Object.keys(user.stats.techniquesPracticed).length === 0) {
                techniquesDiv.innerHTML = "<p>No techniques practiced yet. Try the timer or breathwork!</p>";
            } else {
                let html = '<div class="stat-grid">';
                for (let id in user.stats.techniquesPracticed) {
                    const t = user.stats.techniquesPracticed[id];
                    html += `<div class="stat-card"><strong>${t.name}</strong><br>${t.count} sessions<br>${t.totalXp} XP</div>`;
                }
                html += '</div>';
                techniquesDiv.innerHTML = html;
            }
        }
        // Achievements
        const achievementsDiv = document.getElementById('profileAchievements');
        if (achievementsDiv) {
            if (user.achievements.length === 0) {
                achievementsDiv.innerHTML = "<p>No achievements yet. Keep practicing!</p>";
            } else {
                achievementsDiv.innerHTML = "<ul>" + user.achievements.map(a => `<li>🏆 ${a}</li>`).join('') + "</ul>";
            }
        }
    }

    // ==================== NAVIGATION ====================
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

    let transitioning = false;

    function showView(viewName) {
        if (transitioning) return;
        const target = document.getElementById(views[viewName]);
        if (!target) return;
        const current = document.querySelector('.view-container:not(.hidden)');
        if (current === target) return;

        transitioning = true;
        document.body.classList.add('transitioning');

        const hideCurrent = (currentEl) => {
            if (!currentEl) return Promise.resolve();
            currentEl.classList.add('view-exit');
            return new Promise(resolve => {
                currentEl.addEventListener('transitionend', () => {
                    currentEl.classList.remove('view-exit');
                    currentEl.classList.add('hidden');
                    resolve();
                }, { once: true });
            });
        };

        const showTarget = (targetEl) => {
            targetEl.classList.remove('hidden');
            targetEl.classList.add('view-enter');
            requestAnimationFrame(() => {
                targetEl.classList.add('view-enter-active');
                targetEl.addEventListener('transitionend', () => {
                    targetEl.classList.remove('view-enter', 'view-enter-active');
                    transitioning = false;
                    document.body.classList.remove('transitioning');
                }, { once: true });
            });
        };

        hideCurrent(current).then(() => showTarget(target));
        // Update active nav link
        document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
        const activeNav = document.querySelector(`.nav a[data-view="${viewName}"]`);
        if (activeNav) activeNav.classList.add('active');
    }

    // ==================== THEME TOGGLE ====================
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            themeBtn.addEventListener('click', () => {
                const html = document.documentElement;
                const cur = html.getAttribute('data-theme');
                const newTheme = cur === 'dark' ? 'light' : 'dark';
                html.setAttribute('data-theme', newTheme);
                themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', newTheme);
            });
        }
    }

    // ==================== SCROLL TO TOP ====================
    function initScrollTop() {
        const scrollBtn = document.getElementById('scrollTop');
        if (!scrollBtn) return;
        window.addEventListener('scroll', () => {
            scrollBtn.style.opacity = window.scrollY > 200 ? '1' : '0';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==================== INITIALIZATION ====================
    function init() {
        loadFromLocalStorage();

        // Quote event listeners
        document.getElementById('prevHomeQuote')?.addEventListener('click', prevHomeQuote);
        document.getElementById('nextHomeQuote')?.addEventListener('click', nextHomeQuote);
        document.getElementById('saveHomeQuoteBtn')?.addEventListener('click', saveCurrentHomeQuote);
        document.getElementById('prevLibQuote')?.addEventListener('click', prevLibQuote);
        document.getElementById('nextLibQuote')?.addEventListener('click', nextLibQuote);
        document.getElementById('saveLibQuoteBtn')?.addEventListener('click', saveCurrentLibQuote);

        // Diary
        document.getElementById('saveDiary')?.addEventListener('click', () => {
            const txt = document.getElementById('diaryEntry')?.value.trim();
            if (txt) {
                user.diary.unshift({ date: new Date(), text: txt });
                saveToLocalStorage();
                renderDiary();
                document.getElementById('diaryEntry').value = '';
                showToast('Entry saved');
            }
        });

        // Timer
        document.querySelectorAll('.timer-pill').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mins = parseInt(btn.dataset.min);
                if (!isNaN(mins)) setTimerPreset(mins);
            });
        });
        document.getElementById('customMinutes')?.addEventListener('change', (e) => {
            const mins = parseInt(e.target.value);
            if (!isNaN(mins) && mins > 0) setTimerPreset(mins);
        });
        document.getElementById('startTimer')?.addEventListener('click', startTimer);
        document.getElementById('pauseTimer')?.addEventListener('click', pauseTimer);
        document.getElementById('resetTimer')?.addEventListener('click', resetTimer);

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
        document.querySelectorAll('.start-breath').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = btn.closest('.breath-card');
                if (card && card.dataset.breath) {
                    startBreathPractice(card.dataset.breath);
                }
            });
        });
        document.getElementById('stopBreathBtn')?.addEventListener('click', resetBreathUI);

        // Mudra carousel
        document.getElementById('prevMudraBtn')?.addEventListener('click', prevMudra);
        document.getElementById('nextMudraBtn')?.addEventListener('click', nextMudra);
        document.getElementById('saveMudraBtn')?.addEventListener('click', saveCurrentMudraToDiary);

        // Navigation
        document.querySelectorAll('[data-view]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                showView(el.dataset.view);
            });
        });

        // Daily button (simple)
        document.getElementById('dailyBtn')?.addEventListener('click', () => {
            const techniquesArray = Object.keys(techniques);
            const randomTech = techniques[techniquesArray[Math.floor(Math.random() * techniquesArray.length)]];
            alert(`Today's suggestion: ${randomTech.name}\n${randomTech.description}`);
        });

        // Explore button
        document.getElementById('exploreBtn')?.addEventListener('click', () => showView('techniques'));

        // Profile tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.profileTab;
                document.querySelectorAll('.profile-section-container').forEach(sec => sec.classList.remove('active-tab'));
                document.getElementById(`profile${tab.charAt(0).toUpperCase() + tab.slice(1)}`)?.classList.add('active-tab');
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Initial render
        updateHomeQuote();
        updateLibQuote();
        renderDiary();
        renderPlan();
        renderProfileSections();
        updateUI();
        showView('home');
        initTheme();
        initScrollTop();

        // Request notification permission (optional)
        if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission();
        }

        // Service worker registration (optional)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(console.log);
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
