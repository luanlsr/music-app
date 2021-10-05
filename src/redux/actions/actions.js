import { getArtist } from '../../services/musicAPI'

export const SEARCH_ARTIST = 'SEARCH_ARTIST'

export const searchArtist = (payload) => ({
  type: SEARCH_ARTIST,
  payload,
});

export const getArtistThunk = (inputValue) => (dispatch) => {
  // chama a api
  const newInput = inputValue.replace(' ', '_')
  getArtist(newInput)// deu certo a chamada da api
    .then((res) => {
      const {strArtistThumb, strArtist, intBornYear, intFormedYear, strCountry, strGenre, strBiographyPT } = res.artists[0]
      dispatch(searchArtist({
        strArtistThumb,
        strArtist,
        intBornYear,
        intFormedYear,
        strCountry,
        strGenre,
        strBiographyPT,
      }));
    })
};
