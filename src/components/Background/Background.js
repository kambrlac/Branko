import React from "react";
import './Background.css';
import img1 from './Background-images/page-1.jpg'
import img2 from './Background-images/page-2.jpg'
import img3 from './Background-images/page-3.jpg'


function Background(){
    return(
        <div>
            <div className='container'>
                <section>
                    <div className='content'>
                        <img src={img1}>

                        </img>
                    </div>
                </section>
                <section>
                    <div className='content'>
                        <img src={img2}>

                        </img>
                    </div>
                </section>
                <section>
                    <div className='content'>
                        <img src={img3}>

                        </img>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Background;