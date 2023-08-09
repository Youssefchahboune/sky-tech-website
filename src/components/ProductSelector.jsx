import React, { Component, useState } from 'react'

function ProductSelector() {

    const drone1 = {
        productName : "Drone-Mini",
        pictureURL : "/dronemini.png",
        popularChoice : false,
        description : "light weight drone",
        features : ["Camera 4k resolution", "Light weight drone", "High speed"],
        price : 1500.99
    }

    const drone2 = {
        productName : "Drone-Tech",
        pictureURL : "/dronetech.png",
        popularChoice : true,
        description : "Military spy drone",
        features : ["Camera 4k resolution", "Light weight drone", "High speed"],
        price : 2500.99
    }

    const drone3 = {
        productName : "Drone-Viper",
        pictureURL : "/droneviper.png",
        popularChoice : false,
        description : "Filming drone",
        features : ["Camera 4k resolution", "Light weight drone", "High speed"],
        price : 3500.99
    }

    const [productDisplay, setProductDisplay] = useState(drone2);





    return(
        <>

            <div class="flex flex-col">

                <div class="flex flex-row gap-10 justify-center items-center">

                    <div onClick={() => setProductDisplay(drone1)} class="bg-white w-40 text-center cursor-pointer hover:-translate-y-2 duration-300 ease-in-out">
                        
                        <div class="bg-skyTechBlue w-7 h-7 rounded-full text-white text-lg">
                            1
                        </div>

                        <div>
                            <img src={drone1.pictureURL} />
                        </div>

                        <div>{drone1.productName}</div>

                    </div>

                    <div onClick={() => setProductDisplay(drone2)} class="bg-white w-40  text-center cursor-pointer hover:-translate-y-2 duration-300 ease-in-out">
                        
                        <div class="bg-skyTechBlue w-7 h-7 rounded-full text-white text-lg">
                            2
                        </div>

                        <div>
                            <img src={drone2.pictureURL} />
                        </div>

                        <div>{drone2.productName}</div>

                    </div>

                    <div onClick={() => setProductDisplay(drone3)} class="bg-white w-32 text-center cursor-pointer hover:-translate-y-2 duration-300 ease-in-out">
                        
                        <div class="bg-skyTechBlue w-7 h-7 rounded-full text-white text-lg">
                            3
                        </div>

                        <div>
                            <img src={drone3.pictureURL} />
                        </div>

                        <div class="mt-1">{drone3.productName}</div>

                    </div>

                    

                </div>

                <div class="flex justify-center">

                    <div class="flex justify-center mt-12 bg-white shadow-xl rounded-lg w1/2 flex-wrap gap-5 px-10">

                    <div class="flex justify-center items-center">
                        <div class="w-96">
                            <img src={productDisplay.pictureURL} class="mx-auto" />
                        </div>
                    </div>


                        <div class="py-10 pr-10">
                            <div class="flex flex-row gap-2">
                                <div>{productDisplay.productName}</div>

                                {productDisplay.popularChoice ? <div class="text-xs mt-1">[ <span class="text-skyTechBlue">Popular Choice</span> ]</div> : <></> }
                            </div>

                            <div class="font-thin text-black opacity-50 mb-3">
                                {productDisplay.description}
                            </div>

                            <div class="mb-2">
                                Features
                                <ul class="list-disc ml-6">
                                    {productDisplay.features.map((feature) => (
                                        <li class="text-black opacity-50 font-light">{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div class="flex flex-row gap-3 items-center">
                                <div class="text-skyTechBlue text-[30px]">
                                $ {productDisplay.price}  
                                </div>

                                <div>
                                    <button class="bg-skyTechBlue text-white w-14 rounded-full">Buy Now</button>
                                </div>
                            </div>

                            <div class="flex flex-row items-center gap-2 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
                                <div class="text-skyTechBlue">
                                    Learn more
                                </div>

                                <div>
                                    {/* SVG arrow pointing right */}
                                    <svg width="" height="8" viewBox="0 0 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.3536 4.35355C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464466C33.9763 0.269204 33.6597 0.269204 33.4645 0.464466C33.2692 0.659728 33.2692 0.976311 33.4645 1.17157L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53553C33.6597 7.7308 33.9763 7.7308 34.1716 7.53553L37.3536 4.35355ZM0 4.5H37V3.5H0V4.5Z" fill="#3F95C6"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    
                    </div>

                </div>

            </div>
        
    
        </>
    );
}

export default ProductSelector