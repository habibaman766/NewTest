import languageModel from '../models/languageModel.js';

export function addLanguage(req, res) {
    const inputData = req.body.name
    const name = inputData.toLowerCase()
    const newData = {
        name
    }
    languageModel.findOne({ name: name }).exec(function (err, language) {
        if (err)
            return res.json({ "err": err });

        if (language)
            return res.json({ message: "Language Already Exists..." });

        else {
            const _course = new languageModel(newData);

            _course.save((error, data) => {
                if (error) {
                    return res.json({
                        message: error
                    })
                }
                if (data) {
                    return res.json({
                        message: "Language Added Successfully..."
                    })
                }
            })
        }
    });
}




export function getLanguages(req, res){
    languageModel.find().exec(function(err, data){
        if(err) return res.json({ "err": err })

        if(data) return res.json({"languages": data})
    })
}



export function getLanguage(req, res){
    const inputData = req.body
    if(inputData.id !== ''){
        languageModel.findById(inputData.id).exec(function(err, data){
            if(err) return res.json({ "err": err })

            if(data) return res.json({"language": data})

            else{
                return res.json({message: "No Record Found..."})
            }
        })
    }
    else{
        return res.json({})
    }
}