import style from './style.module.css'

export default function Button(props) {

    return (

        <button type="button" className={style.button} onClick={props.onClick}>Buscar</button>

    )
}