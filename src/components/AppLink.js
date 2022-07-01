import '../styles/AppMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export const AppLink = ({ text, logo }) => {

  return (
    <div className="App-menu">
      <FontAwesomeIcon icon={faSpotify} />
      {text}
    </div>
  );
}