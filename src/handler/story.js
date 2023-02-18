const story = {};

const Story = request => {  // This will be used soon to retrieve a post  const postId = request.params.id;
    const storyId = request.params.id;
    const body = JSON.stringify(story);
    const headers = { 'Content-type': 'application/json' };
    return new Response(body, { headers });
};

export default Story;
