import rolesService from "../service/roles.service.js";


class RolesController {

  async getAllRoles(req, res) {
    try {
      const roles = await rolesService.getAllRoles();
      res.status(200).json(roles)
    } catch (e) {
      console.log(e)
    }
  }

  async getRoleById(req, res) {
    try {
      const role = await rolesService.getRoleById(req.params.id);
      res.status(200).json(role)
    } catch (e) {
      console.log(e)
    }
  }
}
const rolesController =  new RolesController();
export default rolesController;