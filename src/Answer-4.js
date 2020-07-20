
function validation() {
    var name = document.getElementsByTagName("input")[0].value;
    var checkbox = document.getElementsByTagName{"input"}[1].value;

        if (name === "" || checkbox === false){
            console.log("Please fill all fields ... !");
            return false;
        }else {
            return true;
        }
    }
    function submit() {
        if(validation() == false) {
            return;
        }
    }

