import { Outlet } from "react-router-dom";
import { PlaceMenus } from "../api/menus";
import Menu from "../components/menu/menu";
import PageTitle from "../components/PageTitle";

function Place() {
  return (
    <>
      <PageTitle title="Place"></PageTitle>
      <Menu menus={PlaceMenus} />
      <Outlet />
    </>
  );
}
export default Place;
