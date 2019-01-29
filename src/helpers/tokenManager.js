import Cookies from 'js-cookie';

export const retrieveToken = () => {

}

export const storeToken = token => {
    Cookies.set('NOME_CHAVE_TOKEN', token)
}