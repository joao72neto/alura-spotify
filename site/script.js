const searchInput = document.getElementById('search_input')
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists`)
      .then((response) => response.json())
      .then((results) => {
        const filteredResults = results.filter((artist) =>
          artist.name.toLowerCase().includes(searchTerm)
        );
        displayResults(filteredResults);
      });
  }

function displayResults(result){
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultArtist.classList.remove('hidden')

}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase()
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden')
        resultArtist.classList.remove('hidden')
        return
    }

    requestApi(searchTerm)
})