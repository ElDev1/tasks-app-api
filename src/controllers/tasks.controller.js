import Task from '../models/Task'

export const createTask = async (req, res) => {
    const {name, description, tags, state, createdBy} = req.body
    
    const newTask = new Task({name, description, tags, state, createdBy})
    
    const taskSaved = await newTask.save()

    res.status(201).json(taskSaved)
}

export const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}

export const getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.taskId)
    res.status(200).json(task)
}

export const updateTaskById = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
        new: true
    })
    res.status(204).json(updatedTask)
}

export const deleteTaskById = async (req, res) => {

}