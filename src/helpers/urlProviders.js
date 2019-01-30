const baseUrl = 'http://localhost:3030/';

export const provideLoginUrl = () => {
    return baseUrl + 'api/auth/login';
}

export const provideFetchAllPostsUrl  = () => {
    return baseUrl + 'api/post';
}

export const provideSignUpUrl = () => {
    return baseUrl + 'api/user';
}

export const provideFetchPostsByAuthorUrl = authorId => {
    return baseUrl + `api/post?authorId=${authorId}`;
}