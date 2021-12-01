// POSTS
export {GET_POSTS} from './posts/query';
export type {Post} from './posts/interface';
export {useGetPosts} from './posts/useGetPosts';

// POST
export type {PostDetail} from './post/interface';
export {useGetPost} from './post/useGetPost';
export {GET_SINGLE_POST} from './post/query';

// USER
export type {User} from './user/interface';
export {useRegisterUser} from './user/useRegisterUser';
export {REGISTER_USER, LOGIN_USER} from './user/query';

// Author
export {useGetAuthors} from './author/useGetAuthors';
export {GET_AUTHORS} from './author/query';
export type {Author} from './author/interface';
// Articles
export {GET_ARTICLES} from './article/query';
export {useGetArticles} from './article/useGetArticles';
export type {Articles, Article} from './article/interface';
