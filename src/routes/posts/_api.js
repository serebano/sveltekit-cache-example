export async function api(e, resource, data) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`, {
		method: e.request.method,
		headers: {
			'content-type': 'application/json',
		},
		body: data && JSON.stringify(data),
	});

	return {
		status: res.status,
		body: await res.json(),
	};
}
