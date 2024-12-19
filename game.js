class GeulaGame {
    constructor() {
        this.tasks = [
            "כתבי מכתב קצר מנקודת מבטו של אדמו״ר הזקן בכלא ושלחי בצ׳אט",
            "חברי 3 חידות על י״ט כסלו ותני לחברות לענות בצ׳אט",
            "כתבי שיר קצר על חג הגאולה ושתפי במצלמה או בצ׳אט",
            "סכמי בנקודות את סיפור המאסר והגאולה ושלחי בצ׳אט",
            "הציגי בפנטומימה מושג הקשור לי״ט כסלו (עם מצלמה) ותני לחברות לנחש",
            "צלמי סרטון קצר (30 שניות) המסביר מהו חג הגאולה",
            "הראי דרך המצלמה ציור שציירת על י״ט כסלו",
            "בחרי ניגון של אדמו״ר הזקן ושירי אותו במצלמה",
            "ספרי בקול סיפור קצר על י״ט כסלו",
            "בחרי קטע קצר מהתניא והסבירי אותו לכולן",
            "הכיני שאלה לדיון על משמעות הגאולה בימינו",
            "שתפי סיפור אישי הקשור לחג הגאולה",
            "צרי מם (תמונה מצחיקה) הקשור לי״ט כסלו ושתפי במסך",
            "חפשי תמונה באינטרנט הקשורה לי״ט כסלו והסבירי למה בחרת בה",
            "הכיני שקופית אחת יפה על י״ט כסלו ושתפי מסך",
            "צרי ענן מילים דיגיטלי עם מושגים מי״ט כסלו",
            "שתפי מה את לומדת מסיפור המאסר והגאולה לחיים שלך",
            "הסבירי איך את מרגישה כשאת לומדת על י״ט כסלו",
            "ספרי מה היית רוצה לשאול את אדמו״ר הזקן אם היית פוגשת אותו"
        ];
        this.createStars();
        this.initializeBoard();
        this.initializeMusic();
    }

    createStars() {
        const starsContainer = document.querySelector('.stars');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }

    initializeBoard() {
        const board = document.querySelector('.board');
        board.innerHTML = '';
        
        for (let i = 0; i < 19; i++) {
            const cell = document.createElement('div');
            cell.className = 'board-cell';
            cell.textContent = i + 1;
            
            cell.addEventListener('click', () => {
                this.showTask(i);
                cell.style.backgroundColor = '#90EE90';
                cell.style.color = '#333';
            });
            
            board.appendChild(cell);
        }
    }

    showTask(index) {
        const task = this.tasks[index];
        const taskElement = document.createElement('div');
        taskElement.className = 'task-popup';
        taskElement.innerHTML = `
            <div class="task-content">
                <h3>משימה ${index + 1}</h3>
                <p class="task-text">${task}</p>
                <div class="task-buttons">
                    <button onclick="this.closest('.task-popup').remove()">סגור</button>
                </div>
            </div>
        `;
        document.body.appendChild(taskElement);
    }

    initializeMusic() {
        const musicBtn = document.getElementById('music-toggle');
        const music = document.getElementById('background-music');
        
        musicBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                musicBtn.textContent = '🔊';
            } else {
                music.pause();
                musicBtn.textContent = '🔈';
            }
        });
    }
}

const game = new GeulaGame();