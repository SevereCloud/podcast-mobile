import React from 'react';
import {
  Button,
  Div,
  FixedLayout,
  PanelHeader,
  PanelHeaderBack,
  Separator,
  Text,
  Header,
  Card,
  Link,
  Group,
} from '@vkontakte/vkui';
import { Icon16Play } from '@vkontakte/icons';
import type { Podcast } from '../types';
import { timeFormat } from '../lib';

interface PreviewState {
  highlightErrors: boolean;
  podcast: Podcast;
}

export interface PreviewProps {
  // setView: (view: string, name?: string) => void;
  setPanel: (name: string) => void;
  goBack: () => void;

  podcast: Podcast;
  publishPodcast: (p: Podcast) => void;
}

export class Preview extends React.Component<PreviewProps, PreviewState> {
  constructor(props: PreviewProps) {
    super(props);

    this.state = {
      highlightErrors: false,
      podcast: props.podcast,
    };

    this.setPodcast = this.setPodcast.bind(this);
  }

  isValid = () => {
    const { podcast } = this.state;
    return [podcast.image, podcast.name, podcast.description].every((e) => e);
  };

  setPodcast = (podcast: Partial<Podcast>): void => {
    const newPodcast = Object.assign({}, this.state.podcast, podcast);
    this.setState({ podcast: newPodcast });
  };

  render(): JSX.Element {
    const { goBack, podcast, publishPodcast } = this.props;
    // const {  } = this.state;

    return (
      <>
        <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
          Новый подкаст
        </PanelHeader>
        <Group>
          <Div style={{ display: 'flex' }}>
            <Card
              className="Cover"
              style={{ backgroundImage: `url(${podcast.image})` }}
            >
              <div className="Button">
                <Icon16Play />
              </div>
            </Card>
            Картинка
            {podcast.name}
            Сообщество длительность
          </Div>
        </Group>
        <Group>
          <Header>Описание:</Header>
          <Div>
            <Text weight="regular">{podcast.description}</Text>
          </Div>
        </Group>
        {podcast.timeCodes.length > 0 && (
          <Group>
            <Header>Таймкоды:</Header>
            {podcast.timeCodes.map((timeCode, index) => (
              <Div key={index}>
                <Link>{timeFormat(timeCode.time)}</Link> — {timeCode.name}
              </Div>
            ))}
          </Group>
        )}
        <div style={{ height: 68 }} />
        <FixedLayout filled vertical="bottom">
          <Div>
            <Button
              stretched
              size="l"
              onClick={() => {
                publishPodcast(podcast);
              }}
            >
              Опубликовать подкаст
            </Button>
          </Div>
        </FixedLayout>
      </>
    );
  }
}
