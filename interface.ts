
export interface QuestionOptionInterface {
  id: number, 
  option_text: string
}

export interface QuestionsInterface { 
  id: number, 
  question_text: string,
  question_options: Array<QuestionOptionInterface>
}

export interface QuestionaryInterface {
  createdAt: number,
  id: string,
  questions: Array<QuestionsInterface>
}

export interface AnswersInterface {
  id: string,
  answers: Array<{id: string, option: {id: string}}>
}