import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IMenuType {
  menus: string[];
}

function Menu({ menus }: IMenuType) {
  return (
    <HeaderContainer>
      <Tabs>
        {menus.map((menu: string, index: number) => {
          return (
            <Tab key={menu}>
              <Link to={`${index}`}>{menu}</Link>
            </Tab>
          );
        })}
      </Tabs>
    </HeaderContainer>
  );
}
export default Menu;

const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  padding: 15px 0px;
  align-items: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
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
