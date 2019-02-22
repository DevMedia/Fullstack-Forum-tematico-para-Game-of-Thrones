const key = 'NOME_CHAVE_TOKEN';

export const retrieveToken = () => {
    return localStorage.getItem(key);
};

export const storeToken = token => {
    localStorage.setItem(key, token);
};

export const removeToken = () => {
    localStorage.removeItem(key);
};
