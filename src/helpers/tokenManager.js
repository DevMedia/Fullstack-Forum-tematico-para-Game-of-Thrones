import Cookies from 'js-cookie';

export const retrieveToken = () => {
    return Cookies.get('NOME_CHAVE_TOKEN');
};

export const storeToken = token => {
    Cookies.set('NOME_CHAVE_TOKEN', token);
};
