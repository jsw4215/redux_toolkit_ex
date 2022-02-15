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
import { createAction, createReducer } from "@reduxjs/toolkit";

const loadWords = createAction("LOAD");
const createWord = createAction("CREATE");
const updateWord = createAction("UPDATE");
const deleteWord = createAction("DELETE");

export const loadWordsFB = () => {
  return async (dispatch) => {
    const dbData = await getDocs(collection(db, "words"));
    const newWords = [];
    dbData.forEach((word) => {
      newWords.push({ id: word.id, ...word.data() });
    });
    newWords.sort((a, b) => a.timeStamp > b.timeStamp);
    dispatch(loadWords(newWords));
  };
};

export const createWordFB = (word) => {
  return async (dispatch) => {
    const dbRef = await addDoc(collection(db, "words"), word);
    const _newWord = await getDoc(dbRef);
    const newWord = { id: _newWord.id, ..._newWord.data() };
    dispatch(createWord(newWord));
  };
};

export const updateWordFB = (word) => {
  return async (dispatch) => {
    const dbRef = await doc(db, "words", word.id);
    await updateDoc(dbRef, word);
    dispatch(updateWord(word));
  };
};

export const deleteWordFB = (id) => {
  return async (dispatch) => {
    const dbRef = await doc(db, "words", id);
    await deleteDoc(dbRef);
    dispatch(deleteWord(id));
  };
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case loadWords.type:
      return action.payload;

    case createWord.type:
      return [...state, action.payload];

    case updateWord.type:
      return state.map((word) =>
        word.id === action.payload.id ? action.payload : word
      );

    case deleteWord.type:
      return state.filter((word) => word.id !== action.payload);

    default:
      return state;
  }
}
