// const MUSIC_ARTIST = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=beatles';
// `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${inputValue}`

export const getArtist = (inputValue) => (
  fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${inputValue}`)
    .then((response) => (
      response
        .json()
        .then((data) => Promise.resolve(data) )
    ))
);


export default getArtist;

// fetch(URL_TO_FETCH).then(function(response) {
//   response.json().then(function(data) {
//     console.log(data);
//   });
// })