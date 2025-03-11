const PostRepository = require('../repositories/postRepository');

class PostController{
    async createPost(req, res){
        try{
            const post = await PostRepository.create(req.body);
            res.status(201).json(post);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findPostById(req, res){
        try{
            const post = await PostRepository.findById(req.params.id);
            if(post) res.json(post);
            else res.status(404).json({ message: 'Post not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findAllPosts(req, res){
        try{
            const posts = await PostRepository.findAll();
            res.json(posts);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async updatePost(req, res){
        try{
            const post = await PostRepository.update(req.params.id, req.body);
            if(post[0]) res.json({ message: 'Post updated' });
            else res.status(404).json({ message: 'Post not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async deletePost(req, res){
        try{
            const post = await PostRepository.delete(req.params.id);
            if(post) res.json({ message: 'Post deleted' });
            else res.status(404).json({ message: 'Post not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new PostController();