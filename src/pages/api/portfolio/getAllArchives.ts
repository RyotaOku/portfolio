import type { NextApiRequest, NextApiResponse } from 'next'
import { ArchiveItem, Archive } from '@/types/portfolioTypes'
const { Pool } = require('pg')

type Input = {
}

type Output = {
}

async function getAllArchives(client: any) {
    // const result = await client.query(``)
    const result: Archive = [{
        id: 1,
        link: 'https://google-calendar-sandy.vercel.app/',
        year: '2023',
        genre: 'code',
        recommend: false,
        productionPeriod: '2023.03~2023.04(1ヶ月半)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/google.png',
        title: 'Google Calendar',
        summary: 'ナイトモードにも対応し、実際に使えるクローン',
        purpose: 'Reactで作品を作る練習・実在するデザインを模写する練習。',
        explanation: 'Reactを学びたての頃、実際に使っているサービスを模写できると思い、Google Calendarを模写。見た目を徹底的に真似るのはもちろん、実際に予定を追加・変更・削除できるように実装。また、本家Google Calendarにはないナイトモードにも対応させてみたり、"やりたいこと"を追求。',
        tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'PostgreSQL'],
        app: ['Visual Studio Code', 'PgAdmin']
    }, {
        id: 2,
        link: 'https://2048-game-mauve.vercel.app/',
        year: '2023',
        genre: 'code',
        recommend: true,
        productionPeriod: '2023.05~2023.06(2ヶ月)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/2048.png',
        title: '2048ゲーム',
        summary: '高校時代にハマっていた2048ゲームを自作。',
        purpose: '初のゲーム制作にチャレンジ・ロジックの理解を深める',
        explanation: '高校生時代に暇つぶしのために始めたつもりがいつの間にか没頭するようになっていた2048ゲーム。React TypeScriptを一通り勉強しているときに、「もしかして今ならそれっぽいものを実装できるんじゃないか？」と思いつきで制作。友達や先生の力も借りながら、何とか形になった。ブロック配置の更新間隔など細かい点で気になるところはあったが、次の制作に気が入ってしまい荒削りのままとなっている。',
        tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
        app: ['Visual Studio Code']
    }, {
        id: 3,
        link: '',
        year: '2023',
        genre: 'code',
        recommend: true,
        productionPeriod: '2023.10~',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/mac.png',
        title: 'Reactで再現するmacOS',
        summary: 'フロントエンドエンジニアとしての意地。',
        purpose: 'フロント/バックエンド両方をバランスよく習得する',
        explanation: 'Reactを学び始めた頃、フロントエンドエンジニアとしての意地で、フロントエンドのみでmacOSを再現することを目標に制作。現在はmacOSのデスクトップ画面を再現することに成功。今後は、macOSのアプリケーションを再現することを目標に制作を続ける。',
        tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'PostgreSQL'],
        app: ['Visual Studio Code', 'PgAdmin']
    }, {
        id: 4,
        link: '',
        year: '2023',
        genre: 'code',
        recommend: false,
        productionPeriod: '2023.07(1ヶ月)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/customer.png',
        title: '顧客情報管理ツール',
        summary: 'インターンでのシステム開発前の課題',
        purpose: 'データ構造の理解・必要なデータを自分で考える力を身につける',
        explanation: '「顧客情報を管理するシステム」をWeb技術を総動員して作る場合、自分ならどのように実装するだろうか。その問いの答えがこれ。DBの準備ができていないのでリンク先の実物をお見せすることはできないのが歯がゆい。いずれ用意します。',
        tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
        app: ['Visual Studio Code', 'PgAdmin']
    }, {
        id: 5,
        link: 'https://ryotaoku.github.io/zone/',
        year: '2022',
        genre: 'code',
        recommend: true,
        productionPeriod: '2022.06~2022.08(2ヶ月)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/zone.png',
        title: 'ZONE',
        summary: 'コーヒー専門店がテーマの初めてのサイト作成。',
        purpose: 'HTML・CSSを用いて静的なサイトを作成する',
        explanation: '',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        app: ['Visual Studio Code', 'Figma', 'Illustrator'],
        beta: 'https://ryotaoku.github.io/zone-beta/'
    }, {
        id: 6,
        link: 'https://ryotaoku.github.io/Sluchay/',
        year: '2022',
        genre: 'code',
        recommend: true,
        productionPeriod: '2023.10(1ヶ月)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/junban.png',
        title: 'Случай(スルチャイ)',
        summary: '任意の文字列をランダムに並べ変える',
        purpose: '純粋なJavaScriptを理解する・配列を理解する',
        explanation: '',
        tech: ['HTML', 'CSS', 'JavaScript'],
        app: ['Visual Studio Code']
    }, {
        id: 7,
        link: '',
        year: '2022',
        genre: 'code',
        recommend: false,
        productionPeriod: '2023.11(未完成/開発終了)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/carlper.png',
        title: 'Carper(カルパー)',
        summary: '車を切り口に社会貢献',
        purpose: 'HTML・CSSを用いて静的なサイトを作成する',
        explanation: 'Zoneに続くWeb作品。生活保護受給者・シングルマザー / ファザーなどを対象に車を販売。「訳ありな車・事故車・譲り受けた車」を買い取り、格安で販売・リースするサービスです。お恥ずかしながら、コンセプトとデザインデータばかりに気が散って、お見せできるHTML/CSSファイルがありません。',
        tech: ['HTML', 'CSS', 'JavaScript'],
        app: ['Visual Studio Code', 'Figma']
    }, {
        id: 8,
        link: '',
        year: '2022',
        genre: 'design',
        recommend: true,
        productionPeriod: '2023年9月(1日)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/gorbachev.png',
        title: '初めてのDTP作成 - ゴルバチョフとは',
        summary: 'DTPについて学ぶ授業の課題',
        purpose: '紙媒体のデザインに挑戦し、デザインの基本を学ぶ',
        explanation: '',
        tech: [],
        app: ['inDesign']
    }, {
        id: 9,
        link: '',
        year: '2022',
        genre: 'design',
        recommend: true,
        productionPeriod: '2023.01(半月)',
        fieldOfCharge: '1人で制作',
        image: '/images/portfolio/candle.png',
        title: '中崎町キャンドルナイト ポスター',
        summary: '授業課題で制作。実際に会場配布のしおりの表紙に使用頂く。',
        purpose: 'デザインの基本を学ぶ',
        explanation: '',
        tech: [],
        app: ['Illustrator']
    }, {
        id: 10,
        link: '',
        year: 'past',
        genre: 'presentation',
        recommend: false,
        productionPeriod: '',
        fieldOfCharge: '',
        image: '/images/portfolio/smart2.png',
        title: 'スマートフォンの歴史調査 進捗プレゼン2',
        summary: '高校授業の一環。スマホの歴史を調査。',
        purpose: 'デザインに気を配り、見る側の視点に立ったプレゼン資料を作る',
        explanation: '',
        tech: [],
        app: ['MS Power Point']
    }, {
        id: 11,
        link: '',
        year: 'past',
        genre: 'presentation',
        recommend: true,
        productionPeriod: '',
        fieldOfCharge: '',
        image: '/images/portfolio/smart3.png',
        title: 'スマートフォンの歴史調査 進捗プレゼン3',
        summary: '高校授業の一環。スマホの歴史を調査。',
        purpose: 'デザインに気を配り、見る側の視点に立ったプレゼン資料を作る',
        explanation: '',
        tech: [''],
        app: ['MS Power Point']
    }, {
        id: 12,
        link: '',
        year: 'past',
        genre: 'presentation',
        recommend: true,
        productionPeriod: '',
        fieldOfCharge: '',
        image: '/images/portfolio/smartLast.png',
        title: 'スマートフォンの歴史調査 進捗プレゼン最終',
        summary: '高校授業の一環。スマホの歴史を調査。',
        purpose: '調査研究の集大成としてふさわしいプレゼンを実施する。',
        explanation: '',
        tech: [''],
        app: ['MS Power Point']
    }, {
        id: 13,
        link: '',
        year: 'past',
        genre: 'presentation',
        recommend: false,
        productionPeriod: '',
        fieldOfCharge: '',
        image: '/images/portfolio/100.png',
        title: 'おすすめの100均アイテムの紹介',
        summary: '高校授業の一環。',
        purpose: 'プレゼンの基本を学ぶ',
        explanation: '',
        tech: [''],
        app: ['MS Power Point']
    }
    ]
    return result
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        max: 100,
        idleTimeoutMillis: 3000,
        connectionTimeoutMillis: 2000,
    })

    const client = await pool.connect()

    try {
        const result = await getAllArchives(client)
        res.status(200).json({
            result
        })
    } finally {
        client.release()
    }
}