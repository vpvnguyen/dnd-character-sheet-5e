import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "None", // removes all uppercase from text
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "None", // strips default font styling
      color: "white",
    },
  },
});

// import { makeStyles } from "@material-ui/styles";

// // adds subtle effect where header will lift when the page is scrolled
// function ElevationScroll(props) {
//     const { children } = props;

//     const trigger = useScrollTrigger({
//       disableHysteresis: true,
//       threshold: 0, // listener when to trigger the effect
//     });

//     return React.cloneElement(children, {
//       elevation: trigger ? 4 : 0,
//     });
//   }

//   const useStyles = makeStyles((theme) => ({
//     toolbarMargin: {
//       // use spread operator to copy over properties from theme
//       ...theme.mixins.toolbar, // gives a bit of height to app bar to push content below the appbar
//       marginBottom: "3em", // add extra spacing to push content to offset the extra height added from the responsive units from the logo
//     },
//     logo: {
//       height: "8em",
//     },
//     logoContainer: {
//       padding: 0, // removes padding from button
//       "&:hover": {
//         backgroundColor: "transparent", // removes overlay when on logo hover
//       },
//     },
//     tabContainer: {
//       marginLeft: "auto", // sets left most margin to extend as much as it can to push the tabs right
//     },
//     tab: {
//       ...theme.typography.tab, // extend typography tab styling from theme
//       minWidth: 10, // removes spacing between tabs
//       marginLeft: "25px", // use px over rem to maintain constant spacing between tabs regardless of device size
//     },
//     button: {
//       ...theme.typography.estimate,
//       borderRadius: "50px", // rounds out button
//       marginLeft: "50px",
//       marginRight: "25px",
//       height: "45px",
//     },
//     menu: {
//       backgroundColor: theme.palette.common.blue, // sets menu color theme
//       color: "white",
//       // sharp box corners around menu
//       borderRadius: "0px",
//     },
//     menuItem: {
//       ...theme.typography.tab,
//       // created highlighting effect
//       opacity: 0.7,
//       "&:hover": {
//         opacity: 1,
//       },
//     },
//   }));
