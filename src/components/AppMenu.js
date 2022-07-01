import '../styles/AppMenu.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn, rotateInDownRight } from 'react-animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
  {
    faSpotify,
    faApple,
    faInstagram,
    faTiktok,
    faYoutube,
    faSoundcloud,
    faAmazon,
    faBandcamp
  } from '@fortawesome/free-brands-svg-icons';

const textAnimation = keyframes`${fadeIn}`;
const iconAnimation = keyframes`${rotateInDownRight}`;
 
const IconDiv = styled.div`
  animation: 1.2s ${iconAnimation};
  padding-left: 6px;
`;

const TextDiv = styled.div`
  animation: 2s ${textAnimation};
  padding-left: 6px;
`;

export const AppMenu = () => {
  return (
    <div className="App-menu">
      <a className="App-link" href="https://open.spotify.com/artist/4F5oMQRJEqpLZaW5cc7BEC?si=kFnOSdfmTCyiTpesZ8qv7A">
        <TextDiv>
          Spotify
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faSpotify} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://music.apple.com/us/artist/miles-kang/1381252718">
        <TextDiv>
          Apple Music
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faApple} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://www.instagram.com/kilometerskang">
        <TextDiv>
          Instagram
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://www.tiktok.com/@kilometerskang">
        <TextDiv>
          TikTok
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faTiktok} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://www.youtube.com/c/MilesKang">
        <TextDiv>
          YouTube
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faYoutube} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://soundcloud.com/kil-ometers">
        <TextDiv>
          SoundCloud
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faSoundcloud} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://music.amazon.com/artists/B07CWHRHM3/miles-kang?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_6XxJrbUzCu08JxyW4Yj14yxo4">
        <TextDiv>
          Amazon Music
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faAmazon} size="lg" fixedWidth />
        </IconDiv>
      </a>
      <a className="App-link" href="https://mileskang.bandcamp.com/">
        <TextDiv>
          Bandcamp
        </TextDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faBandcamp} size="lg" fixedWidth />
        </IconDiv>
      </a>
    </div>
  );
}