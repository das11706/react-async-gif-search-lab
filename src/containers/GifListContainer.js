import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
  state = { 
    gifs: [] 
  };

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=zDfNsNO8uayoMOtkdpva93SVVdYN6Viu")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.data)
      let firstThreeGifs = data.data.slice(0, 3);
      let threeGifs = firstThreeGifs.map((gif) => gif.images.original.url);
      // console.log(threeGifs)
      this.setState({
        gifs: threeGifs,
      });
    }); 
  }

  handleSearch = (search) => {
    console.log('search', search)
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=zDfNsNO8uayoMOtkdpva93SVVdYN6Viu`)
    .then((response) => response.json())
    .then((data) => {
      let firstThreeGifs = data.data.slice(0, 3);
      let threeGifs = firstThreeGifs.map((gif) => gif.images.original.url);
      this.setState({
        gifs: threeGifs,
      });
    });
  }
 
  render () {
    return <div> 
      <GifList gifs={this.state.gifs} />

      <GifSearch handleSearch={this.handleSearch} />
      </div>
  }
}

export default GifListContainer;

// In our app, the <GifListContainer /> 
    // will be responsible for
    //  fetching the data from the Giphy API, 
    //  storing the first 3 gifs from the response in 
    //  its component state, and passing that data down
    //   to its child, the <GifList> component, as a prop.