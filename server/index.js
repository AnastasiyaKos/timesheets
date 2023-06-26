import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import taskRouter from "./src/routes/tasksRoutes.js";
import timesheetsRouter from "./src/routes/timesheetsRoutes.js";
import statusesRouter from "./src/routes/statusesRoutes.js";
import skillsRouter from "./src/routes/skillsRoutes.js";
import salariesRouter from "./src/routes/salariesRoutes.js";
import rolesRouter from "./src/routes/rolesRoutes.js";
import employeesRouter from "./src/routes/employeesRoutes.js";
import billablesRouter from "./src/routes/billableRoutes.js";
import projectsRouter from "./src/routes/projectsRoutes.js";
import budgetsRouter from "./src/routes/budgetsRoutes.js";



const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.use('/billables', billablesRouter);
app.use('/budgets', budgetsRouter);
app.use('/users', employeesRouter);
app.use('/projects', projectsRouter);
app.use('/roles', rolesRouter);
app.use('/salaries', salariesRouter);
app.use('/skills', skillsRouter);
app.use('/tasks', taskRouter);
app.use('/statuses', statusesRouter);
app.use('/timesheets', timesheetsRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});