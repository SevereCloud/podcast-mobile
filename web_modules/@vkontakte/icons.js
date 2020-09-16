import { r as react } from '../common/index-2cd4dd6b.js';
import { b as browserSprite$1, e as es6ObjectAssign, a as browserSymbol } from '../common/browser-sprite-329c1bbb.js';

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite = new browserSprite$1({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite.attach(spriteNode);
    } else {
      browserSprite.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite) {
    browserSprite.add(symbol);
  }
}
var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var svgStyle = {
  display: 'block'
};
var SvgIcon = function SvgIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      viewBox = _ref.viewBox,
      id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      fill = _ref.fill,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef"]);

  var size = Math.max(width, height);
  return /*#__PURE__*/react.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/react.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};
SvgIcon.defaultProps = {
  className: '',
  style: {}
};

var viewBox = '0 0 16 16';
var id = 'play_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="play_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M4.808 2.927l7.99 4.606a.54.54 0 010 .934l-7.99 4.607A.54.54 0 014 12.607V3.394a.54.54 0 01.808-.467z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(new browserSymbol({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Play = function Icon16Play(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Play.mountIcon = mountIcon;

var viewBox$1 = '0 0 56 56';
var id$1 = 'add_circle_outline_56';
var content$1 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="add_circle_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7zm0 9.5a1.5 1.5 0 011.5 1.5v8.5H38a1.5 1.5 0 010 3h-8.5V38a1.5 1.5 0 01-3 0v-8.5H18a1.5 1.5 0 010-3h8.5V18a1.5 1.5 0 011.5-1.5z" fill="currentColor" /></g></symbol>';
var isMounted$1 = false;

function mountIcon$1() {
  if (!isMounted$1) {
    addSpriteSymbol(new browserSymbol({
      id: id$1,
      viewBox: viewBox$1,
      content: content$1
    }));
    isMounted$1 = true;
  }
}

var Icon56AddCircleOutline = function Icon56AddCircleOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$1();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$1,
    id: id$1,
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
};

Icon56AddCircleOutline.mountIcon = mountIcon$1;

var viewBox$2 = '0 0 56 56';
var id$2 = 'check_circle_outline_56';
var content$2 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="check_circle_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7zm8.94 13.94a1.5 1.5 0 012.12 2.12l-14 14a1.5 1.5 0 01-2.12 0l-7-7a1.5 1.5 0 012.12-2.12L24 33.878z" fill="currentColor" /></g></symbol>';
var isMounted$2 = false;

function mountIcon$2() {
  if (!isMounted$2) {
    addSpriteSymbol(new browserSymbol({
      id: id$2,
      viewBox: viewBox$2,
      content: content$2
    }));
    isMounted$2 = true;
  }
}

var Icon56CheckCircleOutline = function Icon56CheckCircleOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$2();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$2,
    id: id$2,
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
};

Icon56CheckCircleOutline.mountIcon = mountIcon$2;

var viewBox$3 = '0 0 56 56';
var id$3 = 'gallery_outline_56';
var content$3 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="gallery_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M20.32 6l15.782.001c3.728.024 5.68.373 7.57 1.297l.42.215a10.586 10.586 0 014.395 4.395c1.048 1.96 1.458 3.851 1.508 7.583l.005.828v15.362l-.005.828c-.05 3.732-.46 5.624-1.508 7.583a10.586 10.586 0 01-4.395 4.395c-1.96 1.048-3.851 1.458-7.583 1.508l-.828.005H20.319l-.828-.005c-3.732-.05-5.624-.46-7.583-1.508a10.586 10.586 0 01-4.395-4.395c-1.048-1.96-1.458-3.851-1.508-7.583L6 35.681l.001-15.783c.024-3.728.373-5.68 1.297-7.57l.215-.42a10.586 10.586 0 014.395-4.395c1.96-1.048 3.851-1.458 7.583-1.508zm13.158 22.046l-9.234 11.02a1.5 1.5 0 01-1.966.296l-.122-.089-5.097-4.092-7.137 7.024c.074.158.152.315.236.472a7.587 7.587 0 003.165 3.165c1.498.8 2.951 1.116 6.259 1.154l.737.004h15.362l.737-.004c3.308-.038 4.76-.353 6.259-1.154a7.587 7.587 0 003.165-3.165c.437-.818.73-1.623.911-2.723zM35.68 9H20.319l-.737.004c-3.308.038-4.76.353-6.259 1.154a7.587 7.587 0 00-3.165 3.165C9.3 14.928 9 16.482 9 20.32v15.362l.004.737c.01.92.043 1.698.1 2.372l6.803-6.682a1.5 1.5 0 011.868-.188l.122.089 4.99 4.005 9.284-11.077a1.5 1.5 0 012.031-.25l.115.092 12.68 11.365.003-.463V20.319l-.004-.737c-.038-3.308-.353-4.76-1.154-6.259a7.587 7.587 0 00-3.165-3.165C41.072 9.3 39.518 9 35.68 9zM19.5 17a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$3 = false;

function mountIcon$3() {
  if (!isMounted$3) {
    addSpriteSymbol(new browserSymbol({
      id: id$3,
      viewBox: viewBox$3,
      content: content$3
    }));
    isMounted$3 = true;
  }
}

var Icon56GalleryOutline = function Icon56GalleryOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$3();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$3,
    id: id$3,
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
};

Icon56GalleryOutline.mountIcon = mountIcon$3;

export { Icon16Play, Icon56AddCircleOutline, Icon56CheckCircleOutline, Icon56GalleryOutline };
