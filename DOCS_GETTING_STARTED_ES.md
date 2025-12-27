# Guía de inicio rápido — Proyecto Portfolio (Next.js)

Esta documentación en español explica cómo comenzar con el proyecto, su estructura, convenciones de desarrollo y pasos de despliegue.

## Requisitos

- Node.js 18+ (recomendado)
- npm, pnpm o yarn

## Instalación local

1. Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <tu-repo.git>
cd portfolio
```

2. Instala dependencias:

```bash
npm install
# o
# pnpm install
# o
# yarn
```

3. Ejecuta en modo desarrollo:

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## Scripts útiles

- `npm run dev` — servidor de desarrollo
- `npm run build` — compilar para producción
- `npm run start` — iniciar la app compilada
- `npm run lint` — ejecutar ESLint (si está configurado)

## Estructura del proyecto (resumen)

- `app/` — páginas y rutas (App Router)
- `components/` — componentes reutilizables (`layout`, `sections`, `ui`)
- `data/` — datos estáticos (`projects.jsx`, `skills.jsx`)
- `lib/` — utilidades y helpers (`animations.js`)
- `public/` — assets públicos (imágenes, favicon)
- `globals.css` — estilos globales

Ejemplo: `components/sections/Contact.jsx` contiene la sección de contacto.

## Convenciones de desarrollo

- Componentes: PascalCase (`MyComponent.jsx`).
- Carpetas: `components/sections/` para secciones completas, `components/ui/` para piezas pequeñas.
- Mantener lógica separada (hooks/utiles) si es necesario.
- CSS global en `globals.css`; usar módulos o Tailwind para estilos aislados.

## Cómo crear o editar un componente (pasos rápidos)

1. Crea el archivo en la carpeta correcta, por ejemplo `components/ui/MyButton.jsx`.
2. Exporta por defecto el componente y define `props` claras.
3. Importa y utiliza en las secciones o páginas.

Ejemplo de componente simple:

```jsx
export default function MyButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}
```

Uso:

```jsx
import MyButton from '@/components/ui/MyButton';

<MyButton onClick={() => console.log('clic')}>Enviar</MyButton>
```

## Ejemplo práctico: añadir un formulario en `components/sections/Contact.jsx`

- Abre `components/sections/Contact.jsx`.
- Añade un `<form>` con un manejador `onSubmit` para capturar los datos.

Ejemplo mínimo de `onSubmit` (cliente):

```jsx
function handleSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  // enviar a una API o procesar localmente
  console.log(data);
}

<form onSubmit={handleSubmit}>
  <input name="name" placeholder="Nombre" required />
  <input name="email" type="email" placeholder="Correo" required />
  <textarea name="message" placeholder="Mensaje" />
  <button type="submit">Enviar</button>
</form>
```


## Lint, tests y calidad

- Añade ESLint/Prettier para consistencia de código.
- Para pruebas de componentes, considera `Jest` o `Vitest`.

## Despliegue (recomendado: Vercel)

1. Ve a https://vercel.com/new y conecta el repositorio.
2. Selecciona la rama principal y despliega.

Next.js suele funcionar con la configuración por defecto de Vercel.

## Recursos

- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs

---
