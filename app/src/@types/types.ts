import rootReducer from '../state/reducers'

export type Movie = {
    id: number | string
    title: string
    poster_path: string
    backdrop_path: string
    overview: string
    release_date: string
    vote_average: number
    vote_count: number
    popularity: number
    genres: Array<{ id: number; name: string }>
    runtime: number
    budget: number
    revenue: number
    production_companies: Array<{ id: number; name: string }>
    production_countries: Array<{ iso_3166_1: string; name: string }>
    spoken_languages: Array<{ iso_639_1: string; name: string }>
    status: string
    tagline: string
}

export type RootState = ReturnType<typeof rootReducer>
