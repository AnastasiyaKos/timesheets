import SkillModel from "../models/skills.model.js";


class SkillsService {

  constructor() {}

  async getAllSkills() {
    return await SkillModel.findAll();
  }

  async createSkill(skill) {
    return await SkillModel.create(skill);
  }

  async getSkillById(skillId) {
    return await SkillModel.findByPk(skillId);
  }

  async updateSkill(skill) {
    let response = await SkillModel.update({...skill}, {where: {id: skill.id}});
    let updatedSkill;
    if (!!response[0]){
      updatedSkill = await SkillModel.findByPk(skill.id);
    } else {
      throw Error('error');
    }
    return updatedSkill;
  }

  async deleteSkill(skillId) {
    return await SkillModel.destroy({where: {id: skillId}});
  }
}

let skillService = new SkillsService();
export default skillService;
