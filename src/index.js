import { Router } from "itty-router";

const router = Router();


router.get("/orgList", async () => {
	const orgList = await static_data.get("charityList", {type:"json"});
	const orgListJSON = JSON.stringify(orgList);
	return new Response(orgListJSON, {
		headers: {
			'content-type': 'text/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
			'Access-Control-Max-Age': '86400',
		},
	})
})

router.get("/storyList", async () => {
	const storyList = await story.list();
	const storyListJSON = JSON.stringify(storyList);

	return new Response(storyListJSON, {
		headers: {
			'content-type': 'text/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
			'Access-Control-Max-Age': '86400',
		},
	})
})

router.get("/storyList/:title", async (request) => {
	const authorName = request.params.title;
	const storyRes = await story.get(authorName, {type:"json"});

	const storyJSON = JSON.stringify(storyRes);


	return new Response(storyJSON, {
		headers: {
			'content-type': 'text/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
			'Access-Control-Max-Age': '86400',
		},
	})
	return new Response(req);
})




router.get('/', () => new Response('Root!'))

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

// attach the router "handle" to the event handler
addEventListener('fetch', event =>
	event.respondWith(router.handle(event.request))
)