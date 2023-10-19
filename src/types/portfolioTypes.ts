export type ArchiveItem = {
    id: number,
    link: string,  // リンク
    year: '2023' | '2022' | 'past',  //制作した年
    genre: 'code' | 'design' | 'presentation' | 'document',  // 制作物のジャンル
    recommend: boolean,  // おすすめの作品かどうか
    productionPeriod: string,  //　制作期間
    fieldOfCharge: string, // 担当分野
    image: string,  // サムネイル
    title: string,  //　作品名
    summary: string,  // 概要
    purpose: string,  // 目的
    explanation: string,  // 説明
    tech: string[],  // 使用技術
    app: string[],  // 使用ソフト
    beta?: string,
    ideaNote?: string,
    presentation?: string,
    document?: string,
    otherDesign?: string,
    video?: string
}

export type Archive = ArchiveItem[];

export type Global = {
    message: string;
    archives: Archive;
    isLoading: boolean;
};

export type ArchiveProps = {
    archives: Archive;
    filter: {
        archive: 'all' | 'recommend';
        condition: 'all' | 'code' | 'design' | 'presentation' | 'document';
    };
    onArchiveClick: (v: any) => void
}