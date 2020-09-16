
const code = ".Cover {\n    width: 72px;\n    height: 72px;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    outline: none;\n    text-decoration: none;\n}\n\n.Cover .Button {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background-color: rgba(255, 255, 255, .35);\n    color: #fff;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);