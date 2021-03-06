export interface Size {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface LineHeight {
  sm: number
  md: number
  lg: number
}

export default interface ThemeInterface {
  breakpoints: Size
  palette: {
    primary: string
    secondary: string
    white: string
    black: string
    spruce: string
    stone: string
    frost: string
    daisy: string
    black16: string
    black30: string
  }
  spacing: Size
  font: {
    family: string
    weight: {
      normal: string | number
      medium: string | number
      bold: string | number
    }
    size: Size
    lineHeight: LineHeight
  }
  misc: {
    radius: number
    animationDuration: string
    inputs: {
      padding: number
    }
    avatar: {
      sm: number
      md: number
      lg: number
    }
  }
}

const unit: number = 8

export const theme: ThemeInterface = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  palette: {
    primary: '#ea4335',
    secondary: '#ffd100',
    white: '#ffffff',
    black: '#1f1f1f',
    spruce: '#666666',
    stone: '#a3a3a3',
    frost: '#dddddd',
    daisy: '#f0f4f5',
    black16: 'rgba(0, 0, 0, 0.16)',
    black30: 'rgba(0, 0, 0, 0.3)'
  },
  spacing: {
    xs: unit,
    sm: unit * 2,
    md: unit * 3,
    lg: unit * 4,
    xl: unit * 5
  },
  font: {
    family: '-apple-system, BlinkMacSystemFont, "Helvetica", "Segoe", sans-serif',
    weight: {
      normal: 'normal',
      medium: 600,
      bold: 'bold'
    },
    size: {
      xs: 12,
      sm: 14,
      md: 20,
      lg: 24,
      xl: 32
    },
    lineHeight: {
      sm: 20,
      md: 28,
      lg: 33
    }
  },
  misc: {
    radius: 3,
    animationDuration: '0.25s',
    inputs: {
      padding: 10
    },
    avatar: {
      sm: 24,
      md: 48,
      lg: 72
    }
  }
}
