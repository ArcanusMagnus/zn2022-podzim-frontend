import { EmbededModel } from "../../models/embeded";

const Embeded = (props: {data: EmbededModel}) => {
    return (
      <iframe
        id={props.data.id}
        src={props.data.src}
        loading={props.data.loading || undefined}
        width={props.data.width}
        height={props.data.height}
        frameBorder={props.data.frameBorder ?? "0"}
        scrolling={props.data.scrolling ?? "no"}
        title={props.data.title}
      ></iframe>
    );
  };
  
  export default Embeded;