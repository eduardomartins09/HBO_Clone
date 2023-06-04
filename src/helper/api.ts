export const API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL_API = import.meta.env.VITE_BASE_URL

export const imageHost = "https://image.tmdb.org/t/p/original/";

export type Movies = {
  id: number
  poster_path: string
  name: string
  results: string
}

export const truncate = (str: string, n: number) => {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}

export const changeDate = (date: string | undefined) => {
  return date?.split("-").slice(0,1)   
}

export const goToTheTop = () => {
  scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

export type Categories = {
  name?: string
  title?: string
  path: string | undefined
  description?: string
  isLarge?: boolean
}

const categories: Categories[] = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "upcoming",
    title: "Em Breve",
    path: `/movie/upcoming?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Mais Populares",
    description: "Os filmes mais assistidos nos últimos dias. Não fique por fora!",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: true,
  },
  {
    name: "acao",
    title: "Ação",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    isLarge: false,
  },
  {
    name: "animacao",
    title: "Animações",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    isLarge: false,
  },
  {
    name: "family",
    title: "Para Toda Familia",
    description: "Os filmes mais assistidos. Não perca tempo!",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    isLarge: true,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "policial",
    title: "Policial",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
  {
    name: "drama",
    title: "Drama",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    isLarge: false,
  },
  {
    name: "ficcaoCientifica",
    title: "Ficção Científica",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    isLarge: false,
  },
  {
    name: "terror",
    title: "Terror",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    isLarge: false,
  },
  {
    name: "mystery",
    title: "Mistério",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "fantasy",
    title: "Fantasia",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    isLarge: false,
  },
  {
    name: "historia",
    title: "História",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    isLarge: false,
  },
  {
    name: "musica",
    title: "Música",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    isLarge: false,
  },
  {
    name: "suspense",
    title: "Suspense",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    isLarge: false,
  },
  {
    name: "guerra",
    title: "Guerra",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    isLarge: false,
  },
  {
    name: "velhoOeste",
    title: "Velho Oeste",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    isLarge: false,
  },
];

export const getMovies = async (path: string | undefined) => {
  try {
    let url = `${BASE_URL_API}${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies: ", error);
  }
};

export const getMoviesDetails = async (path: string | undefined) => {
  try {
    let url = `${BASE_URL_API}/movie/${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMoviesDetails: ", error);
  }
};

export default categories;

export const genres = [
  {
    name: 'Ação',
    id: 28
  },
  {
    name: 'Comédia',
    id: 35
  },
  {
    name: 'Animações',
    id: 16
  },
  {
    name: 'Familia',
    id: 10751
  },
  {
    name: 'Policial',
    id: 80
  },
  {
    name: 'Drama',
    id: 18
  },
  {
    name: 'Ficção',
    id: 878
  },
  {
    name: 'Terror',
    id: 27
  },
  {
    name: 'Romance',
    id: 10749
  },
  {
    name: 'Documentarios',
    id: 99
  },
  {
    name: 'Mistério',
    id: 9648
  },
  {
    name: 'Fantasia',
    id: 14
  },
]
