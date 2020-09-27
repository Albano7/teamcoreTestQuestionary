import { combineReducers } from "redux";
import questionaryReducer from "./questionaryReducer";
import answerReducer from "./answerQuestionaryReducer";
export default combineReducers({
  questionary: questionaryReducer,
  answer: answerReducer,
});
