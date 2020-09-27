const initialState: any = {
  questionaryData: {},
  fetchQuestionary: 'NO_FETCH',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_QUESTIONARY_STARTED":
      return {
        ...state,
        fetchQuestionary: 'FETCHING'
      };
    case "GET_QUESTIONARY_SUCCESS":
      return {
        ...state,
        questionaryData: action.payload.data,
        fetchQuestionary: 'FETCHED'
      };
    case "GET_QUESTIONARY_ERROR":
      return {
        ...state,
        error: action.payload.error,
        fetchQuestionary: 'FECHING_ERROR'
      };
    default:
      return state;
  }
};
