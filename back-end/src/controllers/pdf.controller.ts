// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  UploadedFile,
} from "tsoa";
import { User } from "../models/user.model";
import { UsersService, UserCreationParams } from "../services/user.service";

@Route("pdf")
export class PdfController extends Controller {
  @Post("uploadFile")
  public async createUser(@UploadedFile() file: any): Promise<boolean> {
    // this.setStatus(200); // set return status 201
    // console.log(requestBody);
    return true;
  }
}
