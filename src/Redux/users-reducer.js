const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = {

    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:true
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case TOGGLE_IS_FETCHING:
            return {...state,isFetching: action.isFetching};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.usersCount};
        default:
            return state;
    }
};


export const follow = (userId) => {
    return ({type: FOLLOW, userId});
};
export const unfollow = (userId) => {
    return ({type: UN_FOLLOW, userId})
};
export const setUsers = (users) => {
    return ({type: SET_USERS, users})
};
export const setCurrentPage = (pageNumber) => {
    return ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
};
export const setTotalUsersCount = (usersCount) => {
    return ({type: SET_TOTAL_USER_COUNT, usersCount: usersCount})
};
export const toggleIsFetching = (isFetching) => {
    return ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
};

export default usersReducer;

