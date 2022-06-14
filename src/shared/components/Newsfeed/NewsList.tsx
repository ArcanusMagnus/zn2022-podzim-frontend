import Section from "../UI/Section";
import NewsItem from "./NewsItem";
import { NewsListModel } from "../../models/news-list";
import styles from "./NewsList.module.css";

const NewsList = (props: NewsListModel) => {
  return (
    <Section
      className={styles["news-list"] + " " + props.className}
      id={props.id}
    >
      <>
        {props.content.map((item) => {
          return (
            <NewsItem
              key={item.id}
              id={item.id}
              title={item.title}
              leadParagraph={item.leadParagraph}
              color={item.color}
              date={item.date}
              importance={item.importance}
              text={item.text}
              imageUrl={item.imageUrl}
              author={item.author}
              clickable={item.clickable}
            />
          );
        })}
      </>
    </Section>
  );
};

export default NewsList;
