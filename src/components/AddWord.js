import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWordFB } from "../redux/modules/words";
import styled from "styled-components";

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
  display: block;
  margin: 50px auto 0;
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
    color: #777;
  }
  &:active {
    background-color: #777;
    color: #fff;
  }
`;

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
    <Wrapper>
      <InputWrap>
        <Label>Word</Label>
        <Input type="text" ref={word} />
      </InputWrap>
      <InputWrap>
        <Label>Mean</Label>
        <Input type="text" ref={meaning} />
      </InputWrap>
      <InputWrap>
        <Label>Example</Label>
        <Input type="text" ref={example} />
      </InputWrap>
      <Button onClick={registNewWord}>Regist</Button>
    </Wrapper>
  );
};

export default AddWord;
