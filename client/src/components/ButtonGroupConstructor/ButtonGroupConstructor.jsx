import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import {Button, Grid} from "@mui/material";
import {styled} from '@mui/material/styles';

const WrapGrid = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "padding",
})(({padding}) => ({
  direction: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  // padding: padding || "8px 0 0",
  // padding: theme.spacing(1, 1),
}));


const ButtonGroupConstructor = ({options}) => {

  return (
    <WrapGrid
      container spacing={{xs: 1}}
      padding={options.sx?.containerPadding}
      width={options.sx?.containerWidth}
    >
      {options.buttons?.map(button => options.removeButton && options.removeButtons[button.name] ? null : (
        <Grid
          key={button.name}
          item
          xs={options.size && options.size[button.name]}
        >
          <Button
            startIcon={
              options.icons && options.icons[button.name]
                ? options.icons[button.name]
                : undefined
            }
            variant={button.variant}
            name={button.name}
            type={button.type}
            disabled={
              button.disabled ||
              (options.disabled ? options.disabled[button.name] : false)
            }
            color={button.color}
            fullWidth={!!(options.size ? options.size[button.name] : false)}
            onClick={(e) => {
              if (
                button.name === "cancel" ||
                button.name === "resetFilter" ||
                button.name === "reset"
              ) {
                options.form?.reset();
              }
              options.handlerClick[button.name] &&
              options.handlerClick[button.name](e, options.form);
            }}
            component={button.url ? RouterLink : undefined}
            to={button.url || undefined}
            sx={{ lineHeight: 1, textTransform: "inherit" }}
          >
            {button.value}
          </Button>
        </Grid>
      ))}
    </WrapGrid>
  )
};

export default ButtonGroupConstructor;