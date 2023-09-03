const express = require("express");

const router = express.Router();

// API FOR BLOG CONTROLLER

const blogController = require("../Controllers/blogController");

router.get("/blog1", blogController.create);
router.get("/blog2", blogController.read);
router.get("/blog3", blogController.delete);
router.get("/blog4", blogController.update);

// API FOR BLOG DETAILS CONTROLLER
const blogDetailsController = require("../Controllers/blogDetailsController");

router.get("/blog-details1", blogDetailsController.create);
router.get("/blog-details2", blogDetailsController.read);
router.get("/blog-details3", blogDetailsController.delete);
router.get("/blog-details4", blogDetailsController.update);

// API FOR COMMENT CONTROLLER

const commentController = require("../Controllers/commentController");

router.get("/comment1", commentController.create);
router.get("/comment2", commentController.read);
router.get("/comment3", commentController.delete);
router.get("/comment4", commentController.update);

//API FOR MESSAGE CONTROLLER

const messageController = require("../Controllers/messageController");

router.get("/message1", messageController.create);
router.get("/message2", messageController.read);
router.get("/message3", messageController.delete);
router.get("/message4", messageController.update);

//API FOR PORTFOLIO CONTROLLER
const portfolioController = require("../Controllers/portfolioController");

router.get("/portfolio1", portfolioController.create);
router.get("/portfolio2", portfolioController.read);
router.get("/portfolio3", portfolioController.delete);
router.get("/portfolio4", portfolioController.update);

//API FOR PRODUCT CONTROLLER

const productController = require("../Controllers/productController");

router.get("/product1", productController.create);
router.get("/product2", productController.read);
router.get("/product3", productController.delete);
router.get("/product4", productController.update);

//API FOR PROFIT CONTROLLER

const profitController = require("../Controllers/profitController");

router.get("/profit1", profitController.create);
router.get("/profit2", profitController.read);
router.get("/profit3", profitController.delete);
router.get("/profit4", profitController.update);

//API FOR PROJECT CONTROLLER

const projectController = require("../Controllers/projectController");

router.get("/project1", projectController.create);
router.get("/project2", projectController.read);
router.get("/project3", projectController.delete);
router.get("/project4", projectController.update);

//API FOR SERVICE CONTROLLER

const serviceController = require("../Controllers/serviceController");

router.get("/service1", serviceController.create);
router.get("/service2", serviceController.read);
router.get("/service3", serviceController.delete);
router.get("/service4", serviceController.update);

//API FOR TITLE CONTROLLER

const titleController = require("../Controllers/titleController");

router.get("/title1", titleController.create);
router.get("/title2", titleController.read);
router.get("/title3", titleController.delete);
router.get("/title4", titleController.update);

module.exports = router;
