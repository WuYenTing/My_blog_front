import Image from 'next/image'
import bg from '../../../../public/introduce_bg.jpg';
import { Children } from 'react';
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={bg}
      placeholder="blur"
      quality={100}
      sizes=""
      style={{
        objectFit: 'cover',
      }}
    />
  )
}