export interface IMovie {
  id: number;
  genre: number;
  name: string;
  image: string;
  description: string;
  additional: string;
}
export interface IMovieState {
  movies?: IMovie[];
  error: boolean;
}
export interface IGenres {
  Action: number;
  Adventures: number;
  Comedy: number;
  Drama: number;
  Horror: number;
  Westerns: number;
}
export interface ISearchMovieState extends IMovieState {
  genres: IGenres;
}

export interface ITimeTable {
  id: number;
  sessions: {
    showdate: string;
    daytime: string;
  };
  movie?: IMovie;
}
export interface IMovieShowsState {
  sessionsCinema?: ITimeTable[];
  movieFreePlaces?: any;
  bookedTicket?: IBookedTicket;
}

export interface ISession {
  movie_id: number;
  showdate: string;
  daytime: string;
  row?: null | number;
  seat?: null | number;
}
export interface IBookedTicket extends ISession {
  ticketkey: string;
}
