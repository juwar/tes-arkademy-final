<?php include("koneksi.php"); ?>
<!doctype html>
<html lang="en">
 	<head>
    	<link rel="stylesheet" href="css/bootstrap.css">
    	<link rel="stylesheet" href="css/styles.css">
    	<title>Aplikasi Data Programmer</title>
 	</head>
 	<body>
		<div class="container" style="padding : 10px">

	    	<div class="title">
	        	<h1>Aplikasi Data Programmer</h1>
	      	</div>
			<div class="card">
				<div class="card-body">
			    	<div class="container">
						<div class="row col">
							<div class="col-md">
								<center>
									
										<div class="row">
										    <div class="col-md-8">
										    	<input type="text" class="form-control" id="nama" placeholder="Nama">
										    </div>
										    <div class="col-md-4">
										      	<button  class="btn btn-primary luas" onclick="aksi()" >Tambah Programmer</button>
										    </div>
										</div>

								</center>
							</div>
					    </div>
					</div>
			    </div>
			</div>

			<?php 
				$query = mysqli_query($koneksi,"SELECT * FROM user");
				while($fetch = mysqli_fetch_array($query))
			{
			?>

			<div class="card">
				<div class="card-body">
			    	<div class="container">
						<div class="row">
							<div class="col-md sekond">
								<div class="masuk">
									<div class="nama">
										<h5><?php echo $fetch["name"]; ?></h5>
									</div>
									<div class="skill">
										<?php 
					                      $idskill= $fetch["id"];
					                      $q = mysqli_query($koneksi,"SELECT * FROM skill WHERE user_id = '".$idskill."'");
					                      while ($f  = mysqli_fetch_array($q)) {
					                          echo $f["name"].',';
					                      }
					                   ?>
									</div>
								</div>
							</div>
							<div class="col-md sekond">
								<center>
									<div class="row three">
									    <div class="col">
									    	<input type="text" class="form-control" placeholder="Skills" id="skills-<?php echo $fetch["id"] ?>">
									    </div>
									    <div class="col">
									      	<button  class="btn btn-primary luas" onclick="tambah(<?php echo $fetch["id"] ?>)">Tambah Skill</button>
									    </div>
									</div>								
								</center>
								
							</div>
					    </div>
					</div>
			    </div>
			</div>

			<?php
				}
			?> 
			
		</div>

	    <script src="js/jquery.min.js"></script>
	    <script src="js/bootstrap.js"></script>
	    <script src="js/saya.js"></script>

  	</body>
</html>