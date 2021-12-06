import React from 'react'
import HeroImg from '../assets/images/KAto.jpg'
import PText from './PText';
import Button from './Button';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero-heading">
          <span>Hallo, ik ben</span>
          <span>Kato De Lentacker</span>
        </h1>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero-info">
          <PText>
            I just graduated from a coding bootcamp, Le Wagon.
            I really enjoyed this bootcamp and now I want to try
            to become a<strong>full stack developer</strong> .
          </PText>
          <Button></Button>
        </div>
      </div>
    </div>
  )
}
