import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../../helpers';

export const userActions = {
    login,
    logout,
    remember
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    console.log('actions login then user')
                    history.push('/');
                },
                error => {
                    console.log('action login then error')
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

}

function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

function remember(user) {
    return dispatch => {
        dispatch(success(user));
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
