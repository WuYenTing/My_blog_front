import { Post, PostDto } from "./types";

export const toModel = (postDto: PostDto): Post => ({
  ...postDto,
  createdAt: new Date(postDto.created_at),
});