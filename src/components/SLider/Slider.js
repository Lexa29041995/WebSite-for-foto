import React from 'react';

import './Slider.css'

const Slider = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide Slider" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="2000"  data-pause="false">
                    <img src="./img/1Gleb_i_Kristina-205.jpg" class="d-block w-100" alt="foto"></img>
                </div>
                <div class="carousel-item">
                    <img src="./img/1Sergey_i_Alyona-150.jpg" class="d-block w-100" alt="foto"></img>
                </div>
                <div class="carousel-item">
                    <img src="./img/IMG_9502-1.jpg" class="d-block w-100" alt="foto"></img>
                </div>
                <div class="carousel-item">
                    <img src="./img/Sergey_i_Alyona-716.jpg" class="d-block w-100" alt="foto"></img>
                </div>
            </div>
            <a class="carousel-control-prev slider_toggle_prev" href="#carouselExampleControls" role="button" data-slide="prev">
                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span> */}
            </a>
            <a class="carousel-control-next slider_toggle_next" href="#carouselExampleControls" role="button" data-slide="next">
                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span> */}
            </a>
        </div>
    )
}

export default Slider