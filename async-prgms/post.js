let posts = [];

const addPost = (id, title) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newPost = { id: id, title: title };
            posts.push(newPost);
            console.log(`Post added: ${JSON.stringify(newPost)}`);
        }, 2000);
    }
    )
}

const getPost = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts:");
            posts.forEach(post => console.log(`ID: ${post.id}, Title: ${post.title}`));
        }, 1000);
    }
    )
}

(async () => {
    await addPost(1, "First Post");
    await addPost(2, "Second Post");
    await getPosts();
})();

async function sum(x, y) {
    return x + y;
}

sum(10, 20).then(result => console.log(result));
