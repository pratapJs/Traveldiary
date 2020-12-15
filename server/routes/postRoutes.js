import express from 'express'
import{getPosts, createPosts} from '../controllers/postController.js'
const router = express.Router();

router.get('/', getPosts )
router.get('/', createPosts )

export default router