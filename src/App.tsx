import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, latestTurnNumberAtom, turnNumberAtom } from "./atoms";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import JSConfetti from "js-confetti";
import { HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import { getLatestWinningNumber, IGetWinningNumber } from "./api/lotto";
import { useEffect } from "react";

export const conteffi = new JSConfetti();

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
.canvas{
  height: 100vh;
  left: 0px;
  pointer-events: none;
  position: fixed;
  top: 0px;
  width: 100vw;
}
body {
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
  background-color: ${(props) => props.theme.bgColor};
  overflow-x: hidden;
  transition: background-color 0.5s, color 0.5s;
  width: 100vw;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
a {
  text-decoration:none;
  color:inherit;
}
`;
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setTurnNumber = useSetRecoilState(turnNumberAtom);
  const setLatestTurnNumber = useSetRecoilState(latestTurnNumberAtom);

  const { data, isLoading } = useQuery<IGetWinningNumber>(
    ["latestWinningNumber"],
    getLatestWinningNumber
  );

  useEffect(() => {
    setTurnNumber(data?.draw_no!);
    setLatestTurnNumber(data?.draw_no!);
  }, [data, setTurnNumber, isLoading, setLatestTurnNumber]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
