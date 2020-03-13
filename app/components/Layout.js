import { CssBaseline } from "@material-ui/core";
import Header from "./Header";

const layoutStyle = {
  //   margin: "auto",
  //   padding: 20,
  //   border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <CssBaseline />
    <Header />

    {/* If you remove {props.children}, the Layout cannot render the content inside the Layout element wrapped in other components. */}
    {/* {props.children} */}
    {props.content}
  </div>
);

export default Layout;
