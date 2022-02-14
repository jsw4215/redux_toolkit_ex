import { useDispatch } from "react-redux";
import { deleteWordFB } from "../redux/modules/words";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteWord = (id) => {
    dispatch(deleteWordFB(id));
  };
  return (
    <>
      <h3>Card</h3>
      <h4>{props.word.word}</h4>
      <h4>{props.word.meaning}</h4>
      <h4 style={{color: 'blue'}}>{props.word.example}</h4>
      <button
        onClick={() => {
          navigate("./updateWord", { state: props.word });
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          deleteWord(props.word.id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Card;
