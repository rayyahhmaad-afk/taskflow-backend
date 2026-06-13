const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createProject(data, userId) {
  return prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      ownerId: userId,
    },
  });
}

async function getProjects(userId) {
  return prisma.project.findMany({
    where: {
      ownerId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

module.exports = {
  createProject,
  getProjects,
};
