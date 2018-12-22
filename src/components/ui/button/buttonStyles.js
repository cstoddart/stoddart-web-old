import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  border: 2px solid;
  border-radius: 3px;
  padding: 10px 25px;
  font-size: 14px;
  max-width: 125px;
  color: white;
  transition: 0.3s;
  pointer-events: all;
  font-weight: 600;

  ${({ primary }) => primary ? `
    border-color: #fb1;

    &:hover {
      color: #222;
      background-color: #fb1;
    }
  ` : null}

  ${({ secondary }) => secondary ? `
    border-color: #555;

    &:hover {
      background-color: #555;
    }
  ` : null}

  & + & {
    margin-left: 25px;
  }
`;
