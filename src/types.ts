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
}

export const defaultPodcast: Podcast = {
  image: '',
  name: '',
  description: '',

  notExport: false,
  trailer: false,
  explicitContent: false,

  access: 'all',

  timeCodes: [
    {
      name: 'test',
      time: 123,
    },
  ],
};
