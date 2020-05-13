    var Tutor=require('./Tutorial.js');
    exports.NodeTutorial=function()
    {
        console.log("Node Tutorial")
        this.ptutor = function()
        {
            var PTutor=Tutor
            PTutor.tutorial();
        }
    }