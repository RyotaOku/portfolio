import { ArchiveItem, Archive } from '../types/portfolioTypes';
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
        dispatch({
            type: 'GET_ARCHIVES_SUCCESS', payload:
                [{
                    link: 'https://google-calendar-sandy.vercel.app/',
                    year: '2023前期',
                    genre: 'code',
                    recommend: false,
                    productionPeriod: '2023.03~2023.04(1ヶ月半)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/google.png',
                    title: 'Google Calendar',
                    summary: 'ナイトモードにも対応し、実際に使えるクローン',
                    purpose: 'Reactで作品を作る練習・実在するデザインを模写する練習。',
                    explanation: 'Reactを学びたての頃、実際に使っているサービスを模写できると思い、Google Calendarを模写。<br>見た目を徹底的に真似るのはもちろん、実際に予定を追加・変更・削除できるように実装。また、本家Google Calendarにはないナイトモードにも対応させてみたり、"やりたいこと"を追求。',
                    tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'PostgreSQL'],
                    app: ['Visual Studio Code', 'PgAdmin']
                }, {
                    link: 'https://2048-game-mauve.vercel.app/',
                    year: '2023前期',
                    genre: 'code',
                    recommend: true,
                    productionPeriod: '2023.05~2023.06(2ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/2048.png',
                    title: '2048ゲーム',
                    summary: '高校時代にハマっていた2048ゲームを自作。',
                    purpose: '初のゲーム制作にチャレンジ・ロジックの理解を深める',
                    explanation: '高校生時代に暇つぶしのために始めたつもりがいつの間にか没頭するようになっていた2048ゲーム。<br>React TypeScriptを一通り勉強しているときに、「もしかして今ならそれっぽいものを実装できるんじゃないか？」と思いつきで制作。友達や先生の力も借りながら、何とか形になった。<br>ブロック配置の更新間隔など細かい点で気になるところはあったが、次の制作に気が入ってしまい荒削りのままとなっている。',
                    tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
                    app: ['Visual Studio Code']
                }, {
                    link: '',
                    year: '2023後期',
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
                    link: '',
                    year: '2023前期',
                    genre: 'code',
                    recommend: false,
                    productionPeriod: '2023.07(1ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/customer.png',
                    title: '顧客情報管理ツール',
                    summary: 'インターンでのシステム開発前の課題',
                    purpose: 'データ構造の理解・必要なデータを自分で考える力を身につける',
                    explanation: '「顧客情報を管理するシステム」をWeb技術を総動員して作る場合、自分ならどのように実装するだろうか。その問いの答えがこれ。<br>DBの準備ができていないのでリンク先の実物をお見せすることはできないのが歯がゆい。いずれ用意します。',
                    tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
                    app: ['Visual Studio Code', 'PgAdmin']
                }, {
                    link: '',
                    year: '2023後期',
                    genre: 'code',
                    recommend: false,
                    productionPeriod: '2023.09~2022.12(3ヶ月)',
                    fieldOfCharge: 'チームで制作 / リーダー / デザイン・コード担当',
                    image: '/images/portfolio/.png',
                    title: '(ここに作品名)',
                    summary: 'Webデザイナー向けのポートフォリオサポートツール',
                    purpose: '型にハマらない効率的なチーム制作の進行・技術の共有',
                    explanation: '希望進路・得意分野・将来の理想像などをもとに、ユーザーにさまざまなアドバイスを提供し、ポートフォリオ作成と、その過程の学習の手助けをする。<br>全体的なデザインは、「海外発のツール」をコンセプトに。<br>チームの目的を「共同制作で良いものを作る」ではなく(当然の為)、「チーム制作を通じて得るものを最大化させる」とし、後輩の意見を最大限尊重しながら制作。',
                    tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
                    app: ['Visual Studio Code', 'PgAdmin']
                }, {
                    link: '',
                    year: '2023後期',
                    genre: 'code',
                    recommend: false,
                    productionPeriod: '2023.09~2022.12(3ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/.png',
                    title: '甘さの起源 - 人々の日常を追って',
                    summary: 'はちみつを売りたいんだ その1',
                    purpose: '商品の魅力を本質から離れた視点で伝える',
                    explanation: '「⚪︎⚪︎だからおすすめ！」「⚪︎⚪︎に大人気！」などの、商品の魅力をそのまま述べるのではなく、別の視点から遠回しに魅力を伝える力をつけるための課題。<br>というショートドラマ形式で「はちみつの甘さ」の魅力を知ってもらう。<br><i>"日常生活の中で「甘い」という言葉や感覚に触れることは多い。しかし、その原点や本質的な甘さについて、私たちはどれだけ知っているのだろうか？"</i>',
                    tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
                    app: ['Visual Studio Code', 'PgAdmin']
                }, {
                    link: '',
                    year: '2023後期',
                    genre: 'code',
                    recommend: false,
                    productionPeriod: '2023.09~2022.12(3ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/.png',
                    title: '赤の甘さ、時代を超えて',
                    summary: 'はちみつを売りたいんだ その2',
                    purpose: '商品の魅力を本質から離れた視点で伝える',
                    explanation: '「⚪︎⚪︎だからおすすめ！」「⚪︎⚪︎に大人気！」などの、商品の魅力をそのまま述べるのではなく、別の視点から遠回しに魅力を伝える力をつけるための課題。<br>ショートドラマ形式で、「はちみつの持つ甘さが世界平和をもたらす」という壮大なストーリを演出(ただの制作者の好み)。<br><i>"我々は違う意見や価値観を持っている。でも、このはちみつのように、根底には共通するものがある。"</i>',
                    tech: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
                    app: ['Visual Studio Code', 'PgAdmin']
                }, {
                    link: 'https://ryotaoku.github.io/zone/',
                    year: '2022前期',
                    genre: 'code',
                    recommend: true,
                    productionPeriod: '2022.06~2022.08(2ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/zone.png',
                    title: 'ZONE',
                    summary: 'コーヒー専門店がテーマの初めてのサイト作成。',
                    purpose: 'HTML・CSSを用いて静的なサイトを作成する',
                    explanation: 'コワーキングスペースとカフェを組み合わせたコンセプト。ポスター・ショップカード・メンバーズカードなどのデザイン制作にも挑戦。<br>Webサイトには2つのバージョンがあり、初期ver.に全く満足できなかったため、夏休みを返上して1からver.2を作成。初期ver.をβ版として閲覧可能にしたのでどう変わったのか比較可能。',
                    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
                    app: ['Visual Studio Code', 'Figma', 'Illustrator'],
                    beta: 'https://ryotaoku.github.io/zone-beta/',
                    otherDesign: 'TODO',
                    ideaNote: 'TODO',
                    video: 'TODO'
                }, {
                    link: 'https://ryotaoku.github.io/Sluchay/',
                    year: '2022後期',
                    genre: 'code',
                    recommend: true,
                    productionPeriod: '2023.10(1ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/junban.png',
                    title: 'Случай(スルチャイ)',
                    summary: '任意の文字列をランダムに並べ変える',
                    purpose: '純粋なJavaScriptを理解する・配列を理解する',
                    explanation: '学校内でプレゼンの順番を決める際などで実際に使われていた、同じ機能を持つ「順番くん」を1からクローン。<br>デザインを近代的に仕上げ、リセット機能・分割機能・結果の拡大表示やコピーなど、必要な機能を考察し実装。その他、イースターエッグ的な隠し機能も。',
                    tech: ['HTML', 'CSS', 'JavaScript'],
                    app: ['Visual Studio Code']
                }, {
                    link: '',
                    year: '2022後期',
                    genre: 'code',
                    recommend: false,
                    productionPeriod: '2023.11(未完成/開発終了)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/carlper.png',
                    title: 'Carper(カルパー)',
                    summary: '車を切り口に社会貢献',
                    purpose: 'HTML・CSSを用いて静的なサイトを作成する',
                    explanation: 'Zoneに続くWeb作品。生活保護受給者・シングルマザー / ファザーなどを対象に車を販売。「訳ありな車・事故車・譲り受けた車」を買い取り、格安で販売・リースするサービス。<br>お恥ずかしながら、コンセプトとデザインデータばかりに気が散って、お見せできるHTML/CSSファイルがない。',
                    tech: ['HTML', 'CSS', 'JavaScript'],
                    app: ['Visual Studio Code', 'Figma'],
                    designComp: 'TODO'
                }, {
                    link: '',
                    year: '2022前期',
                    genre: 'design',
                    recommend: true,
                    productionPeriod: '2023.09(1日)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/gorbachev.png',
                    title: '初めてのDTP作成 - ゴルバチョフとは',
                    summary: 'DTPについて学ぶ授業の課題',
                    purpose: '紙媒体のデザインに挑戦し、デザインの基本を学ぶ',
                    explanation: '実際にあるデザインを模倣したりするのが得意なので、紙媒体の見開き1ページで「ゴルバチョフ」について紹介。<br>細かい内容・テキストはwikipediaのコピーだが、見出しなどのテキストは内容と配置を観察しながら試行錯誤。',
                    tech: [],
                    app: ['inDesign']
                }, {
                    link: '',
                    year: '2022後期',
                    genre: 'design',
                    recommend: true,
                    productionPeriod: '2023.12(1ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/.png',
                    title: 'ドラマティックに脱出せよ！',
                    summary: '条件に沿って脱出ドラマを作成',
                    purpose: 'コンセプトを考える・プレゼン練習',
                    explanation: '条件は、<br>①脱出する過程におけるコンセプトを考え、それに沿って脱出すること。<br>②指定されたアイテムを使うこと。<br>③指定されたアイテム以外に新アイテムを考え、使用すること<br>の3つ。作成資料を破棄したのでプレゼン動画しかないのが悔やまれる。',
                    tech: [],
                    app: ['Illustrator']
                }, {
                    link: '',
                    year: '2022後期',
                    genre: 'design',
                    recommend: true,
                    productionPeriod: '2023.01(半月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/candle.png',
                    title: '中崎町キャンドルナイト ポスター',
                    summary: '指定条件に沿ってポスターを制作',
                    purpose: 'デザインの基本を学ぶ',
                    explanation: '大阪市北区の中崎町で実際に開かれる「中崎町キャンドルナイト」のポスターデザイン。<br>ありがたいことに毎年ECCのWebデザインコース生徒の作品から実際に使用されるらしく、私のデザインはしおりの表紙になった。今見てみると、メインの画像ありきのデザインになってしまっている。',
                    tech: [],
                    app: ['Illustrator']
                },
                {
                    link: '',
                    year: 'past',
                    genre: 'presentation',
                    recommend: false,
                    productionPeriod: '2021.05~2021.07(2ヶ月半)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/smart.png',
                    title: 'スマホの歴史調査 進捗プレゼン1',
                    summary: '高校授業の一環。スマホの歴史を調査。',
                    purpose: 'デザインに気を配り、見る側の視点に立ったプレゼン資料を作る',
                    explanation: '「スマートフォンの歴史と今後の予測」を1年間で調査研究し、発表するという高校授業の制作物。<br>第一回発表では現在の大きな進化点(折りたたみスマホの登場・ペリスコープレンズによるカメラの進化)を紹介し、今後の調査の流れを紹介。よくある白背景黒文字ベースのプレゼン資料で、整理されているようで整理されておらず、ゴチャゴチャした印象を受ける。',
                    tech: [],
                    app: ['MS Power Point'],
                    video: 'TODO'
                }, {
                    link: '',
                    year: 'past',
                    genre: 'presentation',
                    recommend: false,
                    productionPeriod: '2021.09~2021.10(1ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/smart2.png',
                    title: 'スマホの歴史調査 進捗プレゼン2',
                    summary: '高校授業の一環。スマホの歴史を調査。',
                    purpose: 'デザインに気を配り、見る側の視点に立ったプレゼン資料を作る',
                    explanation: '「スマートフォンの歴史と今後の予測」を1年間で調査研究し、発表するという高校授業の制作物。<br>第二回発表では高校内でのスマホOSシェアと、スマホに求めるものなどをアンケートし、その結果を発表。従来の白背景・黒文字ベースのデザインから、型にハマらないプレゼン資料の作成を試みる。',
                    tech: [],
                    app: ['MS Power Point'],
                    video: 'TODO'
                }, {
                    link: '',
                    year: 'past',
                    genre: 'presentation',
                    recommend: true,
                    productionPeriod: '2021.11~2021.12(1ヶ月)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/smart3.png',
                    title: 'スマホの歴史調査 進捗プレゼン3',
                    summary: '高校授業の一環。スマホの歴史を調査。',
                    purpose: 'デザインに気を配り、見る側の視点に立ったプレゼン資料を作る',
                    explanation: '「スマートフォンの歴史と今後の予測」を1年間で調査研究し、発表するという高校授業の制作物。<br>第3回発表では 進化の現状・アンケート結果の詳細な発表・進化の予測 の3つに分けて調査の進捗を報告。PowerPointのアニメーションをふんだんに使う、パワポ初心者が99%陥るアニメーションの罠に引っかかりながら資料を制作。',
                    tech: [''],
                    app: ['MS Power Point'],
                    video: 'TODO'
                }, {
                    link: '',
                    year: 'past',
                    genre: 'presentation',
                    recommend: true,
                    productionPeriod: '2022.01~2022.02(1ヶ月半)',
                    fieldOfCharge: '1人で制作',
                    image: '/images/portfolio/smartLast.png',
                    title: 'スマホの歴史調査 進捗プレゼン最終',
                    summary: '高校授業の一環。スマホの歴史を調査。',
                    purpose: '調査研究の集大成としてふさわしいプレゼンを実施する。',
                    explanation: '「スマートフォンの歴史と今後の予測」を1年間で調査研究し、発表するという高校授業の制作物。<br>最終報告では、"聞いてもらう"ための最大限の配慮から、クイズや時系列でテンポよく進むように。アニメーションがたくさん使用されており、またフォントの不一致などから動画資料ではズレがある。',
                    tech: [''],
                    app: ['MS Power Point'],
                    video: 'TODO'
                }, {
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

        });

    } catch (error) {
        // 失敗のアクションを発行
        const err = error as Error;
        // 失敗のアクションを発行
        dispatch({ type: 'GET_ARCHIVES_FAILURE' });
    } finally {

    }
};
