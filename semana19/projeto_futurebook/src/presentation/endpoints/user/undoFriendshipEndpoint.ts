import { Request, Response } from 'express'
import { UserDB } from '../../../data/userDB'
import { UndoFriendshipUC } from '../../../business/usecases/user/undoFriendship'

export default async function undoFriendshipEndpoint(req: Request, res: Response) {
  try {
    const undoFriendshipUC = new UndoFriendshipUC(new UserDB())

    const result = await undoFriendshipUC.execute({
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