import {createTheme} from "@mui/material/styles";
import colors from "./Colors";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {

        '*': {
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          // lineHeight: '1.2em!important',
          // color: '#7A7A95',
          'scrollbarColor': 'rgba(192, 192, 219, 0.5) #FC7F25',    /* «цвет ползунка» «цвет полосы скроллбара» */
          // 'scrollbarWidth': 'thin',

          '::-webkit-scrollbar': {
            width: '6px',
            height: '8px',
            'backgroundColor': 'none',
          },

          '::-webkit-scrollbar-thumb': {
            'backgroundColor': '#FC7F25',
            'borderRadius': '2px',
          }
        },
        "body": {
          "fontSize": '13px',
          "color": colors.mainTextColor,
          "overflowX": 'hidden',
          ".divider-vertical": {
            minWidth: '3px',
            width: '3px',
            background: '#F4F4FD',
            boxShadow: 'inset -2px -2px 2px #ffffff, inset 2px 2px 2px rgb(192 192 219 / 70%)',
            borderRadius: '6px',
            margin: '0px 46px 0px 100px'
          }
        },
        '#back-to-top-anchor': {
          margin: 0,
        },
        'hr': {
          borderColor: 'rgb(26 80 169 / 12%)!important'
        }
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          '& label': {
            color: colors.darkGreenText,
          },
          '& label.Mui-disabled': {
            color: colors.darkGreenText,
            opacity: 0.8,
          },
          '& label.Mui-focused': {
            color: '#44685a',
          },
        }
      }
    },

    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: {
    //       // '.-root': {
    //       '& .MuiSwitch-switchBase.Mui-checked': {
    //         color: '#74748f',
    //       },
    //       '& .MuiSwitch-switchBase.Mui-checked.Mui-disabled': {
    //         color: '#a2a2b5ed',
    //       },
    //       '& .MuiSwitch-track': {
    //         backgroundColor: '#74748f!important',
    //       },
    //       '& .Mui-checked+.MuiSwitch-track': {
    //         backgroundColor: '#74748f!important',
    //       },
    //       // }
    //
    //     }
    //   }
    // },

    MuiInputBase: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#8BA79B',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#5b746a!important'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#44685a!important'
          },
          '&.Mui-disabled fieldset': {
            borderColor: '#8ba79bb5!important'
          },
          '&.Mui-disabled:hover fieldset': {
            borderColor: '#8ba79bb5!important'
          },
          '& input:disabled': {
            color: colors.darkGreenText,
            'WebkitTextFillColor': 'inherit',
            opacity: 0.8,
          }
        },
        input: {
          color: colors.darkGreenText,
          ':focus-visible': {
            outline: 'none'
          },
        },
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: '22px',
          fontSize: '12px',
          padding: '2px 20px',
          textTransform: 'inherit',
          lineHeight: 1.2,
          cursor: 'pointer',
          borderRadius: '4px',
        },
      },
      variants: [
        {
          props: {variant: "filledOrange"},
          style: {
            background: colors.orange,
            color: colors.white,
            border: `1px solid`,
            "&:hover": {
              color: colors.white,
              background: colors.darkOrange
            },
          },
        },
        {
          props: {variant: "orange"},
          style: {
            background: colors.white,
            color: colors.orange,
            border: `1px solid ${colors.orange}`,
            "&:hover": {
              color: colors.white,
              background: colors.darkOrange
            },
          },
        },
        {
          props: {variant: "filledGreen"},
          style: {
            background: colors.green,
            color: colors.white,
            "&:hover": {
              color: colors.white,
              background: colors.darkGreen
            },
          },
        },
        {
          props: {variant: "filledRed"},
          style: {
            background: colors.red,
            color: colors.white,
            border: `1px solid ${colors.red}`,
            "&:hover": {
              color: colors.white,
              background: colors.darkRed
            },
          },
        },

      ],
    }
  }
});

export default theme;