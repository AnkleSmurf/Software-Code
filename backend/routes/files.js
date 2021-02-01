const router = require('express').Router();
const multer = require("multer");
const path = require("path");
let File = require('../models/file.model');
// const fs = require('fs');

const storage = multer.diskStorage({
    destination: "../public/",
    filename: function(req, file, cb){
        cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});
 
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
}).single("file");
 
const obj =(req,res) => {
    console.log("info received")
    upload(req, res, () => {
        console.log(req.file)
        const file = new File();
        file.meta_data = req.file
        file.document_id = req.body.docID
        file.type = req.body.type
        file.save().then(()=>{
            res.send({message:"uploaded successfully"})
        })
        /*Now do where ever you want to do*/
    });
}

// var Storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, "../public");
//     },
//     filename: function(req, file, callback) {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

// var upload = multer({
//     storage: Storage
// }).single('file');

// router.post('/upload', (req, res) =>{
//     console.log("upload ...");

//     upload(req, res, (err) =>{
//         if(err){
//             console.log(err);
//             res.send("Failed")
//         }
//         else{
//             console.log(req.file);
//             res.send("Uploaded ...");
//         }
//     });
// })

// router.post('/p', function(request, respond) {
//     console.log(request.headers)
//     var image = request.body
//     fs.writeFile('test.png', image, function(err){
//       if (err) throw err
//           console.log('File saved.');
//             });
//     respond.end('thanks');
//     });

router.post("/upload", obj);

router.route("/getImages").post((req, res) => {
    File.find({document_id: req.body.document_id})
      .then(survey => res.json(survey))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router