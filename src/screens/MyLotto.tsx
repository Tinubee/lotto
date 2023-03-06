import { Outlet } from "react-router-dom";
import { MyLottoMenus } from "../api/menus";
import Menu from "../components/menu/menu";
import PageTitle from "../components/PageTitle";

function MyLotto() {
  return (
    <>
      <PageTitle title="MyLotto"></PageTitle>
      <Menu menus={MyLottoMenus} />
      <Outlet />
    </>
  );
}
export default MyLotto;
