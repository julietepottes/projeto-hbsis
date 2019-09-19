import { styled } from "@hbsis.uikit/react";

const ReactHtmlStyled = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
    opacity: ${p => p.opacity};
  }

  .App-header {
    background-color: ${p => p.theme.color.Blue.dark};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: ${p => p.align};
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${p => p.theme.color.White};
  }

  .button {
    margin-top: 20px;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ReactHtmlStyled;
