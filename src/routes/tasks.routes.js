import { Router } from 'express'
import { verify } from 'jsonwebtoken'
import * as tasksController from '../controllers/tasks.controller'
import { verifyToken } from '../middlewares'

const router = Router()

router.get('/', tasksController.getTasks)

router.post('/', verifyToken, tasksController.createTask)

router.get('/:taskId', tasksController.getTaskById)

router.put('/:taskId', verifyToken, tasksController.updateTaskById)

router.delete('/:taskId', verifyToken, tasksController.deleteTaskById)


export default router