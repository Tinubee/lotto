import { Outlet } from "react-router-dom";
import { HomeMenus } from "../api/menus";
import Menu from "../components/menu/menu";
import PageTitle from "../components/PageTitle";

function Home() {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Menu menus={HomeMenus} />
      <Outlet />
    </>
  );
}

export default Home;
