// Contact form 
document.getElementsByClassName("feedback")
addEventListener('submit',function(event){
    const feed = this.document.getElementsByClassName("feedback").value;
    console.log("feedback Submitted : "+feed);
});