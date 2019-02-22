const baseUrl = 'http://localhost:3030/';

export const provideLoginUrl = () => {
    return baseUrl + 'api/auth/login';
};

export const provideFetchAllPostsUrl = (page = 1) => {
    return baseUrl + `api/post?page=${page}`;
};

export const provideSignUpUrl = () => {
    return baseUrl + 'api/user';
};

export const provideFetchPostsByAuthorUrl = authorId => {
    return baseUrl + `api/post?authorId=${authorId}`;
};

export const provideFetchDetails = postId => {
    return baseUrl + `api/post/${postId}`;
};

export const provideFetchCommentsByPost = postId => {
    return baseUrl + `api/comment?postId=${postId}`;
};

export const provideLogoffUrl = () => {
    return baseUrl + 'api/auth/logout';
};

export const provideCreatePostUrl = () => {
    return baseUrl + 'api/post';
};

export const provideCreateCommentUrl = postId => {
    return baseUrl + `api/comment?postId=${postId}`;
};
