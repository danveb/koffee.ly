import bcrypt from "bcryptjs"; 

const users = [
    {
        name: "Admin User", 
        email: "admin@example.com", 
        password: bcrypt.hashSync("123456", 10), // synchronously generate hash with 10 rounds
        isAdmin: true, 
    }, 
    {
        name: "Peach Doe", 
        email: "peach@example.com", 
        password: bcrypt.hashSync("123456", 10), // synchronously generate hash with 10 rounds
    }, 
    {
        name: "Jojo Doe", 
        email: "jojo@example.com", 
        password: bcrypt.hashSync("123456", 10), // synchronously generate hash with 10 rounds
    }, 
]; 

export default users