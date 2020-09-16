import React from 'react';
import {
  Button,
  Checkbox,
  Div,
  FixedLayout,
  FormLayout,
  FormLayoutGroup,
  Input,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Root,
  Separator,
  Textarea,
  View,
  File,
} from '@vkontakte/vkui';
import { Icon56GalleryOutline } from '@vkontakte/icons';
import type { Podcast } from '../types';
import CoverLoader from '../components/CoverLoader/CoverLoader';

interface CreatingState {
  highlightErrors: boolean;
  podcast: Podcast;
}

export interface CreatingProps {
  // setView: (view: string, name?: string) => void;
  setPanel: (name: string) => void;
  goBack: () => void;

  podcast: Podcast;
  updatePodcast: (p: Podcast) => void;
}

export class Creating extends React.Component<CreatingProps, CreatingState> {
  constructor(props: CreatingProps) {
    super(props);

    this.state = {
      highlightErrors: false,
      podcast: props.podcast,
    };

    this.setPodcast = this.setPodcast.bind(this);
  }

  get isValid() {
    const { podcast } = this.state;
    return [podcast.image, podcast.name, podcast.description].every((e) => e);
  }

  setPodcast = (podcast: Partial<Podcast>): void => {
    const newPodcast = Object.assign({}, this.state.podcast, podcast);
    this.setState({ podcast: newPodcast });
  };

  render(): JSX.Element {
    const { goBack, updatePodcast } = this.props;
    const { highlightErrors, podcast } = this.state;

    return (
      <>
        <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>
          Новый подкаст
        </PanelHeader>
        <FormLayout>
          <FormLayout className="FormLayoutRow">
            <CoverLoader
              image={podcast.image}
              onLoadImage={(image) => this.setPodcast({ image: image })}
              before={<Icon56GalleryOutline width={32} height={32} />}
            />
            <Input
              top="Название"
              bottom={
                highlightErrors && !podcast.name
                  ? 'Пожалуйста, введите название подкаста'
                  : ''
              }
              status={highlightErrors && !podcast.name ? 'error' : 'default'}
              placeholder="Введите название подкаста"
              value={podcast.name}
              onChange={(e) => this.setPodcast({ name: e.target.value })}
            />
          </FormLayout>
          <Textarea
            top="Описание подкаста"
            bottom={
              highlightErrors && !podcast.description
                ? 'Пожалуйста, введите описание'
                : ''
            }
            status={
              highlightErrors && !podcast.description ? 'error' : 'default'
            }
            placeholder="На что пойдут деньги и как они помогут?"
            value={podcast.description}
            onChange={(e) => this.setPodcast({ description: e.target.value })}
          />
        </FormLayout>
        <Placeholder
          header="Загрузите ваш подкаст"
          action={
            <File controlSize="m" mode="outline">
              Загрузить файл
            </File>
          }
        >
          Выберите готовый аудиофайл из
          <br />
          вашего телефона и добавьте его
        </Placeholder>
        <Separator />
        <FormLayout>
          <Checkbox
            style={{ margin: '-12px 0px', padding: '12px 0px' }}
            checked={podcast.explicitContent}
            onChange={(e) =>
              this.setPodcast({ explicitContent: e.target.checked })
            }
          >
            Ненормативный контент
          </Checkbox>
          <Checkbox
            style={{ margin: '-12px 0px', padding: '12px 0px' }}
            checked={podcast.notExport}
            onChange={(e) => this.setPodcast({ notExport: e.target.checked })}
          >
            Исключить эпизод из экспорта
          </Checkbox>
          <Checkbox
            style={{ margin: '-12px 0px', padding: '12px 0px' }}
            checked={podcast.trailer}
            onChange={(e) => this.setPodcast({ trailer: e.target.checked })}
          >
            Трейлер подкаста
          </Checkbox>
        </FormLayout>
        <Div>TODO: Кому доступен</Div>
        <Div
          style={{
            paddingTop: 4,
            paddingBottom: 24,
            color: 'var(--text_secondary)',
          }}
        >
          {podcast.access === 'all' &&
            'При публикации записи с эпизодом, он становится доступным для всех пользователей'}
          {podcast.access === 'admins-only' &&
            'При публикации записи с эпизодом, он становится доступен только руководителям сообщества'}
        </Div>
        <div style={{ height: 68 }} />
        <FixedLayout filled vertical="bottom">
          <Div>
            <Button
              stretched
              size="l"
              disabled={!this.isValid}
              onClick={() => {
                updatePodcast(podcast);
              }}
              onBlur={() => this.setState({ highlightErrors: false })}
            >
              Далее
            </Button>
          </Div>
        </FixedLayout>
      </>
    );
  }
}
