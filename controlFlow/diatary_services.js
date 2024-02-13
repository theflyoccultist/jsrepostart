let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "access to Dietary services";
} else if (userRole === "enrolled") {
    accessLevel = "access to Dietary services + one on one interaction";    
} else if (userRole === "subscribed") {
    accessLevel = "partial access to Diatary services";
} else {
    accessLevel = "you need to enroll or subscribe";
}

let userType = "admin";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Employee";
        break;
    case "manager":
        userCategory = "Enrolled Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Non-Subscriber";
}

console.log("Access level:", accessLevel);
console.log("User Category:", userCategory);