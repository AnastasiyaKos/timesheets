import skillsService from "../service/skills.service.js";


class SkillsController {

  async getAllSkills(req, res) {
    try {
      const skills = await skillsService.getAllSkills();
      res.status(200).json(skills)
    } catch (e) {
      console.log(e)
    }
  }

  async createSkill(req, res) {
    try {
      const skill = await skillsService.createSkill(req.body);
      res.status(200).json(skill)
    } catch (e) {
      console.log(e)
    }
  }

  async getSkillById(req, res) {
    try {
      const skill = await skillsService.getSkillById(req.params.id);
      res.status(200).json(skill)
    } catch (e) {
      console.log(e)
    }
  }

  async updateSkill(req, res) {
    try {
      const skill = await skillsService.updateSkill(req.body);
      res.status(200).json(skill)
    } catch (e) {
      console.log(e)
    }
  }

  async deleteSkill(req, res) {
    try {
      const skill = await skillsService.deleteSkill(req.params.id);
      res.status(200).json(skill)
    } catch (e) {
      console.log(e)
    }
  }
}
const skillsController =  new SkillsController();
export default skillsController;