import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
 
  {
    email: "vishydv.to@gmail.com",
    fullName: "Vishal Yadav",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dx9pw7dqc/image/upload/v1741417285/xt404myfzqk2togn8q4d.jpg",
  },
   
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
