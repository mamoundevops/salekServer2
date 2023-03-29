import Actionnaire from '../models/Actionnaire.js';

/* CREATE ACTIONNAIRE*/
export const createActionnaire = async (req, res) => {
  try {
    const { fullName, description, rolle } = req.body;
    const newActionnaire = new Actionnaire({
        fullName,
        description,
        rolle,
      });
      const savedActionnaire = await newActionnaire.save();
      res.status(201).json(savedActionnaire);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ ALL ACTIONNAIRE */
export const getActionnaire = async (req, res) => {
  try {
    const actionnaire = await Actionnaire.find();
    res.status(200).json(actionnaire);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
/* GET ACTIONNAIRE BY ACTIONNAIREID */
export const getActionnaireById = async (req, res) => {
  try {
    const { actionnaireid } = req.params;
    const actionnaire = await Actionnaire.findOne({ _id : actionnaireid });
    res.status(200).json(actionnaire);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE A ACTIONNAIRE*/
export const updateActionnaire = async (req, res) => {
  try {
    const { id, fullName, description, rolle } = req.body;
    await Actionnaire.updateOne(
      { _id: id },
      {
        $set: {
          fullName: fullName,
          description: description,
          rolle: rolle,
          
        },
      }
    );
    res.status(200).json("the payment was updated successfuly");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/*  DELETE ACTIONNAIRE */
export const deleteActionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    await Actionnaire.deleteOne({ _id: id });
    res.status(200).json("successfull detetion");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
