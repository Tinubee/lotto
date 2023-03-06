import { Outlet } from "react-router-dom";
import { EtcMenus } from "../api/menus";
import Menu from "../components/menu/menu";
import PageTitle from "../components/PageTitle";

function Etc() {
  return (
    <>
      <PageTitle title="Etc"></PageTitle>
      <Menu menus={EtcMenus} />
      <Outlet />
    </>
  );
}
export default Etc;
