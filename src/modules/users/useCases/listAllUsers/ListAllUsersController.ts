import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;

    const users = this.listAllUsersUseCase.execute({ user_id });

    if (!users) {
      return response
        .status(400)
        .json({ erro: "It is possible just user admin" });
    }

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
