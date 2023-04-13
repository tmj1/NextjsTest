import Image from "next/image";
import { Card } from "../../collections/Card/Card";
import { StyledCardsContainer } from "./elements";
import {
    StyledImageContainer,
    StyledTitle,
    StyledSubtitle,
} from "./elements";
export const Manage = ({ image, title, subtitle, card1, card2, card3, ...props}) => {
    return (
       <div className='Container'>
           <div className='TitleContainer'>
               <StyledTitle>{title}</StyledTitle>

               <StyledSubtitle>{subtitle}</StyledSubtitle>
           </div>
           <div className='ContentContainer'>
               <StyledImageContainer>
                   <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
               </StyledImageContainer>
               <StyledCardsContainer {...props}>
                   <Card {...card1} />
                   <Card {...card2} />
                   <Card {...card3} />
               </StyledCardsContainer>
           </div>
       </div>
    );
};
