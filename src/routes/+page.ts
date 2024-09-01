// import { createClient } from '@sanity/client';

// const client = createClient({
// 	projectId: 'czvz7019',
// 	dataset: 'production',
// 	apiVersion: '2021-10-21',
// 	useCdn: false
// });

// export async function load({ params }) {
// 	const data = await client.fetch(`
//     *[_type == "page"]{
//     name,
//     'sections':
//       sections[]->{
//         name,
//         'background': background.asset->url,
//         header
//       }
//   }`);

// 	if (data) {
// 		return data[0];
// 	}
// 	return {
// 		status: 500,
// 		body: new Error('Internal Server Error')
// 	};
// }
