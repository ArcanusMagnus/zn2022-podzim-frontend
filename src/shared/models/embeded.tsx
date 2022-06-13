export type EmbededModel = {
  id: string;
  src: string;
  loading: "lazy" | "eager" | "auto";
  width: string;
  height: string;
  frameBorder: string;
  scrolling: "yes" | "no";
  title: string;
};
