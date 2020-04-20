module.exports = {
    getFilteredPosts: async (req, res) => {
        const db = req.app.get('db')
        const allPosts = await db.get_posts()
        // const everyPost = await db.get_every_post()
        const {id} = req.params
        const {userposts, search} = req.query

        // we use == here because the incoming boolean will be a string. 
        if(userposts == true && search.length > 0){
            const filteredPosts = allPosts.filter(post => {
                if(post.includes(search)){
                    return post
                }
            })
            return res.status(200).send(filteredPosts)
        }
        if(userposts == false && search.length === 0){
            const filteredPosts = allPosts.filter(post => {
                if(post.author_id != id){
                    return post
                }
            })
            return res.status(200).send(filteredPosts)
            // should respond with all posts where current user is NOT the author
        }
        if(userposts == false && search.length > 0){ 
            const filteredPosts = allPosts.filter(post => {
                //Respond with all posts where current user is NOT the author & the title contains the search string. 
                // again we use != because the incoming param will come in as a string
                if(post.includes(search) && post.author_id != id){
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

    }
}