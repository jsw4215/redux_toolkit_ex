import { useDispatch } from "react-redux";
import { deleteWordFB } from "../redux/modules/words";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiDeleteBin7Line, RiEditBoxLine } from "react-icons/ri";

const StyledCard = styled.div`
  border-radius: 3px;
  box-shadow: 10px 10px 10px #ccc;
  padding: 50px;
  width: 50%;
  height: 200px;
  margin: 0 auto 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .updateBtn,
  .deleteBtn {
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 30px;
    cursor: pointer;
    color: #aaa;
    &:hover {
      color: #ccc;
    }
    &:active {
      color: #999;
    }
  }
  .deleteBtn {
    right: 30px;
  }
`;

const Word = styled.h4`
  font-size: 35px;
  color: #888;
`;

const Discription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
`;

const Meaning = styled.h4`
  color: #999;
`

const Example = styled.h4`
  color: #77a7e3;
`


const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteWord = (id) => {
    dispatch(deleteWordFB(id));
  };
  return (
    <StyledCard>
      <Word>{props.word.word}</Word>
      <Discription>
        <Meaning>{props.word.meaning}</Meaning>
        <Example>{props.word.example}</Example>
      </Discription>

      <RiEditBoxLine
        onClick={() => {
          navigate("./updateWord", { state: props.word });
        }}
        className="updateBtn"
      >
        Update
      </RiEditBoxLine>
      <RiDeleteBin7Line
        onClick={() => {
          deleteWord(props.word.id);
        }}
        className="deleteBtn"
      >
        Delete
      </RiDeleteBin7Line>
    </StyledCard>
  );
};

export default Card;
