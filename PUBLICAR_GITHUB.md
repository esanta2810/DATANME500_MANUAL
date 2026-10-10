# Publicar el manual en GitHub Pages

1. Descarga y descomprime el ZIP.
2. Abre el repositorio de GitHub.
3. Selecciona **Add file → Upload files**.
4. Arrastra el contenido descomprimido, incluyendo las carpetas `css`, `js` e `img`. No subas solamente los archivos de dentro de esas carpetas.
5. Confirma el commit a la rama `main`.
6. Abre **Settings → Pages**.
7. En **Build and deployment**, elige **Deploy from a branch**, rama **main**, carpeta **/(root)** y guarda.
8. En **Actions**, espera que el flujo de Pages termine con una marca verde. Abre el enlace publicado.

La estructura correcta de la raíz debe incluir `index.html`, `.nojekyll`, `css/`, `js/` e `img/`.

Si ya existen archivos sueltos con los mismos nombres en la raíz, primero asegúrate de haber subido correctamente las carpetas; luego puedes borrar los duplicados sueltos.
