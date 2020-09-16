function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { Button, Div, FixedLayout, PanelHeader, PanelHeaderBack, Text, Header, Card, Link, Group } from '../../web_modules/@vkontakte/vkui.js';
import { Icon16Play } from '../../web_modules/@vkontakte/icons.js';
import { timeFormat } from '../lib.js';
export class Preview extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "isValid", () => {
      const {
        podcast
      } = this.state;
      return [podcast.image, podcast.name, podcast.description].every(e => e);
    });

    _defineProperty(this, "setPodcast", podcast => {
      const newPodcast = Object.assign({}, this.state.podcast, podcast);
      this.setState({
        podcast: newPodcast
      });
    });

    this.state = {
      highlightErrors: false,
      podcast: props.podcast
    };
    this.setPodcast = this.setPodcast.bind(this);
  }

  render() {
    const {
      goBack,
      podcast,
      publishPodcast
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u043A\u0430\u0441\u0442"), /*#__PURE__*/React.createElement(Group, null, /*#__PURE__*/React.createElement(Div, {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      className: "Cover",
      style: {
        backgroundImage: `url(${podcast.image})`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "Button"
    }, /*#__PURE__*/React.createElement(Icon16Play, null))), "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430", podcast.name, "\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C")), /*#__PURE__*/React.createElement(Group, null, /*#__PURE__*/React.createElement(Header, null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:"), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Text, {
      weight: "regular"
    }, podcast.description))), podcast.timeCodes.length > 0 && /*#__PURE__*/React.createElement(Group, null, /*#__PURE__*/React.createElement(Header, null, "\u0422\u0430\u0439\u043C\u043A\u043E\u0434\u044B:"), podcast.timeCodes.map((timeCode, index) => /*#__PURE__*/React.createElement(Div, {
      key: index
    }, /*#__PURE__*/React.createElement(Link, null, timeFormat(timeCode.time)), " \u2014 ", timeCode.name))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      stretched: true,
      size: "l",
      onClick: () => {
        publishPodcast(podcast);
      }
    }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442"))));
  }

}