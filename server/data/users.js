import bcrypt from "bcryptjs"; 

const users = [
    {
        name: "Admin User", 
        email: "admin@gmail.com", 
        password: bcrypt.hashSync("admin", 10), // synchronously generate hash with 10 rounds
        isAdmin: true, 
    }, 
    {
        name: "Peach Doe", 
        email: "peach@gmail.com", 
        password: bcrypt.hashSync("peach", 10), // synchronously generate hash with 10 rounds
    }, 
    {
        name: "Jojo Doe", 
        email: "jojo@gmail.com", 
        password: bcrypt.hashSync("jojo", 10), // synchronously generate hash with 10 rounds
    }, 
]; 

export default users