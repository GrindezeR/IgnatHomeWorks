export type InitialStateType = typeof initState;

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.status}
        }
        default:
            return state
    }
}

type ActionsType = loadingActionType

type loadingActionType = {
    type: 'SET-LOADING'
    status: boolean
}

export const loadingAC = (status: boolean): loadingActionType => {
    return {
        type: 'SET-LOADING', status
    } as const
} // fix any