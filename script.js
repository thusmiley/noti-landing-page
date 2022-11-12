const allRead = document.getElementById("markAllRead");
const oneRead = document.getElementsByClassName("noti_new");

function markAllRead() {
  allRead.classList.remove("dot");
  allRead.classList.remove("noti_new--bg");
}

function markRead() {
  oneRead.classList.remove("dot");
  oneRead.classList.remove("noti_new--bg");
}
