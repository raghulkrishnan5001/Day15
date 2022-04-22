import React,{useState,useEffect} from 'react'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import {FaQuoteRight} from "react-icons/fa"
import {sliderData}from'./Sliderdata'
import './Slider.css'

function Slider() {
    const[currentSlide,setCurrentSlide]=useState(0);
    const slideLength=sliderData.length;

    const autoScroll=true;
    let slideInterval;
    let intervalTime =2500;

    const nextslide=()=>{
       setCurrentSlide( currentSlide === slideLength-1 ? 0 : 
        currentSlide + 1); 
    };

    const prevslide=()=>{
        setCurrentSlide( currentSlide===0 ? slideLength - 1 :
             currentSlide-1); 
     };

     function auto(){
         slideInterval = setInterval(nextslide,intervalTime)
     }

    useEffect(()=>{
        setCurrentSlide(0)
    },[])

    useEffect(()=>{
        if (autoScroll) {
            auto();
        }
    },[currentSlide])

  return (
      
    <div className='slider text-center pt-5'>
       
        <div><h1><span className='h1 name fw-bold'>/</span> Reviews</h1></div>

        {sliderData.map((slide,index)=>{
            return(
            <div className={index===currentSlide ?
            "slide current" : "slide"} key={index}>
                {index===currentSlide &&(
                    <>
                    <img src ={slide.image} alt='slide'height='150px' width='150px' className='p1'/>
                    <div className='content'></div><br/>
                    <span className='fw-bold fs-4 name'>{slide.name}</span><br/>
                    <span className='fs-5'>{slide.title}</span><br/>
                    <span className='text-secondary fs-5'>{slide.quote}</span><br/>
                    <AiOutlineArrowLeft className='arrowprev' onClick={prevslide}/>
                    
        <AiOutlineArrowRight className='arrownext' onClick={nextslide}/><br/>
        <FaQuoteRight size="70" color="brown" className='pt-4'/>
       
                    </>

                )}

                </div>
            )
        })}
        </div>
  )
}

export default Slider