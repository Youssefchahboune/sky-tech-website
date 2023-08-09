import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WebsiteHeader from './components/WebsiteHeader';
import TopFeatures from './components/TopFeatures';
import VideoDisplay from './components/VideoDisplay';
import { useEffect, useState } from 'react';
import ReviewCard from './components/ReviewCard';
import ProductSelector from './components/ProductSelector';

function App() {


  function generateLogoStampSVG() {
    return (
      <svg width="65" height="65" viewBox="0 0 122 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.667" cy="21.2777" r="4" transform="rotate(-6.14302 18.667 21.2777)" fill="#3F95C6"/>
        <path d="M32.5803 4.88814C33.9551 3.36635 36.3635 3.41911 37.6711 4.99967C38.9131 6.50097 38.62 8.73825 37.0332 9.86939L21.7308 20.7775C21.5661 20.8949 21.3765 20.9728 21.1768 21.0051C19.9492 21.2039 19.155 19.7494 19.9877 18.8276L32.5803 4.88814Z" fill="#3F95C6"/>
        <path d="M6.48591 38.4402C5.16542 40.0094 2.75648 40.0414 1.39402 38.5077C0.0998782 37.0509 0.314108 34.8047 1.86031 33.6184L16.7689 22.1806C16.9294 22.0575 17.1162 21.973 17.3147 21.9336C18.5346 21.6919 19.3795 23.1176 18.5796 24.0681L6.48591 38.4402Z" fill="#3F95C6"/>
        <circle cx="102.51" cy="99.2117" r="4" transform="rotate(-7.75054 102.51 99.2117)" fill="#3F95C6"/>
        <path d="M115.7 82.9602C117.031 81.4004 119.44 81.3856 120.791 82.9289C122.075 84.3947 121.845 86.6394 120.29 87.8146L105.3 99.1477C105.139 99.2696 104.951 99.3528 104.753 99.3907C103.531 99.6239 102.696 98.1922 103.503 97.2474L115.7 82.9602Z" fill="#3F95C6"/>
        <path d="M90.5567 117.231C89.2807 118.837 86.8736 118.936 85.4687 117.441C84.1342 116.021 84.2853 113.77 85.7976 112.541L100.38 100.689C100.536 100.562 100.721 100.472 100.918 100.427C102.131 100.151 103.015 101.553 102.242 102.525L90.5567 117.231Z" fill="#3F95C6"/>
        <circle cx="21.9191" cy="101.917" r="4" fill="#3F95C6"/>
        <path d="M40.9596 112.534C42.7254 113.58 43.148 115.947 41.8527 117.538C40.6224 119.05 38.3668 119.204 36.9431 117.873L23.2193 105.05C23.0715 104.911 22.9576 104.741 22.8865 104.552C22.4496 103.39 23.7221 102.326 24.7916 102.959L40.9596 112.534Z" fill="#3F95C6"/>
        <path d="M3.20513 90.6854C1.51637 89.5188 1.2602 87.1272 2.66368 85.6303C3.99673 84.2084 6.25792 84.2126 7.58536 85.6393L20.3772 99.3878C20.515 99.536 20.6168 99.7139 20.6745 99.9077C21.0289 101.098 19.6852 102.07 18.6624 101.363L3.20513 90.6854Z" fill="#3F95C6"/>
        <circle cx="96.6259" cy="17.7448" r="4" fill="#3F95C6"/>
        <path d="M115.96 28.5339C117.725 29.5796 118.148 31.9473 116.853 33.5384C115.622 35.0497 113.367 35.2036 111.943 33.8732L98.2193 21.0496C98.0715 20.9115 97.9576 20.7412 97.8865 20.552C97.4496 19.3897 98.7221 18.326 99.7916 18.9594L115.96 28.5339Z" fill="#3F95C6"/>
        <path d="M78.2051 6.68541C76.5164 5.51881 76.2602 3.12718 77.6637 1.63025C78.9967 0.208428 81.2579 0.212584 82.5854 1.6393L95.3772 15.3878C95.515 15.536 95.6168 15.7139 95.6745 15.9077C96.0289 17.0977 94.6852 18.0699 93.6624 17.3633L78.2051 6.68541Z" fill="#3F95C6"/>
        <path d="M87.349 26.4106C89.5602 24.6509 92.54 27.3286 91.0176 29.7075L74.3699 55.7216C72.6108 58.4704 72.835 62.0388 74.9243 64.546L94.6599 88.2292C96.5063 90.4449 93.7461 93.5044 91.3453 91.9033L65.6834 74.7892C62.9668 72.9775 59.3876 73.128 56.8324 75.1614L32.651 94.4052C30.4398 96.1649 27.46 93.4872 28.9824 91.1083L45.6301 65.0942C47.3892 62.3454 47.165 58.7769 45.0757 56.2697L25.3401 32.5866C23.4937 30.3708 26.2539 27.3113 28.6547 28.9124L54.3166 46.0265C57.0332 47.8383 60.6124 47.6878 63.1676 45.6543L87.349 26.4106Z" stroke="#3F95C6" stroke-width="5"/>
        <circle cx="18.667" cy="21.2777" r="4" transform="rotate(-6.14302 18.667 21.2777)" fill="#3F95C6"/>
        <path d="M32.5803 4.88814C33.9551 3.36635 36.3635 3.41911 37.6711 4.99967C38.9131 6.50097 38.62 8.73825 37.0332 9.86939L21.7308 20.7775C21.5661 20.8949 21.3765 20.9728 21.1768 21.0051C19.9492 21.2039 19.155 19.7494 19.9877 18.8276L32.5803 4.88814Z" fill="#3F95C6"/>
        <path d="M6.48591 38.4402C5.16542 40.0094 2.75648 40.0414 1.39402 38.5077C0.0998782 37.0509 0.314108 34.8047 1.86031 33.6184L16.7689 22.1806C16.9294 22.0575 17.1162 21.973 17.3147 21.9336C18.5346 21.6919 19.3795 23.1176 18.5796 24.0681L6.48591 38.4402Z" fill="#3F95C6"/>
        <circle cx="102.51" cy="99.2117" r="4" transform="rotate(-7.75054 102.51 99.2117)" fill="#3F95C6"/>
        <path d="M115.7 82.9602C117.031 81.4004 119.44 81.3856 120.791 82.9289C122.075 84.3947 121.845 86.6394 120.29 87.8146L105.3 99.1477C105.139 99.2696 104.951 99.3528 104.753 99.3907C103.531 99.6239 102.696 98.1922 103.503 97.2474L115.7 82.9602Z" fill="#3F95C6"/>
        <path d="M90.5567 117.231C89.2807 118.837 86.8736 118.936 85.4687 117.441C84.1342 116.021 84.2853 113.77 85.7976 112.541L100.38 100.689C100.536 100.562 100.721 100.472 100.918 100.427C102.131 100.151 103.015 101.553 102.242 102.525L90.5567 117.231Z" fill="#3F95C6"/>
        <circle cx="21.9191" cy="101.917" r="4" fill="#3F95C6"/>
        <path d="M40.9596 112.534C42.7254 113.58 43.148 115.947 41.8527 117.538C40.6224 119.05 38.3668 119.204 36.9431 117.873L23.2193 105.05C23.0715 104.911 22.9576 104.741 22.8865 104.552C22.4496 103.39 23.7221 102.326 24.7916 102.959L40.9596 112.534Z" fill="#3F95C6"/>
        <path d="M3.20513 90.6854C1.51637 89.5188 1.2602 87.1272 2.66368 85.6303C3.99673 84.2084 6.25792 84.2126 7.58536 85.6393L20.3772 99.3878C20.515 99.536 20.6168 99.7139 20.6745 99.9077C21.0289 101.098 19.6852 102.07 18.6624 101.363L3.20513 90.6854Z" fill="#3F95C6"/>
        <circle cx="96.6259" cy="17.7448" r="4" fill="#3F95C6"/>
        <path d="M115.96 28.5339C117.725 29.5796 118.148 31.9473 116.853 33.5384C115.622 35.0497 113.367 35.2036 111.943 33.8732L98.2193 21.0496C98.0715 20.9115 97.9576 20.7412 97.8865 20.552C97.4496 19.3897 98.7221 18.326 99.7916 18.9594L115.96 28.5339Z" fill="#3F95C6"/>
        <path d="M78.2051 6.68541C76.5164 5.51881 76.2602 3.12718 77.6637 1.63025C78.9967 0.208428 81.2579 0.212584 82.5854 1.6393L95.3772 15.3878C95.515 15.536 95.6168 15.7139 95.6745 15.9077C96.0289 17.0977 94.6852 18.0699 93.6624 17.3633L78.2051 6.68541Z" fill="#3F95C6"/>
      </svg>
    );
  }

  function generatePhoneSVG() {
    return(
      <svg width="75" height="75" viewBox="0 0 115 202" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="105" height="192" rx="10" stroke="#3F95C6" stroke-width="10"/>
        <circle cx="57" cy="172" r="10" fill="#3F95C6"/>
        <rect x="18" y="21" width="20" height="20" rx="3" fill="#D7D7D7"/>
        <rect x="18" y="53" width="49" height="40" rx="3" fill="#D7D7D7"/>
        <rect x="18" y="105" width="75" height="15" rx="3" fill="#D7D7D7"/>
        <rect x="47" y="21" width="20" height="20" rx="3" fill="#D7D7D7"/>
        <rect x="76" y="21" width="20" height="20" rx="3" fill="#D7D7D7"/>
      </svg>
    );
  }

  function generateTimerSVG() {
    return(
      <svg width="65" viewBox="0 0 141 164" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="94" r="65" stroke="#3F95C6" stroke-width="10"/>
        <rect x="63" y="11" width="15" height="16" fill="#3F95C6"/>
        <rect x="49" width="42" height="11" rx="5" fill="#3F95C6"/>
        <rect x="123.699" y="31" width="12" height="15" transform="rotate(45.5 123.699 31)" fill="#3F95C6"/>
        <rect x="126.485" y="23" width="20" height="12" transform="rotate(45 126.485 23)" fill="#3F95C6"/>
        <path d="M105.667 128.433C99.955 134.348 92.8726 138.762 85.047 141.286C77.2213 143.81 68.894 144.365 60.8027 142.902C52.7114 141.439 45.1058 138.003 38.6596 132.898C32.2134 127.794 27.1256 121.178 23.8469 113.637C20.5682 106.097 19.1997 97.864 19.8627 89.6682C20.5257 81.4724 23.1998 73.5667 27.6479 66.6512C32.0961 59.7357 38.1812 54.024 45.3641 50.0219C52.5469 46.0199 60.606 43.851 68.8273 43.7075L69.6999 93.6999L105.667 128.433Z" fill="#D7D7D7"/>
      </svg>
    );
  }

  function generate4kCameraSVG() {
    return(
      <svg width="90" viewBox="0 0 235 134" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="158" height="124" rx="15" stroke="#3F95C6" stroke-width="10"/>
        <path d="M74.3926 94H57.4053V85.8994H33.6846V71.5439L42.8105 39.4834H59.6611L50.6377 71.5439V73.3896H57.4053V61.9395H74.3926V94ZM103.069 94H86.082V39.4834H103.069V58.6582L114.007 39.4834H134.515L118.963 65.4941L135.13 94H114.588L105.599 75.8506L103.069 78.9609V94Z" fill="#D7D7D7"/>
        <path d="M181 48.3268L230 18.8438L230 112.092L181 82.1936L181 48.3268Z" stroke="#3F95C6" stroke-width="10"/>
      </svg>
    );
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const videoYoutubeURLOfADrone = "https://www.youtube.com/embed/xi85DAbv5oU?autoplay=1&loop=1&playlist=xi85DAbv5oU&mute=1&controls=0";

  const appOnPhoneText = <div style={{color : "rgba(0,0,0,0.5)"}} class="">Our intuitive <span class="text-skyTechBlue">app</span> efficiently controls the drone with ease.</div>;
  const fligthTimeText = <div style={{color : "rgba(0,0,0,0.5)"}} class="">Our drones have a remarkable <span class="text-skyTechBlue">2 hour</span> flight time. </div>;
  const resolution4KText = <div style={{color : "rgba(0,0,0,0.5)"}} class="">The camera resolution is <span class="text-skyTechBlue">4K</span>, providing stunning visuals.</div>;

  const learnMoreWindowPhone = ["Our Intuitive App", "[...]"];
  const learnMoreWindowTimer = ["Timer Info", "[...]"];
  const learnMoreWindow4K = ["4K Resolution", "4K resolution cameras on drones have revolutionized aerial imagery, delivering unparalleled clarity and detail. With approximately 4,000 pixels in width, these cameras capture vibrant colors and intricate textures, creating stunning visuals from the sky. Whether it's landscapes or cityscapes, the resulting footage is not only visually captivating but also versatile, finding applications in cinema, documentaries, travel vlogs, and marketing. As technology advances, the fusion of drones and 4K cameras continues to push the boundaries of visual storytelling, offering fresh perspectives and endless possibilities."];

  const scrollToTopOfWindow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const generateGoToTopBtnDesign = () => {
    return (
      <svg width="45" height="45" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="87.5" cy="87.5" r="87.5" fill="#3F95C6"/>
        <path d="M113.789 55.4578C118.212 51.9384 124.171 57.2939 121.126 62.0516L104.479 88.0657C103.306 89.8983 103.455 92.2772 104.848 93.9487L124.584 117.632C128.277 122.063 122.756 128.182 117.955 124.98L92.2929 107.866C90.4818 106.658 88.0957 106.759 86.3922 108.114L62.2108 127.358C57.7883 130.877 51.8289 125.522 54.8736 120.764L71.5212 94.75C72.694 92.9175 72.5445 90.5385 71.1517 88.8671L51.4161 65.1839C47.7233 60.7524 53.2436 54.6334 58.0453 57.8357L83.7071 74.9497C85.5182 76.1576 87.9043 76.0572 89.6078 74.7016L113.789 55.4578Z" fill="white"/>
        <circle cx="46.667" cy="52.2777" r="4" transform="rotate(-6.14302 46.667 52.2777)" fill="white"/>
        <path d="M60.5803 35.8881C61.9551 34.3664 64.3635 34.4191 65.6711 35.9997V35.9997C66.9131 37.501 66.62 39.7382 65.0332 40.8694L49.7308 51.7775C49.5661 51.8949 49.3765 51.9728 49.1768 52.0051V52.0051C47.9492 52.2039 47.155 50.7494 47.9877 49.8276L60.5803 35.8881Z" fill="white"/>
        <path d="M34.4859 69.4402C33.1654 71.0094 30.7565 71.0414 29.394 69.5077V69.5077C28.0999 68.0509 28.3141 65.8047 29.8603 64.6184L44.7689 53.1806C44.9294 53.0575 45.1162 52.973 45.3147 52.9336V52.9336C46.5346 52.6919 47.3795 54.1176 46.5796 55.0681L34.4859 69.4402Z" fill="white"/>
        <circle cx="130.51" cy="130.212" r="4" transform="rotate(-7.75054 130.51 130.212)" fill="white"/>
        <path d="M143.7 113.96C145.031 112.4 147.44 112.386 148.791 113.929V113.929C150.075 115.395 149.845 117.639 148.29 118.815L133.3 130.148C133.139 130.27 132.951 130.353 132.753 130.391V130.391C131.531 130.624 130.696 129.192 131.503 128.247L143.7 113.96Z" fill="white"/>
        <path d="M118.557 148.231C117.281 149.837 114.874 149.936 113.469 148.441V148.441C112.134 147.021 112.285 144.77 113.798 143.541L128.38 131.689C128.536 131.562 128.721 131.472 128.918 131.427V131.427C130.131 131.151 131.015 132.553 130.242 133.525L118.557 148.231Z" fill="white"/>
        <circle cx="49.9191" cy="132.917" r="4" fill="white"/>
        <path d="M68.9596 143.534C70.7254 144.58 71.148 146.947 69.8527 148.538V148.538C68.6224 150.05 66.3668 150.204 64.9431 148.873L51.2193 136.05C51.0715 135.911 50.9576 135.741 50.8865 135.552V135.552C50.4496 134.39 51.7221 133.326 52.7916 133.959L68.9596 143.534Z" fill="white"/>
        <path d="M31.2051 121.685C29.5164 120.519 29.2602 118.127 30.6637 116.63V116.63C31.9967 115.208 34.2579 115.213 35.5854 116.639L48.3772 130.388C48.515 130.536 48.6168 130.714 48.6745 130.908V130.908C49.029 132.098 47.6852 133.07 46.6624 132.363L31.2051 121.685Z" fill="white"/>
        <circle cx="124.626" cy="48.7448" r="4" fill="white"/>
        <path d="M143.96 59.5339C145.725 60.5796 146.148 62.9473 144.853 64.5384V64.5384C143.622 66.0497 141.367 66.2036 139.943 64.8732L126.219 52.0496C126.071 51.9115 125.958 51.7412 125.886 51.552V51.552C125.45 50.3897 126.722 49.326 127.792 49.9594L143.96 59.5339Z" fill="white"/>
        <path d="M106.205 37.6854C104.516 36.5188 104.26 34.1272 105.664 32.6303V32.6303C106.997 31.2084 109.258 31.2126 110.585 32.6393L123.377 46.3878C123.515 46.536 123.617 46.7139 123.674 46.9077V46.9077C124.029 48.0977 122.685 49.0699 121.662 48.3633L106.205 37.6854Z" fill="white"/>
        <path d="M113.789 55.4578C118.212 51.9384 124.171 57.2939 121.126 62.0516L104.479 88.0657C103.306 89.8983 103.455 92.2772 104.848 93.9487L124.584 117.632C128.277 122.063 122.756 128.182 117.955 124.98L92.2929 107.866C90.4818 106.658 88.0957 106.759 86.3922 108.114L62.2108 127.358C57.7883 130.877 51.8289 125.522 54.8736 120.764L71.5212 94.75C72.694 92.9175 72.5445 90.5385 71.1517 88.8671L51.4161 65.1839C47.7233 60.7524 53.2436 54.6334 58.0453 57.8357L83.7071 74.9497C85.5182 76.1576 87.9043 76.0572 89.6078 74.7016L113.789 55.4578Z" fill="white"/>
        <circle cx="46.667" cy="52.2777" r="4" transform="rotate(-6.14302 46.667 52.2777)" fill="white"/>
        <path d="M60.5803 35.8881C61.9551 34.3664 64.3635 34.4191 65.6711 35.9997V35.9997C66.9131 37.501 66.62 39.7382 65.0332 40.8694L49.7308 51.7775C49.5661 51.8949 49.3765 51.9728 49.1768 52.0051V52.0051C47.9492 52.2039 47.155 50.7494 47.9877 49.8276L60.5803 35.8881Z" fill="white"/>
        <path d="M34.4859 69.4402C33.1654 71.0094 30.7565 71.0414 29.394 69.5077V69.5077C28.0999 68.0509 28.3141 65.8047 29.8603 64.6184L44.7689 53.1806C44.9294 53.0575 45.1162 52.973 45.3147 52.9336V52.9336C46.5346 52.6919 47.3795 54.1176 46.5796 55.0681L34.4859 69.4402Z" fill="white"/>
        <circle cx="130.51" cy="130.212" r="4" transform="rotate(-7.75054 130.51 130.212)" fill="white"/>
        <path d="M143.7 113.96C145.031 112.4 147.44 112.386 148.791 113.929V113.929C150.075 115.395 149.845 117.639 148.29 118.815L133.3 130.148C133.139 130.27 132.951 130.353 132.753 130.391V130.391C131.531 130.624 130.696 129.192 131.503 128.247L143.7 113.96Z" fill="white"/>
        <path d="M118.557 148.231C117.281 149.837 114.874 149.936 113.469 148.441V148.441C112.134 147.021 112.285 144.77 113.798 143.541L128.38 131.689C128.536 131.562 128.721 131.472 128.918 131.427V131.427C130.131 131.151 131.015 132.553 130.242 133.525L118.557 148.231Z" fill="white"/>
        <circle cx="49.9191" cy="132.917" r="4" fill="white"/>
        <path d="M68.9596 143.534C70.7254 144.58 71.148 146.947 69.8527 148.538V148.538C68.6224 150.05 66.3668 150.204 64.9431 148.873L51.2193 136.05C51.0715 135.911 50.9576 135.741 50.8865 135.552V135.552C50.4496 134.39 51.7221 133.326 52.7916 133.959L68.9596 143.534Z" fill="white"/>
        <path d="M31.2051 121.685C29.5164 120.519 29.2602 118.127 30.6637 116.63V116.63C31.9967 115.208 34.2579 115.213 35.5854 116.639L48.3772 130.388C48.515 130.536 48.6168 130.714 48.6745 130.908V130.908C49.029 132.098 47.6852 133.07 46.6624 132.363L31.2051 121.685Z" fill="white"/>
        <circle cx="124.626" cy="48.7448" r="4" fill="white"/>
        <path d="M143.96 59.5339C145.725 60.5796 146.148 62.9473 144.853 64.5384V64.5384C143.622 66.0497 141.367 66.2036 139.943 64.8732L126.219 52.0496C126.071 51.9115 125.958 51.7412 125.886 51.552V51.552C125.45 50.3897 126.722 49.326 127.792 49.9594L143.96 59.5339Z" fill="white"/>
        <path d="M106.205 37.6854C104.516 36.5188 104.26 34.1272 105.664 32.6303V32.6303C106.997 31.2084 109.258 31.2126 110.585 32.6393L123.377 46.3878C123.515 46.536 123.617 46.7139 123.674 46.9077V46.9077C124.029 48.0977 122.685 49.0699 121.662 48.3633L106.205 37.6854Z" fill="white"/>
        <path d="M103 91.5C103 93.9853 96.5081 96 88.5 96C80.4919 96 74 93.9853 74 91.5C74 89.0147 80.4919 87 88.5 87C96.5081 87 103 89.0147 103 91.5ZM79.51 91.5C79.51 93.0409 83.535 94.29 88.5 94.29C93.465 94.29 97.49 93.0409 97.49 91.5C97.49 89.9591 93.465 87 88.5 87C83.535 87 79.51 89.9591 79.51 91.5Z" fill="#3F95C6"/>
        <path d="M87 19L78.5432 34.1157L95.8621 33.8816L87 19ZM89.4999 92.9797L88.6823 32.4785L85.6826 32.519L86.5001 93.0203L89.4999 92.9797Z" fill="white"/>
      </svg>
    );
  }

  const arrayOfUSer = [
    {userName : "Youssef Chahboune", imageURL : "/droneIMG2.jpg", message : "SkyTech's exceptional service deserves a special mention. From the moment I made my purchase to every flight thereafter, the experience has been seamless. Their customer service is the best !", numberOfStars: 4} ,
    {userName : "Nicholas Martottia", imageURL : "/droneIMG5.jpg", message : " The first thing that struck me was the impressive array of drone models available. SkyTech Drones offers beginners dipping their toes into the drone world seeking cutting-edge technology.", numberOfStars: 5} ,
    {userName : "Tawfiq Jahar", imageURL : "/droneIMG1.jpg", message : "The selection of drones at SkyTech is truly unparalleled. After getting my hands on one, I've been absolutely hooked and can't seem to put it down! I'm incredibly impressed with the range of options they offer.", numberOfStars: 4} ,
  ]

  const [learnMoreWindow, setLearnMoreWindow] = useState([]);

  useEffect(() => {
    if (learnMoreWindow.length !== 0) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [learnMoreWindow]);
 
  return (

    <div>

      {learnMoreWindow.length == 0 ? 
      
        <></> 
        
        : 
        
        /* pop up Learn more message */
        <div class="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)] ">
          <div class="w-3/4 h-3/5 bg-white mt-9 rounded-md p-5 border-4 border-solid border-skyTechBlue">
            
            <div class="flex justify-end">
              <button onClick={() => setLearnMoreWindow([])} class="w-8 bg-skyTechBlue text-white h-8 mx-2 rounded-md opacity-100 hover:opacity-75 duration-300 ease-in-out">X</button>
            </div>

            <div class="text-center text-black opacity-50 text-[25px] mb-4 mt-5">
              {learnMoreWindow[0]}
            </div>

            <div class="text-center text-black opacity-50 font-light text-[20px] px-[12%]" style = {{ letterSpacing : "0.5px"}}>
              <p style={{lineheight: "1.5", letterspacing: "1px"}} class="mb-4">{learnMoreWindow[1]}</p>
            </div>
          </div>
        </div>
        
      }

      {/* Floating Go To Top Button */}
      <div class="flex justify-end mr-[5%] ">
        <button onClick={() => scrollToTopOfWindow()} class="fixed text-white z-10 rounded-full w-10 h-10 bottom-14 opacity-50 transition duration-500 hover:opacity-100 ease-in-out">
          {generateGoToTopBtnDesign()}
        </button>
      </div>
      
      {/* Website Header */}
      <WebsiteHeader />

      {/* Spinning logo stamp */}
      <div class="opacity-50 flex justify-center my-32 animate-custom-rotate">
        {generateLogoStampSVG()}
      </div>

      {/* Top features component */}
      <div class="flex justify-center gap-28 mb-28 flex-wrap">

        <TopFeatures setLearnMoreMessage={setLearnMoreWindow} message={learnMoreWindowPhone} svg={generatePhoneSVG()} textDiv={appOnPhoneText}/>

        <TopFeatures setLearnMoreMessage={setLearnMoreWindow} message={learnMoreWindowTimer} svg={generateTimerSVG()} textDiv={fligthTimeText}/>

        <TopFeatures setLearnMoreMessage={setLearnMoreWindow} message={learnMoreWindow4K} svg={generate4kCameraSVG()} textDiv={resolution4KText}/>

      </div>

      {/* Gallery photo with carousel using npm pakage ract-multi-carousel*/}
      <div id='gallerySection' class="mb-44 text-center">

        <div style={{color : "rgba(0,0,0,0.5)"}} class="text-[40px] flex gap-2 justify-center"> <div>Photo</div> <div class="animate-bounce text-skyTechBlue">Gallery</div></div>

        <div style = {{lineHeight : "1.05", letterSpacing : "1px"}} class="text-black opacity-50 flex justify-center font-light text-[23px] mb-10"> 
          <div class="w-[660px]">
            Explore breathtaking aerial masterpieces in our drone photo gallery. With 4K camera resolution, 
            each photo captures stunning landscapes and iconic landmarks. Immerse yourself in our high- performance drones' artistry.
          </div>
        </div>

        <Carousel 
          responsive={responsive}  
          infinite={true} 
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          draggable={false}>

          <div class="mx-3">
            <img class="" src='/droneIMG1.jpg'/>
          </div>

          <div class="mx-3">
            <img src='/droneIMG2.jpg' alt=''/>
          </div>

          <div class="mx-2">
            <img src='/droneIMG5.jpg' alt=''/>
          </div>

        </Carousel>
      </div>

      {/* show case video with text on the side component*/} 
      <div id='videoSection' class="mb-20">

        <VideoDisplay videoYoutubeURL={videoYoutubeURLOfADrone} learnMoreMessage={setLearnMoreWindow} />

      </div>


      {/* Product Section showcasing 3 drones */}
      <div class="pt-20 mb-20" id="productsSection">

        <div style={{color : "rgba(0,0,0,0.5)"}} class="text-[40px] flex gap-2 justify-center"> <div>Drones / </div> <div class="animate-bounce text-skyTechBlue">Products</div></div>

        <div style = {{lineHeight : "1.05", letterSpacing : "1px"}} class="text-black opacity-50 flex justify-center font-light text-[23px] mb-10"> 
          <div class="w-[660px] text-center">
          Elevate your exploration with our curated collection of cutting-edge drones. Discover your perfect airborne companion at SkyTech Drones
          </div>
        </div>

        <ProductSelector />

      </div>
      
      {/* Customer Reviews Section */}
      <div id='reviewsSection' class="pt-20 mb-20">
        <div style={{color : "rgba(0,0,0,0.5)"}} class="text-[40px] flex gap-2 justify-center"> <div>Customer</div> <div class="animate-bounce text-skyTechBlue">Reviews</div></div>

        <div style = {{lineHeight : "1.05", letterSpacing : "1px"}} class="text-black opacity-50 flex justify-center font-light text-[23px] mb-10"> 
          <div class="w-[660px] text-center">
            Explore breathtaking aerial masterpieces in our drone photo gallery. With 4K camera resolution, 
            each photo captures stunning landscapes and iconic landmarks. Immerse yourself in our high- performance drones' artistry.
          </div>
        </div>

        <div class="flex justify-center gap-5 flex-wrap pt-5">
          {/* 3 review card component to be added here with proper value */}


          {arrayOfUSer.map((user) => (
            <ReviewCard user={user}/>
          ))}

        </div>

        <div class="mt-12">
          <a class="flex flex-row justify-center cursor-pointer hover:translate-x-1 duration-300 ease-in-out">
            <div class="text-skyTechBlue text-xl"> Read More </div>

            <div class="mt-3 ml-4">
              <svg width="" height="10" viewBox="0 0 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.3536 4.35355C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464466C33.9763 0.269204 33.6597 0.269204 33.4645 0.464466C33.2692 0.659728 33.2692 0.976311 33.4645 1.17157L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53553C33.6597 7.7308 33.9763 7.7308 34.1716 7.53553L37.3536 4.35355ZM0 4.5H37V3.5H0V4.5Z" fill="#3F95C6"/>
              </svg>
            </div>
          </a>
          

          
          
        </div>
      </div>
 
    </div>
  );
}

export default App;
