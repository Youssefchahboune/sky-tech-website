import React, { Component, useState } from 'react'

function ProductSelector() {

    const drone1 = {
        index : 1,
        productName : "Drone-Mini",
        pictureURL : "/dronemini.png",
        popularChoice : false,
        description : "Light weight drone",
        features : ["Camera 4k resolution", "Light weight drone", "High speed"],
        price : 1500.99
    }

    const drone2 = {
        index : 2,
        productName : "Drone-Tech",
        pictureURL : "/dronetech.png",
        popularChoice : true,
        description : "Military spy drone",
        features : ["Camera 4k resolution", "Hard metal shell ", "Silence mode"],
        price : 2500.99
    }

    const drone3 = {
        index : 3,
        productName : "Drone-Viper",
        pictureURL : "/droneviper.png",
        popularChoice : false,
        description : "Filming drone",
        features : ["Camera 4k resolution", "360 camera rotation", "High altitude"],
        price : 3500.99
    }

    const [productDisplay, setProductDisplay] = useState(drone2);


    function generateArrowPointingRightSVG() {
        return(
            <div class="-rotate-90">
                <svg class='mt-[2px]' width="20" height="20" viewBox="0 0 133 134" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <path d="M127 67C127 100.732 99.8709 128 66.5 128C33.1291 128 6 100.732 6 67C6 33.2682 33.1291 6 66.5 6C99.8709 6 127 33.2682 127 67Z" stroke="white" stroke-width="12"/>
                    <path d="M64.5251 96.4749C65.892 97.8417 68.108 97.8417 69.4749 96.4749L91.7487 74.201C93.1156 72.8342 93.1156 70.6181 91.7487 69.2513C90.3819 67.8844 88.1658 67.8844 86.799 69.2513L67 89.0503L47.201 69.2513C45.8342 67.8844 43.6181 67.8844 42.2513 69.2513C40.8844 70.6181 40.8844 72.8342 42.2513 74.201L64.5251 96.4749ZM63.5 40L63.5 94L70.5 94L70.5 40L63.5 40Z" fill="white"/>
                </svg>
            </div>
        );
    }


    return(
        <>

            <div class="flex flex-col">

                <div class="flex flex-row gap-10 justify-center items-center">

                    <div onClick={() => setProductDisplay(drone1)}  style={productDisplay.index === 1? {opacity : "100%"} : {opacity : "45%"}} class="bg-white w-40 text-center cursor-pointer hover:-translate-y-2 duration-300 ease-in-out">
                        
                        <div class="bg-skyTechBlue w-7 h-7 rounded-full text-white text-lg">
                            1
                        </div>

                        <div>
                            <img src={drone1.pictureURL} />
                        </div>

                        <div class="text-black opacity-50 text-xl" style={{letterSpacing : 1}}>{drone1.productName}</div>

                    </div>

                    <div onClick={() => setProductDisplay(drone2)} style={productDisplay.index === 2? {opacity : "100%"} : {opacity : "45%"}} class="bg-white w-40  text-center cursor-pointer hover:-translate-y-2 duration-300 ease-in-out">
                        
                        <div class="bg-skyTechBlue w-7 h-7 rounded-full text-white text-lg">
                            2
                        </div>

                        <div>
                            <img src={drone2.pictureURL} />
                        </div>

                        <div class="text-black opacity-50 text-xl" style={{letterSpacing : 1}}>{drone2.productName}</div>

                    </div>

                    <div onClick={() => setProductDisplay(drone3)} style={productDisplay.index === 3? {opacity : "100%"} : {opacity : "45%"}} class="bg-white w-32 text-center cursor-pointer hover:-translate-y-2 duration-300 ease-in-out">
                        
                        <div class="bg-skyTechBlue w-7 h-7 rounded-full text-white text-lg">
                            3
                        </div>

                        <div>
                            <img src={drone3.pictureURL} />
                        </div>

                        <div class="text-black opacity-50 text-xl mt-1" style={{letterSpacing : 1}} >{drone3.productName}</div>

                    </div>

                    

                </div>

                <div class="flex justify-center">

                    <div class="flex justify-center mt-8 bg-white rounded-xl flex-wrap py-5 items-center">

                        {/* Product's Picture container */}
                        <div class="flex justify-center items-center">
                            <div class="w-[500px]">
                                <img src={productDisplay.pictureURL} class="mx-auto" />
                            </div>
                        </div>

                        {/* Product's details container */}
                        <div class="py-0 px-10 border-l-2">
                            <div class="flex flex-row gap-2">
                                <div class="text-2xl text-black opacity-50" style={{letterSpacing : 1}}>{productDisplay.productName}</div>

                                {productDisplay.popularChoice ? <div class="text-xs mt-3 animate-pulse">[ <span class="text-skyTechBlue">Popular Choice</span> ]</div> : <></> }
                            </div>

                            <div class="font-thin text-black opacity-50 mb-3" style={{letterSpacing : 0.5}}>
                                {productDisplay.description}
                            </div>

                            <div class="mb-2">
                                <div class="text-black opacity-50">Features</div>
                                <ul class="list-disc ml-6">
                                    {productDisplay.features.map((feature) => (
                                        <li class="text-black opacity-50 font-light" style={{letterSpacing : 1}}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div class="flex flex-row gap-3 items-center">
                                <div class="text-skyTechBlue text-[30px]">
                                $ {productDisplay.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}  
                                </div>

                                <div>
                                    <button class="bg-skyTechBlue text-white px-2 py-1 rounded-full flex gap-5 opacity-100 hover:opacity-50 duration-500 ease-in-out">
                                        <span>Pre-order</span> 
                                        
                                        <span>{generateArrowPointingRightSVG()}</span>
                                    </button>
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