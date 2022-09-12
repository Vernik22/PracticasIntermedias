import AWS from 'aws-sdk';
const fs = require("fs");

const {promisify} = require('util');
const crypto = require('crypto');

const randomBytes = promisify(crypto.randomBytes);

const SubirImg = async(req, res) => {
    try {
        const s3 = new AWS.S3({
            accessKeyId: "Credencial" ,
            secretAccessKey: "credencial",
            region: "us-east-1"
        });

        const filename = "C:\\Users\\VERNIK\\Desktop\\EjemploPracticas\\src\\controllers\\imagen.jpg";
        const fileContent = fs.readFileSync(filename);
        
        const rawBytes = await randomBytes(16);
        const imageName = rawBytes.toString('hex');

        const params = {
            Bucket: "ejemplopracticass",
            Key: imageName+".jpg",
            Body: fileContent
        };

        s3.upload(params, (err, data) =>{
            if(err){
                console.log(err);
                return err;
            }
            console.log(data.Location);
            return data.Location;
        });
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    SubirImg
}
