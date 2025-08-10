function login() {
  const role = document.getElementById("role").value;

  document.getElementById("loginScreen").classList.add("hidden");

  if (role === "manager") {
    document.getElementById("managerScreen").classList.remove("hidden");
  } else {
    document.getElementById("workerScreen").classList.remove("hidden");
    loadWorkerData();
  }
}

function logout() {
  document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
  document.getElementById("loginScreen").classList.remove("hidden");
}

function showScheduleForm() {
  document.getElementById("managerContent").innerHTML = `
    <h3>הוסף משמרת</h3>
    <input type="text" placeholder="שם עובד">
    <input type="date">
    <button>שמור</button>
  `;
}

function showTipForm() {
  document.getElementById("managerContent").innerHTML = `
    <h3>עדכן טיפים</h3>
    <input type="number" placeholder="סכום טיפ">
    <button>שמור</button>
  `;
}

function loadWorkerData() {
  document.getElementById("workerSchedule").innerHTML = "<p>משמרת: 12/08/2025 - ערב</p>";
  document.getElementById("workerTips").innerHTML = "<p>טיפים להיום: 120 ש\"ח</p>";
}
