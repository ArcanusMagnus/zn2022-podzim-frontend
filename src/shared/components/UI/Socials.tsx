import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

import styles from "./Socials.module.css";

type SocialsModel = {
  instagram?: string;
  web?: string;
  facebook?: string;
  spotify?: string;
  apple?: string;
  youtube?: string;
  mail?: string;
  color?: "black" | "white";
};

const Socials = (props: SocialsModel) => {
    const classes = `${styles.socials} ${props.color && styles[props.color]}`

  return (
    <div className={classes}>
      {props.web && (
        <a href={props.web} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      )}
      {props.facebook && (
        <a href={props.facebook} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      )}
      {props.instagram && (
        <a href={props.instagram} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )}
      {props.spotify && (
        <a href={props.spotify} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
      )}
      {props.youtube && (
        <a href={props.youtube} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      )}
      {props.apple && (
        <a href={props.apple} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faApple} />
        </a>
      )}
      {props.mail && (
        <a href={props.mail} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      )}
    </div>
  );
};

export default Socials;
