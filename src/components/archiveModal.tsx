
import styles from '@/styles/components/modal.module.css'
import { ArchiveItem } from '../types/portfolioTypes';
import { Dialog } from 'primereact/dialog';
import { isButtonElement } from 'react-router-dom/dist/dom';
import { useEffect, useState } from 'react'

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
            return
        }
        if (archive.beta && link === 'beta') {
            window.open(archive.beta);
            return
        }
        if (link === 'presen') {
            window.open(archive.video, "_blank", "noopener noreferrer");
            return;
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
                    i = end + 3; // skip next 3 characters and the closing </i>
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
                    <picture className={styles.imgWrap} style={cursorStyle} onClick={() => { handleClick('link') }}>
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
                                    <button disabled={!archive.link} className={styles.button} onClick={() => { handleClick('link') }}>サイトを見る</button>
                                    {archive.beta && <button className={styles.button} onClick={() => { handleClick('beta') }}>ベータ版を見る</button>}
                                </>
                            )}
                            {archive.genre === 'design' && <button className={styles.button} onClick={() => { handleClick('image') }}>拡大表示</button>}
                            {archive.genre === 'presentation' && <button className={styles.button} onClick={() => { handleClick('presen') }}>プレゼン動画を見る</button>}
                            {archive.presentation && <button className={styles.button} onClick={() => { handleClick('presentation') }}>プレゼンテーションを見る</button>}
                            {archive.document && <button className={styles.button} onClick={() => { handleClick('document') }}>ドキュメントを見る</button>}
                            {archive.ideaNote && <button className={styles.button} onClick={() => { handleClick('ideaNote') }}>アイデアノートを見る</button>}
                            {archive.otherDesign && <button className={styles.button} onClick={() => { handleClick('otherDesign') }}>その他デザインを見る</button>}
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}