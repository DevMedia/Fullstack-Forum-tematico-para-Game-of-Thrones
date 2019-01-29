const baseUrl = 'http://localhost:3030/';

export const provideLoginUrl = () => {
    return baseUrl + 'api/auth/login';
}

export const provideFetchPostsUrl  = () => {
    return baseUrl + 'api/post';
}

export const provideSignUpUrl = () => {
    return baseUrl + 'api/user';
}