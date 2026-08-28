# Portfolio web — Joiker Fashion

Web responsive preparada para móvil y escritorio. Incluye el logo como marca y favicon, foto personal, secciones de Cortes, Promociones, Podcast y Consejos, botones sociales, accesibilidad básica y metadatos para compartir el enlace.

## 1. Contactos configurados

La web ya enlaza a `@joiker_fashion_oficial` en Instagram, `@joiker.fashion.sa` en TikTok, la página compartida de Facebook y `joikerrivero@gmail.com`. Si alguno cambia, se edita al inicio de `script.js`.

## 2. Ver la web en tu equipo

Puedes abrir `index.html` directamente con Chrome, Edge, Safari o Firefox. Para probarla como un sitio real, abre una terminal dentro de esta carpeta y ejecuta:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## 3. Publicarla gratis con Netlify Drop (la opción más sencilla)

1. Entra en https://app.netlify.com/drop
2. Arrastra la carpeta completa `joiker-fashion-portfolio` a la página.
3. Netlify generará un enlace público HTTPS.
4. En la configuración del sitio puedes cambiar el subdominio por algo como `joiker-fashion.netlify.app`.

Alternativas gratuitas: GitHub Pages, Cloudflare Pages o Vercel. Sube siempre la carpeta completa, sin cambiar la estructura de `assets`.

## 4. Poner el enlace en Instagram y TikTok

- **Instagram:** Perfil → Editar perfil → Enlaces → Añadir enlace externo → pega la URL pública.
- **TikTok:** Perfil → Editar perfil → Sitio web → pega la URL. La disponibilidad de este campo puede depender del tipo de cuenta y la región.
- Usa un texto corto en la biografía: `Cortes · Historias · Consejos ↓`.

## Imágenes visuales generadas

Se generaron cuatro imágenes originales mediante la herramienta integrada de ImageGen, con prompts editoriales separados para cortes, promociones, podcast y consejos. El concepto común fue: fotografía profesional de peluquería, composición 4:3, paleta negra con acentos fucsia y dorado, sin texto, logos ni marcas de agua.
