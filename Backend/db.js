import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://sunilkumarchakravartty:K5wJiHFGnVsUvl4l@mernstack.ilxchcs.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log("Error: while connection ", error.message);
  }
};

export default Connection;
