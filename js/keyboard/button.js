import { WIDTH, LANGUAGE } from '../constants.js';

export default class Button {
    constructor(opts) {
        const { code, enValue, ruValue, enValueAdd, ruValueAdd, width, language } = opts || {};
        this.code = code;
        this.isRegular = enValue.length === 1;
        this.enValue = enValue.length > 1 ? enValue : enValue.toLowerCase();
        this.ruValue = ruValue.length > 1 ? ruValue : ruValue.toLowerCase();
        this.enValueAdd = enValueAdd || (enValue.length > 1 ? enValue : enValue.toUpperCase());
        this.ruValueAdd = ruValueAdd || (ruValue.length > 1 ? ruValue : ruValue.toUpperCase());
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
        spanValueEl.innerText = this.value; 
        const spanValueAddEl = document.createElement("span");
        spanValueAddEl.classList.add("button__value_add");
        spanValueAddEl.innerText = this.valueAdd;
        this.el.append(spanValueAddEl);
        this.el.append(spanValueEl);
        return this.el;
    }

    attachEvents() {
        this.el.addEventListener('mousedown', (e) => {
            this.el.classList.add("button_active");
        });
        this.el.addEventListener('mouseup', (e) => {
            setTimeout(() => this.el.classList.remove("button_active"), 100);
        });
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