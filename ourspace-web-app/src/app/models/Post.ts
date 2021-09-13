import { User } from "./User";

export interface Post {
    postId: number,
    postSubmitted: Date,
    postDescription: string,
    postImage: string,
    postYoutubeUrl: string,
    user: User;
}