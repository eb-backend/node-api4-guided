const router = require("./api/api-router")
const shoutsModel = require("./shouts/shouts-model")

function greet(){
    return "Hello World"
}

greet()
//Hello World


async function gree(){
 const name = await someotherpromise()
    return "Hello World"
}

gree() //A promixe with <Hello World>


//example 2



router.get("/", async(req,res,next)=>{
    //*ideal
    try{
        const data = await shoutsModel.find()
        const res1 = await someotherpromise()
        const res2 = await someotherpromise()
        const res3 = await someotherpromise()

        res.status(200).json(data)
    }
    catch(err){
        next(err)
    }

    //!not ideal
shoutsModel.find()
.then((res)=>{
    return someotherpromise()
})
.then((res)=>{
    return someotherpromise()
})
.then((res)=>{
    return someotherpromise()
})
.catch(()=>{
    
})
})



