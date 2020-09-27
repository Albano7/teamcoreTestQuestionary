
export const postAnswerQuestionaryStart = () => {
  return {
    type: "POST_ANSWER_QUESTIONARY_STARTED"
  };
};

export const postAnswerQuestionarySuc = ( data: any ) => {
  return {
    type: "POST_ANSWER_QUESTIONARY_SUCCESS",
    payload: { data },
  };
};

export const postAnswerQuestionaryError = (error?: any) => {
  console.log('ERROR llegando aca:', error);
  return {
    type: "POST_ANSWER_QUESTIONARY_ERROR",
    payload: {
      error
    }
  };
};

export const postAnswerQuestionaryReset = () => {
  return {
    type: "POST_ANSWER_QUESTIONARY_RESET",
  };
};


