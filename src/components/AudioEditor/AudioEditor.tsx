import React, {
	FunctionComponent,
	useEffect,
	useState,
} from 'react';
import {
	Div,
	Button,
	Group,
	Header,
	Card,
	CardGrid,
	Separator
} from '@vkontakte/vkui';
import { Icon24Play, Icon24Pause } from '@vkontakte/icons';

import type { Podcast } from '../../types';
import WaveSurfer from 'wavesurfer.js';
import Waveform from './WaveForm';

interface IAudioEditorProps {
	podcast: Podcast;
}

const AudioEditor: FunctionComponent<IAudioEditorProps> = ({ podcast }) => {
	const { audioFile } = podcast;
	const [shouldMusicPlay, setShouldMusicPlay] = useState<boolean>(false);
	const [didMount, setDidMount] = useState<boolean>(false);
	// eslint-disable-next-line
	const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
	useEffect(() => {
		if (!didMount) {
			const wavesurfer = WaveSurfer.create({
				barWidth: 2,
				barRadius: 2,
				barGap: 4,
				barMinHeight: 2,
				barHeight: 0.75,
				cursorWidth: 1,
				container: '#waveform',
				backend: 'WebAudio',
				height: 96,
				progressColor: '#3F8AE0',
				responsive: true,
				waveColor: '#EFEFEF',
				cursorColor: 'transparent',
			});
			wavesurfer.loadBlob(audioFile!);

			setDidMount(true);
			setWavesurfer(wavesurfer);
		}
		if (wavesurfer) {
			if (shouldMusicPlay) {
				wavesurfer.play();
			} else if (wavesurfer.isPlaying()) {
				wavesurfer.pause()
			}
		}

		// stop playing podcast on unmoun
		return () => {
			if (wavesurfer && wavesurfer.isPlaying()) {
				wavesurfer.pause();
			}
		}
	}, [shouldMusicPlay]);

	return (
		<Group separator="hide">
			<CardGrid>
				<Card size="l" mode="outline">
					<div style={{ height: 26 }} />
					<div id="waveform" style={{ height: 90, background: '#f2f3f5' }} />
					<Div>
						<Button
							style={{ width: 44 }}
							before={shouldMusicPlay ? (<Icon24Pause />) : (<Icon24Play />)}
							onClick={() => setShouldMusicPlay(!shouldMusicPlay)}
							size="l"
						/>
					</Div>
				</Card>
			</CardGrid>
		</Group>
	);
};

export default AudioEditor;
