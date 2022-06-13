import { NewsItemModel } from "../../models/news-item";
import styles from "./NewsItem.module.css";

const NewsItem = (props: NewsItemModel) => {
  return <div className={`${styles["news-item"]} ${props.className}`}>
    <h2>{props.title}</h2>
    <h3>{props.leadParagraph}</h3>
  </div>;
};

export default NewsItem;
