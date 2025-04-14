import React from 'react'

import Imf from "../../assets/imf.png"
import Oqtepa from "../../assets/oqtepa.png"
import Bobur from "../../assets/bobur.png"
import Infity from "../../assets/infity.png"
import Intel from "../../assets/intel.png"
import Phone from "../../assets/phone.png"
import Globex from "../../assets/globex.png"
import Yakkasaroy from "../../assets/yakkasaroy.png"

const brands = [
    { id: 1, logo: Imf },
    { id: 2, logo: Oqtepa },
    { id: 3, logo: Bobur },
    { id: 4, logo: Infity },
    { id: 5, logo: Intel },
    { id: 6, logo: Phone },
    { id: 7, logo: Globex },
    { id: 8, logo: Yakkasaroy },
];

const Brand = () => {
    return (
        <>
            <section id='partners' className='md:bg-teal-900 bg-white py-12 mt-10 '>
                <div className="max-w-[1420px] mx-auto px-4">
                    <h1 data-aos="fade-up" className='text-4xl md:text-6xl md:text-white text-black font-semibold text-center'>
                        БРЕНДЫ, С КОТОРЫМИ МЫ РАБОТАЕМ:
                    </h1>
                </div>
            </section>

            <div className="bg-[#f7f7f7] py-12">
                <div className="max-w-[1420px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="bg-white p-6 flex items-center justify-center  rounded-md"
                        >
                            <img
                                src={brand.logo}
                                alt={`brand-${brand.id}`}
                                className="max-h-15 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Brand;
