import { WIDTH } from '../constants.js';

const buttons = [
    [
        {
            code: "Backquote",
            enValue: "`",
            ruValue: "ё",
            enValueAdd: "~"
        },
        {
            code: "Digit1",
            enValue: "1",
            ruValue: "1",
            enValueAdd: "!",
            ruValueAdd: "!"
        },
        {
            code: "Digit2",
            enValue: "2",
            ruValue: "2",
            enValueAdd: "@",
            ruValueAdd: '"'
        },
        {
            code: "Digit3",
            enValue: "3",
            ruValue: "3",
            enValueAdd: "#",
            ruValueAdd: "№"
        },
        {
            code: "Digit4",
            enValue: "4",
            ruValue: "4",
            enValueAdd: "$",
            ruValueAdd: ";"
        },
        {
            code: "Digit5",
            enValue: "5",
            ruValue: "5",
            enValueAdd: "%",
            ruValueAdd: "%"
        },
        {
            code: "Digit6",
            enValue: "6",
            ruValue: "6",
            enValueAdd: "^",
            ruValueAdd: ":"
        },
        {
            code: "Digit7",
            enValue: "7",
            ruValue: "7",
            enValueAdd: "&",
            ruValueAdd: "?"
        },
        {
            code: "Digit8",
            enValue: "8",
            ruValue: "8",
            enValueAdd: "*",
            ruValueAdd: "*"
        },
        {
            code: "Digit9",
            enValue: "9",
            ruValue: "9",
            enValueAdd: "(",
            ruValueAdd: "("
        },
        {
            code: "Digit0",
            enValue: "0",
            ruValue: "0",
            enValueAdd: ")",
            ruValueAdd: ")"
        },
        {
            code: "Minus",
            enValue: "-",
            ruValue: "-",
            enValueAdd: "_",
            ruValueAdd: "_"
        },
        {
            code: "Equal",
            enValue: "=",
            ruValue: "=",
            enValueAdd: "+",
            ruValueAdd: "+"
        },
        {
            code: "Backspace",
            enValue: "Backspace",
            ruValue: "Backspace",
            enValueAdd: "Backspace",
            ruValueAdd: "Backspace",
            width: WIDTH.L
        }
    ],
    [
        {
            code: "Tab",
            enValue: "Tab",
            ruValue: "Tab",
            enValueAdd: "Tab",
            ruValueAdd: "Tab",
            width: WIDTH.M
        },
        {
            code: "KeyQ",
            enValue: "Q",
            ruValue: "Й"
        },
        {
            code: "KeyW",
            enValue: "W",
            ruValue: "Ц"
        },
        {
            code: "KeyE",
            enValue: "E",
            ruValue: "У"
        },
        {
            code: "KeyR",
            enValue: "R",
            ruValue: "К"
        },
        {
            code: "KeyT",
            enValue: "T",
            ruValue: "Е"
        },
        {
            code: "KeyY",
            enValue: "Y",
            ruValue: "Н"
        },
        {
            code: "KeyU",
            enValue: "U",
            ruValue: "Г"
        },
        {
            code: "KeyI",
            enValue: "I",
            ruValue: "Ш"
        },
        {
            code: "KeyO",
            enValue: "O",
            ruValue: "Щ"
        },
        {
            code: "KeyP",
            enValue: "P",
            ruValue: "З"
        },
        {
            code: "BracketLeft",
            enValue: "[",
            ruValue: "Х",
            enValueAdd: "{"
        },
        {
            code: "BracketRight",
            enValue: "]",
            ruValue: "Ъ",
            enValueAdd: "}"
        },
        {
            code: "Backslash",
            enValue: "\\",
            ruValue: "\\",
            enValueAdd: "|",
            ruValueAdd: "/"
        },
        {
            code: "Delete",
            enValue: "Del",
            ruValue: "Del",
            enValueAdd: "Del",
            ruValueAdd: "Del"
        }
    ],
    [
        {
            code: "CapsLock",
            enValue: "CapsLock",
            ruValue: "CapsLock",
            enValueAdd: "CapsLock",
            ruValueAdd: "CapsLock",
            width: WIDTH.L
        },
        {
            code: "KeyA",
            enValue: "A",
            ruValue: "Ф"
        },
        {
            code: "KeyS",
            enValue: "S",
            ruValue: "Ы"
        },
        {
            code: "KeyD",
            enValue: "D",
            ruValue: "В"
        },
        {
            code: "KeyF",
            enValue: "F",
            ruValue: "А"
        },
        {
            code: "KeyG",
            enValue: "G",
            ruValue: "П"
        },
        {
            code: "KeyH",
            enValue: "H",
            ruValue: "Р"
        },
        {
            code: "KeyJ",
            enValue: "J",
            ruValue: "О"
        },
        {
            code: "KeyK",
            enValue: "K",
            ruValue: "Л"
        },
        {
            code: "KeyL",
            enValue: "L",
            ruValue: "Д"
        },
        {
            code: "Semicolon",
            enValue: ";",
            ruValue: "Ж",
            enValueAdd: ":"
        },
        {
            code: "Quote",
            enValue: "'",
            ruValue: "Э",
            enValueAdd: '"'
        },
        {
            code: "Enter",
            enValue: "Enter",
            ruValue: "Enter",
            width: WIDTH.L
        }
    ],
    [
        {
            code: "ShiftLeft",
            enValue: "Shift",
            ruValue: "Shift",
            enValueAdd: "Shift",
            ruValueAdd: "Shift",
            width: WIDTH.L
        },
        {
            code: "KeyZ",
            enValue: "Z",
            ruValue: "Я",
        },
        {
            code: "KeyX",
            enValue: "X",
            ruValue: "Ч",
        },
        {
            code: "KeyC",
            enValue: "C",
            ruValue: "С",
        },
        {
            code: "KeyV",
            enValue: "V",
            ruValue: "М",
        },
        {
            code: "KeyB",
            enValue: "B",
            ruValue: "И",
        },
        {
            code: "KeyN",
            enValue: "N",
            ruValue: "Т",
        },
        {
            code: "KeyM",
            enValue: "M",
            ruValue: "Ь",
        },
        {
            code: "Comma",
            enValue: ",",
            ruValue: "Б",
            enValueAdd: "<"
        },
        {
            code: "Period",
            enValue: ".",
            ruValue: "Ю",
            enValueAdd: ">"
        },
        {
            code: "Slash",
            enValue: "/",
            ruValue: ".",
            enValueAdd: "?",
            ruValueAdd: ","
        },
        {
            code: "ArrowUp",
            enValue: "▲",
            ruValue: "▲",
            enValueAdd: "▲",
            ruValueAdd: "▲"
        },
        {
            code: "ShiftRight",
            enValue: "Shift",
            ruValue: "Shift",
            enValueAdd: "Shift",
            ruValueAdd: "Shift",
            width: WIDTH.L
        }

    ],
    [
        {
            code: "ControlLeft",
            enValue: "Ctrl",
            ruValue: "Ctrl",
            enValueAdd: "Ctrl",
            ruValueAdd: "Ctrl"
        },
        {
            code: "MetaLeft",
            enValue: "Win",
            ruValue: "Win",
            width: WIDTH.M
        },
        {
            code: "AltLeft",
            enValue: "Alt",
            ruValue: "Alt",
            width: WIDTH.M
        },
        {
            code: "Space",
            enValue: " ",
            ruValue: " ",
            enValueAdd: " ",
            ruValueAdd: " ",
            width: WIDTH.XL
        },
        {
            code: "AltRight",
            enValue: "Alt",
            ruValue: "Alt",
            width: WIDTH.M
        },
        {
            code: "ArrowUp",
            enValue: "◄",
            ruValue: "◄",
            enValueAdd: "◄",
            ruValueAdd: "◄"
        },
        {
            code: "ArrowDown",
            enValue: "▼",
            ruValue: "▼",
            enValueAdd: "▼",
            ruValueAdd: "▼"
        },
        {
            code: "ArrowRight",
            enValue: "►",
            ruValue: "►",
            enValueAdd: "►",
            ruValueAdd: "►"
        },
        {
            code: "ControlRight",
            enValue: "Ctrl",
            ruValue: "Ctrl"
        }
    ]
];

export default buttons;
