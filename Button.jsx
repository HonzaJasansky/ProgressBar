//vytvoření vlastního elementu Button pomocí knihovny "styled-components" - tlačítko pro load, nebo unload progressBaru

import styled from "styled-components";

const Button = styled.button`
  position: relative;
  left: 15%;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  border-color: black;
  border-radius: 10px;
  background-color: #c0c0c0;
`;

export default Button;
