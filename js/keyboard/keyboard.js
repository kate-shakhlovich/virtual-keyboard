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
            this.isShifted = e.shiftKey;
            this.isAlted = e.altKey;
            this.el.classList.toggle("keyboard_isShifted", e.shiftKey);
        });

        document.addEventListener('keyup', (e) => {
            if(this.isShifted && this.isAlted && (e.key == "Shift" || e.key == "Alt")) {
                this.language = this.language === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN;
            }
            this.isShifted = e.shiftKey;
            this.isAlted = e.altKey;
            this.el.classList.toggle("keyboard_isShifted", e.shiftKey);
        });

        for (const button of this.buttons.filter(x => x.isRegular)) {
            button.el.onclick = (e) => {
                this.outputEl.value += (e.shiftKey ? button.valueAdd || button.value.toUpperCase() : button.value);
                this.outputEl.focus();
            };
        }

        this.buttons.find(x => x.code === "Enter").el.onclick = (e) => {
            this.outputEl.value += "\n";
            this.outputEl.focus();
        }
        
        this.buttons.find(x => x.code === "Backspace").el.onclick = (e) => {
            this.outputEl.value = this.outputEl.value.substring(0, this.outputEl.value.length - 1);
            this.outputEl.focus();
        }
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