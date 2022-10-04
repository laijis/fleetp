<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
include('connection.php');
$user_role = file_get_contents("php://input");
//$_POSTALL = json_decode($rest_json, true);
//include 'connection.php';
$user_branch='';

	if($user_role==1 ||$user_branch==0){
		$where='';
	}else{
		$where="AND driver_details.branch IN ($user_branch)";
		//$where="AND driver_details.branch='$user_branch'";
	}
	
$drivers= "SELECT  driver_details.id FROM driver_details LEFT JOIN customer_branch c ON driver_details.branch=c.id WHERE driver_details.status=1 $where";
$check=mysqli_query($conn,$drivers);
$drivercount=mysqli_num_rows($check);



if($user_role==1 ||$user_branch==0){
    $where='';
}else{
    $where="AND branch_id IN ($user_branch)";
    //$where="AND driver_details.branch='$user_branch'";
}

$vehicles="SELECT distinct(reg_number) FROM `vehicle_assignment` LEFT JOIN vehicle_details ON vehicle_details.id=vehicle_assignment.vehicle_id WHERE vehicle_assignment.status=1 AND vehicle_details.status=1 $where";
$check=mysqli_query($conn,$vehicles);
$vehiclecount=mysqli_num_rows($check);

$totalvehicles="SELECT  DISTINCT (reg_number) FROM vehicle_details WHERE status=1";
$check=mysqli_query($conn,$totalvehicles);
$totalvehiclecount=mysqli_num_rows($check);

if($user_role==1 ||$user_branch==0){
    $where='';
}else{
    $where="AND branch IN ($user_branch)";
}
$today=date('Y-m-d');
$driverleaves="Select v.driver_id,v.leave_from,v.leave_to FROM driver_vacation v WHERE v.status=1 AND v.appoval_status=1 AND v.leave_from <='$today' AND v.rejoin_date ='0' AND v.driver_id in( SELECT id FROM driver_details WHERE status=1 $where )";
$check=mysqli_query($conn,$driverleaves);
$driverleavescount=mysqli_num_rows($check);

$freevehicle="SELECT id FROM vehicle_details WHERE id NOT IN (SELECT vehicle_id FROM vehicle_assignment WHERE status=1) AND vehicle_details.status=1";
$check=mysqli_query($conn,$freevehicle);
$freevehiclecount=mysqli_num_rows($check);

if($user_role==1 || $user_branch==0){
    $where='';
}else{
    $where="AND driver_details.branch IN ($user_branch)";
}

$idledriver="SELECT driver_details.id,first_name,last_name,common_name,license_type,phone,cpk,employee_number,work_permit_expiry,date_employed,pdrp_expiry_date,passport_number,license_expiry_date,c.branch FROM `driver_details` LEFT JOIN vehicle_assignment ON driver_id=driver_details.id LEFT JOIN customer_branch c ON driver_details.branch=c.id WHERE driver_details.id NOT IN(SELECT driver_id from vehicle_assignment WHERE vehicle_assignment.status=1) AND driver_details.status=1 $where GROUP BY driver_details.id";
$check=mysqli_query($conn,$idledriver);
$idledrivercount=mysqli_num_rows($check);



echo json_encode(["drivercount" => $drivercount, "vehiclecount" => $vehiclecount,"totalvehiclecount"=>$totalvehiclecount,"driverleavescount"=>$driverleavescount,"freevehiclecount"=>$freevehiclecount,"idledrivercount"=>$idledrivercount]);

?>