"use strict";


/* =========================
   MALLOW MOVEMENT
   ROUTINE DATA
========================= */

const routines = {

  beginner: {
    icon: "🌱",
    label: "EASY START",
    title: "Getting Started",
    description:
      "A simple routine for easing into movement and getting comfortable.",
    exercises: [
      {
        name: "Easy March",
        detail: "March gently in place and let your arms move naturally."
      },
      {
        name: "Shoulder Rolls",
        detail: "Slowly roll your shoulders forward and backward."
      },
      {
        name: "Side Steps",
        detail: "Take comfortable steps from side to side."
      },
      {
        name: "Gentle Reach",
        detail: "Reach your arms overhead, then bring them back down."
      },
      {
        name: "Easy Walk",
        detail: "Walk around at a comfortable pace and let yourself settle."
      }
    ]
  },


  strength: {
    icon: "💪",
    label: "STRENGTH",
    title: "Build Strength",
    description:
      "Simple strength-focused movements using your body and comfortable range of motion.",
    exercises: [
      {
        name: "Chair Squat",
        detail: "Sit toward a sturdy chair and stand back up comfortably."
      },
      {
        name: "Wall Push",
        detail: "Place your hands against a wall and gently push away."
      },
      {
        name: "Glute Bridge",
        detail: "From a comfortable lying position, lift your hips gently."
      },
      {
        name: "Bird Dog",
        detail: "From hands and knees, slowly extend opposite arm and leg."
      },
      {
        name: "Standing Calf Raise",
        detail: "Hold a stable surface if needed and gently rise onto your toes."
      }
    ]
  },


  stretch: {
    icon: "🧘",
    label: "MOBILITY",
    title: "Stretch & Mobility",
    description:
      "Gentle movements to explore flexibility and comfortable mobility.",
    exercises: [
      {
        name: "Neck Turns",
        detail: "Slowly look from side to side without forcing the movement."
      },
      {
        name: "Shoulder Stretch",
        detail: "Bring one arm across your body and hold gently."
      },
      {
        name: "Side Reach",
        detail: "Reach one arm overhead and lean slightly to the opposite side."
      },
      {
        name: "Seated Twist",
        detail: "Sit comfortably and gently rotate your upper body."
      },
      {
        name: "Ankle Circles",
        detail: "Lift one foot slightly and make slow circles with your ankle."
      }
    ]
  },


  energy: {
    icon: "⚡",
    label: "ENERGY",
    title: "Get Moving",
    description:
      "A light routine for when you want to wake up your body and get moving.",
    exercises: [
      {
        name: "March in Place",
        detail: "March comfortably while letting your arms move naturally."
      },
      {
        name: "Arm Swings",
        detail: "Swing your arms gently from side to side."
      },
      {
        name: "Step Touch",
        detail: "Step from side to side at a comfortable rhythm."
      },
      {
        name: "Reach & Pull",
        detail: "Reach upward, then gently pull your elbows back."
      },
      {
        name: "Free Movement",
        detail: "Move however feels comfortable for a moment."
      }
    ]
  },


  relax: {
    icon: "🌙",
    label: "WIND DOWN",
    title: "Slow Down",
    description:
      "Calm, gentle movement for relaxing and reconnecting with yourself.",
    exercises: [
      {
        name: "Slow Breathing",
        detail: "Take a few comfortable, unhurried breaths."
      },
      {
        name: "Shoulder Rolls",
        detail: "Slowly roll your shoulders and let them relax."
      },
      {
        name: "Gentle Side Reach",
        detail: "Reach softly from one side to the other."
      },
      {
        name: "Easy Forward Fold",
        detail: "Fold forward only as far as feels comfortable."
      },
      {
        name: "Quiet Walk",
        detail: "Take a slow walk and let your movement settle."
      }
    ]
  }

};


/* =========================
   ELEMENTS
========================= */

const routineModal =
  document.getElementById("routineModal");

const modalIcon =
  document.getElementById("modalIcon");

const modalLabel =
  document.getElementById("modalLabel");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const routineList =
  document.getElementById("routineList");

const closeModal =
  document.getElementById("closeModal");

const surpriseCard =
  document.getElementById("surpriseCard");

const toast =
  document.getElementById("toast");


/* =========================
   OPEN ROUTINE
========================= */

function openRoutine(routineName) {

  const routine = routines[routineName];

  if (!routine) {
    return;
  }


  modalIcon.textContent =
    routine.icon;

  modalLabel.textContent =
    routine.label;

  modalTitle.textContent =
    routine.title;

  modalDescription.textContent =
    routine.description;


  routineList.innerHTML = "";


  routine.exercises.forEach(
    (exercise, index) => {

      const item =
        document.createElement("div");

      item.className =
        "routine-item";


      item.innerHTML = `
        <div class="routine-item-number">
          ${index + 1}
        </div>

        <div class="routine-item-content">

          <strong>
            ${exercise.name}
          </strong>

          <span>
            ${exercise.detail}
          </span>

        </div>
      `;


      routineList.appendChild(item);

    }
  );


  routineModal.hidden = false;

  document.body.style.overflow =
    "hidden";

}


/* =========================
   CLOSE ROUTINE
========================= */

function closeRoutine() {

  routineModal.hidden = true;

  document.body.style.overflow =
    "";

}


/* =========================
   RANDOM ROUTINE
========================= */

function surpriseMe() {

  const routineNames =
    Object.keys(routines);

  const randomIndex =
    Math.floor(
      Math.random() *
      routineNames.length
    );

  const randomRoutine =
    routineNames[randomIndex];


  openRoutine(randomRoutine);

}


/* =========================
   ROUTINE CARD EVENTS
========================= */

const routineCards =
  document.querySelectorAll(
    ".routine-card[data-routine]"
  );


routineCards.forEach(
  card => {

    card.addEventListener(
      "click",
      () => {

        const routine =
          card.dataset.routine;

        openRoutine(routine);

      }
    );

  }
);


/* =========================
   SURPRISE CARD
========================= */

if (surpriseCard) {

  surpriseCard.addEventListener(
    "click",
    surpriseMe
  );

}


/* =========================
   CLOSE BUTTON
========================= */

if (closeModal) {

  closeModal.addEventListener(
    "click",
    closeRoutine
  );

}


/* =========================
   CLICK BACKDROP
========================= */

if (routineModal) {

  const backdrop =
    routineModal.querySelector(
      ".modal-backdrop"
    );


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeRoutine
    );

  }

}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      routineModal &&
      !routineModal.hidden
    ) {

      closeRoutine();

    }

  }
);


/* =========================
   SCROLL TO ROUTINES
========================= */

function scrollToRoutines() {

  const routinesSection =
    document.getElementById(
      "routines"
    );


  if (!routinesSection) {
    return;
  }


  routinesSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================
   TOAST
========================= */

let toastTimeout;


function showToast(message) {

  if (!toast) {
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2600
    );

}


/* =========================
   INITIAL LOAD
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "🌷 Mallow Movement loaded!"
    );

  }
);
