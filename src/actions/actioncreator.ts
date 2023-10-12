import { ArchiveItem, Archive } from '../pages/types/portfolioTypes/portfolioTypes';
import { Actions } from '../lib/reducer'

// サーバからデータを取得する関数
export async function getAllArchives(dispatch: React.Dispatch<Actions>) {
    // リクエスト開始のアクションを発行
    dispatch({ type: 'GET_ARCHIVES_REQUEST' });

    try {
        const res = await fetch('/api/portfolio/getAllArchives', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({}),
        });

        if (!res.ok) {
            throw new Error('Server error');
        }

        const result = await res.json();

        // 成功のアクションを発行
        dispatch({ type: 'GET_ARCHIVES_SUCCESS', payload: result.result });

    } catch (error) {
        // 失敗のアクションを発行
        const err = error as Error;
        // 失敗のアクションを発行
        dispatch({ type: 'GET_ARCHIVES_FAILURE' });
    }
};
