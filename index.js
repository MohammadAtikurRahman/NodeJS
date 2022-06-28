function FindNumber(){


    return 42;
}
console.log(FindNumber())


const mission = process.argv[2] // this index exchange the 2nd index value

if( mission === 'learn'){

    console.log('timwe to learn node js')
}else{
     
    console.log(`the  ${mission} failed`)

}