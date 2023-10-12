import { ArchiveItem, Archive, Global } from '../pages/types/portfolioTypes/portfolioTypes'

export type Actions =
    | { type: 'GET_ARCHIVES_REQUEST' }
    | { type: 'GET_ARCHIVES_SUCCESS', payload: any }
    | { type: 'GET_ARCHIVES_FAILURE' };


export function portfolioReducer(state: Global, action: Actions): Global {
    switch (action.type) {
        case 'GET_ARCHIVES_REQUEST':
            return {
                ...state,
                message: '処理開始',
                isLoading: true
            }
        case 'GET_ARCHIVES_SUCCESS':
            return {
                ...state,
                message: 'データ取得に成功',
                archives: action.payload,
                isLoading: false
            }
        case 'GET_ARCHIVES_FAILURE':
            return {
                ...state,
                message: 'データ取得に失敗',
                isLoading: false
            }
        default:
            return state;
    }
}
