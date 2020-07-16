import React from 'react';

import './Slider.css'

const Slider = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide Slider" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="3000"  data-pause="false">
                    <img src="https://img.wfolio.ru/wfolio/sites/6212/assets/1580934084_a36907/18550a0518f001080112036a7067.jpg?auth=fdc0deab63dc6b7883da8ba4352712dda6150a3e5d0c77cede7787335e15d8e1" class="d-block w-100" alt="foto"></img>
                </div>
                <div class="carousel-item">
                    <img src="https://img.wfolio.ru/wfolio/sites/6212/assets/1564317935_80399e/18550a0518f001080112036a7067.jpg?auth=dbe33b39c095402e8acb4da668962b37e96ba225cf42266a6921c07617d6cdf4" class="d-block w-100" alt="foto"></img>
                </div>
                <div class="carousel-item">
                    <img src="https://img.wfolio.ru/wfolio/sites/6212/assets/1544615523_2085cb/18550a0518f001080112036a7067.jpg?auth=39851c9e0c1e4c82939961fbebe0f7649065bfa55b56ac4073c4986432fb6c5a" class="d-block w-100" alt="foto"></img>
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