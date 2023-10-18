import React from 'react'
import Image from 'next/image'

export default function Notfound() {
  return (
    <div>
        <h1>ERRO DO 404</h1>
        <div>
            <Image src="https://httpstatusdogs.com/img/400.jpg" alt="cachorro cavando" width={500} height={500}/>
        </div>
    </div>
  )
}
