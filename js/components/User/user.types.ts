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

export interface BaseUserProps {
  userId: string;
}
