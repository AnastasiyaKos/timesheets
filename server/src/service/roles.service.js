import RoleModel from "../models/roles.model.js";


class RolesService {

  constructor() {}

  async getAllRoles() {
    return await RoleModel.findAll();
  }

  async getRoleById(roleId) {
    return await RoleModel.findByPk(roleId);
  }
}

let roleService = new RolesService();
export default roleService;
