import { Router } from 'express'
import * as tasksController from '../controllers/tasks.controller'

const router = Router()

router.get('/', tasksController.getTasks)

router.post('/', tasksController.createTask)

router.get('/:taskId', tasksController.getTaskById)

router.put('/:taskId', tasksController.updateTaskById)

router.delete('/:taskId', tasksController.deleteTaskById)


export default router