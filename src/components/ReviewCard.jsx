import React, { Component } from 'react'

function ReviewCard(props) {

    function generateStarSVG() {
        return (
            <svg width="20" height="20" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z" fill="#3F95C6"/>
            </svg>
        );
    }

    const user = props.user;

    const profilePicture = "url(" + user.imageURL + ")";

    return(
        <>

            <div class="bg-white shadow-xl w-80 border-dotted border-skyTechBlue border-2 rounded-md px-5 py-6">
                
                {/* picture + stars + customer name container */}
                <div class="flex flex-row gap-3 mb-2">

                    <div class="w-12 h-12 overflow-hidden bg-cover bg-no-repeat bg-center rounded-full" style={{backgroundImage : profilePicture}}>
                        {/* picture */}
                    </div>

                    {/* customer name and stars container*/}
                    <div>

                        <div class="text-skyTechBlue" style = {{letterSpacing : "1px"}}>
                            {/* customer name */}
                            {user.userName}
                        </div>

                        <div class="flex flex-row">
                            {/* stars */}

                            
                            {Array.from({ length: user.numberOfStars }, () => (
                                generateStarSVG()
                            ))}
                            
                        </div>
                        
                    </div>

                </div>

                <div class="text-black opacity-50 font-light" style = {{letterSpacing : "1px"}}>
                    {/* text */}
                    {user.message}
                </div>

            </div>

        </>
    );

}

export default ReviewCard