
const code = ".FormLayoutRow > .FormLayout__container {\n    display: flex;\n    padding: 0;\n}\n\n.FormLayoutRow > .FormLayout__container > .FormLayout__row {\n    padding-left: 12px;\n}\n\n.FormLayoutRow > .FormLayout__container > .FormLayout__row:first-child {\n    padding-left: 0;\n}\n\n.FormLayoutRow > .FormLayout__container > .FormLayout__row:last-child {\n    flex-grow: 1;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);