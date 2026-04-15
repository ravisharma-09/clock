let count = 0 ;
let timer = null ;
function start(){
    if( timer !== null) return ;

    timer = setInterval(()=> {
        count++
        let hr = Math.floor(count/3600) ;

        let min = Math.floor((count%3600)/60 );

        let second = count%60 ;
        let dishr =hr.toString().padStart(2, '0') ;
        let dismin = min.toString().padStart(2, '0') ;
        let dissec =second.toString().padStart(2, '0') ;

        

        document.getElementById("time").innerText = `${dishr}hr:${dismin}min:${dissec}sec` ;
    
    },1000);
}
function stop(){
    clearInterval(timer) ;
    timer = null
}
function reset(){
    clearInterval(timer) ;

     count = 0 ;
     timer = null ;
     let hr = Math.floor(count/3600) ;

        let min = Math.floor((count%3600)/60 );

        let second = count%60 ;
        let dishr =hr.toString().padStart(2, '0') ;
        let dismin = min.toString().padStart(2, '0') ;
        let dissec =second.toString().padStart(2, '0') ;
    document.getElementById("time").innerText = `${dishr}hr:${dismin}min:${dissec}sec` ;

}