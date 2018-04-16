export interface Clips {
  slug?: string;
  broadcast_id?: string;
  broadcaster?: BroadCaster;
  created_at?: string;
  curator?: Curator;
  duration?: number;
  embed_html?: any;
  embed_url?: string;
  game?: string;
  language?: string;
  thumbnails?: Thumbnails;
  title?: string;
  tracking_id?: string;
  url?: string;
  views?: number;
  vod?: VideoOfTheDay;
}

export interface BroadCaster {
  channel_url?: string;
  display_name?: string;
  id?: string;
  logo?: string;
  name?: string;
}

export interface Curator {
  channel_url?: string;
  display_name?: string;
  id?: string;
  logo?: string;
  name?: string;
}

export interface Thumbnails {
  medium?: string;
  small?: string;
  tiny?: string;
}
export interface VideoOfTheDay {
  id?: string;
  offset?: number;
  preview_image_url?: string;
  url?: string;
}

export interface Games {
  channels?: string;
  game?: GameInfo;
  viewers?: number;
}

export interface GameInfo {
  box?: Box;
  giantbomb_id?: number;
  locale?: string;
  localized_name?: string;
  logo?: GameLogo;
  name?: string;
  popularity?: number;
  _id?: number
}

export interface Box {
  template?: string;
  medium?: string;
  small?: string;
  large?: string;
}
export interface GameLogo {
  template?: string;
  medium?: string;
  small?: string;
  large?: string;
}
