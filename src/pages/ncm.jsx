import Button from "../components/button/button"
import Header from "../components/Header/header"
import Input from "../components/input/input"

export default function NCM() {
  return (
    <>
      <Header />
      <div className='busca'>
        <Input place='Digite a NCM'></Input>
        <Button />
      </div>
    </>
  )
}
