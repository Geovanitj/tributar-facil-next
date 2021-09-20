import Button from "../components/button/button"
import Header from "../components/Header/header"
import Input from "../components/input/input"
import { useState } from "react"


export default function CFOP() {

  const [buscar, setBuscar] = useState(0)

  return (
    <>
      <Header />
      <div className='busca'>
        <Input place='Digite o CFOP'></Input>
        <Button onClick={(buscar) => setBuscar(buscar)} />
      </div>
    </>
  )
}
