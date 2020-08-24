import Footer from '../../parts/Footer'
import Link from 'next/link'
import Head from 'next/head'
import Notification from '../../parts/Notification'
export default function dashboard() {
    return (
        <>
            <Head>
                <title>Minejobs - Dashboard</title>
            </Head>
            <nav class="flex items-center justify-between flex-wrap bg-white p-5 ">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-bold text-xl tracking-tight ml-4 text-gray-700">Mine</span><span class="font-bold text-xl tracking-tight text-orange-400">jobs</span>
                
                    <div className=" ml-10 hidden items-center sm:flex ">
                        <input class="border border-gray-500 rounded text-black ml-10 mr-0 bg-white  shadow  py-2 px-4 block w-full hover:w-10" type="text" placeholder="Cari Pekerjaan Impian"/>
                        <a href="#" class="border border-gray-500 mr-5 ml-0 text-sm py-3 px-3  leading-none    text-white  hover:border-transparent hover:text-white hover:bg-gray-200 lg:mt-0 bg-transparent">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/search-icon.png`}/></a>
                    </div>
                </div>
                
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
                <div class="text-sm lg:flex-grow mr-4 sm:block">
                    <Link href="dashboard"><a  class="sm:inline mt-4 lg:inline-block lg:mt-0 text-gray-800 font-bold hover:text-gray-600 mr-4">
                    Dashboard
                    </a></Link>
                    <Link href="profile"><a  class="sm:inline mt-4 lg:inline-block lg:mt-0 text-gray-800 font-bold hover:text-gray-600 mr-4">
                    Profile
                    </a></Link>
                
                </div>
                <div>
                    <Link href="/"><a class=" inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-red-400 mt-4 lg:mt-0 bg-red-500">Keluar</a></Link>
                </div>
                </div>
            </nav>
            <main>
            <div class="flex my-5 mx-5">
                <div class="hidden sm:flex w-1/4 bg-white  rounded border border-gray-400 mr-3" style={{paddingBottom:"30%"}}>
                    <div className="mx-auto px-5 py-5">
                        <h2 className=" mx-auto px-20 font-bold bg-gray-200 p-3 rounded text-gray-600 mb-10">Dashboard</h2>
                        
                        <Link href="search"><a className="hover:bg-orange-200 p-2 rounded block my-3 hover:text-gray-700"><img className="inline mr-2" src="http://localhost:3000/images/search-icon.png"/>Cari Lowongan</a></Link>
                        <Link href="search"><a className="hover:bg-orange-200 p-2 rounded block my-3 hover:text-gray-700" ><img className="inline mr-2" src="http://localhost:3000/images/person.png"/>Edit Profile</a></Link>
                        <Link href="search"><a className="hover:bg-orange-200 p-2 rounded block my-3 hover:text-gray-700" ><img className="inline mr-2" src="http://localhost:3000/images/spam.png"/>Undangan Interview</a></Link>
                        <Link href="search"><a className="hover:bg-orange-200 p-2 rounded block my-3 hover:text-gray-700" ><img className="inline mr-2" src="http://localhost:3000/images/calendar.png"/>Jadwal Interview</a></Link>
                        <Link href="search"><a className="hover:bg-orange-200 p-2 rounded block my-3 hover:text-gray-700" ><img className="inline mr-2" src="http://localhost:3000/images/forums.png"/>Lamaran Tersimpan</a></Link>
                    </div>
                </div>
                <div class="w-full sm:w-3/4 bg-white  rounded border border-gray-400" style={{paddingBottom:"30%"}}>
                    <Notification/>
                </div>
   
            </div>
            </main>
            <Footer/>
        </>
    )
}
