import { useParams } from "react-router-dom";

const Single = () => {
  const { meal } = useParams();
  return <div>{meal}e</div>;
};

export default Single;
