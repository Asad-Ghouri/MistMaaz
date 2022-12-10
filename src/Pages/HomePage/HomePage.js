import React from 'react'
import { ImageSection } from '../../components/ImageSection/ImageSection'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { KenBurn } from '../../components/KenBurn/KenBurn'
import { CountSection } from '../../components/CountSection/CountSection'
import { Review } from '../../components/Review/Review'
import { Utils } from '../../components/Utils/Utils'

export const HomePage = () => {
  return (
    <div>
        <KenBurn />
        <CountSection/>
        <ImageSection  />
        <HeroSection />
        <Utils />
        <Review />
    </div>
  )
}
