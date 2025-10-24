🎯 Proyecto: CS2 Skin Market Tracker
🧩 Stack

React / Next.js

TailwindCSS

shadcn/ui → para cards, botones, inputs, tabs, sidebar, modales

Recharts → para mostrar gráficos de precios

Framer Motion → para animaciones suaves

Mock API o CSFloat API → para datos de prueba de skins

💡 Funciones principales (MVP)

Home / Dashboard

Lista de skins populares con su precio actual y variación.

Cards animadas (shadcn Card + Motion).

Botón “View Details”.

Skin Detail View

Imagen grande del skin.

Nombre, rareza, tipo, y float value.

Gráfico de evolución de precio (Recharts).

Botón para añadir a favoritos (usa LocalStorage).

Search & Filter

Input de búsqueda (shadcn Input + Icon).

Filtros por categoría o rareza (Dropdown o Tabs).

Favorites Page

Lista de skins marcados como favoritos.

Persistencia local.

🎨 UI / UX sugerido

Header: título + buscador + icono de favoritos

Sidebar (opcional): categorías (AK, AWP, Knife, etc.)

Cards:

Imagen del skin centrada

Precio actual y variación (+% o -%)

Hover con animación sutil

Color palette: oscuro con acentos dorados o cian (tema “pro market CS2”)