
const markAllRead = document.getElementById("markAllRead");
const markRead = document.getElementById("noti_new");

function markAllRead() {
  markAllRead.classList.remove("dot");
  markAllRead.classList.remove("noti_new--bg");
}

function markRead() {
  markRead.classList.remove("dot");
  markRead.classList.remove("noti_new--bg");
}

