function checkPermission(role, admin, notAdmin){
  if(role == `ADMIN`){
    isAdminAction()
  }else{
    isNotAdminAction()
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
