import React from 'react';
import useRequest from './hooks/useRequest';
import AlbumDescription from './AlbumDescription';
import './App.css';
import Carousel from "./Carousel/Carousel";

const URL = "https://itunes.apple.com/search?term=david+bowie&media=music&entity=album";

function App() {

  const [activeSlide, setActiveSlide] = React.useState(null);
  const defaultItems = [];
  const items = useRequest(URL, defaultItems);

  return (
    <div className="App">
      <Carousel onActiveSlideChanged={setActiveSlide} items={items} />

      <AlbumDescription activeSlide={activeSlide} />
    </div>
  );
}

export default App;
