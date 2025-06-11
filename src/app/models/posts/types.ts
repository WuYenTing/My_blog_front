export interface PostDto {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  created_at?: Date;
}

export interface Post {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  createdAt?: Date;
}