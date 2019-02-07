console.log("Sensitive")
var str = "AAaa"
console.log("String : "+str)
var status = false
let mid = (str.length /2) - 1;
str = str.toLowerCase();
for(var i=mid+1 ,j= mid;i<str.length-1,j>=0;i++,j--){
    if(mid==isNaN()){
        if(str[i]==str[j]){
            status = true
        }else{
            status =false
            break
        }
       
    }
}
console.log("Palindrome : "+status)