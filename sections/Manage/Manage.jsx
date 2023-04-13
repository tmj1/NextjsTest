import Image from "next/image";
import {
    StyledImageContainer,
} from "./elements";
export const Manage = ({ image, ...props}) => {
    return (
       <div className='Container'>
           <div className='TitleContainer'>
               <div className='Title'>Page Title</div>
               <div className='SubTitle'>Page SubTitle</div>
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
