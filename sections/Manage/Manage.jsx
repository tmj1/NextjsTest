import Image from "next/image";
import {
    StyledImageContainer,
    StyledTitle,
    StyledSubtitle,
} from "./elements";
export const Manage = ({ image, title, subtitle, ...props}) => {
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
               <div className='CardsContainer'>All Cards</div>
           </div>
       </div>
    );
};
