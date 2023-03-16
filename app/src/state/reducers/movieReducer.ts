import { Movie } from '../../@types/types'

const initialState: Movie[] = []

interface SaveMoviesAction {
    type: 'SAVE_MOVIES'
    payload: Movie[]
}

type Action = SaveMoviesAction

const movieReducer = (state: Movie[] = initialState, action: Action) => {
    switch (action.type) {
        case 'SAVE_MOVIES':
            return action.payload
        default:
            return state
    }
}

export default movieReducer
