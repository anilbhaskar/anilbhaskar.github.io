function sendmail() {
    
        
    Email.send({
        Host: "smtp.gmail.com",
        Username : 'photographyarsen@gmail.com',
        Password : "myswtdad143",
        To : 'hai2anil@gmail.com',
        From : 'photographyarsen@gmail.com',
        Subject : "Invitation Accepted For Visiting Your Reception",
        Body : "Hello Anil Bhaskar," + 'Name:' + document.getElementById("name").value + ',' + 'Email:' + document.getElementById("email").value,
        }).then(
            message => alertify.alert("Confirmation Of your visit sent successfully !").setHeader('')
        );
}