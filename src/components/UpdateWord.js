import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateWordFB } from "../redux/modules/words";

const UpdateWord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationState = useLocation().state;
  const word = useRef();
  const meaning = useRef();
  const example = useRef();
  const updateWord = () => {
    const updatedWord = {
      id: locationState.id,
      word: word.current.value,
      meaning: meaning.current.value,
      example: example.current.value,
      timeStamp: locationState.timeStamp,
    };
    dispatch(updateWordFB(updatedWord, locationState.id));
    navigate("/");
  };
  return (
    <>
      <h2>UpdateWord</h2>
      <input type="text" defaultValue={locationState.word} ref={word} />
      <input type="text" defaultValue={locationState.meaning} ref={meaning} />
      <input type="text" defaultValue={locationState.example} ref={example} />
      <button onClick={updateWord}>Update</button>
    </>
  );
};

export default UpdateWord;
