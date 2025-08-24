#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Función para crear directorios
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Creado directorio: ${dirPath}`);
  }
}

// Función para crear archivos
function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  createDirectory(dir);
  fs.writeFileSync(filePath, content);
  console.log(`📄 Creado archivo: ${filePath}`);
}

// Función principal
function generateTemplate() {
  const projectName = process.argv[2] || 'nextjs-template';
  const projectPath = path.join(process.cwd(), projectName);

  console.log('🚀 Generando plantilla de Next.js 14...');
  console.log(`📦 Nombre del proyecto: ${projectName}`);
  console.log(`📍 Ubicación: ${projectPath}\n`);

  // Crear estructura de directorios
  const directories = [
    '.vscode',
    'public',
    'src/app',
    'src/components/ui',
    'src/components/Layout',
    'src/components/Common',
    'src/hooks',
    'src/lib',
    'src/types'
  ];

  directories.forEach(dir => {
    createDirectory(path.join(projectPath, dir));
  });

  // Archivos de configuración
  const files = {
    'package.json': `{
  "name": "${projectName}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \\"**/*.{ts,tsx,js,jsx,json,css,md}\\"",
    "format:check": "prettier --check \\"**/*.{ts,tsx,js,jsx,json,css,md}\\""
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.16.0",
    "@typescript-eslint/parser": "^7.16.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.5",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "postcss": "^8.4.39",
    "prettier": "^3.3.2",
    "tailwindcss": "^3.4.5",
    "typescript": "^5.5.3"
  }
}`,

    'tsconfig.json': `{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,

    'tailwind.config.ts': `import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config`,

    'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig`,

    '.eslintrc.json': `{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/react-in-jsx-scope": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
}`,

    '.prettierrc': `{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "endOfLine": "lf"
}`,

    '.gitignore': `# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db`,

    '.vscode/settings.json': `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}`,

    '.env.local.example': `# Copia este archivo como .env.local y agrega tus variables de entorno

# API Keys
NEXT_PUBLIC_API_URL=http://localhost:3001/api
DATABASE_URL=
API_SECRET_KEY=

# OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Configuraciones
NEXT_PUBLIC_APP_NAME=${projectName}
NEXT_PUBLIC_APP_VERSION=1.0.0`,

    'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

    'src/app/layout.tsx': `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '${projectName}',
  description: 'Proyecto Next.js 14 con TypeScript y Tailwind CSS',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Tu Nombre' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className={\`\${inter.className} h-full bg-gray-50\`}>
        <div className="min-h-full flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}`,

    'src/app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply text-gray-900;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors duration-200;
  }
  
  .btn-primary {
    @apply btn bg-primary-600 text-white hover:bg-primary-700;
  }
  
  .btn-secondary {
    @apply btn bg-gray-200 text-gray-900 hover:bg-gray-300;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent;
  }
}`,

    'src/app/page.tsx': `import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            ${projectName}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una plantilla moderna y completa con TypeScript, Tailwind CSS y las
            mejores prácticas de desarrollo.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <h3 className="text-lg font-semibold mb-2">⚡ Next.js 14</h3>
            <p className="text-gray-600">
              App Router, Server Components y las últimas características.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-2">🔷 TypeScript</h3>
            <p className="text-gray-600">
              Tipado estático para un desarrollo más seguro y productivo.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-2">🎨 Tailwind CSS</h3>
            <p className="text-gray-600">
              Framework CSS utilitario para diseños rápidos y consistentes.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-2">⚙️ ESLint + Prettier</h3>
            <p className="text-gray-600">
              Configuración completa para mantener el código limpio.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-2">📁 Estructura Clara</h3>
            <p className="text-gray-600">
              Organización de archivos pensada para escalabilidad.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-2">🚀 Lista para Usar</h3>
            <p className="text-gray-600">
              Componentes base y configuraciones ya incluidas.
            </p>
          </Card>
        </div>

        {/* Actions */}
        <div className="text-center space-x-4">
          <Button variant="primary">Comenzar Proyecto</Button>
          <Button variant="secondary">Ver Documentación</Button>
        </div>
      </div>
    </div>
  )
}`,

    'src/app/loading.tsx': `import { LoadingSpinner } from '@/components/Common/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  )
}`,

    'src/components/ui/Button.tsx': `import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500':
              variant === 'primary',
            'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500':
              variant === 'secondary',
            'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'outline',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }`,

    'src/components/ui/Card.tsx': `import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }`,

    'src/components/Common/LoadingSpinner.tsx': `import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
          {
            'h-4 w-4': size === 'sm',
            'h-8 w-8': size === 'md',
            'h-12 w-12': size === 'lg',
          },
          className
        )}
      />
    </div>
  )
}`,

    'src/hooks/useLocalStorage.ts': `'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error)
    }
  }, [key])

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error)
    }
  }

  return [storedValue, setValue]
}`,

    'src/hooks/index.ts': `export { useLocalStorage } from './useLocalStorage'`,

    'src/lib/utils.ts': `import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}`,

    'src/lib/constants.ts': `export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || '${projectName}'
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
} as const`,

    'src/types/index.ts': `export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export type Theme = 'light' | 'dark'

export interface NavigationItem {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}`,

    'public/vercel.svg': `<svg width="283" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>
</svg>`,

    'README.md': `# ${projectName}

Este proyecto fue generado con la **Plantilla Base de Next.js**.

## ✨ Características

- ⚡ **Next.js 14** - App Router, Server Components
- 🔷 **TypeScript** - Tipado estático 
- 🎨 **Tailwind CSS** - Framework CSS utilitario
- ⚙️ **ESLint + Prettier** - Linting y formateo automático
- 📁 **Estructura organizada** - Carpetas bien definidas
- 🧩 **Componentes base** - UI components listos para usar
- 🪝 **Hooks personalizados** - Utilities comunes
- 🎯 **Alias de imports** - Imports limpios con @/
- 🔧 **Configuración VS Code** - Settings optimizados

## 🚀 Inicio Rápido

1. **Instala las dependencias:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Inicia el servidor de desarrollo:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Abre tu navegador en [http://localhost:3000](http://localhost:3000)**

## 📜 Scripts Disponibles

- \`npm run dev\` - Servidor de desarrollo
- \`npm run build\` - Build para producción  
- \`npm run start\` - Servidor de producción
- \`npm run lint\` - Ejecuta ESLint
- \`npm run lint:fix\` - Arregla problemas de ESLint automáticamente
- \`npm run type-check\` - Verifica tipos TypeScript
- \`npm run format\` - Formatea código con Prettier
- \`npm run format:check\` - Verifica formato con Prettier

## 📁 Estructura del Proyecto

\`\`\`
src/
├── app/                 # App Router (páginas y layouts)
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz básicos
│   ├── Layout/         # Componentes de layout
│   └── Common/         # Componentes comunes
├── hooks/              # Hooks personalizados
├── lib/                # Funciones auxiliares y constantes
└── types/              # Tipos TypeScript globales
\`\`\`

## ⚙️ Configuración

### Variables de Entorno

1. Copia \`.env.local.example\` como \`.env.local\`
2. Configura tus variables de entorno

### Personalización

Edita los archivos de configuración según tus necesidades:
- \`tailwind.config.ts\` - Personalización de Tailwind
- \`next.config.js\` - Configuración de Next.js
- \`.eslintrc.json\` - Reglas de ESLint

## 🎨 Componentes Incluidos

- **Button** - Botón reutilizable con variantes
- **Card** - Tarjeta base para contenido
- **LoadingSpinner** - Indicador de carga

## 🪝 Hooks Incluidos

- **useLocalStorage** - Manejo persistente del estado local

---

**¡Feliz desarrollo! 🎉**

_Generado con la Plantilla Base de Next.js_`
  };

  // Crear todos los archivos
  Object.entries(files).forEach(([filePath, content]) => {
    createFile(path.join(projectPath, filePath), content);
  });

  console.log('\n✅ ¡Plantilla generada exitosamente!');
  console.log('\n📋 Próximos pasos:');
  console.log(`1. cd ${projectName}`);
  console.log('2. npm install');
  console.log('3. npm run dev');
  console.log('\n🎉 ¡Tu proyecto estará listo en http://localhost:3000!');
}

// Ejecutar el generador
if (require.main === module) {
  generateTemplate();
}

module.exports = { generateTemplate };