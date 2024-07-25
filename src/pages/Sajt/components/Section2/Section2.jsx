import style from "./css/sec2.module.css";
import { start } from "./JS/index.js";
import { useEffect } from "react";

const Section2 = () => {

    useEffect(() => {
        start()
    },[])
    return (
        <div className={style.section_2}>
            <div className={style.video_wrapper}>
                <video className={`${style.video} video`} autoPlay muted >
                    <source src="video/Hub Edit 2_2021-05-03_Vimeo 720p30.m4v" />
                </video>
                <div className={style.volume}>
                    <i className="fa-solid fa-volume-off vol-off"></i>
                    <i className="fa-solid fa-volume-high vol-on"></i>
                </div>
            </div>
        </div>
    )
}

export default Section2;