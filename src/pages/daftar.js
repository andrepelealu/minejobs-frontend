import Nav from '../parts/Nav'
import Head from 'next/head'
import Link from 'next/link'
export default function daftar() {
    return (
        <>
        <Head><title>Minejobs - Daftar</title></Head>
          <Nav/>
          <section className="flex">
          <div className="w-full sm:w-1/3">
              <Link href="/"><a><img className="ml-10 mr-3 w-5 h-5 inline"src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/left-arrow.svg`}/>
                  <p className="hidden sm:inline text-sm text-gray-800 ">Kembali</p></a>
                </Link>
              </div>
              <div className="w-full sm:w-1/3">
                <div className="sm:mt-20 mt-5 border border-gray-300 py-5">
                    <h3 className="text-center text-xl text-gray-800 font-bold">Daftar</h3>
                    <p className="text-center text-sm text-gray-800 font-thin pb-3">Temukan Pekerjaan Impian</p>
                    <button className="mx-3 sm:mx-20 bg-white border border-gray-500 shadow rounded mb-5 p-2 px-8 text-gray-700 hover:bg-gray-200 text-sm">
                        <img  className="w-4 h-4 inline mr-2"src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/google-icon.png`}/>
                        <span className="text-xs sm:text-sm text-gray-800">Daftar Dengan Akun Google</span>
                    </button>
                        <p className="text-sm text-center text-gray-800">Atau <br/>Daftar dengan Email</p>
                    
                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="email" placeholder="Tuliskan email kamu ..."/>
                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="password" placeholder="Password ..."/>
                    <input className="mx-auto mt-3 border border-gray-500 rounded p-2 px-10 block" type="password" placeholder="Ulangi Passwodnya"/>

                    <button className="m26 mx-10 mb-5 content-center bg-blue-500 border border-gray-300 shadow rounded mt-3 p-2 px-20 text-gray-100 font-bold hover:bg-blue-600 text-sm" >
                        <span>Daftar</span>
                    </button>
                    <p className="text-center text-xs text-gray-800">Sudah Punya Akun ?</p>
                    <Link href="masuk"><a className="text-xs text-gray-800"><p className="mb-10 text-center font-bold">Masuk</p></a></Link>
                    
                </div>
            </div>
            <div className="w-full sm:w-1/3"></div>  
        </section>
        </>
    )
}
