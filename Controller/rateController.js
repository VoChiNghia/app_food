const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createComment = async (req, res) => {
  try {
    const data = await prisma.rate_res.create({
      data: req.body,
    });
    if (data) {
      res.status(200).send("commented");
    }
  } catch (error) {
    res.send("error");
  }
};

const deleteComment = async (req, res) => {
  const { user_id } = req.body;
  try {
    const user = await prisma.rate_res.findMany({
      where: { user_id: Number(user_id) },
    });
    if (user) {
      await prisma.rate_res.delete({ where: { user_id: Number(user_id) } });
      res.status(200).send("deleted");
    }
  } catch (error) {
    console.log(error);
  }
};

const getCommentByUser = (req, res) => {
  const { userId } = req.params;
  try {
    const data = prisma.rate_res.findMany({
      where: { user_id: Number(userId) },
      include: {
        restaurant: true,
      },
    });
    if (data.length > 0) {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
  }
};
const getCommentByRes = (req, res) => {
  const { resId } = req.params;
  try {
    const data = prisma.rate_res.findMany({
      where: { res_id: Number(resId) },
      include: {
        user: true,
      },
    });
    if (data.length > 0) {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getCommentByRes,
  getCommentByUser,
  deleteComment,
  createComment,
};
