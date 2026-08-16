# Guardias El Bolsón — EDERSA

App de planilla horaria de guardia para el equipo de El Bolsón: calendario de
turnos, vacaciones, horas extra (50%/100%), banco de horas, coberturas entre
compañeros y alertas antes de entrar.

## Stack
- **React + Vite** (frontend)
- **Tailwind CSS v4**
- **Supabase** (Postgres + Realtime) como base de datos compartida del equipo

## Desarrollo local

```bash
npm install
npm run dev
```

## Base de datos

Las tablas viven en un proyecto de Supabase existente, con prefijo
`guardias_` (`guardias_empleados`, `guardias_overrides`, `guardias_vacaciones`,
`guardias_horas_extra`, `guardias_banco_uso`). Las credenciales (URL + clave
pública) están en `src/supabaseClient.js` — son seguras de exponer porque el
acceso real está controlado por las políticas de Row Level Security en las
tablas, no por que la clave esté oculta.

**Importante sobre el modelo de seguridad actual:** las políticas RLS de las
5 tablas están puestas en modo abierto (cualquiera con el link de la app
puede leer y escribir), porque no hay un sistema de login real todavía — el
PIN de cada persona es solo una traba para no tocar los datos de otro por
error, no seguridad de verdad. Si más adelante quieren restringir esto en
serio, hay que sumar autenticación real de Supabase (magic link o similar) y
cambiar las políticas para que se basen en el usuario logueado.

## Deploy

Ya está desplegado en Vercel. Cada `git push` a la rama principal (una vez
conectado el repo) genera un deploy nuevo automáticamente.

