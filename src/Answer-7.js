

//Answer number : 7

fetch("www.example.com/api/get/1 ",{
    method:"get",
})
.then(response => response.json())
.then(data => {
    console.log("Success:",data);
})
.catch((error) => {
    console.log(("error",error))
});