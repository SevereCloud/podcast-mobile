import React from '../../../web_modules/react.js';
import { Button } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon16Play, Icon24FavoriteOutline } from '../../../web_modules/@vkontakte/icons.js';
import { timeFormat } from '../../lib.js';
export class PodcastSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      podcast
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__cover",
      style: {
        backgroundImage: `url(${podcast.image})`
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__favorite"
    }, /*#__PURE__*/React.createElement(Icon24FavoriteOutline, null)), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__name"
    }, podcast.name), /*#__PURE__*/React.createElement("div", {
      className: "PodcastSnippet__sub"
    }, podcast.author, " \xB7 ", timeFormat(podcast.originalDuration)), /*#__PURE__*/React.createElement(Button, {
      before: /*#__PURE__*/React.createElement(Icon16Play, null),
      size: "m",
      mode: "overlay_primary"
    }, "\u0421\u041B\u0423\u0428\u0410\u0422\u042C")));
  }

}
export default PodcastSnippet;