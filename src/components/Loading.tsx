import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <Path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </Path>
      </Svg>
    </Wrapper>
  );
}

export default Loading;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  width: 40px;
  height: 40px;
`;

const Path = styled.path`
  fill: ${(props) => props.theme.borderColor};
`;
