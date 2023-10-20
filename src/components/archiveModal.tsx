
import styles from '@/styles/components/modal.module.css'
import { ArchiveItem } from '../types/portfolioTypes';
import { Dialog } from 'primereact/dialog';

type props = {
    archive: ArchiveItem,
    onClose: () => void,
    visible: boolean
}

export function ArchiveModal({ archive, onClose, visible }: props) {
    const cursorStyle = { cursor: '' }

    switch (archive.genre) {
        case 'code': archive.link === '' ? undefined : cursorStyle.cursor = 'pointer';
            break;
        case 'design': archive.image === '' ? undefined : cursorStyle.cursor = 'pointer';
            break;
        case 'presentation': archive.video === '' ? undefined : cursorStyle.cursor = 'pointer';
            break;
        default: cursorStyle.cursor = '';
    }

    const handleClick = (link: string) => {
        switch (link) {
            case 'link': {
                window.open(archive.link);
                break;
            }
            case 'beta': {
                window.open(archive.beta);
                break;
            }
            case 'presen': {
                window.open(archive.video, "_blank", "noopener noreferrer");
                break;
            }
            case 'image': {
                window.open(archive.image, "_blank", "noopener noreferrer");
                break;
            }
            case 'idea': {
                window.open(archive.ideaNote, "_blank", "noopener noreferrer");
                break;
            }
            case 'otherDesign': {
                window.open(archive.otherDesign, "_blank", "noopener noreferrer");
                break;
            }
            default: {
                break;
            }
        }
    };

    const archiveDetails = [
        { label: '制作期間', text: archive.productionPeriod },
        { label: '担当分野', text: archive.fieldOfCharge },
        { label: '目的', text: archive.purpose },
        { label: '使用技術', text: archive.tech.join(', ') },
        { label: '使用ソフト', text: archive.app.join(', ') }
    ];

    function parseExplanation(explanation: string) {
        const elements = [];
        let currentText = "";
        for (let i = 0; i < explanation.length; i++) {
            if (explanation.substr(i, 4) === "<br>") {
                elements.push(currentText);
                elements.push(<br key={i} />);
                currentText = "";
                i += 3; // skip next 3 characters
            } else if (explanation.substr(i, 3) === "<i>") {
                let end = explanation.indexOf("</i>", i);
                if (end !== -1) {
                    elements.push(currentText);
                    elements.push(<i key={i}>{explanation.substring(i + 3, end)}</i>);
                    currentText = "";
                    i = end + 3;
                } else {
                    currentText += explanation[i];
                }
            } else {
                currentText += explanation[i];
            }
        }
        if (currentText) {
            elements.push(currentText);
        }
        return elements;
    }

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
                    <picture className={styles.imgWrap} style={cursorStyle} onClick={() => {
                        let link = ''
                        switch (archive.genre) {
                            case 'code': archive.link === '' ? undefined : link = 'link'
                                break;
                            case 'design': archive.image === '' ? undefined : link = 'image'
                                break;
                            case 'presentation': archive.presentation === '' ? undefined : link = 'presen'
                                break;
                            default:
                                break;
                        }
                        handleClick(link)
                    }}>
                        <img src={archive.image} alt="" className={styles.background} />
                        <img src={archive.image} alt="" />
                    </picture>
                    <div className={styles.contentText}>
                        <div className={styles.titleWrap}>
                            <p className={styles.title}>{archive.title}</p>
                            <p className={styles.summary}>{archive.summary}</p>
                        </div>
                        <p className={styles.explanation}>{parseExplanation(archive.explanation)}</p>
                        <ul className={styles.archiveList}>
                            {archiveDetails.map((item, index) => (
                                <li key={index}>
                                    <p className={styles.label}>{item.label}</p>
                                    <p className={styles.text}>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.productOperate}>
                            {archive.genre === 'code' && (
                                <>
                                    <button disabled={!archive.link} className={styles.button} onClick={() => { handleClick('link') }}>サイト</button>
                                    {archive.beta && <button className={styles.button} onClick={() => { handleClick('beta') }}>ベータ版</button>}
                                </>
                            )}
                            {archive.genre === 'design' && <button className={styles.button} onClick={() => { handleClick('image') }}>拡大表示</button>}
                            {archive.genre === 'presentation' && <button className={styles.button} onClick={() => { handleClick('presen') }}>プレゼン動画</button>}
                            {archive.ideaNote && <button className={styles.button} onClick={() => { handleClick('idea') }}>アイデアノート</button>}
                            {archive.otherDesign && <button className={styles.button} onClick={() => { handleClick('otherDesign') }}>その他デザイン</button>}
                        </div>
                    </div>
                </div>
            </div>
        </Dialog >
    )
}