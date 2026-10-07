/* =========================================
   MALLOW MOVEMENT
   ROUTINE SYSTEM
========================================= */


const routines = [

  /* =========================================
     MOVEMENT
  ========================================= */

  {
    id: "getting-started",
    category: "movement",
    categoryName: "Movement",
    icon: "🌱",
    title: "Getting Started",
    description: "A gentle way to get moving.",
    workout: true,

    steps: [

      {
        title: "Easy March",
        description: "March gently in place.",
        icon: "🚶",
        type: "timer",
        seconds: 30
      },

      {
        title: "Shoulder Rolls",
        description: "Roll your shoulders slowly and comfortably.",
        icon: "🌸",
        type: "timer",
        seconds: 30
      },

      {
        title: "Side Steps",
        description: "Step gently from side to side.",
        icon: "👟",
        type: "timer",
        seconds: 30
      },

      {
        title: "Gentle Reach",
        description: "Reach upward and return to a comfortable position.",
        icon: "🙌",
        type: "reps",
        sets: 1,
        reps: 8
      },

      {
        title: "Easy Walk",
        description: "Take a comfortable walk around your space.",
        icon: "🌿",
        type: "timer",
        seconds: 60
      }

    ]
  },


  /* =========================================
     STRENGTH
  ========================================= */

  {
    id: "build-strength",
    category: "movement",
    categoryName: "Movement",
    icon: "💪",
    title: "Build Strength",
    description: "Simple strength-focused movements.",
    workout: true,

    steps: [

      {
        title: "Chair Squats",
        description: "Use a chair for support if you want.",
        icon: "🪑",
        type: "reps",
        sets: 2,
        reps: 8
      },

      {
        title: "Wall Push",
        description: "Use a wall for a gentle upper-body movement.",
        icon: "🧱",
        type: "reps",
        sets: 2,
        reps: 8
      },

      {
        title: "Glute Bridge",
        description: "Move slowly and comfortably.",
        icon: "🌱",
        type: "reps",
        sets: 2,
        reps: 8
      },

      {
        title: "Bird Dog",
        description: "Move with control and keep the motion comfortable.",
        icon: "🐦",
        type: "reps",
        sets: 2,
        reps: 6
      },

      {
        title: "Standing Calf Raise",
        description: "Hold onto something stable if needed.",
        icon: "👟",
        type: "reps",
        sets: 2,
        reps: 10
      }

    ]
  },


  /* =========================================
     STRETCH
  ========================================= */

  {
    id: "stretch-mobility",
    category: "movement",
    categoryName: "Movement",
    icon: "🧘",
    title: "Stretch & Mobility",
    description: "Gentle stretches and mobility movements.",
    workout: true,

    steps: [

      {
        title: "Neck Turns",
        description: "Slowly look from one side to the other.",
        icon: "🌿",
        type: "timer",
        seconds: 30
      },

      {
        title: "Shoulder Stretch",
        description: "Hold a comfortable shoulder stretch.",
        icon: "🌸",
        type: "timer",
        seconds: 30
      },

      {
        title: "Side Reach",
        description: "Reach gently to each side.",
        icon: "🙌",
        type: "timer",
        seconds: 30
      },

      {
        title: "Seated Twist",
        description: "Move only as far as feels comfortable.",
        icon: "🪷",
        type: "timer",
        seconds: 30
      },

      {
        title: "Ankle Circles",
        description: "Slowly circle your ankles.",
        icon: "🦶",
        type: "timer",
        seconds: 30
      }

    ]
  },


  /* =========================================
     ENERGY
  ========================================= */

  {
    id: "get-moving",
    category: "movement",
    categoryName: "Movement",
    icon: "⚡",
    title: "Get Moving",
    description: "A short routine for some extra energy.",
    workout: true,

    steps: [

      {
        title: "March in Place",
        description: "Find a comfortable rhythm.",
        icon: "🚶",
        type: "timer",
        seconds: 45
      },

      {
        title: "Arm Swings",
        description: "Swing your arms comfortably.",
        icon: "🙌",
        type: "timer",
        seconds: 30
      },

      {
        title: "Step Touch",
        description: "Step side to side at your own pace.",
        icon: "👟",
        type: "timer",
        seconds: 45
      },

      {
        title: "Reach & Pull",
        description: "Reach upward, then gently pull your arms back.",
        icon: "✨",
        type: "reps",
        sets: 1,
        reps: 10
      },

      {
        title: "Free Movement",
        description: "Move however feels comfortable.",
        icon: "🌈",
        type: "timer",
        seconds: 60
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
    icon: "🌙",
    title: "Slow Down",
    description: "Calm movement for winding down.",
    workout: true,

    steps: [

      {
        title: "Slow Breathing",
        description: "Take slow, comfortable breaths.",
        icon: "🌬️",
        type: "timer",
        seconds: 60
      },

      {
        title: "Shoulder Rolls",
        description: "Relax your shoulders as you move.",
        icon: "🌸",
        type: "timer",
        seconds: 30
      },

      {
        title: "Gentle Side Reach",
        description: "Reach gently from side to side.",
        icon: "🌿",
        type: "timer",
        seconds: 30
      },

      {
        title: "Easy Forward Fold",
        description: "Only move as far as feels comfortable.",
        icon: "🧘",
        type: "timer",
        seconds: 30
      },

      {
        title: "Quiet Walk",
        description: "Take a calm walk and let yourself slow down.",
        icon: "🌙",
        type: "timer",
        seconds: 60
      }

    ]
  },


  /* =========================================
     SHOWER
     ========================================= */

  {
    id: "refreshing-shower",
    category: "shower",
    categoryName: "Shower",
    icon: "🚿",
    title: "Refreshing Shower",
    description: "A simple shower routine.",
    workout: false,

    steps: [

      {
        title: "Get Ready",
        description: "Gather anything you want before starting.",
        icon: "🫧",
        type: "done"
      },

      {
        title: "Shower",
        description: "Take your shower and get comfortable.",
        icon: "🚿",
        type: "done"
      },

      {
        title: "Wash",
        description: "Use your usual shower products.",
        icon: "🧴",
        type: "done"
      },

      {
        title: "Rinse",
        description: "Rinse off when you're ready.",
        icon: "💧",
        type: "done"
      },

      {
        title: "Dry Off",
        description: "Dry off and get comfortable.",
        icon: "🧺",
        type: "done"
      }

    ]
  },


  /* =========================================
     HAIR
  ========================================= */

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
        title: "Get Ready",
        description: "Grab your brush or comb and anything else you use.",
        icon: "🪮",
        type: "done"
      },

      {
        title: "Brush or Comb",
        description: "Gently work through your hair.",
        icon: "✨",
        type: "done"
      },

      {
        title: "Style",
        description: "Arrange your hair however you like.",
        icon: "🌷",
        type: "done"
      },

      {
        title: "Final Check",
        description: "Make any little adjustments you want.",
        icon: "🪞",
        type: "done"
      }

    ]
  },


  /* =========================================
     FACE
  ========================================= */

  {
    id: "face-care",
    category: "face",
    categoryName: "Face",
    icon: "✨",
    title: "Face Care",
    description: "A simple everyday face-care routine.",
    workout: false,

    steps: [

      {
        title: "Cleanse",
        description: "Use your usual cleanser and rinse comfortably.",
        icon: "🫧",
        type: "done"
      },

      {
        title: "Rinse",
        description: "Rinse your face with water.",
        icon: "💧",
        type: "done"
      },

      {
        title: "Dry",
        description: "Gently dry your face.",
        icon: "🌸",
        type: "done"
      },

      {
        title: "Moisturize",
        description: "Apply your usual moisturizer if you use one.",
        icon: "🧴",
        type: "done"
      }

    ]
  },


  /* =========================================
     PERSONAL CARE
  ========================================= */

  {
    id: "morning-care",
    category: "selfcare",
    categoryName: "Self-Care",
    icon: "🫧",
    title: "Morning Care",
    description: "A simple routine for getting ready.",
    workout: false,

    steps: [

      {
        title: "Brush Your Teeth",
        description: "Brush your teeth.",
        icon: "🪥",
        type: "done"
      },

      {
        title: "Wash Your Face",
        description: "Use your normal face-washing routine.",
        icon: "🫧",
        type: "done"
      },

      {
        title: "Hair",
        description: "Brush, comb, or style your hair.",
        icon: "🪮",
        type: "done"
      },

      {
        title: "Get Dressed",
        description: "Choose something comfortable that feels like you.",
        icon: "👕",
        type: "done"
      }

    ]
  },


  /* =========================================
     NIGHT ROUTINE
  ========================================= */

  {
    id: "night-care",
    category: "selfcare",
    categoryName: "Self-Care",
    icon: "🌙",
    title: "Night Care",
    description: "A calm routine for getting ready for bed.",
    workout: false,

    steps: [

      {
        title: "Brush Your Teeth",
        description: "Brush your teeth.",
        icon: "🪥",
        type: "done"
      },

      {
        title: "Face Care",
        description: "Complete your usual face-care routine.",
        icon: "✨",
        type: "done"
      },

      {
        title: "Hair Check",
        description: "Get your hair comfortable for the night.",
        icon: "🪮",
        type: "done"
      },

      {
        title: "Wind Down",
        description: "Take a moment to settle down.",
        icon: "🌙",
        type: "done"
      }

    ]
  }

];



/* =========================================
   PLAYER STATE
========================================= */

let currentRoutine = null;
let currentStepIndex = 0;

let timerInterval = null;
let breakInterval = null;

let remainingSeconds = 0;
let breakSeconds = 30;

let isPaused = false;

let routineStartedAt = null;
let completedStepCount = 0;



/* =========================================
   DOM
========================================= */

const routineGrid =
  document.getElementById("routineGrid");

const playerOverlay =
  document.getElementById("playerOverlay");

const breakOverlay =
  document.getElementById("breakOverlay");

const completionOverlay =
  document.getElementById("completionOverlay");



/* =========================================
   ROUTINE CARDS
========================================= */

function createRoutineCards(filter = "all") {

  if (!routineGrid) {
    return;
  }

  routineGrid.innerHTML = "";

  const filtered =
    filter === "all"
      ? routines
      : routines.filter(
          routine => routine.category === filter
        );


  filtered.forEach(routine => {

    const card =
      document.createElement("button");

    card.className =
      `library-card ${routine.category}`;

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

        <span>
          ${routine.workout ? "♡ Workout" : "♡ Self-care"}
        </span>

      </div>

      <span class="library-card-arrow">
        →
      </span>

    `;


    card.addEventListener(
      "click",
      () => startRoutine(routine.id)
    );


    routineGrid.appendChild(card);

  });

}



/* =========================================
   START ROUTINE
========================================= */

function startRoutine(routineId) {

  const routine =
    routines.find(
      item => item.id === routineId
    );

  if (!routine) {
    return;
  }


  currentRoutine = routine;
  currentStepIndex = 0;
  completedStepCount = 0;

  routineStartedAt = Date.now();


  if (completionOverlay) {
    completionOverlay.hidden = true;
  }


  if (breakOverlay) {
    breakOverlay.hidden = true;
  }


  if (playerOverlay) {
    playerOverlay.hidden = false;
  }


  document.body.classList.add("player-open");

  showCurrentStep();

}



/* =========================================
   SHOW CURRENT STEP
========================================= */

function showCurrentStep() {

  clearTimers();

  isPaused = false;


  if (!currentRoutine) {
    return;
  }


  const step =
    currentRoutine.steps[currentStepIndex];


  if (!step) {
    completeRoutine();
    return;
  }


  const total =
    currentRoutine.steps.length;


  document.getElementById("playerCategory").textContent =
    currentRoutine.categoryName;

  document.getElementById("playerTitle").textContent =
    currentRoutine.title;

  document.getElementById("playerIcon").textContent =
    step.icon;

  document.getElementById("playerStepTitle").textContent =
    step.title;

  document.getElementById("playerDescription").textContent =
    step.description;

  document.getElementById("currentStep").textContent =
    currentStepIndex + 1;

  document.getElementById("totalSteps").textContent =
    total;


  const progress =
    ((currentStepIndex) / total) * 100;

  document.getElementById(
    "playerProgressBar"
  ).style.width =
    `${progress}%`;


  const timerArea =
    document.getElementById("timerArea");

  const repsArea =
    document.getElementById("repsArea");

  const doneButton =
    document.getElementById("playerDone");

  const timerControls =
    document.getElementById("timerControls");


  /*
    Always hide every special control first.
    This prevents controls from carrying over
    from the previous step.
  */

  timerArea.hidden = true;
  repsArea.hidden = true;
  doneButton.hidden = true;
  timerControls.hidden = true;


  /*
    MOVEMENT TIMER
  */

  if (
    currentRoutine.workout &&
    step.type === "timer"
  ) {

    timerArea.hidden = false;
    timerControls.hidden = false;

    remainingSeconds =
      step.seconds;

    updateTimerDisplay();

    startTimer();

  }


  /*
    MOVEMENT REPS
  */

  else if (
    currentRoutine.workout &&
    step.type === "reps"
  ) {

    repsArea.hidden = false;
    doneButton.hidden = false;

    document.getElementById(
      "setsDisplay"
    ).textContent =
      step.sets;

    document.getElementById(
      "repsDisplay"
    ).textContent =
      step.reps;

  }


  /*
    SELF-CARE / DONE STEP
  */

  else {

    doneButton.hidden = false;

  }

}



/* =========================================
   TIMER
========================================= */

function startTimer() {

  clearInterval(timerInterval);


  timerInterval =
    setInterval(() => {

      if (isPaused) {
        return;
      }


      remainingSeconds--;


      updateTimerDisplay();


      if (remainingSeconds <= 0) {

        clearInterval(timerInterval);

        finishStep();

      }

    }, 1000);

}



/* =========================================
   TIMER DISPLAY
========================================= */

function updateTimerDisplay() {

  const display =
    document.getElementById("timerDisplay");


  if (!display) {
    return;
  }


  const minutes =
    Math.floor(
      remainingSeconds / 60
    );

  const seconds =
    remainingSeconds % 60;


  display.textContent =
    `${minutes}:${String(seconds).padStart(2, "0")}`;

}



/* =========================================
   PAUSE
========================================= */

function togglePause() {

  if (
    !currentRoutine ||
    !currentRoutine.workout
  ) {
    return;
  }


  isPaused =
    !isPaused;


  const button =
    document.getElementById("pauseButton");


  if (button) {

    button.textContent =
      isPaused
        ? "Resume"
        : "Pause";

  }

}



/* =========================================
   SKIP
========================================= */

function skipStep() {

  if (
    !currentRoutine ||
    !currentRoutine.workout
  ) {
    return;
  }


  finishStep();

}



/* =========================================
   DONE
========================================= */

function completeCurrentStep() {

  finishStep();

}



/* =========================================
   FINISH STEP
========================================= */

function finishStep() {

  clearTimers();

  completedStepCount++;


  /*
    Only workout routines get rest breaks.
    Self-care routines immediately move
    to the next checklist item.
  */

  if (
    currentRoutine &&
    currentRoutine.workout
  ) {

    startBreak();

    return;

  }


  nextStep();

}



/* =========================================
   BREAK TIMER
========================================= */

function startBreak() {

  breakSeconds = 30;

  updateBreakDisplay();


  if (!breakOverlay) {
    nextStep();
    return;
  }


  breakOverlay.hidden = false;


  breakInterval =
    setInterval(() => {

      breakSeconds--;

      updateBreakDisplay();


      if (breakSeconds <= 0) {

        clearInterval(breakInterval);

        breakOverlay.hidden = true;

        nextStep();

      }

    }, 1000);

}



/* =========================================
   BREAK DISPLAY
========================================= */

function updateBreakDisplay() {

  const display =
    document.getElementById("breakTimer");


  if (!display) {
    return;
  }


  const minutes =
    Math.floor(
      breakSeconds / 60
    );

  const seconds =
    breakSeconds % 60;


  display.textContent =
    `${minutes}:${String(seconds).padStart(2, "0")}`;

}



/* =========================================
   SKIP BREAK
========================================= */

function skipBreak() {

  clearInterval(breakInterval);

  breakOverlay.hidden = true;

  nextStep();

}



/* =========================================
   ADD BREAK TIME
========================================= */

function addBreakTime() {

  breakSeconds += 15;

  updateBreakDisplay();

}



/* =========================================
   NEXT STEP
========================================= */

function nextStep() {

  clearTimers();

  currentStepIndex++;


  if (
    !currentRoutine ||
    currentStepIndex >=
    currentRoutine.steps.length
  ) {

    completeRoutine();

    return;

  }


  showCurrentStep();

}



/* =========================================
   COMPLETE ROUTINE
========================================= */

function completeRoutine() {

  clearTimers();


  if (!currentRoutine) {
    return;
  }


  if (playerOverlay) {
    playerOverlay.hidden = true;
  }


  const elapsed =
    Math.max(
      0,
      Math.floor(
        (Date.now() - routineStartedAt) / 1000
      )
    );


  const minutes =
    Math.floor(elapsed / 60);

  const seconds =
    elapsed % 60;


  const completedSteps =
    document.getElementById(
      "completedSteps"
    );

  if (completedSteps) {

    completedSteps.textContent =
      completedStepCount;

  }


  const completedTime =
    document.getElementById(
      "completedTime"
    );

  if (completedTime) {

    completedTime.textContent =
      `${minutes}:${String(seconds).padStart(2, "0")}`;

  }


  const completionMessage =
    document.getElementById(
      "completionMessage"
    );

  if (completionMessage) {

    completionMessage.textContent =
      `You made some time for yourself with ${currentRoutine.title}.`;

  }


  if (completionOverlay) {
    completionOverlay.hidden = false;
  }


  document.body.classList.remove("player-open");

}



/* =========================================
   CLOSE PLAYER
========================================= */

function closePlayer() {

  clearTimers();


  if (playerOverlay) {
    playerOverlay.hidden = true;
  }


  if (breakOverlay) {
    breakOverlay.hidden = true;
  }


  if (completionOverlay) {
    completionOverlay.hidden = true;
  }


  document.body.classList.remove("player-open");

}



/* =========================================
   RESTART
========================================= */

function restartRoutine() {

  if (!currentRoutine) {
    return;
  }


  clearTimers();


  if (completionOverlay) {
    completionOverlay.hidden = true;
  }


  currentStepIndex = 0;
  completedStepCount = 0;

  routineStartedAt = Date.now();

  if (playerOverlay) {
    playerOverlay.hidden = false;
  }


  document.body.classList.add("player-open");

  showCurrentStep();

}



/* =========================================
   CLEAR TIMERS
========================================= */

function clearTimers() {

  clearInterval(timerInterval);
  clearInterval(breakInterval);

  timerInterval = null;
  breakInterval = null;

}



/* =========================================
   RANDOM ROUTINE
========================================= */

function surpriseMe() {

  const randomIndex =
    Math.floor(
      Math.random() * routines.length
    );

  const routine =
    routines[randomIndex];


  if (
    document.getElementById("routineGrid")
  ) {

    startRoutine(routine.id);

    return;

  }


  window.location.href =
    `routines.html?routine=${routine.id}`;

}



/* =========================================
   CATEGORY FILTERS
========================================= */

function setupCategoryFilters() {

  const buttons =
    document.querySelectorAll(
      ".category-tab"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        buttons.forEach(
          item =>
            item.classList.remove("active")
        );


        button.classList.add("active");


        createRoutineCards(
          button.dataset.category
        );

      }
    );

  });

}



/* =========================================
   URL HANDLING
========================================= */

function handleURL() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const category =
    params.get("category");

  const routine =
    params.get("routine");


  if (category) {

    const tab =
      document.querySelector(
        `[data-category="${category}"]`
      );


    if (tab) {
      tab.click();
    }

  }


  if (routine) {

    setTimeout(
      () => startRoutine(routine),
      100
    );

  }

}



/* =========================================
   EVENT LISTENERS
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    createRoutineCards();

    setupCategoryFilters();

    handleURL();


    /* =====================================
       PAUSE
    ===================================== */

    const pauseButton =
      document.getElementById(
        "pauseButton"
      );

    if (pauseButton) {

      pauseButton.addEventListener(
        "click",
        togglePause
      );

    }


    /* =====================================
       SKIP
    ===================================== */

    const skipButton =
      document.getElementById(
        "skipButton"
      );

    if (skipButton) {

      skipButton.addEventListener(
        "click",
        skipStep
      );

    }


    /* =====================================
       DONE
    ===================================== */

    const doneButton =
      document.getElementById(
        "playerDone"
      );

    if (doneButton) {

      doneButton.addEventListener(
        "click",
        completeCurrentStep
      );

    }


    /* =====================================
       CLOSE
    ===================================== */

    const closeButton =
      document.getElementById(
        "playerClose"
      );

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closePlayer
      );

    }


    /* =====================================
       SKIP BREAK
    ===================================== */

    const skipBreakButton =
      document.getElementById(
        "skipBreak"
      );

    if (skipBreakButton) {

      skipBreakButton.addEventListener(
        "click",
        skipBreak
      );

    }


    /* =====================================
       MORE BREAK TIME
    ===================================== */

    const moreBreakButton =
      document.getElementById(
        "moreBreak"
      );

    if (moreBreakButton) {

      moreBreakButton.addEventListener(
        "click",
        addBreakTime
      );

    }


    /* =====================================
       RESTART
    ===================================== */

    const restartButton =
      document.getElementById(
        "restartRoutine"
      );

    if (restartButton) {

      restartButton.addEventListener(
        "click",
        restartRoutine
      );

    }


    /* =====================================
       ESCAPE KEY
    ===================================== */

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape"
        ) {

          closePlayer();

        }

      }
    );

  }
);
