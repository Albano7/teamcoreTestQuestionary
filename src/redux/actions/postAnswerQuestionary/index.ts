import { AnswersInterface } from "../../../../interface";
import { requestApi } from "../../../api/requestApi";
import { postAnswerQuestionaryStart,
   postAnswerQuestionarySuc,
   postAnswerQuestionaryError, postAnswerQuestionaryReset 
} from "./types";

const tokenAuthorization = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZWFtY29yZS5uZXQiLCJzdWIiOiJpbnRlcnZpZXciLCJhdWQiOiJ0ZWFtY29yZS5uZXQvdGMtaW50ZXJ2aWV3Ly5nZXRfaW50ZXJ2aWV3IiwiZXhwIjoxNjAxNjY1OTgxLCJpYXQiOjE2MDEwNjExODEsImp0aSI6IjFfMTYwMTA2MTE4MV90ZWFtY29yZS5uZXQiLCJlbWFpbCI6ImludGVydmlld0B0ZWFtY29yZS5uZXQifQ.Fwo2uAqyvT5eAs2fM3y7tGGjqrDMWFe6D-k-3f0C2jSDcKX1n42NlyMqFvI1zx-xcjHWkS0BMJypwezhTzHuJA'

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
