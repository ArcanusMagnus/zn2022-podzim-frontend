import { NewsItemModel } from "./news-item";

export type NewsListModel = {
  className?: string;
  id?: string;
  content: NewsItemModel[];
};
