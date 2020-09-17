import React, { useEffect, useState } from '../../../web_modules/react.js';
import { Button, Group, Card, CardGrid, Separator, Text } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon24Play, Icon24Pause, Icon24Music, Icon24ArrowUturnLeftOutline } from '../../../web_modules/@vkontakte/icons.js';
import { Icon24ChartDown, Icon24ChartUp, Icon24Cut } from '../icons/index.js';
import WaveSurfer from '../../../web_modules/wavesurferjs.js';
import TimelinePlugin from './plugins/timeline.js';

const AudioEditor = ({
  podcast
}) => {
  const {
    audioFile
  } = podcast;
  const [isBlobLoading, setIsBlobLoading] = useState(true);
  const [shouldMusicPlay, setShouldMusicPlay] = useState(false);
  const [didMount, setDidMount] = useState(false); // eslint-disable-next-line

  const [wavesurfer, setWavesurfer] = useState(null);
  useEffect(() => {
    if (!didMount) {
      const wavesurfer = WaveSurfer.create({
        barWidth: 2,
        barRadius: 2,
        barGap: 4,
        barMinHeight: 2,
        barHeight: 0.6,
        cursorWidth: 1,
        cursorColor: '#FF3347',
        container: '#waveform',
        backend: 'WebAudio',
        height: 96,
        progressColor: '#3F8AE0',
        waveColor: '#3F8AE0',
        responsive: true,
        // waveColor: '#EFEFEF',
        //cursorColor: 'transparent',
        plugins: [TimelinePlugin.create({
          container: '#timeline',
          labelPadding: 0,
          timeInterval: pxPerSec => {
            if (pxPerSec >= 25) {
              return 1;
            } else if (pxPerSec * 5 >= 25) {
              return 5;
            } else if (pxPerSec * 15 >= 25) {
              return 10;
            }

            return Math.ceil(0.5 / pxPerSec) * 60;
          },
          unlabeledNotchColor: '#99a2ad',
          primaryFontColor: '#99a2ad',
          secondaryFontColor: '#99a2ad',
          fontSize: 9,
          height: 26,
          notchPercentHeight: 33
        })]
      });
      wavesurfer.loadBlob(audioFile);
      wavesurfer.on('ready', () => {
        setIsBlobLoading(false);
        wavesurfer.getCurrentTime;
      });
      setDidMount(true);
      setWavesurfer(wavesurfer);
    }

    if (wavesurfer) {
      if (shouldMusicPlay) {
        wavesurfer.play();
      } else if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
      }
    } // stop playing podcast on unmoun


    return () => {
      if (wavesurfer && wavesurfer.isPlaying()) {
        wavesurfer.pause();
      }
    };
  }, [shouldMusicPlay]);
  return /*#__PURE__*/React.createElement(Group, {
    separator: "hide"
  }, /*#__PURE__*/React.createElement(CardGrid, null, /*#__PURE__*/React.createElement(Card, {
    size: "l",
    mode: "outline"
  }, /*#__PURE__*/React.createElement("div", {
    id: "timeline",
    style: {
      height: 26,
      background: '#f2f3f5'
    },
    className: "timeline-border"
  }), /*#__PURE__*/React.createElement(Separator, {
    wide: true
  }), /*#__PURE__*/React.createElement("div", {
    id: "waveform",
    style: {
      height: 90,
      background: '#f2f3f5'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8
    }
  }, isBlobLoading && /*#__PURE__*/React.createElement(Text, {
    weight: "regular",
    style: {
      textAlign: 'center'
    }
  }, "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430 (\u043F\u0430\u0440\u0430 \u0441\u0435\u043A\u0443\u043D\u0434)..."), !isBlobLoading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44
    },
    before: shouldMusicPlay ? /*#__PURE__*/React.createElement(Icon24Pause, null) : /*#__PURE__*/React.createElement(Icon24Play, null),
    onClick: () => setShouldMusicPlay(!shouldMusicPlay),
    size: "l"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      marginRight: 4
    },
    before: /*#__PURE__*/React.createElement(Icon24Cut, null),
    size: "l",
    mode: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44
    },
    before: /*#__PURE__*/React.createElement(Icon24ArrowUturnLeftOutline, null),
    size: "l",
    mode: "secondary"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      marginRight: 4
    },
    before: /*#__PURE__*/React.createElement(Icon24Music, null),
    size: "l",
    mode: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      marginRight: 4
    },
    before: /*#__PURE__*/React.createElement(Icon24ChartUp, null),
    size: "l",
    mode: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44
    },
    before: /*#__PURE__*/React.createElement(Icon24ChartDown, null),
    size: "l",
    mode: "secondary"
  })))))));
};

export default AudioEditor;