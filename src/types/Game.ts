export interface Game {
  id: number;
  name: string;
  description_raw?: string;

  background_image: string;
  background_image_additional?: string;

  released: string | null;
  updated: string;

  rating: number;
  rating_top: number;

  metacritic: number | null;

  playtime: number;

  genres: {
    id: number;
    name: string;
  }[];

  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];

  tags: {
    id: number;
    name: string;
  }[];

  stores: {
    store: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}
