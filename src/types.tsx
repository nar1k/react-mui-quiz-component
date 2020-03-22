export type QuestionData = {
  id: string,
  type: string,
  title?: string,
  question?: string,
  image?: string,
  audio?: string,
  answers: AnswerData[],
  correctAnswers: string[]
}

export type AnswerData = {
  id: string,
  image?: string,
  title?: string
}
