import React from 'react';
import './App.css';

import Carousel from "./Carousel/Carousel";

function Description({activeSlide}) {
  return activeSlide ? <p>{activeSlide.title}</p> : "Loading..."
}

function useRequest(url, defaultRes) {

  const [response, setResponse] = React.useState(defaultRes);

  React.useEffect(() => {

    fetch(url)
    .then(response => response.json())
    .then(response => {


      return response
        .results
        .map(result => {
          return {
            artworkUrl: result.artworkUrl100,
            title: result.collectionName,
            key: result.collectionName,
          }
        })
    })
    .then((response) => {
      setResponse(response)
    })
  }, [url])

  return response
}

function App() {

  const [activeSlide, setActiveSlide] = React.useState(null);
  const items = useRequest("https://itunes.apple.com/search?term=david+bowie&media=music&entity=album", []);

  return (
    <div className="App">
      <Carousel onActiveSlideChanged={setActiveSlide} items={items} />

      <Description activeSlide={activeSlide} />
    </div>
  );
}

export default App;
