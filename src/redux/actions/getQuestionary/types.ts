
export const getQuestionaryStart = () => {
  return {
    type: "GET_QUESTIONARY_STARTED"
  };
};

export const getQuestionarySuc = ( data: any ) => {
  return {
    type: "GET_QUESTIONARY_SUCCESS",
    payload: { ...data },
  };
};

export const getQuestionaryError = (error: any) => {
  return {
    type: "GET_QUESTIONARY_ERROR",
    payload: {
      error
    }
  };
};
