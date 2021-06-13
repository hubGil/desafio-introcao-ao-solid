import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    const user = this.createUserUseCase.execute({ name, email });

    if (!user) {
      return response.status(404).json({ error: "Error creating user" });
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };
