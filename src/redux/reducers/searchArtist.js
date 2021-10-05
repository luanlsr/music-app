import {
  SEARCH_ARTIST,
} from '../actions/actions'

const INITIAL_STATE = {
  strArtistThumb: '',
  strArtist: '',
  intBornYear: 0,
  intFormedYear: 0,
  strCountry: '',
  strGenre:'',
  strBiographyPT:'',
}

const searchArtist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ARTIST: 
    const { strArtistThumb, strArtist, intBornYear, intFormedYear, strCountry, strGenre, strBiographyPT } = action.payload
    console.log(action);
      return {
        strArtistThumb,
        strArtist,
        intBornYear,
        intFormedYear,
        strCountry,
        strGenre,
        strBiographyPT,
        
      }
      default:
        return ' '
  }
}


export default searchArtist;
