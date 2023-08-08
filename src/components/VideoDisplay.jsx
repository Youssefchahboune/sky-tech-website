import React, { Component } from 'react'
import '../App.css';

function VideoDisplay(props) { 


    const titleAndMessagePopUp = ["learn More About Video" , "[...]"];

    return (

        <>

            <div class="flex flex-row justify-center gap-14 flex-wrap">

                <div>
                    <iframe class="rounded-xl shadow-2xl" width="560" height="315" src={props.videoYoutubeURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>


                <div class="flex flex-col mt-4">

                    <div>
                        <div style={{color : "rgba(0,0,0,0.5)"}} class="flex gap-2 text-[40px]">
                            Drone <span class="animate-bounce text-skyTechBlue">Video</span>
                        </div> 

                        <span class="font-thin text-lg text-black opacity-50">Test flight video of a drone</span>
                        
                    </div>

                    <div style = {{lineHeight : "1.05", letterSpacing : "1px"}} class="text-[25px] w-96 font-light mt-7 mb-10 text-black opacity-50">
                        Explore breathtaking aerial masterpieces in our drone photo gallery. With 4K camera resolution, each photo captures stunning landscapes and iconic landmarks.
                    </div>

                    <div class ="flex gap-5">
                        <button class="shadow-gray-300 rounded-sm shadow-md text-white bg-skyTechBlue px-4 text-[17px] opacity-100 hover:opacity-50 hover:-translate-y-1 duration-300 ease-in-out ">
                            <a href="https://www.youtube.com/@dronetvofficial" target='_blank'> Watch More </a>
                        </button>

                        <button onClick={() => {

                            props.learnMoreMessage(titleAndMessagePopUp);
                            
                            }} class="text-skyTechBlue text-[17px] rounded-sm border-2 px-4 border-skyTechBlue flex gap-3 justify-center hover:bg-skyTechBlue hover:-translate-y-1 hover:text-white duration-500 ease-in-out">
                           Learn More
                        </button>
                    </div>

                </div>


            </div>
  
        </>

    );
}
export default VideoDisplay