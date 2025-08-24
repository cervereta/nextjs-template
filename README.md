# 🚀 Generador de Plantillas Next.js 14

Un generador completo de plantillas para crear proyectos Next.js 14 con TypeScript, Tailwind CSS y las mejores prácticas de desarrollo preconfiguradas.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.5-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Características

- ⚡ **Next.js 14** - App Router, Server Components y las últimas características
- 🔷 **TypeScript** - Tipado estático con configuración strict 
- 🎨 **Tailwind CSS** - Framework CSS utilitario con configuración personalizada
- ⚙️ **ESLint + Prettier** - Linting y formateo automático integrados
- 📁 **Estructura organizada** - Arquitectura escalable y bien definida
- 🧩 **Componentes base** - UI components listos para usar (Button, Card, LoadingSpinner)
- 🪝 **Hooks personalizados** - Utilities comunes como useLocalStorage
- 🎯 **Alias de imports** - Imports limpios con `@/` 
- 🔧 **Configuración VS Code** - Settings optimizados para desarrollo
- 🌐 **Internacionalización** - Configurado en español por defecto

## 🚀 Instalación y Uso

### Opción 1: Uso Global (Recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/nextjs-template.git
cd nextjs-template

# 2. Hacer el script accesible globalmente
sudo cp generate-template.js /usr/local/bin/create-nextjs-template
sudo chmod +x /usr/local/bin/create-nextjs-template

# 3. ¡Crear proyectos desde cualquier lugar!
create-nextjs-template mi-nuevo-proyecto
```

### Opción 2: Uso Directo

```bash
# Clonar y usar directamente
git clone https://github.com/tu-usuario/nextjs-template.git
node nextjs-template/generate-template.js mi-proyecto
```

## 📋 Inicio Rápido

Una vez creado tu proyecto:

```bash
cd mi-nuevo-proyecto
npm install
npm run dev
```

🎉 ¡Tu aplicación estará disponible en [http://localhost:3000](http://localhost:3000)!

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | 🔥 Servidor de desarrollo |
| `npm run build` | 📦 Build para producción |
| `npm run start` | 🚀 Servidor de producción |
| `npm run lint` | 🔍 Ejecuta ESLint |
| `npm run lint:fix` | 🔧 Arregla problemas de ESLint |
| `npm run type-check` | ✅ Verifica tipos TypeScript |
| `npm run format` | 🎨 Formatea código con Prettier |
| `npm run format:check` | 👀 Verifica formato del código |

## 📁 Estructura del Proyecto Generado

```
mi-proyecto/
├── 📄 CLAUDE.md                    # Guía para Claude Code
├── 📄 package.json                 # Dependencias y scripts
├── 📄 tsconfig.json               # Configuración TypeScript
├── 📄 tailwind.config.ts          # Configuración Tailwind
├── 📄 next.config.js              # Configuración Next.js
├── 📄 .eslintrc.json              # Reglas ESLint
├── 📄 .prettierrc                 # Configuración Prettier
├── 📄 .gitignore                  # Archivos ignorados por Git
├── 📄 .env.local.example          # Variables de entorno ejemplo
├── 📁 .vscode/                    # Configuración VS Code
├── 📁 public/                     # Archivos estáticos
└── 📁 src/
    ├── 📁 app/                    # Next.js App Router
    │   ├── 📄 layout.tsx          # Layout raíz
    │   ├── 📄 page.tsx            # Página principal
    │   ├── 📄 loading.tsx         # Loading UI
    │   └── 📄 globals.css         # Estilos globales
    ├── 📁 components/             # Componentes reutilizables
    │   ├── 📁 ui/                 # Componentes primitivos
    │   ├── 📁 Layout/             # Componentes de layout
    │   └── 📁 Common/             # Componentes comunes
    ├── 📁 hooks/                  # Custom React hooks
    ├── 📁 lib/                    # Utilidades y constantes
    └── 📁 types/                  # Tipos TypeScript globales
```

## 🧩 Componentes Incluidos

### Button
```tsx
import { Button } from '@/components/ui/Button'

<Button variant="primary" size="md">
  Click me
</Button>
```

### Card
```tsx
import { Card } from '@/components/ui/Card'

<Card>
  <h3>Mi título</h3>
  <p>Contenido de la tarjeta</p>
</Card>
```

### LoadingSpinner
```tsx
import { LoadingSpinner } from '@/components/Common/LoadingSpinner'

<LoadingSpinner size="lg" />
```

## 🪝 Hooks Incluidos

### useLocalStorage
```tsx
import { useLocalStorage } from '@/hooks'

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'defaultValue')
  
  return (
    <button onClick={() => setValue('newValue')}>
      Update: {value}
    </button>
  )
}
```

## 🎨 Sistema de Estilos

### Colores Personalizados
```css
/* Configurados en tailwind.config.ts */
bg-primary-500    /* #3b82f6 */
bg-primary-600    /* #2563eb */
bg-primary-700    /* #1d4ed8 */
```

### Clases Utility
```css
.text-gradient     /* Texto con gradiente */
.btn              /* Estilos base para botones */
.card             /* Estilos base para tarjetas */
```

### Animaciones
```css
animate-fade-in   /* Fade in con translateY */
animate-spin-slow /* Rotación lenta */
```

## ⚙️ Configuración

### Variables de Entorno
```bash
# Copia .env.local.example como .env.local
cp .env.local.example .env.local

# Configura tus variables
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=mi-app
```

### Personalización
- **Tailwind**: Edita `tailwind.config.ts`
- **Next.js**: Modifica `next.config.js`
- **ESLint**: Ajusta `.eslintrc.json`
- **TypeScript**: Configura `tsconfig.json`

## 🔧 Flujo de Desarrollo Recomendado

```bash
# 1. Desarrollo
npm run dev

# 2. Antes de commit
npm run type-check
npm run lint:fix
npm run format
npm run build
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Reconocimientos

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [ESLint](https://eslint.org/) - Linter JavaScript/TypeScript
- [Prettier](https://prettier.io/) - Formateador de código

---

<div align="center">

**¿Te gusta este proyecto? ¡Dale una ⭐ en GitHub!**

[Reportar Bug](../../issues) · [Solicitar Feature](../../issues) · [Documentación](../../wiki)

</div>