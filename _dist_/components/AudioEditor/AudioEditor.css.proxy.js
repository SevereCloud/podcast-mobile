
const code = ".timeline-border {\n    -webkit-border-top-left-radius: 10px;\n    -webkit-border-top-right-radius: 10px;\n    -moz-border-radius-topleft: 10px;\n    -moz-border-radius-topright: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);