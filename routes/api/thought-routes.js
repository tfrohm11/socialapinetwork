const router = require('express').Router();

const thought =require('../../controllers/thought-controller');

router.route('/').post(thought.createThought).get(thought.findThought)
router.route('/:Id').get(thought.findOneThough).put(thought.updateOneThough).delete(thought.removeOneThough);
router.route('/:thoughtId/reactions').post(thought.addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(thought.removeReaction)

module.exports = router;