interface Avatar {
  gravatar: { hash: string };
  tmdb: { avatar_path: null};
}

export interface User {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface userSession {
  user: User | undefined;
  isAuthenticated: boolean;
  sessionId: string;
}
