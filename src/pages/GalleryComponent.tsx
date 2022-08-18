import React from "react";
// var ReactDOM = require('react-dom');
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/GalleryCss.css'
var Carousel = require('react-responsive-carousel').Carousel;


const Gallery = (data:any) => {

    return (
        <>

                <Carousel showArrows={true} showThumbs={true}  >
                {data.data.length > 0 && data.data.map((d: any) => {
                    return (
                        <>
                            <div className="carousel">
                                <div className="detailsClass">
                                <h1>{d.Title}</h1>
                                    <h2>Type:  {d.Type} </h2>
                                    <h2>Year:  {d.Year}</h2>
                                </div>
                                <div className="postersClass">
                                    <img alt={d.Title} src={d.Poster} />
                                    <p className="legend">{d.Title}</p>
                                </div>
                            </div>

                            </>
                    )

                })}
                    </Carousel>

        </>
    )
}

export default Gallery