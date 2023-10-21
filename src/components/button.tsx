import style from '@/styles/components/button.module.css';

type props = {
    text: string,
    className?: string,
    disabled: boolean,
    onClick?: () => void
}

export function Button({ text, onClick, className, disabled }: props) {

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <button className={style.button + ' ' + className} disabled={disabled} onClick={handleClick}>{text}</button>
    )
}