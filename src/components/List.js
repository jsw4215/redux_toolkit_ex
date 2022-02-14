import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";

const List = () => {
  const data = useSelector((state) => state.words.words);
  const words = data.map((word) => <Card word={word} key={word.id} />);
  return (
    <>
      <h2>List</h2>
      <Link to="/addword">Add</Link>
      {words}
    </>
  );
};

export default List;
