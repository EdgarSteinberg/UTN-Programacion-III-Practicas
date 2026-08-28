# 📚 Programación 3 — Prácticas UTN

Repositorio personal para almacenar y documentar las prácticas, ejercicios y proyectos realizados durante la materia **Programación 3** de la UTN.

# Repositorio de prácticas — Angular

Repositorio destinado a almacenar y documentar las prácticas realizadas durante el aprendizaje de Angular.

## Crear un proyecto Angular

```bash
ng new nombre-del-proyecto
```

## Crear un componente

```bash
ng g c nombre-del-componente --skip-tests
```

Ejemplo:

```bash
ng g c login --skip-tests
```

---

# Comunicación entre componentes

## Hijo → Padre con `@Output()`

### Paso 1 — Crear el `@Output()` en el hijo

```ts
@Output() mensajeDesdeHijo = new EventEmitter<string>();
```

### Paso 2 — Crear la variable

```ts
mensaje = '';
```

### Paso 3 — Crear el método para enviar el dato

```ts
enviarMensaje() {
  this.mensajeDesdeHijo.emit(this.mensaje);
}
```

### Paso 4 — Vincular el input con la variable

```html
<input type="text" id="message" [(ngModel)]="mensaje">

<button type="button" (click)="enviarMensaje()">
  Enviar mensaje desde el hijo
</button>
```

### Paso 5 — Crear en el padre una variable para almacenar el dato

```ts
mensajeRecibido = '';
```

### Paso 6 — Crear el método para recibir y guardar el dato

```ts
recibirMensaje(mensaje: string) {
  this.mensajeRecibido = mensaje;
}
```

### Paso 7 — Llamar al componente hijo y escuchar el `@Output()`

```html
<app-hijo
  (mensajeDesdeHijo)="recibirMensaje($event)">
</app-hijo>
```

* `(mensajeDesdeHijo)` → nombre del `@Output()` del hijo.
* `recibirMensaje()` → método del padre.
* `$event` → dato enviado por el hijo.

### Paso 8 — Mostrar el dato recibido

```html
<p>Mensaje recibido: {{ mensajeRecibido }}</p>
```

# Comunicación Padre → Hijo con `@Input()`

## Paso 1 — Crear la variable en el padre

Creamos una variable que contendrá el mensaje que queremos enviar:

```ts
mensajeInput = '';
mensajeDesdeElPadre = '';
```

`mensajeInput` almacena lo que escribimos en el input y `mensajeDesdeElPadre` almacena el mensaje que finalmente enviaremos.

---

## Paso 2 — Vincular el input con la variable

En el HTML del padre:

```html
<input type="text" [(ngModel)]="mensajeInput">
```

`[(ngModel)]` permite que lo que escribimos en el input se almacene en `mensajeInput`.

---

## Paso 3 — Crear el método para enviar el mensaje

```ts
enviarMensaje() {
  this.mensajeDesdeElPadre = this.mensajeInput;
}
```

Al ejecutar el método, copiamos el contenido de `mensajeInput` en `mensajeDesdeElPadre`.

---

## Paso 4 — Crear el botón

```html
<button type="button" (click)="enviarMensaje()">
  Enviar mensaje desde el padre
</button>
```

Al hacer click se ejecuta `enviarMensaje()`.

---

## Paso 5 — Pasar el mensaje al componente hijo

En el HTML del padre:

```html
<app-hijo [recibirMensaje]="mensajeDesdeElPadre"></app-hijo>
```

* `[recibirMensaje]` → nombre del `@Input()` del hijo.
* `mensajeDesdeElPadre` → variable del padre que contiene el dato.

---

## Paso 6 — Crear el `@Input()` en el hijo

En el `.ts` del hijo:

```ts
import { Input } from '@angular/core';

@Input() recibirMensaje?: string;
```

El hijo ahora puede recibir el valor enviado por el padre.

---

## Paso 7 — Mostrar el mensaje en el hijo

En el HTML del hijo:

```html
<h2>Recibiendo mensaje del padre</h2>

<p>{{ recibirMensaje }}</p>
```

`{{ recibirMensaje }}` utiliza **interpolación** para mostrar el dato recibido.

---


### Resumen

**Padre → Hijo = `@Input()`**

**Hijo → Padre = `@Output()` + `EventEmitter`**
