import Keyboard from './keyboard/keyboard.js';

const div = document.createElement("div");
div.className = "container";
document.body.append(div);
const textarea = document.createElement("textarea");
textarea.className = "container__textarea";
// const button = document.createElement("button");
// button.className = "container__button";
textarea.name = "post";
textarea.maxLength = "5000";
textarea.cols = "50";
textarea.rows = "5";
div.appendChild(textarea); 
// div.appendChild(button);
const lang = new URLSearchParams(window.location.search).get("lang") || navigator.language;
const keyboard = new Keyboard(textarea, lang);
keyboard.attachEvents();
div.append(keyboard.draw());

