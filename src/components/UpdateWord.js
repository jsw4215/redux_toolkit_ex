import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { updateWordFB } from "../redux/modules/words";

const Wrapper = styled.div`
  margin-top: 500px;
  width: 40%;
  margin: 0 auto;
  height: 800px;
`;

const InputWrap = styled.div`
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
`;

const Label = styled.label`
  color: #888;
`;

const Input = styled.input`
  margin: 20px auto;
  display: block;
  width: 100%;
  height: 50px;
  border: 2px solid #888;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  color: #333;
  text-align: center;
  transition: .2s;
  &:focus {
    border: 2px solid #333;
  }
`;

const Button = styled.button`
  margin: 50px auto 0;
  display: block;
  margin: 0 auto;
  border: none;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  margin-bottom: 40px;
  background-color: #888;
  transition: .2s;
  cursor: pointer;
  &:hover {
    background-color: #aaa;
    color: #888;
  }
  &:active {
    background-color: #777;
    color: #fff;
  }
`;

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
    <Wrapper>
      <InputWrap>
        <Label>Word</Label>
        <Input type="text" defaultValue={locationState.word} ref={word} />
      </InputWrap>
      <InputWrap>
        <Label>Meaning</Label>
        <Input type="text" defaultValue={locationState.meaning} ref={meaning} />
      </InputWrap>
      <InputWrap>
        <Label>Example</Label>
        <Input type="text" defaultValue={locationState.example} ref={example} />
      </InputWrap>
      <Button onClick={updateWord}>Update</Button>
    </Wrapper>
  );
};

export default UpdateWord;
