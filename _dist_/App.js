import React from '../web_modules/react.js';
import { Panel, Root, View } from '../web_modules/@vkontakte/vkui.js';
import { Main } from './panels/Main.js';
import { defaultPodcast } from './types.js';
import { Creating } from './panels/Creating.js';
import { Preview } from './panels/Preview.js';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheme: 'bright_light',
      activeView: 'main',
      activePanel: {
        main: 'main'
      },
      history: [{
        view: 'main',
        panel: 'main'
      }],
      userInfo: {
        id: 117253521,
        first_name: 'Даниил',
        last_name: 'Суворов',
        sex: 2,
        city: {
          id: 22,
          title: 'Архангельск'
        },
        country: {
          id: 1,
          title: 'Россия'
        },
        timezone: 3,
        photo_100: 'https://sun9-8.us...M1CV8SrIA&ava=1',
        photo_200: 'https://sun9-8.us...eMXx9VGsc&ava=1'
      },
      podcast: defaultPodcast,
      podcastDone: false
    };
    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const {
      vkAPI
    } = this.props;
    vkAPI.getUserInfo().then(user => {
      this.setState({
        userInfo: user
      });
    });
    vkAPI.onUpdateConfig(data => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({
        scheme: data.scheme
      });
      document.body.attributes.setNamedItem(schemeAttribute);
    });
    vkAPI.initApp();
  }

  setView(view, name = 'main') {
    const panel = { ...this.state.activePanel
    };
    panel[view] = name;
    const newHistory = [...this.state.history, {
      view: view,
      panel: name
    }];
    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory
    });
  }

  setPanel(name) {
    const panel = { ...this.state.activePanel
    };
    panel[this.state.activeView] = name;
    const newHistory = [...this.state.history, {
      view: this.state.activeView,
      panel: name
    }];
    this.setState({
      activePanel: panel,
      history: newHistory
    });
  }

  goBack() {
    const newHistory = [...this.state.history];
    newHistory.pop();
    const {
      view,
      panel
    } = newHistory[newHistory.length - 1];
    const p = { ...this.state.activePanel
    };
    p[view] = panel;
    this.setState({
      activeView: view,
      activePanel: p,
      history: newHistory
    });
  }

  render() {
    const {
      vkAPI
    } = this.props;
    const {
      activeView,
      activePanel,
      podcast,
      podcastDone
    } = this.state;
    return /*#__PURE__*/React.createElement(Root, {
      activeView: activeView
    }, /*#__PURE__*/React.createElement(View, {
      id: "main",
      activePanel: activePanel['main']
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(Main, {
      setPanel: this.setPanel,
      podcastDone: podcastDone
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "creating"
    }, /*#__PURE__*/React.createElement(Creating, {
      setPanel: this.setPanel,
      goBack: this.goBack,
      podcast: podcast,
      updatePodcast: p => {
        this.setState({
          podcast: p
        });
        this.setPanel('preview');
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "edit"
    }), /*#__PURE__*/React.createElement(Panel, {
      id: "music-chose"
    }), /*#__PURE__*/React.createElement(Panel, {
      id: "preview"
    }, /*#__PURE__*/React.createElement(Preview, {
      setPanel: this.setPanel,
      goBack: this.goBack,
      podcast: podcast,
      publishPodcast: () => {
        this.setPanel('main');
        this.setState({
          podcast: defaultPodcast,
          podcastDone: true,
          history: [{
            view: 'main',
            panel: 'main'
          }]
        });
      }
    }))));
  }

}