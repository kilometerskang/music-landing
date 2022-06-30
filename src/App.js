import './App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSpotify } from '@fortawesome/free-regular-svg-icons';
//<FontAwesomeIcon icon={faSpotify} />

function App() {

  const {text} = useTypewriter({
    words: ['hey', 'my name is miles kang', 'go check out my beats!'],
    loop: 0
  })

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-text">
          <span>{text}</span>
          <Cursor />
        </div>
      </div>
    </div>
  );
}

export default App;
