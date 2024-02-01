import style from '@/styles/components/profile.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog';

type props = {
    sideProfile: boolean,
    setSideProfile: React.Dispatch<React.SetStateAction<boolean>>
}

type dialogProps = {
    onClose: () => void,
    visible: boolean
}

export function Profile({ sideProfile, setSideProfile }: props) {
    const [moreProfile, setMoreProfile] = useState(false)

    function closeModal() {
        setMoreProfile(false);
    }

    return (
        <>
            <div className={style.aboutMe}
                style={sideProfile ? undefined : { color: '#7a7a7a' }}
            >
                <picture className={style.imageWrap}><img src="/images/portfolio/giselle.png" alt="" className={style.image} /></picture>
                <section>
                    <h1 className={style.name}>奥 綾太</h1>
                    <h2 className={style.profile}>
                        ECCコンピュータ専門学校<br />
                        マルチメディア研究学科<br />
                        Webデザインコース (2025年卒) <br />
                        <button className={style.more + ' ' + 'pi pi-external-link'} onClick={() => { setMoreProfile(true) }}>奥綾太をもっと知る</button>
                    </h2>
                </section>
                <section className={style.profileWrap}>
                    <h3 className={style.title}>About</h3>
                    <p>aespaのGiselleのファン。毎日aespaの曲を聴きながら活動し、aespaの曲を聴きながら眠る。</p>
                    <p>また、ソ連好きの共産趣味者でもあり、近代史を熱心に調べたりもしている。</p>
                </section>
                <section className={style.profileWrap + ' ' + style.contactWrap}>
                    <h3 className={style.title}>Contact</h3>
                    <address>
                        <p className={style.email}><Link className={style.link} target='_blank' href={'mailto:ryota1991o@gmail.com'}><i className='pi pi-envelope'></i>ryota1991o@gmail.com</Link></p>
                        <p className={style.tel}><Link className={style.link} target='_blank' href={'tel:07085988341'}><i className='pi pi-phone'></i>070-8598-8341</Link></p>
                        <p className={style.twitter}><Link className={style.link} target='_blank' href={'https://twitter.com/Ryota11_07'}><i className='pi pi-twitter'></i>@Ryota11_07</Link></p>
                        <p className={style.instagram}><Link className={style.link} target='_blank' href={'https://www.instagram.com/ryota11_07/'}><i className='pi pi-instagram'></i>ryota11_07</Link></p>
                    </address>
                </section>
                <div className={style.switch} onClick={() => {
                    sideProfile ? setSideProfile(false) : setSideProfile(true)
                }}></div>
            </div>
            <MoreProfile visible={moreProfile} onClose={closeModal} />
        </>
    )
}

function MoreProfile({ visible, onClose }: dialogProps) {
    return (
        <Dialog
            header={'奥綾太のメモ'}
            visible={visible}
            headerClassName={style.modalHeader}
            className={style.modal + ' ' + 'archiveModal'}
            onHide={onClose}
        >
            <p>奥綾太がNotionに書き記してきた、チーム制作の心得や勉強のノート。外部リンクです。</p>
            <div className={style.wrap}>
                <a href="https://www.notion.so/React-TypeScript-0e33cf99c5a541598cba7a5b17eaf2e4" target='_blank' rel='noreferrer'>
                    <picture><img src="/images/portfolio/icon3.png" alt="" /></picture>
                    React TypeScriptを理解する
                </a>
                <a href="https://www.notion.so/1bfd323b3ce94af3985300f9884419cb" target='_blank' rel='noreferrer'>
                    <picture><img src="/images/portfolio/icon.png" alt="" /></picture>
                    制作メモ
                </a>
                <a href="https://www.notion.so/f85e45ade31145e992b4e9da4342cb88" target='_blank' rel='noreferrer'>
                    <picture><img src="/images/portfolio/icon2.png" alt="" /></picture>
                    チーム制作の手引き
                </a>
            </div>
        </Dialog>
    )
}