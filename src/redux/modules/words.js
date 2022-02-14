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

const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";

const initialState = {
  words: [],
};

export const loadWords = (words) => {
  return { type: LOAD, words };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

export const updateWord = (word) => {
  return { type: UPDATE, word};
};

export const deleteWord = (wordId) => {
  return { type: DELETE, wordId };
};

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

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD":
      return { words: action.words };

    case "word/CREATE":
      return { words: [...state.words, action.word] };

    case "word/UPDATE":
      return {
        words: state.words.map((word) =>
          word.id === action.word.id ? action.word : word
        ),
      };

    case "word/DELETE":
      return { words: state.words.filter((word) => word.id !== action.wordId) };

    default:
      return state;
  }
}
