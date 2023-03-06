import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Make from "./screens/Make";
import MyLotto from "./screens/MyLotto";
import Etc from "./screens/Etc";
import Place from "./screens/Place";
import WinningNumbers from "./screens/Home/WinningNumbers";
import Pattern from "./screens/Home/Pattern";
import RepeatNumber from "./screens/Home/RepeatNumber";
import SameTimeNumber from "./screens/Home/SameTimeNumber";
import EachNumber from "./screens/Home/EachNumber";
import List from "./screens/Make/List";
import Random from "./screens/Make/Random";
import Direct from "./screens/Make/Direct";
import Select from "./screens/Make/Select";
import Shape from "./screens/Make/Shape";
import QRCode from "./screens/MyLotto/QRCode";
import BuyNumber from "./screens/MyLotto/BuyNumber";
import MyList from "./screens/MyLotto/MyList";
import Trash from "./screens/MyLotto/Trash";
import NearBy from "./screens/Place/NearBy";
import WinningStore from "./screens/Place/WinningStore";
import Tax from "./screens/Etc/Tax";
import Faq from "./screens/Etc/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "0",
            element: <WinningNumbers />,
          },
          {
            path: "1",
            element: <RepeatNumber />,
          },
          {
            path: "2",
            element: <SameTimeNumber />,
          },
          {
            path: "3",
            element: <EachNumber />,
          },
          {
            path: "4",
            element: <Pattern />,
          },
        ],
      },
      {
        path: "make",
        element: <Make />,
        children: [
          {
            path: "0",
            element: <List />,
          },
          {
            path: "1",
            element: <Random />,
          },
          {
            path: "2",
            element: <Direct />,
          },
          {
            path: "3",
            element: <Select />,
          },
          {
            path: "4",
            element: <Shape />,
          },
        ],
      },
      {
        path: "my",
        element: <MyLotto />,
        children: [
          {
            path: "0",
            element: <QRCode />,
          },
          {
            path: "1",
            element: <BuyNumber />,
          },
          {
            path: "2",
            element: <MyList />,
          },
          {
            path: "3",
            element: <Trash />,
          },
        ],
      },
      {
        path: "place",
        element: <Place />,
        children: [
          {
            path: "0",
            element: <NearBy />,
          },
          {
            path: "1",
            element: <WinningStore />,
          },
        ],
      },
      {
        path: "etc",
        element: <Etc />,
        children: [
          {
            path: "0",
            element: <Tax />,
          },
          {
            path: "1",
            element: <Faq />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
