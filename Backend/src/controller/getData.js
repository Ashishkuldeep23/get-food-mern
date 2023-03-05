const mongoose = require('mongoose')



const getAllData = async function (req, res) {

    try {
        let fatch_food_items = await mongoose.connection.db.collection("food_items");
        let food_items = await fatch_food_items.find({}).toArray()

        if( typeof(food_items) !== 'object'){
            console.log("Error")
            return res.status(404).send({status : false , message : "Error in getting data of food_items"})
        }else{
            global.find_items = food_items
            // console.log(global.find_items)
        }



        let fatch_food_cat = await mongoose.connection.db.collection("food_cat");
        let food_cat = await fatch_food_cat.find({}).toArray()

        if( typeof(food_cat) !== 'object'){
            console.log("Error")
            return res.status(404).send({status : false , message : "Error in getting data of food_cat"})
        }else{
            global.find_cat = food_cat
            // console.log(global.find_cat)
        }


        res.status(200).send({status : true , data : [global.find_items , global.find_cat]})


    } catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}



async function getAllData2(req, res) {
    let fatch_data = await mongoose.connection.db.collection("food_items");



    await fatch_data.find({}).toArray(function (error, data) {
        if (error) {
            console.log(error);
        }
        console.log(data);     // // Getting data in backed server without schema or model
        return res.status(200).send({ status: true, data: data });
    });

    // res.send("GetFoodData");
}



async function getAllData3(req, res) {

    try {

        await mongoose.connection.db.collection('food_items', (err, collection) => {
            collection.find({}, (err, document) => {
                /** .... */
                console.log(document)
            })
        })

    } catch (e) {
        res.status(500).send({ status: false, message: e.message })

    }

}

async function getAllData4(req, res) {

    try {

        mongoose.connect(
            "mongodb+srv://ashishkuldeep23:RAPXp7lktCcf8jBm@cluster0.xtascce.mongodb.net/test",
            async function (err, db) {
                if (err) {
                    console.log(err);
                    return res.send("Getting error" + err);
                } else {
                    let fatch_data = await mongoose.connection.db.collection("FoodApi");
                    fatch_data.find({}).toArray(function (error, data) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(data);
                            res.send(data);
                        }
                    });
                }

                // var collection = db.collection("FoodApi");
                // collection.find().toArray(function (err, FoodApi) {
                //   // here ...
                //   var FoodApiRes = FoodApi;
                //   console.log(FoodApi);

                //   res.send("ok" + json.toString(FoodApiRes));
                // });
            }
        );




    } catch (e) {
        res.status(500).send({ status: false, message: e.message })

    }

}



async function getAllData5(req, res) {

    try {

        // let fdata = await mongoose.collection('Apple').find().toArray()
        // console.log(fdata)

        await mongoose.connection.db.collection('FoodApi', (err, collection) => {
            collection.find({}, {}, (err, document) => {
                /** .... */
                console.log(document)
            })
        })

    } catch (e) {
        res.status(500).send({ status: false, message: e.message })

    }

}



module.exports = { getAllData, getAllData2, getAllData3, getAllData4 , getAllData5}