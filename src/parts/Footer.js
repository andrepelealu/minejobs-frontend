import React from 'react'

export default function Footer() {
    return (
        <div>
      <footer className="bg-black pt-5">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-black text-white p-5">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}></img>
          <span class="font-semibold text-xl tracking-tight ml-4">Mine</span><span class="font-semibold text-xl tracking-tight text-orange-300">jobs</span>
        </div>
          <p className="font-thin text-sm md:text-medium pt-3">some text about minejobs here some text about minejobs here some text about minejobs here</p>
          <p className="font-medium pt-3 hover:text-orange-200">Tentang Kami</p>
          <p className="font-medium pt-3 hover:text-orange-200">Kebijakan Penggunaan</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-black text-white p-5">
        <p className="font-bold text-orange-300">Pencari Kerja</p>
        <p className="font-medium pt-3 hover:text-orange-200">Daftar</p>

        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-black text-white p-5">
        <p className="font-bold text-orange-300">Perusahaan</p>
        <p className="font-medium pt-3 hover:text-orange-200">Pasang Iklan</p>

        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-black text-white p-5">
        <p className="font-bold text-orange-300">Kontak Kami</p>
        <span className="block my-2" ><img className="inline mx-2" src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/whatsapp.png`} style={{width:"16px",height:"16px"}}/>+6282234007743</span>
        <span className="block my-2"><img className="inline mx-2" src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/email.png`} style={{width:"16px",height:"16px"}}/>sales@minejobs.id</span>

        </div>
      <div className="w-full text-purple-100 pl-5 text-xs py-1" style={{backgroundColor: '#1a202c'}}>Minejobs 2020</div>
      </div>
      </footer> 
        </div>
    )
}
