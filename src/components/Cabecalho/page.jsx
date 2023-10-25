import Link from 'next/link'
import React from 'react'

export default function cabelho() {
  return (
    <>
        <header className="bg-slate-800 text-white">
          <h1 className="text-center text-3x1 font-extrabold">Produtos</h1>
          <hr className="bg-red-600 border border-red-700"/>
          <nav className="menu">
              <ul>
                  <li><Link href="/produtos/tenis">Tenis</Link></li>
                  <li><Link href="/produtos/meias">Meias</Link></li>
                  <li><Link href="/produtos/chinelos">Chinelos</Link></li> 
                  <li><Link href="/produtos/fazenda/loja/laticinios ">Queijos</Link></li>
                  <li><Link href="/user-pages ">Users</Link></li>
              </ul>
           </nav>
        </header>
          

    </>
  )
}
