const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    //diz respeito ao local onde os arquivos serão salvos
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        //define o destino em que o arquivo será salvo
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            //encripta a informação
            crypto.randomBytes(16, (err, hash)=>{
                //se der erro chama a callback e retornar o erro
                if (err) cb(err);

                //se não cria um hash e seta dentro de file
                file.key = `${hash.toString('hex')}-${file.originalname}`;

                //se tudo der certo, chama a callback passando null para erro e o arquivo com encriptação
                cb(null, file.key);
            })
        }
    }),
};