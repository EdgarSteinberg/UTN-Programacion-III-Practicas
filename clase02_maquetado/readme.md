# ⚙️ VS Code — Workspace Trust y Live Server

## Problema

Si **Live Server** está instalado pero:

* No aparece **Go Live** abajo a la derecha.
* No aparece **Open with Live Server** al hacer clic derecho.
* `Ctrl + Shift + P` → buscar `Live Server` no muestra resultados.
* Aparece el mensaje:

> Restricted Mode is intended for safe code browsing. Trust this folder to enable all features.

Entonces VS Code probablemente tiene la carpeta en **Restricted Mode**.

---

## Solución

### 1. Abrir la carpeta del proyecto

En VS Code:

**File → Open Folder...**

Seleccionar la carpeta del proyecto.

---

### 2. Abrir Workspace Trust

Presionar:

```text
Ctrl + Shift + P
```

Buscar:

```text
Workspace: Manage Workspace Trust
```

Presionar **Enter**.

---

### 3. Confiar en la carpeta

En la ventana de **Workspace Trust**, seleccionar:

**Trust this folder**

Esto permite que VS Code habilite todas las funciones y extensiones para ese proyecto.

> ⚠️ Solo confiar en carpetas/proyectos que conozcas o en los que confíes.

---

### 4. Recargar VS Code

Si Live Server todavía no aparece:

```text
Ctrl + Shift + P
```

Buscar:

```text
Developer: Reload Window
```

Presionar **Enter**.

---

### 5. Comprobar Live Server

Abrir el archivo HTML.

Debería aparecer abajo a la derecha:

```text
Go Live
```

También debería funcionar:

**Clic derecho sobre el archivo HTML → Open with Live Server**

---

## Diagnóstico rápido

Si no aparece **Go Live**:

```text
¿Live Server está instalado?
        ↓
¿Aparece "Restricted Mode"?
        ↓
Workspace: Manage Workspace Trust
        ↓
Trust this folder
        ↓
Developer: Reload Window
        ↓
¿Aparece Go Live?
```

## Importante

No hace falta que el archivo se llame `index.html`.

Live Server puede abrir directamente:

```text
login.html
register.html
home.html
```

etc.

Tampoco es necesario hacer **Sign in** en VS Code para solucionar este problema.
