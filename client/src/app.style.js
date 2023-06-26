import { styled, Box } from "@mui/material";

const WrapApp = styled(Box)(() => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  ".divider-profile": {
    minWidth: '3px',
    width: '3px',
    background: '#F4F4FD',
    boxShadow: 'inset -2px -2px 2px #ffffff, inset 2px 2px 2px rgb(192 192 219 / 70%)',
    borderRadius: '6px',
    margin: '0px 46px 0px 100px'
  }
}));

export { WrapApp };
