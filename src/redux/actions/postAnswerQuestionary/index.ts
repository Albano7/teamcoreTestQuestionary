import { AnswersInterface } from "../../../../interface";
import { requestApi } from "../../../api/requestApi";
import { postAnswerQuestionaryStart,
   postAnswerQuestionarySuc,
   postAnswerQuestionaryError, postAnswerQuestionaryReset 
} from "./types";

export const postAnswerQuestionary = (data: AnswersInterface) => {
  return (dispatch: any, getState: any) => {
    dispatch(postAnswerQuestionaryStart());
    requestApi('POST', data)
      .then(data => {
        data.status>199 && data.status<300?
          dispatch(postAnswerQuestionarySuc(data))
          :
          postAnswerQuestionaryError(data)
      })
      .catch( (error: any) => {
        postAnswerQuestionaryError(error)
      });
  };
};

export default postAnswerQuestionary;
