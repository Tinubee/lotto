import { Outlet } from "react-router-dom";
import { MakeMenus } from "../api/menus";
import Menu from "../components/menu/menu";
import PageTitle from "../components/PageTitle";

function Make() {
  return (
    <>
      <PageTitle title="Make"></PageTitle>
      <Menu menus={MakeMenus} />
      <Outlet />
    </>
  );
}

export default Make;
