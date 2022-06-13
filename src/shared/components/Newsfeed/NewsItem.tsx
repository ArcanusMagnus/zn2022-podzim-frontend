import { NewsItemModel } from "../../models/news-item";
import styles from "./NewsItem.module.css";

const NewsItem = (props: NewsItemModel) => {
  return (
    <div
      className={`${styles["news-item"]} ${props.className} ${
        props.importance === 1
          ? styles["news-item__one"]
          : props.importance === 2
          ? styles["news-item__two"]
          : undefined
      }`}
    >
      <h2>{props.title}</h2>
      <p>{props.leadParagraph}</p>
    </div>
  );
};

export default NewsItem;
