import styled from "styled-components";

export const DivExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  .div-one {
    background-color: steelblue;

    .div-one-nested {
      background-color: yellow;
      color: black;
    }
  }

  & > .div-two {
    background-color: red;

    &:hover {
      box-shadow: 5px 5px 15px 5px #000000;
    }
  }

  .div-three::before {
    content: 'This is the content before the div ';
    background-color: #333;
    color: #fff;
  }

  .other-example & {
    background-color: orange;
    color: blue;
  }

`