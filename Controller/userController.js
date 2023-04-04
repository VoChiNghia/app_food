const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const likeController = async (req, res) => {
  try {
    const data = await prisma.like_res.create({
      data: req.body,
    });
    if (data) {
      res.status(200).send("liked");
    }
  } catch (error) {
    res.send("error");
  }
};

const unlikeController = async (req, res) => {
  const { res_id,user_id } = req.body;
  try {
    const user = await prisma.like_res.findMany({
      where: { res_id: Number(res_id) },
    });
    if (user) {
      const de = await prisma.like_res.delete({
        where: { res_id: Number(res_id),user_id: Number(user_id) },
      });
      res.status(200).send(de);
    }
  } catch (error) {
    console.log(error);
  }
};

const getLikeUserController = async (req, res) => {
  const { userId } = req.query;
  try {
    const data = await prisma.like_res.findMany({
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
const getLikeResController = async (req, res) => {
  const { resId } = req.query;
  try {
    const data = await prisma.like_res.findMany({
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

const orderFood = async (req, res) => {
  try {
    const data = await prisma.food.create({
      data: req.body,
    });
    if (data) {
      res.status(200).send("success");
    }
  } catch (error) {
    res.send("error");
  }
}
module.exports = {
  likeController,
  unlikeController,
  getLikeResController,
  getLikeUserController,
};
