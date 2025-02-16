import logo from './logo.svg';
import './App.css';
import audiosong from './alone-296348.mp3'

const {MusicBeatScheduler} = require('.')

//MusicBeatScheduler syncs any detected peak with the listened audio. It's useful to control some bulbs or any other effect
const musicBeatScheduler = new MusicBeatScheduler(pos => {
  console.log(`peak at ${pos}ms`) //do your effect here
})

musicBeatScheduler.start()

function MusicPLayer() {
  return (
    <>
      <h1>Here plays Alone</h1>

      <audio src={audiosong} controls />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MusicPLayer />
      </header>
    </div>
  );
}



export default App;
