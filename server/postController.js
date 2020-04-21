module.exports = {
    getFilteredPosts: async (req, res) => {
        const db = req.app.get('db')
        const allPosts = await db.get_posts()
        const {id} = req.params
        const {userposts, search} = req.query
        // we use == here because the incoming boolean will be a string. 
        if(userposts == true && search.length > 0){
            const filteredPosts = allPosts.filter(post => {
                if(post.includes(search)){
                    return post
                }
            })
            return res.status(200).send(filteredPosts).catch(err => console.log(`err 1 ${err}`))
        }
        if(userposts == false && search.length === 0){
            const filteredPosts = allPosts.filter(post => {
                if(post.author_id != id){
                    return post
                }
            })
            return res.status(200).send(filteredPosts).catch(err => console.log(`err 2 ${err}`))
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
            return res.status(200).send(filteredPosts).catch(err => console.log(`err 3 ${err}`))
        }
            res.status(200).send(allPosts).catch(err => console.log(`err w/ getFilteredPosts${err}`))
    },
    getEveryPost: async (req, res) => {
        const db = req.app.get('db')
        const everyPost = await db.get_posts()
        res.status(200).send(everyPost)

    },
    addNewPost: async (req, res) => {
        const db =req.app.get('db')
        const {title, img, content} = req.body

    }
}