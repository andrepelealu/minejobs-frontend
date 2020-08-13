import React from 'react'

export default function Search() {
    return (
        <>
            <div className="flex items-center m-10 ">
                  <input class=" ml-5 mr-0 bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Cari Pekerjaan Impian"/>
                  <a href="#" class="mr-5 ml-0 text-sm py-3 px-10  leading-none border  text-white border-white hover:border-transparent hover:text-black hover:bg-orange-400 lg:mt-0 bg-orange-500">Cari</a>
            </div>
        </>
    )
}
