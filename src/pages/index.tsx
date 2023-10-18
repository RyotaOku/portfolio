import style from '@/styles/index.module.css'
import { useState, useEffect, useReducer } from 'react'
import { Archive, ArchiveItem, Global } from '../types/portfolioTypes';
import { portfolioReducer } from '../lib/reducer';
import { getAllArchives } from '../actions/actioncreator'
import { ArchiveCarousel } from '@/components/archiveCarousel'
import { ArchiveModal } from '@/components/archiveModal'

type Filter = {
    archive: 'all' | 'recommend';
    condition: 'all' | 'code' | 'design' | 'presentation' | 'document';
};

type RadioButton = {
    id: 'all' | 'code' | 'design' | 'presentation' | 'document';
    label: string;
};

const radioOptions: RadioButton[] = [
    { id: 'all', label: 'すべて' },
    { id: 'code', label: 'コード実装' },
    { id: 'design', label: 'グラフィック' },
    { id: 'presentation', label: 'プレゼン資料' },
    { id: 'document', label: '自主学習資料' }
];

// function ArchiveCarousel({ archives, filter, onArchiveClick }: ArchiveProps) {
//     if (!archives) {
//         return null;
//     }

//     const filteredArchives = archives.filter(archive => {
//         // "recommend" が選択されている場合は、recommend が true のものだけを表示
//         if (filter.archive === 'recommend' && !archive.recommend) return false;

//         // condition の "all" が選択されている場合はすべてのアイテムを表示
//         if (filter.condition === 'all') return true;

//         // それ以外の condition のフィルタリング
//         return filter.condition.includes(archive.genre);
//     });

//     const years = Array.from(new Set(filteredArchives.map(archive => archive.year))).sort((a, b) => {
//         if (a === 'past') return 1;
//         if (b === 'past') return -1;
//         return b.localeCompare(a);
//     });

//     return (
//         <div className={style.contentsWrap}>
//             {years.map(year => (
//                 <div key={year} className={style.contentsInner}>
//                     <h3 className={style.contentsYear}>
//                         {year === 'past' ? 'それ以前' : `${year}年度`}
//                     </h3>
//                     <div className={style.carousel}>
//                         <div className={style.carouselWrap}>
//                             {filteredArchives.filter(archive => archive.year === year).map((v, idx) => (
//                                 <div className={style.archiveContent} key={idx} onClick={() => onArchiveClick(v)} data-title={v.title}>
//                                     <picture><img src={v.image} alt="" /></picture>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ))
//             }
//         </div>
//     );
// }

export default function Portfolio() {
    // const [state, setState] = useState<Archive>([])

    const initialState: Global = {
        message: "",
        archives: [],
        isLoading: false,
    };

    const [globalState, portfolioDispatch] = useReducer(portfolioReducer, initialState);

    useEffect(() => {
        getAllArchives(portfolioDispatch);
    }, []);

    const [filter, setFilter] = useState<Filter>({
        archive: 'all',
        condition: 'all'
    })

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedArchive, setSelectedArchive] = useState<ArchiveItem>({
        id: 0,
        link: '',
        year: '2023',
        genre: 'code',
        recommend: false,
        productionPeriod: '',
        fieldOfCharge: '',
        image: '',
        title: '',
        summary: '',
        purpose: '',
        explanation: '',
        tech: [],
        app: []
    });

    function handleArchiveClick(archive: any) {
        setSelectedArchive(archive);
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    const [sideProfile, setSideProfile] = useState(true)

    function updateCondition(condition: 'all' | 'code' | 'design' | 'presentation' | 'document') {
        console.log(condition);
        setFilter(prev => ({
            ...prev,
            condition: condition
        }));
        console.log(filter);
    }

    return (
        <div className={style.wrap} style={sideProfile ? undefined : { gridTemplateColumns: '1rem 1fr' }}>
            <div className={style.aboutMe} style={sideProfile ? undefined : { color: '#7a7a7a' }}>
                <picture className={style.imageWrap}><img src="/images/portfolio/giselle.png" alt="" className={style.image} /></picture>
                <section>
                    <h1 className={style.name}>奥 綾太</h1>
                    <h2 className={style.profile}>
                        ECCコンピュータ専門学校<br />
                        マルチメディア研究学科<br />
                        Webデザインコース (2025年卒)
                    </h2>
                </section>
                <section className={style.profileWrap}>
                    <h3 className={style.title}>About</h3>
                    <p>aespaのGiselleのファン。毎日aespaの曲を聴きながら活動し、aespaの曲を聴きながら眠る。</p>
                    <p>また、ソ連好きの共産趣味者でもあり、近代史を熱心に調べたりもしている。</p>
                </section>
                <section className={style.profileWrap + ' ' + style.contactWrap}>
                    <h3 className={style.title}>Contact</h3>
                    <p className={style.email}><i className='pi pi-envelope'></i>ryota1991o@gmail.com</p>
                    <p className={style.tel}><i className='pi pi-phone'></i>070-8598-8341</p>
                    <p className={style.twitter}><i className='pi pi-twitter'></i>@Ryota11_07</p>
                    <p className={style.instagram}><i className='pi pi-instagram'></i>ryota11_07</p>
                </section>
                <div className={style.switch} onClick={() => {
                    sideProfile ? setSideProfile(false) : setSideProfile(true)
                }}></div>
            </div>
            <div className={style.archive}>
                <h2 className={style.archiveTitle}>奥綾太の作品一覧</h2>
                <div className={style.change}>
                    <div className={style.archiveChange}>
                        <input type="radio" name="archive" checked={filter.archive === 'recommend'} id="recommend" onChange={() => {
                            setFilter({
                                ...filter,
                                archive: 'recommend'
                            })
                        }} />
                        <label htmlFor="recommend">おすすめ作品</label>
                        <input type="radio" name="archive" checked={filter.archive === 'all'} id="all" onChange={() => {
                            setFilter({
                                ...filter,
                                archive: 'all'
                            })
                        }} />
                        <label htmlFor="all">全ての作品</label>
                    </div>
                    <div className={style.condition}>
                        <div className={style.condition}>
                            {radioOptions.map(option => (
                                <div key={option.id}>
                                    <input
                                        type="radio"
                                        name="condition"
                                        id={option.id}
                                        checked={filter.condition === option.id}  // ここを修正
                                    // onChange={() => updateCondition(option.id)}
                                    />
                                    <label htmlFor={option.id} onClick={() => {
                                        updateCondition(option.id)
                                    }}>{option.label}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <ArchiveCarousel archives={globalState.archives} filter={filter} onArchiveClick={handleArchiveClick} />
                <ArchiveModal archive={selectedArchive} onClose={closeModal} visible={isModalVisible} />
            </div>
        </div >
    )
}