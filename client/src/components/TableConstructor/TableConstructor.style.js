import {Box, styled} from "@mui/material";

const WrapTable = styled(Box, {shouldForwardProp: (prop) => prop !== 'disabled'})(({disabled}) => ({
  width: '100%',
  maxWidth: '100%',
  position: 'relative',
  ...(disabled && {
    "&:after": {
      content: "''",
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f4f4fd66',
    }
  }),
}));

export {
  WrapTable
}