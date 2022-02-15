import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { createSlice } from "@reduxjs/toolkit";

export const loadWordsFB = () => {
  return async (dispatch) => {
    const dbData = await getDocs(collection(db, "words"));
    const newWords = [];
    dbData.forEach((word) => {
      newWords.push({ id: word.id, ...word.data() });
    });
    newWords.sort((a, b) => a.timeStamp > b.timeStamp);
    dispatch(words.actions.load(newWords));
  };
};

export const createWordFB = (word) => {
  return async (dispatch) => {
    const dbRef = await addDoc(collection(db, "words"), word);
    const _newWord = await getDoc(dbRef);
    const newWord = { id: _newWord.id, ..._newWord.data() };
    dispatch(words.actions.create(newWord));
  };
};

export const updateWordFB = (word) => {
  return async (dispatch) => {
    const dbRef = await doc(db, "words", word.id);
    await updateDoc(dbRef, word);
    dispatch(words.actions.update(word));
  };
};

export const deleteWordFB = (id) => {
  return async (dispatch) => {
    const dbRef = await doc(db, "words", id);
    await deleteDoc(dbRef);
    dispatch(words.actions.delete(id));
  };
};

const words = createSlice({
  name: "wordsReducer",
  initialState: [],
  reducers: {
    load: (state, action) => action.payload,
    create: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) =>
      state.map((word) =>
        word.id === action.payload.id ? action.payload : word
      ),
    delete: (state, action) =>
      state.filter((word) => word.id !== action.payload),
  },
});

export default words.reducer;