import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import listMovieReducer from './modules/ListMovieReducer/reducer'
import { detailMovieReducer } from './modules/DetailMovieReducer/reducer'
import { listCinemaReducer } from './modules/ListCinemaReducer/reducer'
import { loginReducer } from './modules/LoginReducer/reducer'
import { registerReducer } from './modules/RegisterReducer/reducer'
import {showTimeWithCinemaGroupReducer} from './modules/ShowtimesWithCinemaGroup/reducer'
import {boxOfficeReducer} from './modules/BoxOfficeReducer/reducer'
import {profileReducer} from './modules/ProfileReducer/reducer'
import {userEditReducer} from './modules/EditProfileReducer/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    listCinemaReducer,
    loginReducer,
    registerReducer,
    showTimeWithCinemaGroupReducer,
    boxOfficeReducer,
    profileReducer,
    userEditReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

