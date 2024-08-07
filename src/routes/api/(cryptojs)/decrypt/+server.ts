import { env } from '$env/dynamic/private';
import CryptoJS from 'crypto-js';
export const POST = async ({ request }) => {
	const body = await request.json();
	const decryptedValue = CryptoJS.AES.decrypt(body, env.VITE_CRYPTO_DECYPT_CODE).toString(
		CryptoJS.enc.Utf8
	);
	return new Response(decryptedValue);
};
