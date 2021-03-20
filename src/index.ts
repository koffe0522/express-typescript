import express from "express";
import { UserController } from "./interfaces/controllers/userController";
import { MysqlConnection } from "./interfaces/db/mysqlConnection";

const app = express();
const router = express.Router();

const db = new MysqlConnection()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get(
  "/user",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = useController.findUser(req.params as any)
    res.json(response)
  }
);

router.get(
  "/users",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = useController
    res.json(response)
  }
);

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

export default app;
