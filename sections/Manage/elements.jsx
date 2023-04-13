import styled from "styled-components";

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  flex-basis: 50%;
  max-width: 328px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    flex-basis: 100%;
  }
`;
