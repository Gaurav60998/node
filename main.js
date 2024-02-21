const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company");

// making structure
const empSchema = mongoose.Schema({
  name: String,
  id: Number,
  sal: Number,
});

//insert query
const insEmp = async () => {
  const empModel = mongoose.model("emps", empSchema);
  const new_emp = new empModel({
    name: "roy",
    id: 2,
    sal: 90000,
  }); //storing data
  const result = new_emp.save(); // permanant save data
  console.log(result);
};
insEmp();

// update query
const updateEmp = async () => {
  const empModel = mongoose.model("emps", empSchema);
  // Modification: Use await to wait for the promise returned by updateOne
  const result = await empModel.updateOne(
    { id: 20 },
    { $set: { sal: 100000 } }
  );
  console.log(result);
};
updateEmp();

//show(find)
const showEmp = async () => {
  const empModel = mongoose.model("emps", empSchema);
  const result = await empModel.find();
  result.forEach((emp) => {
    console.log(emp);
  });
};
showEmp();

// delete query
const deleteEmp = async () => {
  const empModel = mongoose.model("emps", empSchema);
  const result = await empModel.deleteMany({ id: 23 });
  console.log(result);
};
deleteEmp();