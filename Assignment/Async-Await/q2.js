function timer(duration , onComplete){
    setTimeout(()=>{
      onComplete(`Timer of ${duration}ms finished`);
    },duration)
}
timer(3000, (msg)=>{
    console.log(msg)
});