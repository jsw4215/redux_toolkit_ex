import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWordFB } from "../redux/modules/words";

const AddWord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const word = useRef();
  const meaning = useRef();
  const example = useRef();
  const registNewWord = () => {
    const newWord = {
      word: word.current.value,
      meaning: meaning.current.value,
      example: example.current.value,
      timeStamp: Date.now(),
    };
    dispatch(createWordFB(newWord));
    navigate("/");
  };
  return (
    <>
      <h2>AddWord</h2>
      <input type="text" ref={word} />
      <input type="text" ref={meaning} />
      <input type="text" ref={example} />
      <button onClick={registNewWord}>Regist</button>
    </>
  );
};

export default AddWord;
