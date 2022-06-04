import { Request, Response } from "express"
import { User } from "../entities/User"

export const createUser = async( req: Request, res: Response ) => {
    try {
        const user = new User()
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        await user.save()
        res.status(201).json({msg: "ok", data: user})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'error', error})        
    }
}

export const getUser = async( req: Request, res: Response ) => {
    try {
        const user = await User.findOneBy({id: parseInt(req.params.id)})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: 'error', error})        
    }
}

export const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({msg: 'error', error})        
    }
}

export const updateUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({id: parseInt(req.params.id)});
        if(!user) return res.status(404).json({ message: 'User does not exists'})
        await User.update({id: parseInt(req.params.id)}, req.body)
        res.status(200).json({msg: "ok"})            
    } catch (error) {
        res.status(500).json({msg: 'error', error})        
    }
}

export const deleteUser = async (req:Request, res: Response) => {
    try {
        const result = await User.delete({id: parseInt(req.params.id)})
        if(result.affected===0){
            return res.status(404).json({msg: "User not found"})
        }
        res.status(200).json({msg: "Ok"})
    } catch (error) {
        res.status(500).json({msg: 'error', error})        
    }
}