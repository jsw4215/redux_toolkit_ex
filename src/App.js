import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadWordsFB } from "./redux/modules/words";
import AddWord from "./components/AddWord";
import List from "./components/List";
import UpdateWord from "./components/UpdateWord";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordsFB());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/addword" element={<AddWord />} />
        <Route path="/updateword" element={<UpdateWord />} />
      </Routes>
    </div>
  );
}

export default App;
