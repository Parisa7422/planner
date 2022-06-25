import Quotes from "../models/Quotes.js";
const getQuotes = async (req, res) => {
  let result = Quotes.find();
  const quotes = await result;
  //const totalQuotes = await Quotes.countDocuments(quotes);
  res.status(200).json({ quotes });
};

export { getQuotes };
