
import { Body, Controller, Get, Path, Post, Query, Route, Request } from "tsoa";

@Route("puppter")
export class PuppterController extends Controller {
  @Get("test")
  public async test(@Request() req: any): Promise<any> {
    const session = req.session;
    console.log("req.session:", session, session.cookie);
    if (req.session.user) {
      req.session.user = req.session.user + 1;
      return req.session.user + 1;
    } else {
      console.log("req.session:      111");
      req.session.user = 1;
      return req.session.user;
    }
  }
}
