import styled from "styled-components";
import { SectionBigHeading, SectionSubheading, } from "~/components";

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  flex-basis: 50%;
  max-width: 328px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    flex-basis: 100%;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  line-height: 1.4;
  font-size: 2.3rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const StyledSubtitle = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: .85rem;
  }
`;
