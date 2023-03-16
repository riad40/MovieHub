import { Movie } from '../../@types/types'

const saveMovies = (movies: Movie[]) => ({
    type: 'SAVE_MOVIES',
    payload: movies,
})

export { saveMovies }
