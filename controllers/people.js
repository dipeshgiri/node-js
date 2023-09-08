
let {person}=require('../data')


const getPeople=(req,res)=>{
    res.status(200).json({success:true,data:person})
}

const createPeople=(req,res)=>{
    const {name} =req.body 
    if(!name){
        return res.status(404).send("Error")
    }
    else{
        return res.status(200).send({success:true,data:[...person,name]})
    }
}

const UpdatePeople=(req,res)=>{
    const { id   }=req.params;
    const {name}=req.body;
    const data=person.find((people)=>people.id===Number(id))
    if(!data){
        return res.status(404).json({success:false,msg:"Please Provide the correct data"})
    }
    const newPeople=person.map((data)=>{
        if(data.id===Number(id)){
            data.name = name
        }
        return data
    })
    res.status(200).json({success:true,data:newPeople})
}


const deletePeople=(req,res)=>{
    const{id}=req.params
    const data=person.find((people)=>people.id===Number(id))
    if(!data){
        return res.status(404).json({success:false,msg:"Data Not found with id "})
    }
    const newPeople=person.filter((data)=>data.id!==Number(id))
    return res.status(200).json({success:true,data:newPeople})
}

module.exports={
    getPeople,
    createPeople,
    UpdatePeople,
    deletePeople
}