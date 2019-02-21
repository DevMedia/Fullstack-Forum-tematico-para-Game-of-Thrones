import * as types from './types';

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case types.EXCEPTION_AUTH_LOGIN_UNAUTHORIZED:
        return 'Usuário ou senha incorretos.';

    case types.EXCEPTION_UNAUTHORIZED:
        return 'Acesso não autorizado';

    case types.EXCEPTION_INTERNAL_SERVER_ERROR:
        return 'Erro interno de servidor.';

    case types.EXCEPTION_NOT_FOUND:
        return 'Recurso não encontrado';

    case types.EXCEPTION_BAD_REQUEST:
        return 'Dados de requisição inválidos.';

    case types.EXCEPTION_FAIL_TO_FETCH:
        return 'Não foi possível se conectar ao servidor';

    case types.EXCEPTION_INVALID_NAME:
        return 'Campo nome não pode estar vazio';

    case types.EXCEPTION_INVALID_EMAIL:
        return 'Formato de E-mail invalido';

    case types.EXCEPTION_INVALID_PASSWORD:
        return 'Senha precisa ter pelo menos 4 dígitos sem espaços';

    case types.EXCEPTION_CONFLICT:
        return 'Email já cadastrado';

    default:
        return initialState;
    }
};
