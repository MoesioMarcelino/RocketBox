const mongoose = require('mongoose');

//criar os schemas do bd
const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    //armazenamos um array de arquivos salvos, salvando eles por id, que pertencem ao Box
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
}, {
        //faz uma espécie de log sempre que o registro for criado ou editado
        timestamps: true
    });

module.exports = mongoose.model("Box", Box);