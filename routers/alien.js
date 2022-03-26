const { response } = require('express');
const express=require('express');
const alien = require('../models/alien');
const router=express.Router();
const Alien=require('../models/alien');
router.get('/',async(req,res)=>{
    try{
        const aliens=await Alien.find();
        res.json(aliens);
    }
    catch(err){
        res.send("ERROR"+err);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const aliens=await Alien.findById(req.params.id);
        res.json(aliens);
    }
    catch(err){
        res.send("ERROR"+err);
    }
});

router.post('/',async(req,res)=>{
    const alien=new Alien({
         name: req.body.name,
         tech: req.body.tech,
         sub: req.body.sub
    });
    try{
      const a1= await alien.save();
      res.json(a1);
    }
    catch(e){response.send(e);}
});

router.patch('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id);
        alien.sub=req.body.sub;
        const a1=await alien.save();
        res.json(a1);
    }
    catch(e){
res.send("Error");
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id);
        alien.sub=req.body.sub;
        const a1=await alien.delete();
        res.json(a1);
    }
    catch(e){
res.send("Error");
    }
})
module.exports=router;