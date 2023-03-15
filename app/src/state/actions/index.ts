import { Movie } from '../../@types/types'

const saveMovies = (movies: Movie[]) => ({
    type: 'SAVE_MOVIES',
    payload: movies,
})

const getOneMovie = (id: number | string) => ({
    type: 'GET_ONE_MOVIE',
    payload: id,
})

export { saveMovies, getOneMovie }
