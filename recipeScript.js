function addReview(){
    var review = document.getElementById("reviewText").value;
    var newElement = document.createElement("p");
    var x = document.createTextNode(review);
    newElement.appendChild(x);
    document.getElementById("reviews").appendChild(newElement);
}