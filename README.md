## SI NO TENEMOS INSTALADO TYPESCRIPT DE FORMA GLOBAL
-- npm i -g typescript

## INICIALIZAMOS EL PACKAGE PARA LAS DEPENDENCIAS
npm init --yes

## CREAMOS EL FICHERO DE CONFIGURACIÓN DE TYPESCRIPT
tsc --init

## CONFIGURAMOS LA VERSIÓN DE JS Y RUTA DE COMPILACIÓN DE LOS FICHEROS TS tsconfig.json
-- es6
-- "outDir": "./dist"
-- "rootDir": "./src/"

## CREAMOS EL FICHERO DE CONFIGURACIÓN DE NODEMON nodemon.json
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": [
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node"
}

## CREAMOS SCRIPT DE EJECUCIÓN EN package.json EN EL APARTADO DE SCRIPTS
"build": "tsc",
"clean": "rimraf dist",
"start": "npm run build && node dist/app.js",
"dev": "nodemon src/app.ts"

## PARA COMPILAR LOS FICHERO TS EJECUTAR COMANDO
npm run build

## PARA EJECUTAR EL SERVIDOR EJECUTAR COMANDO
npm run dev

## INSTALACIÓN DE DEPENDENCIAS
express
cors
bcrypt
passport 
passport-jwt 
jsonwebtoken
mongoose
fs-extra (para utilizar promesas)
generate-password
helmet (para añadir seguridad a la API)
dotenv (para variables de entorno)
rxjs (implementar observables para la persistencia de datos)
ts-node (para levantar el servidor con typescript sin tener que compilarlo)
rimraf (borrado de ficheros y directorios independientemente del sistema operativo)

npm i express cors bcrypt passport passport-jwt jsonwebtoken mongoose fs-extra helmet dotenv generate-password rimraf rxjs ts-node

## DEPENDENCIAS DE TIPO SOLO EN DESARROLLO (-D)
nodemon
**TYPES PARA LAS DEPENDENCIAS**
@types/express
@types/mongoose
@types/morgan
@types/cors
@types/bcrypt
@types/passport
@types/passport-jwt
@types/helmet
@types/dotenv
@types/fs-extra
morgan (para verificar que petición get, post, etc)
nodemon
typescript (para poder montar el servidor con typescript)
@types/node

npm i @types/express @types/mongoose @types/fs-extra @types/morgan @types/cors @types/bcrypt @types/passport @types/passport-jwt @types/helmet @types/dotenv typescript nodemon morgan @types/node -D