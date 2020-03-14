import { CssBaseline, Grid, Paper } from "@material-ui/core";
import Header from "./Header";

const layoutStyle = {
  margin: "25px",
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
    <Paper style={layoutStyle}>
      <Header />
      <Grid item xs>
        {/* If you remove {props.children}, the Layout cannot render the content inside the Layout element wrapped in other components. */}
        {props.children}
        {props.content}
      </Grid>
    </Paper>
  </>
);

export default Layout;
