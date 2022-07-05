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
import  unoconv from "unoconv"
import { Powerpoint, Word } from 'pdf-officegen'

@Route("pdf")
export class PdfController extends Controller {
  @Post("uploadFile")
  public async createUser(@UploadedFile() file: any): Promise<boolean> {
    const p = new Powerpoint([])
    // this.setStatus(200); // set return status 201
    // console.log(requestBody);
    p.convertFromPdf(file.buffer, (err: any, result: any) => {
      console.log('err', err, result)
    })
    return false;
  }
}
