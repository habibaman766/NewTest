import questionModel from '../models/questionModel.js';


export function addQuestion(req, res) {
    const { name, option1, option2, option3, option4, correctOption, sectionId } = req.body
    const _name = name.toLowerCase()
    const options = [{"option":option1}, {"option":option2}, {"option":option3}, {"option":option4}]
    const newData = {
        name, options, correctOption, sectionId
    }
    questionModel.findOne({"name": _name}).exec(function (err, question) {
        if (err)
            return res.json({ "err": err });

        if (question)
            return res.json({ message: "Question Already Exists..." });

        else {
            const _question = new questionModel(newData);

            _question.save((error, data) => {
                if (error) {
                    return res.json({
                        message: error
                    })
                }
                if (data) {
                    return res.json({
                        message: "Question Added Successfully..."
                    })
                }
            })
        }
    });
}




export function getQuestions(req, res){
    const {sectionId } = req.body
    questionModel.find({sectionId}).exec(function(err, data){
        if(err) return res.json({ "err": err })

        if(data){
            return res.json({"questions": data})
        }
    })
}



export function getOptions(req, res){
    const { questionId } = req.body
    questionModel.findById(questionId).exec(function(err, data){
        if(err) return res.json({ "err": err })

        if(data){
            const options = data.options
            return res.json({"options": options})
        }
    })
}

