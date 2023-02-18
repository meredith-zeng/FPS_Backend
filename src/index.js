import { Router } from "itty-router";

import Story from "./handler/story";
import Stories from "./handler/stories";
import Post from "./handler/story";

const router = Router();


router.get("/orgList", async () => {
	const orgList = await static_data.get("charityList", {type:"json"});
	const orgListJSON = JSON.stringify(orgList);
	return new Response(orgListJSON, {
		headers: {
			'content-type': 'text/json'
		},
	})
})

router.get("/storyList", async () => {
	const storyList = await story.list();
	const storyListJSON = JSON.stringify(storyList);

	return new Response(storyListJSON, {
		headers: {
			'content-type': 'text/json'
		},
	})
})

router.get("/storyList/:title", async (request) => {
	const authorName = request.params.title;
	const storyRes = await story.get(authorName, {type:"json"});
	const storyJSON = JSON.stringify(storyRes);

	return new Response(storyJSON, {
		headers: {
			'content-type': 'text/json'
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