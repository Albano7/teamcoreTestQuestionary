const initialState: any = {
  answerData: {},
  fetchAnswer: 'NO_FETCH',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "POST_ANSWER_QUESTIONARY_RESET":
      return {
        answerData: {},
        fetchAnswer: 'NO_FETCH'
      };
    case "POST_ANSWER_QUESTIONARY_STARTED":
      return {
        ...state,
        fetchAnswer: 'FETCHING'
      };
    case "POST_ANSWER_QUESTIONARY_SUCCESS":
      return {
        ...state,
        answerData: action.payload.data,
        fetchAnswer: 'FETCHED'
      };
    case "POST_ANSWER_QUESTIONARY_ERROR":
      return {
        ...state,
        error: action.payload.error,
        fetchAnswer: 'FECHING_ERROR'
      };
    default:
      return state;
  }
};
