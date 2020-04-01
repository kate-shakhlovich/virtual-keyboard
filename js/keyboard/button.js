import { WIDTH, LANGUAGE } from '../constants.js';

export default class Button {
    constructor(opts) {
        const { code, enValue, ruValue, enValueAdd, ruValueAdd, width, language } = opts || {};
        this.code = code;
        this.enValue = (enValue || '').toString().toLowerCase();
        this.ruValue = (ruValue || '').toString().toLowerCase();
        this.enValueAdd = enValueAdd || '';
        this.ruValueAdd = ruValueAdd || '';
        this.width = width || WIDTH.S;
        this._language = language || LANGUAGE.EN;
        this.el = document.createElement("div");
        this.el.classList.add("button");
        this.el.classList.add("button_width_" + this.width);
    }

    draw() {
        this.el.innerHTML = '';
        const spanValueEl = document.createElement("span");
        spanValueEl.classList.add("button__value");
        spanValueEl.innerText = this.value.toUpperCase(); 
        const spanValueAddEl = document.createElement("sup");
        spanValueAddEl.classList.add("button__value_add");
        spanValueAddEl.innerText = this.valueAdd;
        this.el.append(spanValueAddEl);
        this.el.append(spanValueEl);
        return this.el;
    }

    attachEvents(outputEl, getIsShifted) {
        this.el.onclick = (event) => {
            outputEl.value = outputEl.value + (getIsShifted() ? this.valueAdd || this.value.toUpperCase() : this.value);
        };
    }

    get value() {
        return this.language == LANGUAGE.EN ? this.enValue : this.ruValue;
    }

    get valueAdd() {
        return this.language == LANGUAGE.EN ? this.enValueAdd : this.ruValueAdd;
    }

    set language(value) {
        this._language = value;
        this.draw();
    }

    get language() {
        return this._language;
    }
    
}