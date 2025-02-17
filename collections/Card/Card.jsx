import Image from "next/dist/client/image";

import {
    StyledCardTitle,
    StyledCardContent,
    StyledCardContentContainer,
    StyledCardImageContainer,
    StyledCardContainer,
} from "./elements";

export const Card = ({id, title, content, image, width, color, ...props}) => {
    return (
        <StyledCardContainer width={width} color={color}>
            <StyledCardImageContainer>
                <Image src={image.src} alt="card image" width={image.width} height={image.height} />
            </StyledCardImageContainer>

            <StyledCardContentContainer>
                <StyledCardTitle href="#">{title}</StyledCardTitle>
                <StyledCardContent>{content}</StyledCardContent>
            </StyledCardContentContainer>
        </StyledCardContainer>
    )

}
