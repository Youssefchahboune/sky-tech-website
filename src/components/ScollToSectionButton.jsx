import React from "react";
import '../App.css';
import { Link } from 'react-scroll';

function ScrollToSectionButton(props) {
    return (
        <button class='bg-[#3F95C6] py-[2px] w-[100px] text-left pl-[14px] rounded-full'>
            <Link to={props.id} smooth={true} duration={500}>

                <div class='flex flex-row gap-3'>
                    <div style={{letterSpacing : "1px"}} class='text-white text-[17px]'>
                      {props.buttonText}  
                    </div>
                
                    <svg class='mt-[2px]' width="20" height="20" viewBox="0 0 133 134" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                        <path d="M127 67C127 100.732 99.8709 128 66.5 128C33.1291 128 6 100.732 6 67C6 33.2682 33.1291 6 66.5 6C99.8709 6 127 33.2682 127 67Z" stroke="white" stroke-width="12"/>
                        <path d="M64.5251 96.4749C65.892 97.8417 68.108 97.8417 69.4749 96.4749L91.7487 74.201C93.1156 72.8342 93.1156 70.6181 91.7487 69.2513C90.3819 67.8844 88.1658 67.8844 86.799 69.2513L67 89.0503L47.201 69.2513C45.8342 67.8844 43.6181 67.8844 42.2513 69.2513C40.8844 70.6181 40.8844 72.8342 42.2513 74.201L64.5251 96.4749ZM63.5 40L63.5 94L70.5 94L70.5 40L63.5 40Z" fill="white"/>
                    </svg>
                </div>
                
            </Link>
        </button>
    )
}

export default ScrollToSectionButton;