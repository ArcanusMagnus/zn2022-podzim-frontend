import { EmbededModel } from "./embeded";

export type NewsItemModel = {
  id: string;
  title: string;
  className?: string;
  leadParagraph?: string;
  text: JSX.Element | string;
  imageUrl?: string;
  date: Date;
  author?: string;
  color: string;
  importance: 1 | 2 | 3 | 4;
  socials?: JSX.Element[];
  embeded?: EmbededModel;
  children?: JSX.Element | string;
  clickable?: boolean;
};
