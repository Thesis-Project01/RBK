const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const sequelize = require("./database/configdb");
const { Sequelize } = require("sequelize");
const studentRoutes = require("./routes/studentRoutes"); 
const eventsRoutes=require("./routes/eventsRoutes.js");
const projectsRoutes=require("./routes/rProjectRoutes");
const adminRoutes=require("./routes/adminRoutes.js");
const blogsRoutes=require("./routes/blogsRoutes.js");
const commentsRoutes=require("./routes/commentsRoutes.js");
const visitorRoutes = require('./routes/IncrementVisitors.js');
const userRoutes=require("./routes/userRoutes.js");
const cohortRoutes = require("./routes/cohortRoutes.js");
const instructorRoutes = require("./routes/instructorRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/visitors",visitorRoutes);
app.use("/user",userRoutes)
app.use("/students", studentRoutes);
app.use("/projects",projectsRoutes)
app.use("/events",eventsRoutes)
app.use("/admin",adminRoutes)
app.use("/blogs",blogsRoutes)

app.use("/cohorts",cohortRoutes)
app.use("/instructor",instructorRoutes)
app.use("/comments",commentsRoutes)

sequelize.sync()
.then(()=>{
  app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});})
.catch((error)=>console.log(error))





