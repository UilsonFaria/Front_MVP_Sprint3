import { useState } from "react"
import { Link } from 'react-router-dom';
import Fotogrid from "../components/Fotogrid"
import Button from "../components/Button"
import fotos from '../fotogrid.json'

export default function Inicio() {
  const [fotogridList] = useState(fotos.servicos)

  return (
    <div className="content-inicio">
      <header></header>

      <section className="banner">Seu evento único</section>

      <section className="button-area">
        <Link to="/cadastro" style={{ textDecoration: 'none' }}>
            <Button label="Orçamento" />
        </Link>
      </section>

      <section className="photo-grid">
        {fotogridList.map((p, index) => (
          <Fotogrid key={index} inicio={p}/>
        ))}
      </section>      

      <footer></footer>
    </div>
  )
}
