# Troubleshooting in react

## General troubleshooting

Most of the time, troubleshooting in react is a "google the error code" game, where stack overflow will be your best friend. In most cases react gives you an error code you can search up and find solutions for online. There are some cases where there wont be an error code, like the *The white screen of death* where you have to backtrack your previous actions to find what went wrong (usually a rendering problem).

## Common problems

- Not closing element or component tags
- Not starting component names with a capital letter
- in a component, Not having all of your elements inside a single tag

## Missing react-dom files

Troubleshooting when starting your react app fails:
If you encounter the error:

```terminal
Compiled with problems:

ERROR in ./src/index.js 

Module not found: Error: Can't resolve 'react-dom/client' in C:\...\my-app\src'
```

You will need to npm install the [react-dom files](https://www.npmjs.com/package/react-dom) using the following command:

```terminal
npm install react react-dom
```
