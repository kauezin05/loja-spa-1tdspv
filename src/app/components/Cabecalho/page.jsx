import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function cabelho() {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <Link href="/produtos/tenis">Tenis</Link>
                </ul>
                <ul>
                    <Link href="/produtos/meias">Meias</Link>
                </ul>
                <ul>
                    <Link href="/produtos/chinelos">Chinelos</Link>
                </ul>
            </nav>
        </header>
          

    </>
  )
}
