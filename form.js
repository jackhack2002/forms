
let myname, email, phone, dob,role, exp, username, password, comments, title, age;

age = Number(age);


document.getElementById("buttonSubmit").onclick = 

function(){

    myname = document.getElementById("myName").value;

    email = document.getElementById("myEmail").value;

    phone = document.getElementById("myPhone").value;

    dob = document.getElementById("myDob").value;

    age = document.getElementById("myAge").value

    role = document.getElementById("myRole").value;

    exp = document.getElementById("myExp").value;

    username = document.getElementById("userName").value;

    password = document.getElementById("myPassword").value;

    enrolled = document.getElementById("myEnroll");

    comments = document.getElementById("myComments").value;


    age = Number(age);

    if (Mr.checked) {
        console.log("Mr."+myname);
    } else if (Mrs.checked) {
        console.log("Mrs."+myname);
    } else if(Ms.checked){
        console.log("Ms."+myname);
    }else{
        console.log(" "+myname);
    }

    console.log(email);
    console.log(phone); 
    console.log(dob);
    console.log(age);
    console.log(role); 
    console.log(exp); 
    console.log(username); 
    console.log(password); 
    if (enrolled.checked) {
        console.log("Enrolled");
    }else{
        console.log("Not Enrolled");
    }    
    console.log(comments);
};



