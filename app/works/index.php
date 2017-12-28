<?php
header('Access-Control-Allow-Origin: *');
require_once('MysqliDb.php');
$db = new MysqliDb('localhost', 'bpcoders_bpc', 'KUdziak1991!', 'bpcoders_21');
$id = $_GET['id'];

$db->where('id', $id);
$work = $db->getOne('works');
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><?= $work['name']; ?></title>
</head>

<body>
<div id="wrapper" class="project-margin-reset">
	<div class="container pos-center projects">
		<h2 class="margint60"><?= $work['name']; ?></h2>
		<p class="margint5">Design, Web development</p>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-sm-8">
					<div class="project-slider">
						<div class="flexslider">
							<ul class="slides">
								<li><img alt="" class="img-responsive" src="works/images/<?= $work['name']; ?>.jpg" /></li>
								<li><img alt="" class="img-responsive" src="works/images/<?= $work['name']; ?>1.jpg" /></li>
								<li><img alt="" class="img-responsive" src="works/images/<?= $work['name']; ?>-2.jpg" /></li>
								<li><img alt="" class="img-responsive" src="works/images/<?= $work['name']; ?>-3.jpg" /></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-4 pos-left project-info-box">
<!--					<div>-->
<!--						<h4>ABOUT PROJECT</h4>-->
<!--						<p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illo pariatur totam quaerat cupiditate optio iusto doloremque. Ratione officiis provident dolor libero nihil quibusdam itaque! Quo provident.</p>-->
<!--					</div>-->
					<div class="project-details">
						<h4>PROJECT DETAILS</h4>
						<ul class="project-det ">
							<li class="clearfix">
								<div class="pull-left list-title">CATEGORY</div>
								<div class="pull-right list-desc">Design, Illustration</div>
							</li>
							<li class="clearfix">
								<div class="pull-left list-title">CLIENT</div>
								<div class="pull-right list-desc"><?= $work['client']; ?></div>
							</li>
							<li class="clearfix">
								<div class="pull-left list-title">DATE</div>
								<div class="pull-right list-desc">16 January 2014</div>
							</li>
							<li class="clearfix">
								<div class="pull-left list-title">PROJECT WEBSITE</div>
								<div class="pull-right list-desc"><a href="http://<?= $work['url']; ?>"><?= $work['url']; ?></a></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="projects-navigation-links">
		<a class="projectPrevUrl" href="project.html"></a>
		<a class="projectNextUrl" href="project-video.html"></a>
	</div>
</div>
</body>
</html>
