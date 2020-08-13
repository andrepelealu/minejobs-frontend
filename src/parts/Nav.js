import React from 'react'
import Link from 'next/link'
export default function Nav() {
    return (
        <>
    <nav class="flex items-center justify-between flex-wrap bg-white p-3 ">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          {/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}></img> */}
          <span class="font-bold text-xl tracking-tight ml-4 text-gray-700">Mine</span><span class="font-bold text-xl tracking-tight text-orange-400">jobs</span>
        </div>
        
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
          <div class="text-sm lg:flex-grow mr-4">
            <Link href="/"><a  class="inline mt-4 lg:inline-block lg:mt-0 text-gray-800 font-bold hover:text-gray-600 mr-4">
              Beranda
            </a></Link>
            <Link  href="daftar"><a class="inline mt-4 lg:inline-block lg:mt-0 text-gray-800 font-bold hover:text-gray-600 mr-4">
              Daftar
            </a></Link>
            <Link href="masuk"><a class="inline mt-4 lg:inline-block lg:mt-0 text-gray-800 font-bold hover:text-gray-600">
              Masuk
            </a></Link>
          </div>
          <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-orange-400 mt-4 lg:mt-0 bg-blue-500">Perusahaan</a>
          </div>
        </div>
      </nav>
  
        </>
    )
}
