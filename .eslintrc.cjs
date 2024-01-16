module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Ajout de recommandations React
    'plugin:import/errors', // Gestion des erreurs d'importation
    'plugin:import/warnings', // Gestion des avertissements d'importation
    'plugin:import/typescript', // Support des spécificités TypeScript pour l'importation
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Activation du support JSX
    },
    ecmaVersion: 2020,
    sourceType: 'module', // Définir le type de source comme module
    project: './tsconfig.json', // Assurez-vous que ce chemin est correct
  },
  plugins: [
    'react', // Plugin React pour ESLint
    'react-refresh', 
    '@typescript-eslint', // Plugin TypeScript pour ESLint
    'import' // Plugin pour gérer les importations
  ],
  settings: {
    react: {
      version: 'detect', // Détection automatique de la version de React
    },
    'import/resolver': {
      typescript: {}, // Résolution des chemins TypeScript
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Vous pouvez ajouter des règles supplémentaires ici si nécessaire
  },
};
