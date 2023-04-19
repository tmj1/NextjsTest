import Image from "next/dist/client/image";
import { Card } from "../../collections";
import { StyledCardsContainer } from "./elements";
import {
    StyledTitleContainer,
    StyledContainer,
    StyledTitle,
    StyledSubtitle,
    StyledContentContainer,
    StyledImageContainer,
} from "./elements";

export const Manage = ({ image, title, subtitle, cards, ...props }) => {
    return (

        <StyledContainer {...props}>
            <StyledTitleContainer>
                <StyledTitle>{title}</StyledTitle>

                <StyledSubtitle>{subtitle}</StyledSubtitle>
            </StyledTitleContainer>

            <StyledContentContainer>
                <StyledImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </StyledImageContainer>

                <StyledCardsContainer {...props}>
                    { cards.map((i) => (
                        <Card
                            key={i.id}
                            image={i.image}
                            title={i.title}
                            content={i.content}
                            width={i.width}
                            color={i.color}
                        />
                    ))}
                </StyledCardsContainer>
            </StyledContentContainer>
        </StyledContainer>
    );
};
