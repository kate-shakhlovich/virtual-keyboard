import Keyboard from './keyboard/keyboard.js';

const div = document.createElement('div');
div.className = 'container';
document.body.append(div);
const textarea = document.createElement('textarea');
textarea.className = 'container__textarea';
textarea.name = 'post';
textarea.maxLength = '5000';
textarea.cols = '50';
textarea.rows = '5';
div.appendChild(textarea);
textarea.focus();
const lang = new URLSearchParams(window.location.search).get('lang') || navigator.language;
const keyboard = new Keyboard(textarea, lang);
div.append(keyboard.draw());
keyboard.attachEvents();
