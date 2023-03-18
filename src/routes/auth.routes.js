import { Router } from 'express'
import * as authController from '../controllers/auth.controller'
import { checkDuplicateUserNameOrEmail } from '../middlewares'

const router = Router()

router.post('/signin', authController.signIn)
router.post('/signup', checkDuplicateUserNameOrEmail, authController.signUp)

export default router