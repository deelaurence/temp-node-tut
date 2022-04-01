const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err )
        return
    }
    const first = result;
    console.log('read the first file');
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
        console.log(err )
        return
    }
    const second = result;
    console.log('read the second');
    writeFile('./content/result-async.txt',second+' '+first,
    (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('i created the final async file');
        writeFile('./bluetooth/dummy.txt','boomshakalakalaka',
        (err, result)=>{
            if(err){
                console.log(' u never sabi');
                return
            }

            console.log('yaay')
        })
    })
    })
})