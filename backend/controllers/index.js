import Monument from '../models/index.js';

export const getMonument = async (req, res) =>{
    const { name } = req.params;
    try {
        const monument = await Monument.findOne({name});

        res.status(200).json(monument);
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" });
    }
}