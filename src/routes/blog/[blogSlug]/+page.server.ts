import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
    if (!params.blogSlug) {
        throw new Error('Slug is required');
    }
    return { blogSlug: params.blogSlug }
}) satisfies PageServerLoad;