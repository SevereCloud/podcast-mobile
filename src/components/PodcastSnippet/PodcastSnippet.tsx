import React from 'react';
import {
  Group,
  Header,
  CellButton,
  Caption,
  Div,
  List,
  Link,
  Cell,
  Input,
  Button,
} from '@vkontakte/vkui';
import type { Podcast, TimeCode } from '../../types';
import { Icon16Play, Icon24Add, Icon24FavoriteOutline } from '@vkontakte/icons';
import { timeFormat } from '../../lib';

export interface PodcastSnippetState {}

export interface PodcastSnippetProps {
  podcast: Podcast;
}

export class PodcastSnippet extends React.Component<
  PodcastSnippetProps,
  PodcastSnippetState
> {
  constructor(props: PodcastSnippetProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const { podcast } = this.props;
    // const {  } = this.state;

    return (
      <div className="PodcastSnippet">
        <div
          className="PodcastSnippet__cover"
          style={{ backgroundImage: `url(${podcast.image})` }}
        ></div>
        <div className="PodcastSnippet__info">
          <div className="PodcastSnippet__favorite">
            <Icon24FavoriteOutline />
          </div>
          <div className="PodcastSnippet__name">{podcast.name}</div>
          <div className="PodcastSnippet__sub">
            {podcast.author} · {timeFormat(podcast.originalDuration)}
          </div>
          <Button before={<Icon16Play />} size="m" mode="overlay_primary">
            СЛУШАТЬ
          </Button>
        </div>
      </div>
    );
  }
}

export default PodcastSnippet;
