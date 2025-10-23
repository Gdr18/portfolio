import "./style.css";
import { copyEmail } from "./portfolio/use-cases/copy-email.js";

const copyIcon = document.querySelector(".copy-icon");
const photoMine = document.getElementsByClassName("photo-bento")[0];
const historyModal = document.getElementById("history-modal");

copyIcon.addEventListener("click", copyEmail);
photoMine.addEventListener("click", () => historyModal.showModal());
