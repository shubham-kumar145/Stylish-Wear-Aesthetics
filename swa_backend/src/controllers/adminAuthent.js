const User = require('../model/user')

const getAllstaff = async (req, res) => {
    try {
        const getalldetails = await User.find({}).select('_id firstName lastName emailId mobileNo role')
        const getstaffdetails = getalldetails.filter(data => data.role === 'staff')
        res.status(200).send(getstaffdetails)
    } catch (err) {
        res.status(500).send("ERROR: " + err)
    }
}
const getAlluser = async (req, res) => {
    try {
        const getalldetails = await User.find({}).select('_id firstName lastName emailId mobileNo role')
        const getstaffdetails = getalldetails.filter(data => data.role === 'user')
        res.status(200).send(getstaffdetails)
    } catch (err) {
        res.status(500).send("ERROR: " + err)
    }
}
const getAlladmin = async (req, res) => {
    try {
        const getalldetails = await User.find({}).select('_id firstName lastName emailId mobileNo role')
        const getstaffdetails = getalldetails.filter(data => data.role === 'admin')
        res.status(200).send(getstaffdetails)
    } catch (err) {
        res.status(500).send("ERROR: " + err)
    }
}

const deleteonestaff = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: "Invalid or missing ID" });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};


module.exports = { getAllstaff,deleteonestaff,getAlluser,getAlladmin }