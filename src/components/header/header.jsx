import style from './style.module.css'

import Link from 'next/link'


export default function Header() {
    return (
        
        <div className={style.header}>         
            
            <ul className={style.menu}>
                <li>
                    <Link href="/cfop">
                        <a>CFOP</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ncm">
                        <a>NCM</a>
                    </Link>
                </li>
                <li>
                    <Link href="/mva">
                        <a>MVA</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}