import Head from "next/head";
import Nav from '../parts/Nav';
import Footer from '../parts/Footer'
import Search from '../parts/Search'
import Link from 'next/link'
export default function search() {
    return (
        <>
            <Head>
                <title>Minejobs - Cari Pekerjaam</title>
            </Head>
            <Nav/>

            <Search/>
            <section className="mx-20 my-3">
            <div class="max-w-sm w-full lg:max-w-full lg:flex ">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/images/ot.png')", width:"141px", height:"76px"}} title="Woman holding a mug">
                    </div>
                    <div class=" w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center mr-3">
                                    OrangTua Group
                                </p>

                        <Link href="/detail" ><a className="text-gray-900 font-bold text-xl mb-2 hover:text-gray-600">Fullstack Web Developer</a></Link>
                        <p class="text-sm text-gray-600 flex items-center">
                            Jawa Tengah, Semarang <br/>
                            Rp.4.000.000 - Rp.7.000.000 / Bulan
                        </p>
                        <p class="text-gray-700 text-light text-hairline text-xs md:text-medium">
                            Tanggal Posting : 08/08/2020
                        </p>
                        </div>
                        <div className="flex ">
                            <a href="#" class="w-full inline sm:w-1/6 rounded mr-5 ml-0 text-sm py-3 px-10  leading-none border text-center text-gray-700 border-gray-500 hover:border-transparent hover:text-black hover:bg-orange-200 lg:mt-0 bg-white">
                            <img className="inline mr-2 w-3 h-3"src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/heart.svg`}/>
                            Simpan</a>

                        </div>
                
                    </div>
                    </div>

                    <div class="max-w-sm w-full lg:max-w-full lg:flex ">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/images/ot.png')", width:"141px", height:"76px"}} title="Woman holding a mug">
                    </div>
                    <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center mr-3">
                                    OrangTua Group
                                </p>

                        <div class="text-gray-900 font-bold text-xl mb-2">Fullstack Web Developer</div>
                        <p class="text-sm text-gray-600 flex items-center">
                            Jawa Tengah, Semarang <br/>
                            Rp.4.000.000 - Rp.7.000.000 / Bulan
                        </p>
                        <p class="text-gray-700 text-light text-hairline text-xs md:text-medium">
                            Tanggal Posting : 08/08/2020
                        </p>
                        </div>
                        <div className="flex">
                        <a href="#" class="w-full inline sm:w-1/6 rounded mr-5 ml-0 text-sm py-3 px-10  leading-none border text-center text-gray-700 border-gray-500 hover:border-transparent hover:text-black hover:bg-orange-200 lg:mt-0 bg-white">
                            <img className="inline mr-2 w-3 h-3"src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/heart.svg`}/>
                            Simpan</a>

                        </div>
                
                    </div>
                    </div>
                    <div class="max-w-sm w-full lg:max-w-full lg:flex ">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/images/ot.png')", width:"141px", height:"76px"}} title="Woman holding a mug">
                    </div>
                    <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center mr-3">
                                    OrangTua Group
                                </p>

                        <div class="text-gray-900 font-bold text-xl mb-2">Fullstacsk Web Developer</div>
                        <p class="text-sm text-gray-600 flex items-center">
                            Jawa Tengah, Semarang <br/>
                            Rp.4.000.000 - Rp.7.000.000 / Bulan
                        </p>
                        <p class="text-gray-700 text-light text-hairline text-xs md:text-medium">
                            Tanggal Posting : 08/08/2020
                        </p>
                        </div>
                        <div className="flex">
                        <a href="#" class="w-full inline sm:w-1/6 rounded mr-5 ml-0 text-sm py-3 px-10  leading-none border text-center text-gray-700 border-gray-500 hover:border-transparent hover:text-black hover:bg-orange-200 lg:mt-0 bg-white">
                            <img className="inline mr-2 w-3 h-3"src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/heart.svg`}/>
                            Simpan</a>

                        </div>
                
                    </div>
                    </div>
                </section>  
            <Footer/>
        </>
    )
}
