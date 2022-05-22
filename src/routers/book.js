const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const db = require("../db/index"); //importing db object
const Book = db.books;
router.post("/createData", async (req, res)=>{
    try{
        const book = await Book.create(req.body);
        res.status(200).send({
            message: "Book created successfully",
            data: book
        });
    } 
    catch(error){
        res.status(400).send({
            message:"Error occured",
            error,
        });
    }
});

router.get ("/readData", async (req, res)=>{
    try{
        const data = await Book.findAll();
    res.status(200).send({
        message:"Books list",
        data
    });
    }catch(error){
        res.status(400).send({
            messgae:"Error Occured",
            error
        })
    }
});

router.post("/readOneData", async (re, res)=>{
    try{
        const books = await Book.findOne({
            attributes: ["name", "isbn", ["price", "mrp"]],
            where: {name:req.body.name}
        })
        res.status(200).send({
            message: "Books List",
            data: books
        });
    }
    catch(error){
        res.status(400).send({
            message:"Error Occured",
            error
        });
    }
});

router.get("/readUniqueData/:id", async (req, res)=>{
    try{
        const book = await Book.findByPk(req.params.id);
        res.status(200).send({
            message:"Books Found",
            data:book
        })
    }
    catch(error){
        res.status(400).send({
            message:"Error Occured",
            error
        })
    }
});

router.patch("/updateData/:id", async(req, res)=>{
    try{
        const book = await Book.update({
            name: req.body.name
        },{
            where:{id:req.params.id}
        })
        res.status(200).send({
            message:"Updated Books",
            data: book
        });
    }
    catch(error){
        res.status(400).send({
            message:"Error Occureed",
            error
        })
    }
});

router.delete("/deleteData/:id", async (req, res)=>{
    try{
        const book = await Book.destroy({
            where: {id:req.params.id}
        })
        if(book===0){
            res.status(200).send({
                message:"Already deleted Book",
                data: book
            })
        }else{
            res.status(200).send({
                message:"Deleted Book",
                data: book 
            })
        }
    }
    catch(error){
        res.status(400).send({
            message:"Error deleting book",
            error
        })  
    }
});
module.exports = router;