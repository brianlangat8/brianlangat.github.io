function emailsend() {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kibetbrian426@gmail.com",
        Password : "F49F1E349414FF5E923187FA7309E8D039EA",
        To : 'lackbag54@gmail.com',
        From : "kibetbrian426@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}