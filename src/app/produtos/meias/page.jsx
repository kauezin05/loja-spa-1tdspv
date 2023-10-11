import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function meia() {
  return (
    <>
    <div>
        <h1>MEIAS</h1>
        <Image src="/Meia.jpg" width={500} height={500} alt='Imagem de chinelo'></Image>
    </div>

    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae, nesciunt facere quae ducimus ea reiciendis temporibus dicta similique in incidunt labore obcaecati assumenda, illum ipsam consequuntur. Praesentium, totam. Eos!</p>
        <p><Link href="/">Voltar...</Link></p>
    </div>
    </>
  )
}
