import React from 'react'
import Header from 'next/head'
import Nav from '../../parts/Nav'
import Footer from '../../parts/Footer'
import Link from 'next/link'
export default function index() {
    return (
        <>
            <Header>
                <title>Perusahaan | Minejobs</title>
            </Header>
            <Nav/>
            <main>
                <section className=" py-10" style={{backgroundImage: "url('http://localhost:3000/images/hero.png')"}}>                    
                    <div className="flex ">
                        {/* <div class="w-full sm:w-1/3"></div> */}

                        <div class="mx-auto">

                            <div className=" items-center">
                                
                                <div className="sm:mt-5 py-10 mt-5 border border-gray-300 bg-white">
                                    <h3 className="text-center text-4xl text-gray-800 font-bold">Daftar</h3>
                                    <p className="text-center text-2xl text-gray-800 font-thin pb-5">Dan Dapatkan <span className="font-bold rounded p-1 text-blue-500">1 Iklan Gratis</span></p>
                                    
                                    <button className="mx-3 sm:mx-20 bg-white border border-gray-500 shadow rounded mb-5 p-2 px-8 text-gray-700 hover:bg-gray-200 text-sm">
                                        <img  className="w-4 h-4 inline mr-2" src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/google-icon.png`}/>
                                        <span className="text-xs sm:text-sm text-gray-800">Daftar Dengan Akun Google</span>
                                    </button>

                                    <p className="text-sm text-center text-gray-800">Atau <br/>Daftar dengan Email</p>
                                    
                                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="text" placeholder="Nama PIC"/>
                                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="text" placeholder="Nama Perusahaan"/>
                                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="text" placeholder="Nomor Handphone"/>
                                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="email" placeholder="Email"/>
                                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="password" placeholder="Kata Sandi"/>

                                    <button className="m26 mx-10 mb-5 content-center bg-blue-500 border border-gray-300 shadow rounded mt-3 p-2 px-20 text-gray-100 font-bold hover:bg-blue-600 text-sm" >
                                        <span>Daftar</span>
                                    </button>
                                    <p className="text-center text-xs text-gray-800">Sudah Punya Akun ?</p>
                                    <Link href="masuk"><a className="text-xs text-gray-800"><p className="mb-10 text-center font-bold">Masuk</p></a></Link>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <div class="w-full sm:w-w-1/3"></div> */}
                    </div>

                </section>

                <section className="mb-10">
                    <div className="mx-auto">
                        <h2 className="mt-10 mb-3 clear text-2xl text-center font-bold">Minejobs <span className="text-blue-500">Menawarkan Anda</span> Lebih Dari<br/> Sekedar <span className="text-blue-500">Iklan </span>Lowongan</h2>
                        <p className="text-center">Kami menawarkan berbagai produk dan solusi <br/>
                            yang membantu Anda menemukan kandidat terbaik.
                        </p>
                    </div>
                </section>
            </main>

            {/* <Footer/> */}
       </>
    )
}
