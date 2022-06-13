import NewsList from "../../shared/components/Newsfeed/NewsList";
import { NewsItemModel } from "../../shared/models/news-item";

import styles from "./Landing.module.css";

const DUMMY_NEWS: NewsItemModel[] = [
  {
    id: "test1",
    title: "Testujeme novinky",
    leadParagraph: "Ten TypeScript umí být docela pain in the ass",
    text: "Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Proin eget tortor risus.",
    imageUrl:
      "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    date: new Date("2022-06-13"),
    importance: 2,
    color: "black",
    author: "Jan Majerníček",
  },
  {
    id: "test2",
    title: "Testujeme novinky 2",
    leadParagraph: "Testujeme, tak ať toho máme víc",
    text: "Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Proin eget tortor risus.",
    imageUrl: "https://media.moddb.com/images/members/5/4550/4549205/dog.jpg",
    date: new Date("2022-06-11"),
    importance: 3,
    color: "#fae047",
    author: "Jan Majerníček",
  },
  {
    id: "test2",
    title: "Testujeme novinky 2",
    leadParagraph: "Testujeme, tak ať toho máme víc",
    text: "Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Proin eget tortor risus.",
    imageUrl: "https://media.moddb.com/images/members/5/4550/4549205/dog.jpg",
    date: new Date("2022-06-11"),
    importance: 3,
    color: "#fae047",
    author: "Jan Majerníček",
  },
];

const Landing = () => {
  return <NewsList id="home_news" content={DUMMY_NEWS} />;
};

export default Landing;
