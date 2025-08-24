export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || '--help'
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const