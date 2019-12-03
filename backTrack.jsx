//vytvoření vlastního elementu BackTrrack pomocí knihovny "styled-components" - tělo progressBaru

import styled from "styled-components";

const BackTrack = styled.div`
  position: relative;
  margin: 20px;
  width: 500px;
  height: 3em;
  background-color: #c0c0c0;
  border-radius: 1.5em;
  border-color: black;
  color: black;
  &::before {
    content: attr(data-label);
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1.5em;
    letter-spacing: 1px;
    font-weight: 600;
    width: ${props => props.progress}%;
    height: 2em;
    min-width: 1.5rem;
    max-width: calc(100% - 1em);
    background-color: #7fff00;
    border-radius: 1em;
    padding-left: 1em;
    transition: width 2s ease-in-out;
  }
`;

export default BackTrack;
