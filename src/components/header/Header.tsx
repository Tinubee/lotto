import { Link } from "react-router-dom";
import styled from "styled-components";
import Mode from "./Mode";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 0px;
  align-items: center;
  text-align: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  white-space: nowrap;
`;
export const Tab = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.icontextColor};
  a:hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    padding: 15px 25px;
    border-radius: 10px;
    transition: background-color 0.5s;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Tabs>
        <Tab>
          <Link to={"0"}>번호 분석</Link>
        </Tab>
        <Tab>
          <Link to={"make/0"}>번호 생성</Link>
        </Tab>
        <Tab>
          <Link to={"my/0"}>나의 로또</Link>
        </Tab>
        <Tab>
          <Link to={"place/0"}>판매점</Link>
        </Tab>
        <Tab>
          <Link to={"etc/0"}>기타</Link>
        </Tab>
      </Tabs>
      <Mode />
    </HeaderContainer>
  );
}
export default Header;
