import React, { Component } from 'react';
import { connect } from 'react-redux'
import './MusicApp.css'
import {getArtistThunk} from '../redux/actions/actions'

class MusicApp extends Component {
  constructor() {
    super()

    this.state = {
      inputValue: '',
    }
  }

  handleChange = (event) => {
    return this.setState({inputValue: event.target.value})
  }


  render() {
    const { strArtistThumb, strArtist, intBornYear, intFormedYear, strCountry, strGenre, strBiographyPT} = this.props
    const { searchArtist } = this.props
    const { inputValue } = this.state
    const date = new Date().getFullYear()
    const age = date - intBornYear
    const idade = intBornYear === null ? '' : age
    const newAge = isNaN(idade) ? '' : `${idade} anos`

    console.log(idade)
    return (
      <div>
        <h1>Music App</h1>
        <div className="container-input">
          <input 
            type="text" 
            className="input" 
            placeholder="Pesquise sua banda favorita" 
            onChange={this.handleChange}
            />
          <button onClick={() => searchArtist(inputValue)} className="btn-search" type="button">SEARCH</button>
        </div>
        <div className="artist-data">
          <img className="photo" src={strArtistThumb} alt={strArtist} />
          <h2>{strArtist}</h2>
          <h3>{newAge}</h3>
          <h3>{intFormedYear}</h3>
          <h3>{strCountry}</h3>
          <h3>{strGenre}</h3>
          <div classNam="serrilhado-laterais biography-container">
            <p className="biography">{strBiographyPT}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  strArtist: state.searchArtist.strArtist,
  strArtistThumb: state.searchArtist.strArtistThumb,
  intBornYear: state.searchArtist.intBornYear,
  intFormedYear: state.searchArtist.intFormedYear,
  strCountry: state.searchArtist.strCountry,
  strGenre: state.searchArtist.strGenre,
  strBiographyPT: state.searchArtist.strBiographyPT,
})

const mapDispatchToProps = (dispatch) => ({
  searchArtist: (value) => dispatch(
    getArtistThunk(value)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicApp);