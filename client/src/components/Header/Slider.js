import React, { useState, useEffect } from 'react';
import SliderImg1 from './SliderImages/sliderImage1.jpeg';
import SliderImg2 from './SliderImages/sliderImage2.jpeg';
import SliderImg3 from './SliderImages/sliderImage3.jpeg';
import SliderImg4 from './SliderImages/sliderImage4.jpeg';
import SliderImg5 from './SliderImages/sliderImage5.jpeg';

import './Header.css';

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

export default function Slider() {

    let images = [
        {
            url: SliderImg1,
            id: 1
        },
        {
            url: SliderImg2,
            id: 2
        },
        {
            url: SliderImg3,
            id: 3
        },
        {
            url: SliderImg4,
            id: 4
        },
        {
            url: SliderImg5,
            id: 5
        },
    ]

    return (
        <div className="slider">
            <Carousel>
                {
                    images.map((image) => <Item key={image.id} image={image} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    return (
        <Paper>
            <img src={props.image.url} alt="img" />
        </Paper>
    )
}
