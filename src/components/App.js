import '../styles/App.css';
import { Hello } from './Hello';
import { AppMenu } from './AppMenu';

const App = () => {

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-small-container">
          <div className="App-text">
            <Hello />
          </div>
          <AppMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
