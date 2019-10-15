import Users from "../components/Usres/Users";

const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {

    USERS: [
        {
            id: 1,
            followed: true,
            status: 'im a queen',
            name: 'Katya',
            img: 'https://minutes.co/wp-content/uploads/2019/05/develop-female-leaders-400x240.jpg'
        },
        {
            id: 2,
            followed: true,
            status: '',
            name: 'Mark',
            img: 'https://t4.ftcdn.net/jpg/00/92/27/33/240_F_92273389_lehMvuG44AAR2N027aZrDhL006TGHX2s.jpg'
        },
        {id: 3, name: 'Victor', img: 'https://cdn.bulbagarden.net/upload/d/d9/VSCollector.png'},
        {
            id: 4,
            followed: true,
            status: '',
            name: 'Pasha',
            img: 'https://www.goombastomp.com/wp-content/uploads/2018/11/Nintendo-Creators-Program-400x240.jpg'
        },
        {
            id: 5,
            followed: true,
            status: '',
            name: 'Sasha',
            img: 'https://1.bp.blogspot.com/-11Ix-WXVOOY/Vr6OosMWTsI/AAAAAAAAWnc/ZP1HrTbkqsg/s400/Screen%2BShot%2B2016-02-12%2Bat%2B8.00.36%2BPM.png'
        },
        {
            id: 6,
            followed: true,
            status: '',
            name: 'Rustam',
            img: 'https://www.valigiablu.it/wp-content/uploads/2015/06/cookies11-e1433316325697.jpg'
        },
        {id: 7, name: 'Igor', img: 'https://cdn.bulbagarden.net/upload/2/27/VSScientist_M.png'}
    ],      //Contact's id, Name and img
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                USERS:state.map(u=>{
                    if ( u.id === action.userId){
                        return {...u,followed:true};
                    }
                    return u;
                })
            };

        case UN_FOLLOW:
            return {
                ...state,
                USERS:state.map(u=>{
                    if ( u.id === action.userId){
                        return {...u,followed:false};
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {...state,USERS:[...state.USERS, ...action.USERS]};

//      case SHOW_MORE:

        default:
            return state;
    }
};

export const showMoreAC = () => {
    return ({type: SHOW_MORE})
};

export const followAC = (userId) => {
    return ({type: FOLLOW, userId});
};
export const unFollowAC = (userId) => {
    return ({type: UN_FOLLOW, userId})
};
export const setUsersAC = (users) => {
    return ({type: SET_USERS, users})
};

export default usersReducer;

