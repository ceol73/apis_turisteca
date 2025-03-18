const ImgaeRepository = require('../repositories/imageRepository');

class ImageController {
    async createImage(req, res) {
        try {
            const image = await ImgaeRepository.create(req.body);
            res.status(201).json(image);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findImageById(req, res) {
        try {
            const image = await ImgaeRepository.findById(req.params.id);
            if (image) res.json(image);
            else res.status(404).json({ message: 'Image not found' });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findAllImages(req, res) {
        try {
            const images = await ImgaeRepository.findAll();
            res.json(images);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateImage(req, res) {
        try {
            const image = await ImgaeRepository.update(req.params.id, req.body);
            if (image[0]) res.json({ message: 'Image updated' });
            else res.status(404).json({ message: 'Image not found' });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteImage(req, res) {
        try {
            const image = await ImgaeRepository.delete(req.params.id);
            if (image) res.json({ message: 'Image deleted' });
            else res.status(404).json({ message: 'Image not found' });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}