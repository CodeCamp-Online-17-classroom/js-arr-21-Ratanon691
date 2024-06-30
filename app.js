function checkPermission(role, Admin, notAdmin){
  if(role == `ADMIN`){
    Admin()
  }else{
    notAdmin()
  }
}
  function isAdminAction(){
    alert(`Access granted`)
  }
  function isNotAdminAction(){
    alert(`Access denied`)
  }
checkPermission("ADMIN", isAdminAction, isNotAdminAction);
checkPermission("USER", isAdminAction, isNotAdminAction);
