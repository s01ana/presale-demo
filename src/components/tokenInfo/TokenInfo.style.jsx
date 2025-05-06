import styled, { css } from "styled-components";

const TokenInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 11px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white}1a;
  }

  li p,
  li h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default TokenInfoWrapper;
