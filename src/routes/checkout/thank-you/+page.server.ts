import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { pb } from '$lib';
import { env } from '$env/dynamic/private';
export const load: PageServerLoad = async ({ url }) => {
	// const code = url.searchParams.get('code');
	// const id = url.searchParams.get('id');
	// const cancel = url.searchParams.get('cancel');
	const status = url.searchParams.get('status');
	const orderCode = url.searchParams.get('orderCode');
	if (status === 'PAID') {
		try {
			const orderDetail = await pb
				.collection('order')
				.getFirstListItem(`order_code="${orderCode}"`);
			const { token, record } = await pb
				.collection('users')
				.authWithPassword(env.PB_USERNAME, env.PB_PASSWORD);
			const updateOrderStatus = await pb.collection('order').update(orderDetail.id, {
				status: 'm1egogm9nuze38h'
			});
			pb.authStore.clear();
			return {
				updateOrderStatus
			};
		} catch (error) {
			return redirect(302, '/');
		}
	} else {
		return redirect(302, '/');
	}
};
