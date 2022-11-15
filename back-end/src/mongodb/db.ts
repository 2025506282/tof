// import { connect } from "mongoose";
// import { config } from "../config/default";
// // import chalk from "chalk";
// // await mongoose.connect(config.dbConfig.url);
// // mongoose.Promise = global.Promise;

// // const db = mongoose.connection;

// // db.once("open", () => {
// //   console.log(chalk.green("连接数据库成功"));
// // });

// // db.on("error", function (error: any) {
// //   console.error(chalk.red("Error in MongoDb connection: " + error));
// //   mongoose.disconnect();
// // });

// // db.on("close", function () {
// //   console.log(chalk.red("数据库断开，重新连接数据库"));
// //   mongoose.connect(config.url);
// // });
// export const connectDB = async () => {
//   try {
//     console.log("MongoDB connectDB...", JSON.stringify(config));
//     await connect(config.dbConfig.url);
//     console.log("MongoDB Connected...");
//     // console.log(chalk.green("连接数据库成功"));
//   } catch (err: any) {
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };

// // export default db;
