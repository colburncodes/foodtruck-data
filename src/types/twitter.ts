export interface GeoTag {
  id: string;
  name: string;
  place_type: string;
  full_name: string;
  country: string;
  country_code: string;
  coordinates: {
    lat: number;
    long: number;
  };
}

export interface Tweet {
  id: string;
  userId: string;
  name: string;
  text: string;
  date: string;
  geo: GeoTag;
}

export interface Vendor {
  name: string;
  image: string;
  description: string;
  twitterId: string;
  tweets: Tweet[];
  created: number;
  updated: number;
}
