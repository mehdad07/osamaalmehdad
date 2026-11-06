import { cp, mkdir } from 'node:fs/promises';

const publicSource = new URL('../public/', import.meta.url);
const publicDestination = new URL('../dist/public/', import.meta.url);
const clientSource = new URL('../dist/client/', import.meta.url);
const clientDestination = new URL('../dist/public/client/', import.meta.url);

await mkdir(publicDestination, { recursive: true });
await cp(publicSource, publicDestination, { recursive: true });
await mkdir(clientDestination, { recursive: true });
await cp(clientSource, clientDestination, { recursive: true });
