import webApi, { API_KEY } from '../../configs/webApi'
import { showToast } from './uiActions'

export const FETCHING_MOVIE = 'FETCHING_MOVIE'
export const FETCHING_MOVIE_SUCCESS = 'FETCHING_MOVIE_SUCCESS'
export const FETCHING_MOVIE_FAILURE = 'FETCHING_MOVIE_FAILURE'

export function fetchMovieAsync() {
  return (dispatch: any) => {
    // loading
    dispatch({ type: FETCHING_MOVIE })

    webApi.get('popular', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => {

      dispatch({
        type: FETCHING_MOVIE_SUCCESS,
        movies: response.data.results,
      })
    })
    .catch(error => {
      console.error(error)
      // failed
      dispatch({
        type: FETCHING_MOVIE_FAILURE,
        error,
      })

      dispatch(showToast({
        text: 'Something wrong!',
        textStyle: { textAlign: 'center' },
        type : 'danger',
      }))

    })

  }
}
