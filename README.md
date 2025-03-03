# 🛒 Tienda Online con Pago Seguro vía PayPal

Este proyecto es una tienda online simple que muestra un solo producto y permite realizar pagos a través de PayPal Business de manera segura.  
Se ha desarrollado utilizando HTML, CSS, JavaScript y Bootstrap, junto con un servidor backend en Node.js y Express para proteger las credenciales de PayPal.

## 🚀 Características Principales
- ✔ Diseño responsivo con Bootstrap 5 y Grid Layout.
- ✔ Selección de tallas (7 a 11) con botones interactivos.
- ✔ Pago seguro con PayPal Business.
- ✔ Manejo de alertas con SweetAlert2 para confirmar pagos exitosos o errores.
- ✔ Protección de credenciales usando variables de entorno (.env).
- ✔ Backend con Node.js y Express para cargar dinámicamente el SDK de PayPal.

## 🛠️ Tecnologías Utilizadas
**Frontend:**
- HTML
- CSS
- Bootstrap 5
- JavaScript

**Backend:**
- Node.js
- Express

**Extras:**
- Manejo de alertas: SweetAlert2
- Seguridad: Uso de .env y .gitignore para proteger credenciales

## 🏗️ Estructura del Proyecto
```bash
/mi-tienda  
│── /public  
│   │── /css  
│   │   ├── styles.css         # Estilos personalizados  
│   │── /js  
│   │   ├── script.js          # Lógica de PayPal y selección de tallas  
│   │── /img  
│   │   ├── producto.png       # Imagen del producto  
│   │── index.html             # Página principal  
│── /server  
│   │── server.js              # Servidor en Node.js con Express  
│── .env                       # ⚠️ Variables de entorno (NO SE SUBE A GITHUB)  
│── .gitignore                 # ⚠️ Evita subir archivos sensibles  
│── package.json               # Dependencias y configuración de Node.js  
│── README.md                  # Explicación del proyecto  
```

## 🔧 Cómo Ejecutar el Proyecto en Local

1️⃣ **Clonar el repositorio**  
   Abre tu terminal y ejecuta los siguientes comandos:
   ```bash
   git clone https://github.com/tu-usuario/mi-tienda.git
   cd mi-tienda
```

## 2️⃣ Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:
```bash
   npm install
```
## 3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto y coloca tu PAYPAL_CLIENT_ID:
```bash
PAYPAL_CLIENT_ID=aqui_va_tu_client_id
```
## 4️⃣ Iniciar el servidor

Para iniciar el servidor, ejecuta el siguiente comando:

``` bash
npm start
```
🔹 Esto ejecutará el servidor en http://localhost:5000/.

## 5️⃣ Abrir el proyecto en el navegador
Abre index.html en tu navegador o usa Live Server en VSCode.

🔒 Seguridad y Buenas Prácticas
✅ Las credenciales de PayPal están protegidas con .env.
✅ El archivo .env está en .gitignore, por lo que no se sube a GitHub.
✅ El SDK de PayPal se carga dinámicamente desde el backend.
📌 Créditos y Contacto
Desarrollado por [Johnlennonl] 🚀
Si tienes dudas o sugerencias, contáctame. 😃
📧   Jojopow2410@gmail.com 



```bash
   Este formato es adecuado para Markdown, utilizando una lista numerada y añadiendo explicaciones claras y concisas para cada paso. ¡Espero que te sirva!

```

