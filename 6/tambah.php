<?php

	include("koneksi.php");

	$tipe = $_POST["tipe"];
	$user = $_POST["data"];

	if ($tipe == "skill") {
		$id = $_POST["id"];
		$skill = $_POST["data"];
		echo $skill.$id;
		try {
			$kirim = mysqli_query($koneksi,"INSERT INTO skill(name,user_id) VALUES ('". $skill ."','". $id ."')");
		} catch (Exception $error) {
			print_r($error);
		}
	} elseif ($tipe == "users") {
		try {
		$kirim = mysqli_query($koneksi,"INSERT INTO user(name) VALUES ('". $user ."')");
		} catch (Exception $e) {
			print_r($e);
		}
	}




?>