const logging = function(param){
    console.log(param)
}
const hi = function(){
    console.log("hi")
}
logging(hi)

const AlteredLogging = function(param){
    param()
}
AlteredLogging(hi)