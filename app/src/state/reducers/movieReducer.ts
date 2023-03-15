import { Movie } from '../../@types/types'

const initialState: Movie[] = []

interface SaveMoviesAction {
    type: 'SAVE_MOVIES'
    payload: Movie[]
}

interface GetOneMovieAction {
    type: 'GET_ONE_MOVIE'
    payload: number | string
}

type Action = SaveMoviesAction | GetOneMovieAction

const movieReducer = (state: Movie[] = initialState, action: Action) => {
    switch (action.type) {
        case 'SAVE_MOVIES':
            return action.payload
        case 'GET_ONE_MOVIE':
            return state.filter((movie) => movie.id === action.payload)
        default:
            return state
    }
}

export default movieReducer
