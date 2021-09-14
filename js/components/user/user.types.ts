export interface RawUserInfo {
  user_id: string;
  display_name: string;
  profile_image: string;
  reputation: number;
  accept_rate?: number;
}

export interface UserInfo {
  userId: string;
  name: string;
  avatar: string;
  reputation: number;
  acceptRate?: number;
}

export interface Question {
  question_id: number;
  title: string;
  tags: string[];
  answer_count: number;
}
export type QuestionsList = Question[];

export interface BaseUserProps {
  userId: string;
}
