const Tasks = require('../models/task')
const asyncwrapper = require('../middleware/async')


const getAllTasks = asyncwrapper(async(req,res) =>{
        const tasks = await Tasks.find({});

        res.status(200).json({status: 'succesful', data: {tasks,nbHits: tasks.length},tasks})
})

const createTask = asyncwrapper(async(req,res) =>{
    const task = await Tasks.create(req.body);

    res.status(201).json({task})
})

const getTask = asyncwrapper(async(req,res) =>{
        const {id: taskID} = req.params
        const task = await Tasks.findOne({_id: taskID}) 
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
})

const updateTask = asyncwrapper(async(req,res) =>{
        const {id: taskID} = req.params
        const task = await Tasks.findOneAndUpdate({_id: taskID},req.body,{
            new: true,
            runValidators: true
        }) 
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
})

const deleteTask = asyncwrapper(async(req,res) =>{
        const {id: taskID} = req.params
        const task = await Tasks.findOneAndDelete({_id: taskID}) 
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
        })



module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}