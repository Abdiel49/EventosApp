# App de Eventos con React Native (Expo)

# Iniciar el proyecto

Correr:

```bash
$ npx create-expo-app@latest --template blank-typescript
#  npx create-expo-app@latest --template blank-typescript
# ✔ What is your app named? … YouAppName # put your app name
# ✔ Downloaded and extracted project files.

$ cd YouAppName
# install packages
$ npm install
# start server
$ npm start
```

# Instalación y configuración (dependencias)

```bash
# react navigation
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs

# react redux toolkit
npm install @reduxjs/toolkit react-redux

# react-native-vector-icons
npm install --save react-native-vector-icons
npm i --save-dev @types/react-native-vector-icons

# async-storage (comunity version)
npm install @react-native-async-storage/async-storage
```

## Configuracion de Absolute paths en Expo React Native

Actualizar el archivo `tsconfig.json`:

```json
{
  "extends": "@react-native/typescript-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@app/*": ["./*"],
    }
  }
}
```

con esa configuracion, todas las importaciones dentro de la carpeta/fichero `src` se harán desde `@app/*`

```typescript
import { colors } from '../theme/colors'
// ahora será:
import { colors } from '@app/theme/colors'
```

### Instalar plugin

```sh
npm install --save-dev babel-plugin-module-resolver
```

Ahora configurar el archivo `babel.config.js`:

Antes:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

Despues:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src',
          },
        },
      ]
    ]
  };
};
```

> [!IMPORTANT]  
> Es importante reiniciar al servidor una vez hecha la configuracion.
> Si sucede algun error al correr la app puede ejecutarlo con: `npm start -- --reset-cache` y/o desinstalar la app y volver a ejecutar.

### Alternativa

Alternativa, se puede generar un un alias para cada directorio dentro de `src`

- `tsconfig.json`:

```json
{
  "extends": "@react-native/typescript-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"],
      "@screens/*": ["screens/*"]
    }
  }
}
```

- `babel.config.js`:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@screens': './src/screens'
          },
        },
      ]
    ]
  };
};
```

## Links

- [https://docs.expo.dev/](https://docs.expo.dev/)
- [https://reactnative.dev/docs/components-and-apis](https://reactnative.dev/docs/components-and-apis)
- [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)
- [https://react-redux.js.org/introduction/getting-started](https://react-redux.js.org/introduction/getting-started)
- [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- [https://github.com/oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [https://react-native-async-storage.github.io/async-storage/docs/install/](https://react-native-async-storage.github.io/async-storage/docs/install/)