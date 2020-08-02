import Koa from "koa";
import koabody from "koa-body";
import serverless from "serverless-http";
import Router from "koa-router";
import cors from "@koa/cors";
import Joi from "@hapi/joi";
import { configureMail, transporter } from "../configs/MailConfig";

// configs
configureMail();

const app = new Koa();
const router = new Router();

app.use(koabody());
app.use(cors());

router.post("/mails", async (ctx: Koa.Context) => {
  try {
    let params = await Joi.object({
      to: Joi.string().required(),
      subject: Joi.string().required(),
      html: Joi.string().required(),
    }).validateAsync(ctx.request.body);

    await transporter.sendMail(params);

    ctx.status = 200;
    ctx.body = { msg: "suc" };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { msg: err.message };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export const mailHandler = serverless(app);