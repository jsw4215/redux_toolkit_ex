import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadWordsFB } from "./redux/modules/words";
import AddWord from "./components/AddWord";
import List from "./components/List";
import UpdateWord from "./components/UpdateWord";
import styled from "styled-components";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #eee;
  }
`;

const StyledApp = styled.div`
  padding: 50px;
`;

const Header = styled.h1`
  margin-left: 30%;
  font-size: 45px;
  font-weight: bold;
  color: #999;
  margin-top: 20px;
  margin-bottom: 80px;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordsFB());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header>My Dictionary</Header>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/addword" element={<AddWord />} />
          <Route path="/updateword" element={<UpdateWord />} />
        </Routes>
      </StyledApp>
    </>
  );
}

export default App;
