import { Work } from '../database/Work'

interface IWork {
  title: string;
  description: string;
  message: string;
  id ? : number;
}

export class WorkService {
  constructor() {}

  async create({ title, description, message }: IWork) {
    try {
      const work = await Work.create({ title, description, message });
      return work
    } catch (error) {
      throw error
    }
  }

  async read() {
    try {
      return await Work.findAll()
    } catch (error) {
      throw error
    }
  }

  async readById(id: number) {
    try {
      return await Work.findOne({ where: { id } })
    } catch (error) {
      throw error
    }
  }

  async update({ id, title, description, message }: IWork) {
    try {
      const work = await Work.update({ title, description, message }, { where: { id } })
      return work;
    } catch (error) {
      throw error
    }
  }

  async delete(id: number) {
    try {
      await Work.destroy({ where: { id } })
      return 1
    } catch (error) {
      throw error;
    }
  }
}