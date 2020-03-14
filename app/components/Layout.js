import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Header";

const layoutStyle = {
  margin: "15px",
  fontSize: "15px",
  //   padding: 20,
  //   border: "1px solid #DDD"
  display: "flex",
  flexDirection: "column",
  textAlign: "center"
  //   flexWrap: "wrap",
};

const Layout = props => (
  <>
    <CssBaseline />
    <Header />
    <Grid style={layoutStyle}>
      {/* If you remove {props.children}, the Layout cannot render the content inside the Layout element wrapped in other components. */}
      {props.children}
      {props.content}
    </Grid>
  </>
);

export default Layout;
