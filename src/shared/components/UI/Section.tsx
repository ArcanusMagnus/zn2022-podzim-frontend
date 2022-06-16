import styles from "./Section.module.css";

const Section = (props: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  const classes = styles.section + " " + props.className;

  return (
    <section className={classes} id={props.id}>
      {props.children}
    </section>
  );
};

export default Section;
