import React from 'react';

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      < GifListContainer />


    </div>
    // In our app, the <GifListContainer /> 
    // will be responsible for
    //  fetching the data from the Giphy API, 
    //  storing the first 3 gifs from the response in 
    //  its component state, and passing that data down
    //   to its child, the <GifList> component, as a prop.
  );
}

export default App
