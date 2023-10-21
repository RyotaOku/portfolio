import style from '@/styles/index.module.css'
import { useState, useEffect, useReducer } from 'react'
import { Archive, ArchiveItem, Global } from '../types/portfolioTypes';
import { portfolioReducer } from '../lib/reducer';
import { getAllArchives } from '../actions/actioncreator'
import { ArchiveCarousel } from '@/components/archiveCarousel'
import { ArchiveModal } from '@/components/archiveModal'
import { Profile } from '@/components/profile';

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

export default function Portfolio() {
    const initialState: Global = {
        message: "",
        archives: [],
        isLoading: false,
    };

    const [globalState, portfolioDispatch] = useReducer(portfolioReducer, initialState);

    const [filter, setFilter] = useState<Filter>({
        archive: 'all',
        condition: 'all'
    })

    const [isModalVisible, setModalVisible] = useState(false);

    const [sideProfile, setSideProfile] = useState(true)

    const [selectedArchive, setSelectedArchive] = useState<ArchiveItem>({
        link: '',
        year: 'past',
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

    useEffect(() => {
        getAllArchives(portfolioDispatch);
    }, []);

    function handleArchiveClick(archive: any) {
        setSelectedArchive(archive);
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    function updateCondition(condition: 'all' | 'code' | 'design' | 'presentation' | 'document') {
        console.log(condition);
        setFilter(prev => ({
            ...prev,
            condition: condition
        }));
    }

    return (
        <div className={style.wrap} style={sideProfile ? undefined : { gridTemplateColumns: '1rem 1fr' }}>
            <Profile sideProfile={sideProfile} setSideProfile={setSideProfile} />
            <div className={style.archive}>
                <div className={style.header}>
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
                </div>
                <div className={style.archivesWrap}>
                    <ArchiveCarousel archives={globalState.archives} filter={filter} onArchiveClick={handleArchiveClick} />
                    <ArchiveModal archive={selectedArchive} onClose={closeModal} visible={isModalVisible} />
                </div>
            </div>
        </div >
    )
}