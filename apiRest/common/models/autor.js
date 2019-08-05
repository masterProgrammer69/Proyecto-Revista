'use strict';

module.exports = function(Autor) {
    Autor.sendEmail=(message,subject,emailAddresses,cb)=>{
        Autor.app.models.Email.send({
            to:emailAddresses,
            from:"James Bond -007",
            subject:subject,
            text:message,
            html:message,
        },function(err,mail){
            console.log("Email sended!!!");
            if (err){return err;}
        });
        cb(null,'message sent:'+ message);
    }

    Autor.remoteMethod('sendEmail',
        {
            http:{
                path:'/sendEmail',
                verb:'get'
            },
            description:[
                "Api to send email message."
            ],
            accepts:[
                {
                    arg:'message',
                    type:'string',
                    required:'true'
                },
                {
                    arg:'subject',
                    type:'string',
                    required:'true'
                },
                {
                    arg:'emailAddresses',
                    type:'string',
                    required:'true'
                }
            ],
                returns:{arg:'response',type:'string'}
        }
    );
};
