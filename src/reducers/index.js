import { combineReducers } from "redux";
import secret from "./secretReducer";
import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";

export default combineReducers({ secret, success, guessedWords });
