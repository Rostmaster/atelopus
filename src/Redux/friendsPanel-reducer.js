const ADD_FRIEND = 'ADD-FRIEND'



let initialState = {

    CONTACTS: [
        {
            id: 1,
            name: 'Katya',
            img: 'https://minutes.co/wp-content/uploads/2019/05/develop-female-leaders-400x240.jpg'
        },
        {
            id: 2,
            name: 'Mark',
            img: 'https://t4.ftcdn.net/jpg/00/92/27/33/240_F_92273389_lehMvuG44AAR2N027aZrDhL006TGHX2s.jpg'
        },
        {id: 3, name: 'Victor', img: 'https://cdn.bulbagarden.net/upload/d/d9/VSCollector.png'},
        {
            id: 4,
            name: 'Pasha',
            img: 'https://www.goombastomp.com/wp-content/uploads/2018/11/Nintendo-Creators-Program-400x240.jpg'
        },
        {
            id: 5,
            name: 'Sasha',
            img: 'https://1.bp.blogspot.com/-11Ix-WXVOOY/Vr6OosMWTsI/AAAAAAAAWnc/ZP1HrTbkqsg/s400/Screen%2BShot%2B2016-02-12%2Bat%2B8.00.36%2BPM.png'
        },
        {
            id: 6,
            name: 'Rustam',
            img: 'https://www.valigiablu.it/wp-content/uploads/2015/06/cookies11-e1433316325697.jpg'
        },
        {id: 7, name: 'Igor', img: 'https://cdn.bulbagarden.net/upload/2/27/VSScientist_M.png'}
    ],      //Contact's id, Name and img
};

const friendsPanelReducer=(state=initialState,action)=>{
    let stateCopy;
    switch (action.type) {
        case ADD_FRIEND:
            stateCopy = {...state};
            return stateCopy;
        default:
            return state;
    }
};

export const addFriendActionCreator=()=>{
    return({type:ADD_FRIEND})
};

export default friendsPanelReducer;

