/* eslint-disable react/jsx-no-target-blank */
import {useRef} from "react";
const Banner = () => {
    const videoRef = useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.25;
    };
    return (
        <div className="">
            <video
                className="h-full bg-black/100 backdrop-brightness-50 brightness-50"
                src={"https://www.dreamweavegraphics.com/video/0929.mp4"}
                ref={videoRef}
                onCanPlay={() => setPlayBack()}
                autoPlay
                loop
                muted
                playsInline></video>
        </div>
    );
};

export default Banner;
