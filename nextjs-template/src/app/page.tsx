import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            nextjs-template
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
}