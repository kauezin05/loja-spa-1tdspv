import Link from "next/link";

export default function Chinelo({props}) {
  
  return (
    <div>
        <h1>Chinelo</h1>
        <p><strong>Descrição: </strong></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta ipsa neque deserunt pariatur? Impedit porro necessitatibus, quia consequatur expedita itaque est facere omnis quod in numquam, ullam illo odit!</p>
        <p><Link href="/">Voltar...</Link></p>
    </div>
  )
}