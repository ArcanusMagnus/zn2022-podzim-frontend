import { Link } from "react-router-dom";

import { NewsItemModel } from "../../models/news-item";
import Embeded from "../UI/Embeded";
import styles from "./NewsItem.module.css";

const NewsItem = (props: NewsItemModel) => {
  /* Render content with or without link to respective article, depending on clickable prop */
  const image =
    props.imageUrl && props.clickable ? (
      <Link to={`/articles/${props.id}`} className={styles["image-link"]}>
        <img src={props.imageUrl} alt={props.title} />
      </Link>
    ) : props.imageUrl ? (
      <span className={styles["image-link"]}>
        <img src={props.imageUrl} alt={props.title} />
      </span>
    ) : undefined;

  const header = props.clickable ? (
    <Link to={`/articles/${props.id}`}>
      <h2>{props.title}</h2>
    </Link>
  ) : (
    <h2>{props.title}</h2>
  );

  const readMore = (
    <Link to={`/articles/${props.id}`}>
      <p className={styles.readmore}>Čti více...</p>
    </Link>
  );

  const text = <p className={styles.text}>{props.text}</p>;

  /* Conditional styles for different content block sizes */
  const classes = `${styles["news-item"]} ${props.className} ${
    props.importance === 1
      ? styles["news-item__one"]
      : props.importance === 2
      ? styles["news-item__two"]
      : props.importance === 3
      ? styles["news-item__three"]
      : undefined
  }`;

  const embeded = props.embeded ? <Embeded data={props.embeded} /> : null;

  /* Needs to define colors better - create some list of globally available classes or something like that */

  return (
    <div className={classes} style={{ borderColor: props.color }}>
      {image}
      <div className={styles.content}>
        {header}
        <p>{props.leadParagraph}</p>
        {props.clickable ? readMore : text}
        {embeded}
        {props.children}
        {props.socials && props.socials}
      </div>
    </div>
  );
};

export default NewsItem;
