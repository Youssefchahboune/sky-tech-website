import React from "react";


function TopFeatures(props) {

    return(
        
        <div className="flex flex-col justify-end mb-5">

            <div class="flex justify-center mb-5">
                {props.svg}
            </div>

            <div class="text-center text-2xl w-52 mb-7" style={{letterSpacing : "0.5px"}}>
                {props.textDiv}
            </div>

            <button class="hover:translate-x-3 duration-300 ease-in-out" onClick={() => props.setLearnMoreMessage(props.message)}>
                <div class="text-skyTechBlue flex gap-3 justify-center">
                    <div class="text-2xl" style={{letterSpacing: "1.5px"}}>
                    Learn more  
                    </div>
                    
                    <div class="mt-3">
                        <svg width="38" height="8" viewBox="0 0 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.3536 4.35355C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464466C33.9763 0.269204 33.6597 0.269204 33.4645 0.464466C33.2692 0.659728 33.2692 0.976311 33.4645 1.17157L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53553C33.6597 7.7308 33.9763 7.7308 34.1716 7.53553L37.3536 4.35355ZM0 4.5H37V3.5H0V4.5Z" fill="#3F95C6"/>
                        </svg>
                    </div>
                </div>
            </button>

        </div>

    );
}

export default TopFeatures;