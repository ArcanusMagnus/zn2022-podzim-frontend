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
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c58ed0d9-7247-438e-ba9a-a66b4b02393b/db6p5a2-6bf1ce33-35f0-443b-adaf-35b041c8f77e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1OGVkMGQ5LTcyNDctNDM4ZS1iYTlhLWE2NmI0YjAyMzkzYlwvZGI2cDVhMi02YmYxY2UzMy0zNWYwLTQ0M2ItYWRhZi0zNWIwNDFjOGY3N2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FHJsxN07P32wIgXZ0wab3TSS_L1JfKk4fnX6TyNEnaI",
    date: new Date("2022-06-13"),
    importance: 4,
    color: "black",
    author: "Jan Majerníček",
    clickable: true,
  },
  {
    id: "test2",
    title: "Testujeme novinky 2",
    leadParagraph: "Testujeme, tak ať toho máme víc",
    text: "Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Proin eget tortor risus.",
    imageUrl: "https://media.moddb.com/images/members/5/4550/4549205/dog.jpg",
    date: new Date("2022-06-11"),
    importance: 2,
    color: "#fae047",
    author: "Jan Majerníček",
  },
  {
    id: "test3",
    title: "Testujeme novinky 3",
    leadParagraph: "Test 3",
    text: "Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Proin eget tortor risus.",
    imageUrl:
      "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    date: new Date("2022-06-11"),
    importance: 3,
    color: "#fae047",
    author: "Jan Majerníček",
    clickable: true,
  },
];

const Landing = () => {
  return (
    <NewsList id="home_news" content={DUMMY_NEWS} className={styles.landing} />
  );
};

export default Landing;
