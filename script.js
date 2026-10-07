/* =========================================
   MALLOW MOVEMENT
   ROUTINE SYSTEM
========================================= */


/* =========================================
   ROUTINES
========================================= */

const routines = [

  /* =========================================
     MOVEMENT
  ========================================= */

  {
    id: "getting-started",
    category: "movement",
    categoryName: "Movement",
    icon: "🦇",
    title: "Getting Started",
    description: "A gentle introduction to moving your body.",
    workout: true,

    steps: [

      {
        title: "Easy March",
        type: "timer",
        seconds: 45,
        description:
          "Stand comfortably and gently march in place. Lift one foot at a time while letting your arms move naturally. Keep your pace relaxed and comfortable."
      },

      {
        title: "Arm Circles",
        type: "timer",
        seconds: 30,
        description:
          "Extend your arms out to your sides. Slowly make small circles with both arms, gradually making the circles a little larger. After several seconds, reverse the direction."
      },

      {
        title: "Side Steps",
        type: "timer",
        seconds: 45,
        description:
          "Step gently to one side, bring your other foot toward it, then step back the other way. Keep your knees relaxed and move at a pace that feels natural."
      },

      {
        title: "Gentle Squats",
        type: "reps",
        sets: 2,
        reps: 8,
        description:
          "Stand with your feet comfortably apart. Bend your knees and lower yourself slightly as if you were sitting into a chair, then return to standing. Keep the movement controlled and only go as low as feels comfortable."
      },

      {
        title: "Easy Cool Down",
        type: "timer",
        seconds: 45,
        description:
          "Slow your movement down and take a few comfortable breaths. Gently move your arms and shoulders or walk slowly in place while letting your body settle."
      }

    ]
  },


  {
    id: "build-strength",
    category: "movement",
    categoryName: "Movement",
    icon: "💪",
    title: "Build Strength",
    description: "Simple strength-focused movements you can do at your own pace.",
    workout: true,

    steps: [

      {
        title: "Chair Squats",
        type: "reps",
        sets: 2,
        reps: 8,
        description:
          "Stand in front of a sturdy chair with your feet comfortably apart. Bend your knees and hips to lower yourself toward the chair, then stand back up. You do not need to sit all the way down."
      },

      {
        title: "Wall Push-Ups",
        type: "reps",
        sets: 2,
        reps: 8,
        description:
          "Stand facing a wall and place your hands against it around chest height. Slowly bend your elbows to bring yourself closer to the wall, then gently push yourself back."
      },

      {
        title: "Glute Bridges",
        type: "reps",
        sets: 2,
        reps: 10,
        description:
          "Lie on your back with your knees bent and feet resting comfortably on the floor. Gently lift your hips, pause briefly, then slowly lower them back down."
      },

      {
        title: "Standing Calf Raises",
        type: "reps",
        sets: 2,
        reps: 10,
        description:
          "Stand comfortably and hold onto something stable if you need support. Slowly rise onto the balls of your feet, then lower your heels back down with control."
      },

      {
        title: "Standing Knee Lifts",
        type: "reps",
        sets: 2,
        reps: 10,
        description:
          "Stand comfortably and lift one knee toward your waist, then lower it and switch sides. Keep your upper body relaxed and use a steady pace."
      }

    ]
  },


  {
    id: "stretch-mobility",
    category: "movement",
    categoryName: "Movement",
    icon: "🌿",
    title: "Stretch & Mobility",
    description: "Gentle movements for loosening up and feeling comfortable.",
    workout: true,

    steps: [

      {
        title: "Neck Relaxation",
        type: "timer",
        seconds: 30,
        description:
          "Sit or stand comfortably. Slowly look from side to side without forcing the movement. Keep your shoulders relaxed and avoid pushing your neck into a stretch."
      },

      {
        title: "Shoulder Rolls",
        type: "timer",
        seconds: 30,
        description:
          "Let your arms rest naturally by your sides. Slowly roll your shoulders forward and upward, then back and down. After several repetitions, reverse the direction."
      },

      {
        title: "Side Stretch",
        type: "timer",
        seconds: 30,
        description:
          "Stand comfortably and reach one arm overhead. Gently lean toward the opposite side until you feel a comfortable stretch along your side. Switch sides halfway through."
      },

      {
        title: "Hamstring Stretch",
        type: "timer",
        seconds: 30,
        description:
          "Sit or stand comfortably with one leg extended. Gently lean toward the extended leg without forcing yourself to reach your foot. Switch sides halfway through."
      },

      {
        title: "Easy Movement",
        type: "timer",
        seconds: 45,
        description:
          "Move however feels comfortable. You can gently walk, sway, roll your shoulders, or stretch your arms. Use this time to relax and let your body move naturally."
      }

    ]
  },


  {
    id: "get-moving",
    category: "movement",
    categoryName: "Movement",
    icon: "⚡",
    title: "Get Moving",
    description: "A slightly more energetic routine for when you want to move around.",
    workout: true,

    steps: [

      {
        title: "March in Place",
        type: "timer",
        seconds: 45,
        description:
          "March comfortably in place while letting your arms move naturally. Find a steady rhythm that feels energetic without becoming uncomfortable."
      },

      {
        title: "Step Touch",
        type: "timer",
        seconds: 45,
        description:
          "Step to one side and bring your other foot toward it. Then step to the opposite side. Keep repeating while letting your arms move naturally."
      },

      {
        title: "Standing Knee Lifts",
        type: "timer",
        seconds: 45,
        description:
          "Alternate lifting your knees one at a time. Keep your movements controlled and use a pace that feels comfortable for you."
      },

      {
        title: "Gentle Squats",
        type: "reps",
        sets: 2,
        reps: 8,
        description:
          "Stand with your feet comfortably apart. Bend your knees and hips to lower yourself slightly, then return to standing. Keep your movements smooth rather than rushing."
      },

      {
        title: "Slow Down",
        type: "timer",
        seconds: 45,
        description:
          "Gradually slow your movement down. Walk gently in place, move your arms, and take comfortable breaths while allowing your body to settle."
      }

    ]
  },


  /* =========================================
     WIND DOWN
  ========================================= */

  {
    id: "slow-down",
    category: "relax",
    categoryName: "Wind Down",
    icon: "🌑",
    title: "Slow Down",
    description: "A quiet routine for relaxing and settling down.",
    workout: true,

    steps: [

      {
        title: "Get Comfortable",
        type: "timer",
        seconds: 30,
        description:
          "Find a comfortable seated or standing position. Let your shoulders relax and take a moment to settle in."
      },

      {
        title: "Slow Breathing",
        type: "timer",
        seconds: 45,
        description:
          "Breathe at a comfortable pace. Let your breathing become slower and more relaxed without forcing yourself to take unusually deep breaths."
      },

      {
        title: "Shoulder Release",
        type: "timer",
        seconds: 30,
        description:
          "Gently lift your shoulders toward your ears, then let them relax back down. Repeat slowly while keeping the rest of your body comfortable."
      },

      {
        title: "Gentle Stretch",
        type: "timer",
        seconds: 45,
        description:
          "Choose a comfortable stretch for your arms, shoulders, back, or legs. Move slowly and stop or change positions if anything feels uncomfortable."
      },

      {
        title: "Quiet Moment",
        type: "timer",
        seconds: 60,
        description:
          "Sit or stand comfortably and give yourself a quiet moment. You can close your eyes if you want, look around the room, or simply relax."
      }

    ]
  },


  /* =========================================
     SELF-CARE
  ========================================= */

  {
    id: "refreshing-shower",
    category: "shower",
    categoryName: "Shower",
    icon: "🚿",
    title: "Refreshing Shower",
    description: "A simple shower routine to help you feel fresh and comfortable.",
    workout: false,

    steps: [

      {
        title: "Get Your Supplies",
        type: "done",
        description:
          "Before getting in, make sure you have whatever you normally use, such as a towel, body wash, shampoo, and conditioner. Having everything nearby makes the routine easier."
      },

      {
        title: "Wash Your Body",
        type: "done",
        description:
          "Use warm water and your usual body wash or soap. Gently clean the areas that need washing, then rinse thoroughly."
      },

      {
        title: "Wash Your Hair",
        type: "done",
        description:
          "If today is a hair-washing day, wet your hair completely and use your usual shampoo. Gently work it through your hair and rinse it out."
      },

      {
        title: "Condition If Needed",
        type: "done",
        description:
          "If you use conditioner, apply it according to the directions on your product. Give it the recommended amount of time, then rinse it out."
      },

      {
        title: "Rinse & Dry",
        type: "done",
        description:
          "Make sure any soap or product is rinsed away. When you're finished, gently dry yourself with a clean towel and get dressed in comfortable clothes."
      }

    ]
  },


  {
    id: "hair-care",
    category: "hair",
    categoryName: "Hair",
    icon: "🪮",
    title: "Hair Care",
    description: "A simple routine for taking care of your hair.",
    workout: false,

    steps: [

      {
        title: "Gently Detangle",
        type: "done",
        description:
          "Use a brush or comb that works well for your hair. Start gently and work through tangles without pulling hard. If your hair is difficult to detangle, take your time."
      },

      {
        title: "Choose Your Style",
        type: "done",
        description:
          "Decide how you want your hair to look today. You can leave it natural, brush it into place, or try a style you enjoy."
      },

      {
        title: "Add Hair Products",
        type: "done",
        description:
          "If you use hair products, apply only what you normally need and follow the product directions. Work the product through your hair gently."
      },

      {
        title: "Final Check",
        type: "done",
        description:
          "Look in a mirror and make any small adjustments you want. Your hair does not have to be perfect — the goal is simply to make it feel the way you like."
      }

    ]
  },


  {
    id: "face-care",
    category: "face",
    categoryName: "Face",
    icon: "✨",
    title: "Face Care",
    description: "A simple face-care routine for feeling refreshed.",
    workout: false,

    steps: [

      {
        title: "Wash Your Hands",
        type: "done",
        description:
          "Wash your hands with soap and water before touching your face. This helps keep the routine clean."
      },

      {
        title: "Cleanse",
        type: "done",
        description:
          "Use your usual gentle facial cleanser and follow the directions on the product. Apply it gently rather than scrubbing hard."
      },

      {
        title: "Rinse",
        type: "done",
        description:
          "Rinse your face thoroughly with comfortable-temperature water. Make sure you remove any remaining cleanser."
      },

      {
        title: "Dry Gently",
        type: "done",
        description:
          "Use a clean towel and gently pat your face dry. Avoid rubbing aggressively."
      },

      {
        title: "Moisturize",
        type: "done",
        description:
          "If moisturizer is part of your normal routine, apply a small amount according to the product directions and gently spread it over your skin."
      }

    ]
  },


  {
    id: "morning-care",
    category: "selfcare",
    categoryName: "Self-Care",
    icon: "🌤️",
    title: "Morning Care",
    description: "A simple way to start your day feeling ready.",
    workout: false,

    steps: [

      {
        title: "Drink Some Water",
        type: "done",
        description:
          "Have a drink of water when you wake up or whenever you're ready. You don't need to force yourself to drink a specific amount."
      },

      {
        title: "Brush Your Teeth",
        type: "done",
        description:
          "Use your toothbrush and toothpaste as you normally would. Brush gently and thoroughly, then rinse when you're finished."
      },

      {
        title: "Freshen Up",
        type: "done",
        description:
          "Wash your face, shower, or do whatever small hygiene routine helps you feel refreshed and ready for the day."
      },

      {
        title: "Get Dressed",
        type: "done",
        description:
          "Choose clothes that are comfortable and appropriate for what you're doing today. Pick something that feels like you."
      },

      {
        title: "Check In",
        type: "done",
        description:
          "Take a moment to think about what you need today. You can choose one small thing to focus on and let the rest come naturally."
      }

    ]
  },


  {
    id: "night-care",
    category: "selfcare",
    categoryName: "Self-Care",
    icon: "🌙",
    title: "Night Care",
    description: "A simple routine to help you settle into your evening.",
    workout: false,

    steps: [

      {
        title: "Put Things Away",
        type: "done",
        description:
          "Take a few minutes to put away anything you no longer need. You don't have to clean everything — just make your space a little easier to relax in."
      },

      {
        title: "Brush Your Teeth",
        type: "done",
        description:
          "Brush your teeth gently and thoroughly using your normal toothpaste and toothbrush routine."
      },

      {
        title: "Wash Your Face",
        type: "done",
        description:
          "If face washing is part of your routine, gently cleanse your face and follow your normal skincare steps."
      },

      {
        title: "Get Comfortable",
        type: "done",
        description:
          "Change into comfortable clothes or pajamas and get your sleeping area ready."
      },

      {
        title: "Wind Down",
        type: "done",
        description:
          "Give yourself some quiet time before bed. You could read, listen to something calm, stretch gently, or simply relax."
      }

    ]
  }

];


/* =========================================
   STATE
========================================= */

let currentRoutine = null;
let currentStepIndex = 0;
let remainingSeconds = 0;

let timerInterval = null;
let breakInterval = null;

let isPaused = false;
let breakSeconds = 30;

let routineStartTime = null;
let completedStepCount = 0;


/* =========================================
   ELEMENT HELPERS
========================================= */

function get(id) {
  return document.getElementById(id);
}


/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${String(secs).padStart(2, "0")}`;

}


/* =========================================
   CLEAR TIMERS
========================================= */

function clearTimers() {

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (breakInterval) {
    clearInterval(breakInterval);
    breakInterval = null;
  }

}


/* =========================================
   RENDER ROUTINE CARDS
========================================= */

function renderRoutines(category = "all") {

  const grid = get("routineGrid");

  if (!grid) return;

  grid.innerHTML = "";

  const filtered = routines.filter(routine => {

    if (category === "all") {
      return true;
    }

    return routine.category === category;

  });


  filtered.forEach(routine => {

    const card = document.createElement("article");

    card.className = `library-card ${routine.category}`;

    card.innerHTML = `

      <div class="library-card-icon">
        ${routine.icon}
      </div>

      <span class="routine-label">
        ${routine.categoryName}
      </span>

      <h3>
        ${routine.title}
      </h3>

      <p>
        ${routine.description}
      </p>

      <div class="library-card-footer">

        <span>
          ${routine.steps.length} steps
        </span>

        <span class="library-card-arrow">
          →
        </span>

      </div>

    `;


    card.addEventListener("click", () => {
      startRoutine(routine.id);
    });


    grid.appendChild(card);

  });

}


/* =========================================
   CATEGORY FILTERS
========================================= */

function setupCategoryTabs() {

  const tabs = document.querySelectorAll(".category-tab");

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      tabs.forEach(item => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

      renderRoutines(
        tab.dataset.category
      );

    });

  });

}


/* =========================================
   START ROUTINE
========================================= */

function startRoutine(routineId) {

  const routine = routines.find(
    item => item.id === routineId
  );

  if (!routine) return;

  currentRoutine = routine;
  currentStepIndex = 0;
  completedStepCount = 0;

  routineStartTime = Date.now();

  clearTimers();

  const playerOverlay = get("playerOverlay");
  const breakOverlay = get("breakOverlay");
  const completionOverlay = get("completionOverlay");

  if (breakOverlay) {
    breakOverlay.style.display = "none";
  }

  if (completionOverlay) {
    completionOverlay.style.display = "none";
  }

  if (playerOverlay) {
    playerOverlay.style.display = "flex";
  }

  showCurrentStep();

}


/* =========================================
   SHOW CURRENT STEP
========================================= */

function showCurrentStep() {

  if (!currentRoutine) return;

  clearTimers();

  isPaused = false;

  const step =
    currentRoutine.steps[currentStepIndex];

  if (!step) {
    completeRoutine();
    return;
  }


  /* -----------------------------------------
     BASIC PLAYER INFO
  ----------------------------------------- */

  const category = get("playerCategory");
  const title = get("playerTitle");
  const icon = get("playerIcon");

  const currentStepDisplay =
    get("currentStep");

  const totalStepsDisplay =
    get("totalSteps");

  const stepTitle =
    get("playerStepTitle");

  const description =
    get("playerDescription");

  const label =
    get("playerLabel");


  if (category) {
    category.textContent =
      currentRoutine.categoryName.toUpperCase();
  }

  if (title) {
    title.textContent =
      currentRoutine.title;
  }

  if (icon) {
    icon.textContent =
      currentRoutine.icon;
  }

  if (currentStepDisplay) {
    currentStepDisplay.textContent =
      currentStepIndex + 1;
  }

  if (totalStepsDisplay) {
    totalStepsDisplay.textContent =
      currentRoutine.steps.length;
  }

  if (stepTitle) {
    stepTitle.textContent =
      step.title;
  }

  if (description) {
    description.textContent =
      step.description;
  }

  if (label) {

    if (step.type === "timer") {
      label.textContent = "MOVE";
    }

    else if (step.type === "reps") {
      label.textContent = "REPS";
    }

    else {
      label.textContent = "HOW TO";
    }

  }


  /* -----------------------------------------
     PROGRESS
  ----------------------------------------- */

  const progressBar =
    get("playerProgressBar");

  if (progressBar) {

    const progress =
      (currentStepIndex /
        currentRoutine.steps.length) * 100;

    progressBar.style.width =
      `${progress}%`;

  }


  /* -----------------------------------------
     HIDE EVERYTHING FIRST
  ----------------------------------------- */

  const timerArea =
    get("timerArea");

  const repsArea =
    get("repsArea");

  const doneButton =
    get("playerDone");

  const timerControls =
    get("timerControls");


  if (timerArea) {
    timerArea.style.display = "none";
  }

  if (repsArea) {
    repsArea.style.display = "none";
  }

  if (doneButton) {
    doneButton.style.display = "none";
  }

  if (timerControls) {
    timerControls.style.display = "none";
  }


  /* =========================================
     TIMER STEP
  ========================================= */

  if (
    currentRoutine.workout === true &&
    step.type === "timer"
  ) {

    if (timerArea) {
      timerArea.style.display = "flex";
    }

    if (timerControls) {
      timerControls.style.display = "flex";
    }

    remainingSeconds =
      Number(step.seconds) || 0;

    updateTimerDisplay();

    startTimer();

    return;
  }


  /* =========================================
     REPS STEP
  ========================================= */

  if (
    currentRoutine.workout === true &&
    step.type === "reps"
  ) {

    if (repsArea) {
      repsArea.style.display = "flex";
    }

    if (doneButton) {
      doneButton.style.display = "flex";
    }


    const setsDisplay =
      get("setsDisplay");

    const repsDisplay =
      get("repsDisplay");


    if (setsDisplay) {
      setsDisplay.textContent =
        step.sets || 1;
    }

    if (repsDisplay) {
      repsDisplay.textContent =
        step.reps || 1;
    }

    return;
  }


  /* =========================================
     DONE STEP
  ========================================= */

  if (doneButton) {
    doneButton.style.display = "flex";
  }

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

  clearTimers();

  timerInterval = setInterval(() => {

    if (isPaused) {
      return;
    }

    remainingSeconds--;

    updateTimerDisplay();

    if (remainingSeconds <= 0) {

      clearTimers();

      completeCurrentStep();

    }

  }, 1000);

}


/* =========================================
   TIMER DISPLAY
========================================= */

function updateTimerDisplay() {

  const display =
    get("timerDisplay");

  if (display) {
    display.textContent =
      formatTime(
        Math.max(remainingSeconds, 0)
      );
  }

}


/* =========================================
   PAUSE / RESUME
========================================= */

function togglePause() {

  const button =
    get("pauseButton");

  if (!button) return;

  isPaused = !isPaused;

  button.textContent =
    isPaused ? "Resume" : "Pause";

}


/* =========================================
   SKIP
========================================= */

function skipCurrentStep() {

  clearTimers();

  completedStepCount++;

  goToNextStep();

}


/* =========================================
   DONE BUTTON
========================================= */

function completeCurrentStep() {

  clearTimers();

  completedStepCount++;

  goToNextStep();

}


/* =========================================
   NEXT STEP
========================================= */

function goToNextStep() {

  currentStepIndex++;

  if (
    currentStepIndex >=
    currentRoutine.steps.length
  ) {

    completeRoutine();

    return;

  }


  /*
    Give workout routines a short rest
    between steps when appropriate.
  */

  if (
    currentRoutine.workout === true &&
    currentRoutine.steps[currentStepIndex - 1]?.type !== "reps"
  ) {

    showBreak();

    return;

  }


  showCurrentStep();

}


/* =========================================
   BREAK
========================================= */

function showBreak() {

  const overlay =
    get("breakOverlay");

  const timer =
    get("breakTimer");

  if (!overlay || !timer) {
    showCurrentStep();
    return;
  }


  clearTimers();

  breakSeconds = 30;

  timer.textContent =
    formatTime(breakSeconds);

  overlay.style.display = "flex";


  breakInterval = setInterval(() => {

    breakSeconds--;

    timer.textContent =
      formatTime(breakSeconds);

    if (breakSeconds <= 0) {

      clearTimers();

      overlay.style.display = "none";

      showCurrentStep();

    }

  }, 1000);

}


/* =========================================
   SKIP BREAK
========================================= */

function skipBreak() {

  clearTimers();

  const overlay =
    get("breakOverlay");

  if (overlay) {
    overlay.style.display = "none";
  }

  showCurrentStep();

}


/* =========================================
   ADD BREAK TIME
========================================= */

function addBreakTime() {

  breakSeconds += 15;

  const timer =
    get("breakTimer");

  if (timer) {
    timer.textContent =
      formatTime(breakSeconds);
  }

}


/* =========================================
   COMPLETE ROUTINE
========================================= */

function completeRoutine() {

  clearTimers();

  const playerOverlay =
    get("playerOverlay");

  const breakOverlay =
    get("breakOverlay");

  const completionOverlay =
    get("completionOverlay");


  if (playerOverlay) {
    playerOverlay.style.display = "none";
  }

  if (breakOverlay) {
    breakOverlay.style.display = "none";
  }

  if (completionOverlay) {
    completionOverlay.style.display = "flex";
  }


  const completedSteps =
    get("completedSteps");

  if (completedSteps) {
    completedSteps.textContent =
      completedStepCount;
  }


  const completedTime =
    get("completedTime");


  if (completedTime && routineStartTime) {

    const elapsed =
      Math.floor(
        (Date.now() - routineStartTime) / 1000
      );

    completedTime.textContent =
      formatTime(elapsed);

  }


  const completionMessage =
    get("completionMessage");

  if (completionMessage) {

    if (currentRoutine.workout) {

      completionMessage.textContent =
        "Nice work! You made some time to move and take care of yourself.";

    } else {

      completionMessage.textContent =
        "You made some time for yourself today. That's something to be proud of.";

    }

  }

}


/* =========================================
   RESTART ROUTINE
========================================= */

function restartRoutine() {

  if (!currentRoutine) return;

  const completionOverlay =
    get("completionOverlay");

  if (completionOverlay) {
    completionOverlay.style.display = "none";
  }

  currentStepIndex = 0;
  completedStepCount = 0;
  routineStartTime = Date.now();

  const playerOverlay =
    get("playerOverlay");

  if (playerOverlay) {
    playerOverlay.style.display = "flex";
  }

  showCurrentStep();

}


/* =========================================
   CLOSE PLAYER
========================================= */

function closePlayer() {

  clearTimers();

  const playerOverlay =
    get("playerOverlay");

  const breakOverlay =
    get("breakOverlay");

  const completionOverlay =
    get("completionOverlay");


  if (playerOverlay) {
    playerOverlay.style.display = "none";
  }

  if (breakOverlay) {
    breakOverlay.style.display = "none";
  }

  if (completionOverlay) {
    completionOverlay.style.display = "none";
  }


  currentRoutine = null;
  currentStepIndex = 0;

}


/* =========================================
   SURPRISE ME
========================================= */

function surpriseMe() {

  const randomIndex =
    Math.floor(
      Math.random() * routines.length
    );

  const routine =
    routines[randomIndex];

  if (routine) {
    startRoutine(routine.id);
  }

}


/* =========================================
   URL CATEGORY
========================================= */

function loadCategoryFromURL() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const category =
    params.get("category");

  if (!category) return;

  const tab =
    document.querySelector(
      `.category-tab[data-category="${category}"]`
    );

  if (!tab) return;

  document
    .querySelectorAll(".category-tab")
    .forEach(item => {
      item.classList.remove("active");
    });

  tab.classList.add("active");

  renderRoutines(category);

}


/* =========================================
   EVENT LISTENERS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderRoutines();

  setupCategoryTabs();

  loadCategoryFromURL();


  const pauseButton =
    get("pauseButton");

  if (pauseButton) {
    pauseButton.addEventListener(
      "click",
      togglePause
    );
  }


  const skipButton =
    get("skipButton");

  if (skipButton) {
    skipButton.addEventListener(
      "click",
      skipCurrentStep
    );
  }


  const doneButton =
    get("playerDone");

  if (doneButton) {
    doneButton.addEventListener(
      "click",
      completeCurrentStep
    );
  }


  const playerClose =
    get("playerClose");

  if (playerClose) {
    playerClose.addEventListener(
      "click",
      closePlayer
    );
  }


  const skipBreakButton =
    get("skipBreak");

  if (skipBreakButton) {
    skipBreakButton.addEventListener(
      "click",
      skipBreak
    );
  }


  const moreBreakButton =
    get("moreBreak");

  if (moreBreakButton) {
    moreBreakButton.addEventListener(
      "click",
      addBreakTime
    );
  }


  const restartButton =
    get("restartRoutine");

  if (restartButton) {
    restartButton.addEventListener(
      "click",
      restartRoutine
    );
  }


  /* Close with Escape */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") {
        return;
      }

      closePlayer();

    }
  );


  /* Close player by clicking outside */

  const playerOverlay =
    get("playerOverlay");

  if (playerOverlay) {

    playerOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target === playerOverlay
        ) {
          closePlayer();
        }

      }
    );

  }

});


/* =========================================
   GLOBAL SURPRISE BUTTON
========================================= */

window.surpriseMe = surpriseMe;
