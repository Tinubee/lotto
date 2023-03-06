import { Link } from "react-router-dom";
import { HeaderContainer, Tab, Tabs } from "../header/Header";

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
