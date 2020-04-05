import { LANGUAGE, WIDTH } from '../constants.js';
import buttons from './buttonData.js';
import Button from './button.js';

export default class Keyboard {
    constructor (outputEl, language) {
        this._language = language || LANGUAGE.EN;
        this.outputEl = outputEl;
        this.buttons = [];
        this.isShifted = false;
        this.el = document.createElement("div");
    }

    draw() {
        this.el.classList.add("keyboard");
        buttons.forEach(row => {
            const rowEl = document.createElement("div");
            this.el.append(rowEl);
            rowEl.classList.add("row");
            row.forEach(buttonOpts => {
                const button = new Button(Object.assign({ language: this.language }, buttonOpts));
                this.buttons.push(button);
                rowEl.append(button.draw());
            });
        });

        return this.el;
    }

    attachEvents() {
        document.addEventListener('keydown', (e) => {
            const pushedButton = this.buttons.find(x => x.code === e.code);
            if (pushedButton) {
                pushedButton.el.classList.add('button_active');
            }
            if(e.code === "CapsLock") {
                this.isCapsLock = !this.isCapsLock;
            }
            toggleKeys(e.shiftKey);
        });

        document.addEventListener('keyup', (e) => {
            if(e.key == "Control" && e.altKey || e.key == "Alt" && e.ctrlKey) {
                this.language = this.language === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN;
            }
            const pushedButton = this.buttons.find(x => x.code === e.code);
            if (pushedButton) {
                pushedButton.el.classList.remove('button_active');
            }
            toggleKeys(e.shiftKey);
        });

        for (const button of this.buttons.filter(x => x.isRegular)) {
            button.el.onclick = (e) => {
                const buttonValue = e.shiftKey ? button.valueAdd || button.value.toUpperCase() : button.value;
                addCharacter(buttonValue);
            };
        }

        this.buttons.find(x => x.code === "Enter").el.onclick = (e) => {
            addCharacter("\n");
        }

        this.buttons.find(x => x.code === "Tab").el.onclick = (e) => {
            addCharacter("\t");
        }

        this.buttons.find(x => x.code === "CapsLock").el.onclick = (e) => {
            this.isCapsLock = !this.isCapsLock;
            toggleKeys();
        }

        this.buttons.find(x => x.code === "Backspace").el.onclick = (e) => {
            removeCharacter(this.outputEl.selectionStart - 1);
        }

        this.buttons.find(x => x.code === "Delete").el.onclick = (e) => {
            removeCharacter(this.outputEl.selectionStart);
        }

        const shiftButtons = this.buttons.filter(x => x.code === "ShiftLeft" || x.code === "ShiftRight");
        shiftButtons.forEach(shiftButton => { 
            shiftButton.el.addEventListener('mousedown', (e) => {
                toggleKeys(true);
            });
            shiftButton.el.addEventListener('mouseup', (e) => {
                toggleKeys(false);
            });
        });

        const addCharacter = (charValue) => {
            const { value, selectionStart, selectionEnd } = this.outputEl;
            this.outputEl.focus();
            if (value.length === selectionEnd) {
                this.outputEl.value += charValue;
            } else {
                this.outputEl.value = value.substring(0, selectionStart) + charValue + value.substring(selectionEnd);
                this.outputEl.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
            }
        }
        
        const removeCharacter = (position) => {
            const { value, selectionStart, selectionEnd } = this.outputEl;
            this.outputEl.focus();
            if (selectionStart === selectionEnd) {
                this.outputEl.value = value.substring(0, position) + value.substring(position + 1);
                this.outputEl.setSelectionRange(position, position);
            } else {
                this.outputEl.value = value.substring(0, selectionStart) + value.substring(selectionEnd);
                this.outputEl.setSelectionRange(selectionStart, selectionStart);
            }
        }
        
        const toggleKeys = (shiftKey) => this.el.classList.toggle("keyboard_isShifted", shiftKey ^ this.isCapsLock);

        this.buttons.forEach(x => x.attachEvents());
    }

    set language(value) {
        this._language = value;
        this.buttons.forEach(x => x.language = value);
        history.replaceState(null, '', `?lang=${value}`);
    }

    get language() {
        return this._language;
    }
    

}