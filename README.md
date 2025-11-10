# 🌐 Aplicación Móvil de APIs (Ionic + Angular + Firebase)

**Integrantes:**
- 👩‍💻 Karla Rodríguez y Alisson Viracocha
---

## Descripción General

Esta aplicación fue desarrollada en **Ionic + Angular** y permite **consumir múltiples APIs REST** de forma combinada o por separado.  
Además, incluye un **sistema de autenticación completo con Firebase** (registro, login, verificación de correo y recuperación de contraseña)  
y el despliegue final se realiza en **Firebase Hosting**.

https://login-auth-f1b3e.web.app

---

## 🧩 Funcionalidades Principales

###  Autenticación con Firebase
- Registro de usuarios con correo y contraseña.
  <img width="717" height="484" alt="image" src="https://github.com/user-attachments/assets/b95891b0-2311-4a68-a054-b30646516ac8" />
  
- Verificación de cuenta por correo electrónico.
  
   <img width="282" height="380" alt="image" src="https://github.com/user-attachments/assets/3438f348-9e10-4b77-b832-2809d2105ac7" />
   
- Recuperación de contraseña mediante enlace.
  
<img width="484" height="351" alt="image" src="https://github.com/user-attachments/assets/5af74f3a-66a5-4157-be8a-a935017a826d" />

- Logout seguro.
  
<img width="1342" height="527" alt="image" src="https://github.com/user-attachments/assets/d223f889-6ae4-4edd-9936-a1aa9f6097e2" />

###  Consumo de APIs (Tabs principales)
La aplicación tiene dos pestañas principales:

#### 🧠 Tab 1 — *Memes*
- Consume la API pública **Imgflip** para mostrar memes populares.  
- Cada meme se muestra con su imagen y título.  
- Estilo visual moderno con tarjetas (`ion-card`) y gradiente de colores.
<img width="647" height="587" alt="image" src="https://github.com/user-attachments/assets/37ca4adb-69c8-41ac-83f6-93626f113141" />

#### 🐱 Tab 2 — *Chistes y Gatos*
- Combina dos APIs:
  - **JokeAPI** (`https://v2.jokeapi.dev/joke/Any?lang=es`) → muestra chistes aleatorios en español.
  - **TheCatAPI** (`https://api.thecatapi.com/v1/images/search?limit=10`) → muestra fotos aleatorias de gatos.
- Permite recargar el contenido con un botón (“ver mas ”).
- Usa el mismo formato visual de tarjetas que la pestaña de memes.
<img width="666" height="592" alt="image" src="https://github.com/user-attachments/assets/2d99444f-0a49-4089-a301-53651a21fd30" />

---

## ☁️ Firebase

### 🔧 Configuración utilizada:
- **Authentication:** Correo y contraseña habilitados.  
- **Hosting:** Despliegue web del proyecto (carpeta `www`).  
<img width="1158" height="428" alt="image" src="https://github.com/user-attachments/assets/a24e8c69-164d-45d7-806b-69b5f8d7a848" />

## ☁️ Video de Tik Tok
https://vm.tiktok.com/ZMAWBRtF5/
