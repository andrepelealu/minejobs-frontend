import React from 'react'

export default function Hero() {
    return (
        <>
       <section className=" py-20" style={{backgroundImage: "url('http://localhost:3000/images/hero.png')", paddingTop:'15%',paddingBottom:'20%'}}>
        <h1 className="text-center text-2xl font-bold text-gray-100 sm:text-4xl">Temukan <span className="text-blue-200">Kesempatan</span> Terbaik<br/> <span className="text-blue-200">#Bangun</span>SuksesAnda</h1>
        
        <div className="flex flex-wrap">
            <div class="w-full sm:w-1/3"></div>

            <div class="w-full w-1/3 sm:w-1/3 mt-3 h-12">

              <div className="flex items-center">
                  <input class=" ml-5 mr-0 bg-white focus:outline-none focus:shadow-outline  py-3 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Cari Pekerjaan Impian">
                </input>

                  <a href="#" class="mr-5 ml-0 text-sm py-4 px-10  leading-none   text-white  hover:border-transparent hover:text-black hover:bg-orange-400 lg:mt-0 bg-orange-500">Cari</a>
            
            </div>
            </div>
            <div class="w-full sm:w-w-1/3"></div>
        </div>

        </section>
            
        </>
    )
}
