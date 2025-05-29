# SigiesNewFront

## Instalación

### 1. Configuración del fichero .npmrc para utilizar el repo UCI

```
registry=http://nexus.prod.uci.cu/repository/npm-all
no-proxy=nexus.prod.uci.cu
strict-ssl=false
audit=false
```

**NOTA:** El fichero en windows se encuentra generalmente en la carpeta %USERPROFILE%

### 2. Instalar las dependencias.

```bash
$ npm install
```

**NOTA:** En ocasiones algún paquete puede dar problemas a la hora de instalar. Esto es generalmente un problema del repositorio. Esperar un tiempo antes de volver a intentarlo debería de resolver el problema.

## Ejecutar la aplicación

```bash
npm run start
```

## Realizar pruebas

```bash
npm run test
```

## Estructura

El proyecto estará basado en módulos

```
+-- core            //agrupa los métodos y servicios globales
+-- layouts         //agrupa los componentes visuales globales
+-- modules         //agrupa todos los modulos a implementar
|   +--assignment   //módulo asignación
|   +--examination  //módulo examen
|   +--general      //módulo general
|   +--organization //módulo organización
+-- routing         //se encarga del enrutamiento entre los módulos
```

## Estándar de mensajes de Commits para el Git:

`<Tipo de cambio>: <Descripción>`

**Tipos de cambio:**

- **ADD:** Adicionar nueva funcionalidad o fichero
- **FIX:** Corregir un bug
- **CHG:** Un código que cambia, pero no arregla un bug o adiciona una funcionalidad
- **DEL:** Eliminar una funcionalidad, método o fichero

## Instrucciones de la línea de comando

También puede subir archivos existentes desde su ordenador utilizando las instrucciones que se muestran a continuación.

### Configuración global de Git

git config --global user.name "miguel medina ramirez"
git config --global user.email "mmramirez@uci.cu"

### Crear un nuevo repositorio

git clone git@gitlab.prod.uci.cu:fortes/sigies-new-front.git
cd sigies-new-front
git switch --create main
touch README.md
git add README.md
git commit -m "add README"
git push --set-upstream origin main

### Push a una carpeta existente

cd existing_folder
git init --initial-branch=main
git remote add origin git@gitlab.prod.uci.cu:fortes/sigies-new-front.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin main

### Push a un repositorio de Git existente

cd existing_repo
git remote rename origin old-origin
git remote add origin git@gitlab.prod.uci.cu:fortes/sigies-new-front.git
git push --set-upstream origin --all
git push --set-upstream origin --tags
