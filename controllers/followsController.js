const FollowsRepository = require('../repositories/followsRepository');

const FollowsController = {
  async create(req, res) {
    try {
      const follow = await FollowsRepository.create(req.body);
      res.status(201).json(follow);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const follow = await FollowsRepository.findById(req.params.id);
      if (!follow) return res.status(404).json({ error: 'Follow not found' });
      res.json(follow);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const follows = await FollowsRepository.findAll();
      res.json(follows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await FollowsRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Follow not found' });
      res.json({ message: 'Follow updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await FollowsRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Follow not found' });
      res.json({ message: 'Follow deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = FollowsController;
