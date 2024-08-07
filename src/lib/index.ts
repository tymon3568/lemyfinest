// place files you want to import through the `$lib` alias in this folder.
import PocketBase from 'pocketbase';
export let HOST_URL = import.meta.env.VITE_HOST_URL;
export const pb = new PocketBase(HOST_URL);
export let MAIN_URL = 'https://www.lemyfinest.com';
export const variationOptions = [
	{ id: 'kxgy94zy2n3zhhb', value: '10ml' },
	{ id: 'w0iwewi4kt8614c', value: '100ml' }
];
