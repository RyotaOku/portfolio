import style from '@/styles/components/profile.module.css'

type props = {
    sideProfile: boolean,
    setSideProfile: React.Dispatch<React.SetStateAction<boolean>>
}

export function Profile({ sideProfile, setSideProfile }: props) {
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
        </>
    )
}