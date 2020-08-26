const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const stripe = require("stripe")(functions.config().stripe.sk);
const url = require('url');

admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

exports.testStripe = functions.https.onRequest( (req, res) => {
    // res.header('Content-Type','application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return cors(req, res, async () => {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.total * 100,
            currency: "usd"
        })
        .catch(err => {
            console.log(err);
        });
        // let ref = db.ref("/orders");
        // var usersRef = ref.child("customers");
        // usersRef.set(req.body);
        res.send({clientSecret: paymentIntent.client_secret});
    })
});

const menuRef = db.collection('menu');
exports.getPopular = functions.https.onRequest( (req, res) => {
    // res.header('Content-Type','application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return cors(req, res, async () => {
        let sendBack = []
        const data = await menuRef.orderBy("rating", "desc").limit(10).get();
        data.forEach(doc=> {
            sendBack.push({name:doc.id, price:doc.data().price});
        })
        res.send(sendBack);
    })
});

exports.getDataByType = functions.https.onRequest( (req, res) => {
    // res.header('Content-Type','application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return cors(req, res, async () => {
        let sendBack = []
        let queryWord = url.parse(req.url,true).query.queryWord;
        const queryData = await menuRef.where('type', "==", queryWord).limit(10).get();
        queryData.forEach(doc=> {
            sendBack.push({name:doc.id, price:doc.data().price});
        })
        res.send(sendBack);
    })
});

exports.getDataByName = functions.https.onRequest( (req, res) => {
    // res.header('Content-Type','application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return cors(req, res, async () => {
        let sendBack = [];
        let queryWord = url.parse(req.url,true).query.queryWord;
        const queryData = await menuRef.where('name', "==", queryWord).get();
        queryData.forEach(doc=> {
            sendBack.push({name:doc.id, price:doc.data().price});
        })
        res.send(sendBack);
    })
});