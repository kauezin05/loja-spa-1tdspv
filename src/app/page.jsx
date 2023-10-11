import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <Link href="./produtos/tenis">Tenis</Link>
        </ul>
        <ul>
          <Link href="./produtos/meias">Meias</Link>
        </ul>
        <ul>
          <Link href="./produtos/chinelos">Chinelos</Link>
        </ul>
      </div>
    </>
  )
}
