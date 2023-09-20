# FrontEnd

Built Using React + TypeScript + Vite

![image](https://github.com/Shaburu/Advanced-Mushroom-Habitat-Mush-E/assets/67481819/4527f2e1-342f-4e07-bf5b-d480208e3667)


## MycoBot

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

## VerdeBot


- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
