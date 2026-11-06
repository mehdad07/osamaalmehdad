import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT ?? 3000);
const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const projectRoot = path.resolve(currentDirectory, '..');
const isCompiled = path.basename(currentDirectory) === 'dist';
const publicDirectory = isCompiled
  ? path.join(projectRoot, 'dist', 'public')
  : path.join(projectRoot, 'public');
const compiledClientDirectory = path.join(projectRoot, 'dist', 'client');

app.disable('x-powered-by');
app.use('/client', express.static(compiledClientDirectory));
app.use(express.static(publicDirectory, { extensions: ['html'] }));

app.get('/health', (_request, response) => {
  response.json({ status: 'ok', service: 'personalhub' });
});

app.get('/', (_request, response) => {
  response.sendFile(path.join(publicDirectory, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Personal Hub is running on http://0.0.0.0:${port}`);
});
