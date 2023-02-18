const stories = [];

const Stories = () => {
    const body = JSON.stringify(stories);
    const headers = { 'Content-type': 'application/json' };
    return new Response(body, { headers });
};

export default Stories;
