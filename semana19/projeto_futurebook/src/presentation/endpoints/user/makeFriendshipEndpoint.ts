import { Request, Response } from 'express'
import { UserDB } from '../../../data/userDB'
import { MakeFriendshipUC } from '../../../business/usecases/user/makeFriendship'

export default async function makeFriendshipEndpoint(req: Request, res: Response) {
  try {
    const makeFriendshipUC = new MakeFriendshipUC(new UserDB())

    const result = await makeFriendshipUC.execute({
      token: req.headers.auth as string,
      friendId: req.body.friendId
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
}