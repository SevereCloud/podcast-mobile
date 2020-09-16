export const defaultPodcast = {
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
  originalDuration: 0
};
export const namePodcastAccess = {
  'admins-only': 'Администраторам',
  all: 'Всем пользователям'
};
export const descriptionPodcastAccess = {
  'admins-only': 'При публикации записи с эпизодом, он становится доступен только руководителям сообщества',
  all: 'При публикации записи с эпизодом, он становится доступным для всех пользователей'
};