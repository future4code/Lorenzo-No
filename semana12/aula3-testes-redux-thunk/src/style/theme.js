import { createMuiTheme } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import styled from "styled-components";

export default createMuiTheme({
  palette: {
    primary: orange
  }
});

export const TaskSection = styled.section`
  width: 80vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
`