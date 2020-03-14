import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Header";
import NavBar from "./NavBar/NavBar";

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
      <NavBar />
      {/* {props.children} renders the content inside the Layout element wrapped in other components. */}
      {props.children}
    </Grid>
  </>
);

export default Layout;
