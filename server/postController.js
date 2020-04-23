module.exports = {
    getFilteredPosts: async (req, res) => {
        const db = req.app.get('db')
        const allPosts = await db.get_posts()
        const {id} = req.params
        const {userposts, search} = req.query
        // we use == here because the incoming boolean will be a string. 
        if(userposts == 'true' && search.length > 0){
            const filteredPosts = allPosts.filter(post => {
                if(post.title.includes(search)){
                    return post
                }
            })
            return res.status(200).send(filteredPosts)
        }
        console.log('userposts:', userposts)
        console.log('search:' ,search)
        if(userposts == 'false' && search.length === 0){
            console.log('hit')
            const filteredPosts = allPosts.filter(post => {
                if(post.author_id != id){
                    return post
                }
            })
            return res.status(200).send(filteredPosts)
            // should respond with all posts where current user is NOT the author
        }
        if(userposts == 'false' && search.length > 0){ 
            const filteredPosts = allPosts.filter(post => {
                console.log('HIT')
                //Respond with all posts where current user is NOT the author & the title contains the search string. 
                // again we use != because the incoming param will come in as a string
                if(post.title.includes(search) && post.author_id != id){
                    return post
                }
            })
            return res.status(200).send(filteredPosts)
        }
            res.status(200).send(allPosts)
    },
    getEveryPost: async (req, res) => {
        const db = req.app.get('db')
        const everyPost = await db.get_posts()
        res.status(200).send(everyPost)
        // console.log(everyPost)
    },
    addNewPost: async (req, res) => {
        const db =req.app.get('db')
        const {author_id, title, img, content} = req.body

        const newPost = await db.add_post([author_id, title, img, content])
        res.status(200).send(newPost)
    },
    getOnePost: async (req, res) => {
        const db = req.app.get('db')
        const {postid} = req.params
        // const postid = parseInt(id)
        const onePost = await db.get_single_post(postid)
        console.log(onePost[0])
        res.status(200).send(onePost[0])
    }
}