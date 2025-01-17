import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import bridge from '@vkontakte/vk-bridge';

import '@vkontakte/vkui/dist/vkui.css';
import './components/PodcastSnippet/PodcastSnippet.css';
import './components/CoverLoader/CoverLoader.css';
import './components/AudioEditor/AudioEditor.css';
import './components/TimeCodeEditor/TimeCodeEditor.css';
import './panels/Preview.css';
import './panels/Creating.css';

const isMobileApps = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return vkPlatform !== null && vkPlatform !== 'desktop_web';
};

ReactDOM.render(
  <React.StrictMode>
    <App vkAPI={new VKMiniAppAPI(bridge)} mobile={isMobileApps()} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
