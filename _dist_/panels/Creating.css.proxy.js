
const code = ".FormLayoutRow > .FormLayout__container {\n    display: flex;\n    padding: 0;\n}\n\n.FormLayoutRow > .FormLayout__container > .FormLayout__row {\n    padding-left: 12px;\n}\n\n.FormLayoutRow > .FormLayout__container > .FormLayout__row:first-child {\n    padding-left: 0;\n}\n\n.FormLayoutRow > .FormLayout__container > .FormLayout__row:last-child {\n    flex-grow: 1;\n}\n\n.PodcastIcon {\n    height: 48px;\n    width: 48px;\n    \n    border: 1px solid var(--field_border);\n    background-color: var(--field_background);\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    outline: none;\n    margin-right: 10px;\n}\n.PodcastIcon .Icon {\n    color: var(--icon_secondary);\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);