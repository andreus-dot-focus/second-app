export const initialState = {
    user: {
        name:'Кузя',
        surname:'Брасом',
        age:28,
    },
}

export function rootReducer(state=initialState) {
    return state
}