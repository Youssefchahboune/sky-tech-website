import React from 'react';
import '../App.css';
import ScrollToSectionButton from './ScollToSectionButton';

function WebsiteHeader() { 

    const backgroundImageForHeader = 'url(/headerBG.jpg)'

    return(
        <div style={{backgroundImage : backgroundImageForHeader}} class="h-screen bg-cover bg-no-repeat bg-center">
            
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* do nav bar later*/}

            <div class='flex flex-col gap-12 ml-[65px] pt-44 absolute inset-0'>
                <div style={{lineHeight : "1.05"}} class='text-white text-[80px] w-[700px]'>
                    <span class='text-skyTechBlue'>Sky</span> Tech: Elevating the Future 
                    with Cutting-Edge <span class='text-skyTechBlue'>Drones</span>
                </div>

                <div style={{lineHeight : "1.05", letterSpacing: "1.5px"}} class='text-white font-light text-[18px] w-[575px] opacity-[85%] border-l-2 border-l-white pl-3'>
                    Discorver The next level of innovation with Sky Tech's cutting-edge drones. From stunning aerial views to groundbreaking applications, we're committed to shaping the future of unmanned aerial vehicles. Soar with us and unlock the limitless possibilities of the skies.
                </div>

                <div>
                    <ScrollToSectionButton id="productSection" buttonText="Products" ></ScrollToSectionButton>
                </div>
            </div>

            
        </div>
    )
}

export default WebsiteHeader;