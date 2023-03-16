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

export type MovieDetailsType = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: { id: number; name: string }[]
    homepage: string
    id: number | string
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: {
        id: number
        logo_path: string | null
        name: string
        origin_country: string
    }[]
    production_countries: { iso_3166_1: string; name: string }[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: {
        english_name: string
        iso_639_1: string
        name: string
    }[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type MovieCastType = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    cast_id: number
    character: string
    credit_id: string
    order: number
}[]

export type MovieCommentsType = {
    author: string
    author_details: {
        name: string
        username: string
        avatar_path: string
        rating: number | null
    }
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}[]
