import React from 'react'
import Slider from "react-slick"
import imageUrl from '../../utils/imageUrl';
const Tending = () => {
    var settings = {
    dots: false,
    arrows:false,
     autoplay:true,
    infinite: true,
      centerMode: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
     <div className="brand-area py-5">
        <div className="container-fluid">
            <div className="brand-items pt-80 pb-80">
                <div className="row">
                    <div className="col-lg-12">
                                {/* <!-- Single Item --> */}
                                <Slider {...settings}>
                               {/* <div className="slide  d-flex"> */}
                                <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("1.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                                 <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("2.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                                   <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("3.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                                  <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("4.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                                  <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("5.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                                    <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("6.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                                <div className="swiper-slide">
                                  <a href="#" className='cs-imagebox'>
                                <img src={imageUrl("7.jpeg")} alt="image.png" />
                                  </a>
                                </div>
                               {/* </div> */}
                            
                                            </Slider>
                                        
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Tending