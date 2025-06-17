//Backend API format 
export interface PostDto {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  created_at?: Date;
}

//Frontend format
export interface Post {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  createdAt?: Date;
}