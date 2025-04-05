import bcrypt from 'bcrypt';
import User from '../models/User.js';
function generateUserID() {
    return Math.floor(Math.random() * 90 + 10);
}

export async function signup(req, res){
    const { username, password } = req.body;
    const userID = generateUserID();

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = new User({ userID, username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User Created Successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to Sign-in' , error: err.message});
    }
}

export async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and Password are required' });
    }
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ message: 'Invalid Username or Password' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid Username or Password' });
        res.status(200).json({
            message: 'Login Successful',
            userID: user.userID,
            username: user.username,
        });
    } catch (err) {
        res.status(500).json({ message: 'Invalid Username or Password' });
    }
}

