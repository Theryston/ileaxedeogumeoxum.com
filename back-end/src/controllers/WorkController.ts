import { WorkService } from '../services/WorkService'
import { Request, Response } from 'express'

export class WorkController {
  constructor() {}

  async create(req: Request, res: Response) {
    try {
      const workService = new WorkService()
      const work = await workService.create(req.body)
      res.status(201)
      res.json({ work })
    } catch (error) {
      res.status(500)
      res.json({
        message: error.message
      })
    }
  }

  async read(req: Request, res: Response) {
    try {
      const workService = new WorkService()
      const works = await workService.read()
      res.status(200).json({ works })
    } catch (error) {
      res.status(500)
      res.json({
        message: error.message
      })
    }
  }

  async readById(req: Request, res: Response) {
    try {
      const workService = new WorkService()
      const work = await workService.readById(Number(req.params.id))
      res.status(200).json({ work })
    } catch (error) {
      res.status(500)
      res.json({
        message: error.message
      })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const workService = new WorkService()
      const work = await workService.update({ id: Number(req.params.id), ...req.body })
      res.status(200).json({ work })
    } catch (error) {
      res.status(500)
      res.json({
        message: error.message
      })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const workService = new WorkService()
      const status = await workService.delete(Number(req.params.id))
      res.sendStatus(200)
    } catch (error) {
      res.status(500)
      res.json({
        message: error.message
      })
    }
  }
}