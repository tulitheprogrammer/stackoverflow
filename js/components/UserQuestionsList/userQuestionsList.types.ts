export interface Question {
  question_id: number;
  title: string;
  tags: string[];
  answer_count: number;
}
export type QuestionsList = Question[];
