import { createTheme } from '@mui/material'

const palette = {
  primary: { main: '#ffe4d6', contrastText: '#efdf50' },
  error: { main: '#ffe4d6', contrastText: '#efdf50' },
}

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: 'Handlee',
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: { root: { fontSize: '0.8rem' } },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            background: `linear-gradient(90deg, rgba(243, 243, 243, 0.3) 100%, rgba(243, 243, 243, 0.3) 100%), linear-gradient(90deg, ${palette.primary} 100%, ${palette.primary} 100%)`,
          },
          '& input': {
            height: 'auto',
            padding: '10px 16px',
          },
          '& fieldset': {
            borderColor: palette.primary,
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.03)',
          },
          backgroundColor: 'transparent',
          '&.MuiOutlinedInput-root': {
            borderRadius: '10px',
          },

          '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.contrastText,
            borderWidth: '1px',
          },
          color: palette.primary.contrastText,
          '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.contrastText,
          },
          '&:hover input': {
            borderRadius: 'inherit',
          },
          '&.Mui-error': {
            color: palette.error,
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.error,
            },
          },

          '& input::placeholder': {
            color: palette.primary.main,
            opacity: 1,
          },
          '& textarea::placeholder': {
            color: palette.primary.main,
            opacity: 1,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: 'nope',
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          caretColor: palette.primary.main,
          color: palette.primary.main,
          '& fieldset': {
            borderColor: palette.primary.main,
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.03)',
            color: palette.primary.main,
          },
          '&:hover fieldset': {
            borderColor: palette.primary.main,
          },
        },
      },
    },
  },
})
