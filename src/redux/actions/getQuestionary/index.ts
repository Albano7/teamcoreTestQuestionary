import { requestApi } from "../../../api/requestApi";
import { postAnswerQuestionaryReset } from "../postAnswerQuestionary/types";
import { getQuestionaryStart,
   getQuestionarySuc,
   getQuestionaryError 
} from "./types";

export const getQuestionary = () => {
  return (dispatch: any, getState: any) => {
    dispatch(getQuestionaryStart());
    dispatch(postAnswerQuestionaryReset());
    requestApi('GET')
      .then(data => {
        dispatch(getQuestionarySuc(data));
      })
      .catch( (error: any) => {
        getQuestionaryError(error)
        console.log('ERROR:', error);
      });
      
  };
};

export default getQuestionary;
