import User from './user.schema.js';
// import UserRepository from './user.repository.js';
import bcrypt from 'bcrypt';

export default class UserController {

  async signUp(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({name,email,password});
    res.status(201).json({
      success:true,
    })
  }

//   async signIn(req, res, next) {
//     try{
//       // 1. Find user by email.
//     const user = await this.userRepository.findByEmail(req.body.email);
//     if(!user){
//       return res
//         .status(400)
//         .send('Incorrect Credentials');
//     }else{
//       // 2. Compare password with hashed password.
//       const result = await bcrypt.compare(req.body.password, user.password);
//       if(result){
//  // 3. Create token.
//  const token = jwt.sign(
//   {
//     userID: user._id,
//     email: user.email,
//   },
//   'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
//   {
//     expiresIn: '1h',
//   }
// );
// // 4. Send token.
// return res.status(200).send(token);
//       }else{
//         return res
//         .status(400)
//         .send('Incorrect Credentials');
//       }
//     }
//     }catch(err){
//       console.log(err);
//       return res.status(200).send("Something went wrong");
//     }
//   }
}
