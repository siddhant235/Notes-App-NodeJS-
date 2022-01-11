const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./note')

yargs.command({
    command:'add',
    describe:'Add a new note ',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:"string"
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
      notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new note ',
    builder:{
        title:{
            describe:'Remove Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List notes ',
    handler:function(){
        console.log(chalk.green("List of Notes"))
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read a note ',
    builder:{
        title:{
            describe:"Mote title",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
       notes.readNote(argv.title)
    }
})

yargs.parse()