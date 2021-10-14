import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    // need to fix any
    switch (action.type) {
        case 'SORT': {
            // need to fix
            if (action.payload === 'up') {
                return [...state].sort((a, b) => {
                    let nameOne = a.name.toLocaleLowerCase();
                    let nameTwo = b.name.toLocaleLowerCase();
                    if (nameOne < nameTwo) return -1;
                    else if (nameOne > nameTwo) return 1;
                    return 0
                })
            } else if (action.payload === 'down') {
                let newArr = [...state]
                newArr.sort((a, b) => {
                    let nameOne = a.name.toLocaleLowerCase();
                    let nameTwo = b.name.toLocaleLowerCase();
                    if (nameOne > nameTwo) return -1;
                    else if (nameOne < nameTwo) return 1;
                    return 0;
                });
                return newArr;
            } else return [...state]
        }
        case 'CHECK': {
            // need to fix
            return [...state].filter(t => t.age > action.payload);
        }
        default:
            return state
    }
}

type ActionsType = sortActionType | checkActionType

type sortActionType = ReturnType<typeof sortAC>;
type checkActionType = ReturnType<typeof checkAC>;

export const sortAC = (payload: 'up' | 'down') => {
    return {
        type: 'SORT', payload
    }
}

export const checkAC = (payload: number) => {
    return {
        type: 'CHECK', payload
    }
}