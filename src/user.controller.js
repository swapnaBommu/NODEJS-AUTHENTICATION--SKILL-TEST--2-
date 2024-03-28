import User from './user.schema.js';

export default class UserController {

  async signUp(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({name,email,password});
    const token = user.getJwtToken();
    res.status(201).json({
      success:true,
      token
    })
  }


}
