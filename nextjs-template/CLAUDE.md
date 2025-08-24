# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de Desarrollo

### Scripts Principales
- `npm run dev` - Servidor de desarrollo (localhost:3000)
- `npm run build` - Build para producción 
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Arregla problemas de ESLint automáticamente
- `npm run type-check` - Verifica tipos TypeScript
- `npm run format` - Formatea código con Prettier
- `npm run format:check` - Verifica formato del código

### Flujo de Validación
Antes de commits importantes, ejecutar en orden:
1. `npm run type-check`
2. `npm run lint:fix` 
3. `npm run format`
4. `npm run build`

## Arquitectura del Código

### Stack Tecnológico
- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript con configuración strict
- **Estilos**: Tailwind CSS con PostCSS
- **Linting**: ESLint + Prettier integrados
- **Utilidad de clases**: clsx para className condicional

### Estructura de Carpetas Clave
```
src/
├── app/                    # Next.js App Router - páginas y layouts
│   ├── layout.tsx         # Layout raíz con Inter font y estructura HTML
│   ├── page.tsx           # Página principal
│   ├── loading.tsx        # Loading UI global
│   └── globals.css        # Estilos globales Tailwind + custom layers
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes primitivos (Button, Card)
│   ├── Layout/           # Componentes de layout (header, footer, etc)
│   └── Common/           # Componentes comunes (LoadingSpinner)
├── hooks/                # Custom React hooks
├── lib/                  # Utilidades y configuraciones
│   ├── utils.ts         # Funciones helper (cn, formatDate, etc)
│   └── constants.ts     # Constantes de la aplicación
└── types/               # Definiciones TypeScript globales
```

### Patrones de Importación
- **Path aliases configurados**: `@/*` apunta a `./src/*`
- **Aliases específicos**: `@/components/*`, `@/hooks/*`, `@/lib/*`, `@/types/*`
- **Imports relativos**: Preferir aliases sobre imports relativos largos

### Convenciones de Componentes
- **UI Components**: Usar `forwardRef` para compatibilidad con bibliotecas
- **Variantes**: Props `variant` y `size` para componentes con múltiples estilos
- **Styling**: Usar función `cn()` de `@/lib/utils` para condicionales de className
- **TypeScript**: Extender interfaces HTML nativas cuando sea apropiado

### Sistema de Estilos
- **Configuración Tailwind**: Colores primary personalizados, animaciones fade-in
- **Layers CSS**: `@layer components` para clases reutilizables como `.btn`, `.card`
- **Utilities custom**: `.text-gradient` para texto con gradiente
- **Mobile-first**: Usar responsive classes de Tailwind (md:, lg:, etc.)

### Variables de Entorno
- Copiar `.env.local.example` como `.env.local` para configuración local
- Variables públicas con prefijo `NEXT_PUBLIC_`
- Constantes de entorno en `src/lib/constants.ts`

### Configuración de VS Code
- **Auto-formateo**: Prettier al guardar activado
- **ESLint**: Auto-fix activado
- **Emmet**: Configurado para TypeScript/React
- **Import preferences**: Módulos relativos preferidos