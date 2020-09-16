export interface TimeCode {
  name: string;
  /**
   * Время в секундах
   */
  time: number;
}

export interface Podcast {
  image: string;
  name: string;
  description: string;

  notExport: boolean;
  trailer: boolean;
  explicitContent: boolean;

  access: 'all' | 'admins-only';

  timeCodes: TimeCode[];

  audioComponent: HTMLAudioElement;
  originalAudioName: string;
  originalDuration: number;
  audioSource?: MediaElementAudioSourceNode;
}

export const defaultPodcast: Podcast = {
  image: '',
  name: '',
  description: '',

  notExport: false,
  trailer: false,
  explicitContent: false,

  access: 'all',

  timeCodes: [],

  audioComponent: document.createElement('audio'),
  originalAudioName: '',
  originalDuration: 0,
};

export const namePodcastAccess: { [key in Podcast['access']]: string } = {
  'admins-only': 'Администраторам',
  all: 'Всем пользователям',
};

export const descriptionPodcastAccess: {
  [key in Podcast['access']]: string;
} = {
  'admins-only':
    'При публикации записи с эпизодом, он становится доступен только руководителям сообщества',
  all:
    'При публикации записи с эпизодом, он становится доступным для всех пользователей',
};
