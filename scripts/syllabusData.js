const moduleOneQuestions = require('./moduleOneQuestions.js');
const moduleTwoQuestions = require('./moduleTwoQuestions.js');
const moduleThreeQuestions = require('./moduleThreeQuestions.js');
const moduleFourQuestions = require('./moduleFourQuestions.js');
const moduleFiveQuestions = require('./moduleFiveQuestions.js');
const SyllabusData = () => {
    return [{
        title: 'ModuleOne',
        color: 'pink', 
        questions: moduleOneQuestions()
    },{
        title: 'ModuleTwo',
        color: 'red', 
        questions: moduleTwoQuestions()
    },
    {
        title: 'ModuleThree',
        color: 'blue', 
        questions: moduleThreeQuestions()
    },
    {
        title: 'ModuleFour',
        color: 'green', 
        questions: moduleFourQuestions()
    },
    {
        title: 'ModuleFive',
        color: 'orange', 
        questions: moduleFiveQuestions()
    }]
}
module.exports = SyllabusData();