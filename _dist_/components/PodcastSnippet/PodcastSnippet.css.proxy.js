
const code = ".PodcastSnippet {\n    background-color: #2C2D2E;\n    border-radius: 6px;\n    display: flex;\n    overflow: hidden;\n}\n\n.PodcastSnippet__cover {\n    width: 120px;\n    height: 120px;\n    background-size: cover;\n    background-position: center;\n}\n\n.PodcastSnippet .PodcastSnippet__info {\n    flex-grow: 1;\n}\n\n.PodcastSnippet__info {\n    position: relative;\n}\n.PodcastSnippet__info .Button {\n    position: absolute;\n    left: 12px;\n    bottom: 12px;\n}\n\n.PodcastSnippet__favorite {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    color: #4C4F54;\n}\n\n.PodcastSnippet__name {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 18px;\n    /* or 129% */\n\n    letter-spacing: 0.02px;\n\n    color: #FFFFFF;\n\n    margin: 12px 40px 4px 12px;\n}\n\n.PodcastSnippet__sub {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 16px;\n    /* identical to box height, or 123% */\n    \n    letter-spacing: 0.01px;\n    \n    color: #909498;\n\n    margin: 0px 40px 10px 12px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);