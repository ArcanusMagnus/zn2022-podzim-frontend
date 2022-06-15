type loadingType = "lazy" | "eager" | undefined;

export type EmbededModel = {
  id: string;
  src: string;
  loading?: loadingType;
  width: string;
  height: string;
  frameBorder?: string;
  scrolling?: "yes" | "no";
  title: string;
};
