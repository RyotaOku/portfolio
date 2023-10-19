import style from '@/styles/components/archiveCarousel.module.css'
import { ArchiveProps } from "@/types/portfolioTypes";

export function ArchiveCarousel({ archives, filter, onArchiveClick }: ArchiveProps) {
    if (!archives) {
        return null;
    }

    const filteredArchives = archives.filter(archive => {
        // "recommend" が選択されている場合は、recommend が true のものだけを表示
        if (filter.archive === 'recommend' && !archive.recommend) return false;

        // condition の "all" が選択されている場合はすべてのアイテムを表示
        if (filter.condition === 'all') return true;

        // それ以外の condition のフィルタリング
        return filter.condition.includes(archive.genre);
    });

    const years = Array.from(new Set(filteredArchives.map(archive => archive.year))).sort((a, b) => {
        if (a === 'past') return 1;
        if (b === 'past') return -1;
        return b.localeCompare(a);
    });

    return (
        <div className={style.contentsWrap}>
            {years.map(year => (
                <div key={year} className={style.contentsInner}>
                    <h3 className={style.contentsYear}>
                        {year === 'past' ? 'それ以前' : `${year}年度`}
                    </h3>
                    <div className={style.carousel}>
                        <div className={style.carouselWrap}>
                            {filteredArchives.filter(archive => archive.year === year).map((v, idx) => (
                                <div className={style.archiveContent} key={idx} onClick={() => onArchiveClick(v)} data-title={v.title}>
                                    <picture>
                                        <img src={v.image} alt="" className={style.background} />
                                        <img src={v.image} alt="" /></picture>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}