import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state]
            if (action.payload === 'up') {
            return     newState.sort((a, b) => (a.name < b.name) ? -1 : 1)
            } else if (action.payload === 'down') {
                return    newState.sort((a, b) => (a.name > b.name) ? -1 : 1)
            }
          return newState   // need to fix
        }
        case 'check': {
            const newState = state.filter(u=> u.age >= action.payload)
            return newState// need to fix
        }
        default:
            return state
    }
}
