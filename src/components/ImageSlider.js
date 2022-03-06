import React, {useState} from 'react'
import { SliderData } from './SliderData'
//UNCOMMENT 3/4/22
// https://www.youtube.com/watch?v=l1MYfu5YWHc&t=31s&ab_channel=BrianDesign
// 10:03
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length


return (
<section className='slider'>
    <FaArrowAltCircleLeft className="left-arrow" />
    <FaArrowAltCircleRight className="right-arrow" />
{SliderData.map((slide, index) => {
    return(
        <img src={slide.image} alt ='hair' className='image' />
    )

})}

</section>
)
}

export default ImageSlider