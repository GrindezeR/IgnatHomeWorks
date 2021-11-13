export type InitialThemeStateType = string

const initState: InitialThemeStateType = 'default'

export const themeReducer = (state = initState, action: ActionsType): InitialThemeStateType => {
    // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return action.theme;
        }
        default:
            return state;
    }
};

type ActionsType = changeThemeCType
type changeThemeCType = {
    type: 'CHANGE-THEME',
    theme: string
}

export const changeThemeC = (theme: string): changeThemeCType => {
    return {
        type: 'CHANGE-THEME', theme
    }
};
// fix any