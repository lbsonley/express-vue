# Express, Vue, Vite

Roll your own full stack.

## Docs

This project is first and foremost an Express app. However, we want still want to use Vue and Vite for a good developer experience. This was achieved by adding some clever NPM scripts which simultaneously start the Vite and Express servers as well as a bit of redirect logic to handle serving assets. For production, we tell Vite to generate a `manifest.json` and use the file paths for Javascript and CSS assets in `views/index.pug`.

To run the project locally

```bash
npm run dev
```

The run the project for production

```bash
npm run build:fe

npm start
```

### Reference

[The tutorial for FE setup](https://blog.codeminer42.com/making-a-full-stack-app-with-vue-vite-and-express-that-supports-hot-reload/)
