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
    /* background-color: red; */
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const StyledApp = styled.div`
  padding: 50px;
`;

const Header = styled.h1`
  padding: 50px 450px 20px;
  font-size: 40px;
  font-weight: bold;
  color: #777;
  margin-bottom: 50px;
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
