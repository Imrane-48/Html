function result(){
    var Mark=0;
    if( document.getElementById("Correct1").checked) {
        Mark++;
    }
    if( document.getElementById("Correct2").checked) {
        Mark++;
    }
    if( document.getElementById("Correct3").checked) {
        Mark++;
    }
    if( document.getElementById("Correct4").checked) {
        Mark++;
    }
    document.write("youre score is:" +Mark)
}