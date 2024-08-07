import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
import CryptoJS from 'crypto-js';
const decryptCode = 'sdf123jfd@sadjf!dsf';
const decryptFunc = async (data: string) => {
	const response = await fetch(`/api/decrypt`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
		body: JSON.stringify(data)
	});
	return response.json();
};
export const openCheckoutSidebar = $state({ value: false });
//Cart
export const openCartSidebar = $state({ value: false });
export const useLocalStorage = <T>(key: string, value: T) => {
	let storage = $state<{ value: T }>({ value });
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			let decryptedValue = CryptoJS.AES.decrypt(item, decryptCode).toString(CryptoJS.enc.Utf8);
			storage.value = JSON.parse(decryptedValue);
		} else {
			let encryptedValue = CryptoJS.AES.encrypt(
				JSON.stringify(storage.value),
				decryptCode
			).toString();
			localStorage.setItem(key, encryptedValue);
		}
	}
	return {
		get value() {
			return storage.value;
		},
		set value(newValue: T) {
			storage.value = newValue;
			if (browser) {
				let encryptedValue = CryptoJS.AES.encrypt(
					JSON.stringify(storage.value),
					decryptCode
				).toString();
				localStorage.setItem(key, encryptedValue);
				// localStorage.setItem(key, JSON.stringify(storage.value));
			}
		}
	};
};
export class LocalStorage<T> {
	#value = $state<T>() as T;
	key = '';
	constructor(key: string, value: T) {
		this.#value = value;
		this.key = key;
		if (browser) {
			const item = localStorage.getItem(key);
			if (item) {
				this.#value = this.deserialize(item);
			} else {
				localStorage.setItem(key, this.serialize(this.#value));
			}
		}
	}
	get value() {
		return this.#value;
	}
	set value(newValue: T) {
		this.#value = newValue;
		if (browser) {
			localStorage.setItem(this.key, this.serialize(this.#value));
		}
	}
	serialize = (value: T): string => {
		return JSON.stringify(value);
	};
	deserialize = (value: string): T => {
		return JSON.parse(value);
	};
}
// let cartProducts = $state<CartItem[]>([]);
let cartProducts = useLocalStorage<CartItem[]>('cartProducts', []);
// let cartProducts = new LocalStorage<CartItem[]>('cartProducts', [])
let cartStats = $derived.by(() => {
	let totalQuantity = 0;
	let subtotal = 0;
	for (const product of cartProducts.value) {
		totalQuantity += product.quantity;
		subtotal += product.price * product.quantity;
	}
	return {
		totalQuantity,
		subtotal
	};
});
export function cartItems() {
	const addToCart = async (product: CartItem) => {
		cartProducts.value = [...cartProducts.value, product];
	};
	const updateProductQuantity = (SKU: string, quantity: number) => {
		cartProducts.value = cartProducts.value.map((product) => {
			if (product.SKU === SKU) {
				product.quantity += quantity;
			}
			return product;
		});
	};
	const removeFromCart = (SKU: string) => {
		cartProducts.value = cartProducts.value.filter((product) => product.SKU !== SKU);
	};
	const emptyCart = () => {
		cartProducts.value = [];
	};
	return {
		get cartProducts() {
			return cartProducts.value;
		},
		get cartStats() {
			return cartStats;
		},
		addToCart,
		removeFromCart,
		updateProductQuantity,
		emptyCart
	};
}
