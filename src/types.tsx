export type QuestionData = {
  id: string,
  type: string,
  title?: string,
  text?: string,
  image?: string,
  audio?: string,
  answers: AnswerData[]
}

export type AnswerData = {
  id: string,
  image?: string,
  text?: string,
  correct: boolean
}
