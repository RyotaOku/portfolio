
import styles from '@/styles/components/modal.module.css'
import { ArchiveItem } from '../types/portfolioTypes';
import { Dialog } from 'primereact/dialog';
import { isButtonElement } from 'react-router-dom/dist/dom';

type props = {
    archive: ArchiveItem,
    onClose: () => void,
    visible: boolean
}

export function ArchiveModal({ archive, onClose, visible }: props) {
    const cursorStyle = archive.link ? { cursor: 'pointer' } : {};

    const handleClick = (link: string) => {
        if (archive.link && link === 'link') {
            window.open(archive.link);
        }
        if (archive.beta && link === 'beta') {
            window.open(archive.beta);
        }
    };

    const archiveDetails = [
        { label: '制作期間', text: archive.productionPeriod },
        { label: '担当分野', text: archive.fieldOfCharge },
        { label: '目的', text: archive.purpose },
        { label: '使用技術', text: archive.tech.join(', ') },
        { label: '使用ソフト', text: archive.app.join(', ') }
    ];

    return (
        <Dialog
            header={archive.title}
            headerClassName={styles.modalHeader}
            visible={visible}
            className={styles.modal + ' ' + 'archiveModal'}
            onHide={onClose}
        >
            <div className={styles.archiveInner}>
                <div className={styles.summaryWrap}>
                    <picture className={styles.imgWrap} style={cursorStyle} onClick={() => { handleClick('link') }}>
                        <img src={archive.image} alt="" className={styles.background} />
                        <img src={archive.image} alt="" />
                    </picture>
                    <div className={styles.contentText}>
                        <div className={styles.titleWrap}>
                            <p className={styles.title}>{archive.title}</p>
                            <p className={styles.summary}>{archive.summary}</p>
                        </div>
                        <p className={styles.explanation}>{archive.explanation}</p>
                        <ul className={styles.archiveList}>
                            {archiveDetails.map((item, index) => (
                                <li key={index}>
                                    <p className={styles.label}>{item.label}</p>
                                    <p className={styles.text}>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.productOperate}>
                            <button
                                disabled={!archive.link}
                                className={styles.button}
                                onClick={() => { handleClick('link') }}>
                                サイトを見る
                            </button>
                            {archive.beta && <button className={styles.button} onClick={() => { handleClick('beta') }}>ベータ版を見る</button>}
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}