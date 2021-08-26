import style from './style.module.css'

export default function Input(props){

    return(
        
        <input type="text" className={style.input} placeholder= {props.place}></input>
    )

}