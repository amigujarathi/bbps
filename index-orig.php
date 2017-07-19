<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include 'dbconn.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>BBPS | Homepage</title>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/jquery.bxslider.min.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
        <!-------IE Support Javascript for Bootstrap--------->

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.bxslider.min.js"></script>
    </head>
    <body>
		<div id="go-to-position"></div>
        <div id="go-to-section" class="">
            <ul>
                <li><a href="#go-to-bbps-manage"></a><span class="callout2" style="display: none;">BBPS Manage Bills</span></li>
                <li><a href="#go-to-bbps-partner"></a><span class="callout2" style="display: none;">BBPS Partners</span></li>
                <li><a href="#go-to-bbps-billers"></a><span class="callout" style="display: none;">BBPS &nbsp; &nbsp; &nbsp Billers</span></li>
                <li><a href="#go-to-bbps-customer"></a><span class="callout" style="display: none;">BBPS Customers</span></li>
            </ul>
        </div>
		<div class="row social-header">
            <ul class="list-inline pull-right">
                <li><i class="fa fa-facebook social-color" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter social-color" aria-hidden="true"></i></li>
                <li><i class="fa fa-google-plus social-color" aria-hidden="true"></i></li>
                <li><i class="fa fa-instagram social-color" aria-hidden="true"></i></li>
                <li><i class="fa fa-linkedin social-color" aria-hidden="true"></i></li>
            </ul>
        </div> 
        <div class="container-fluid" id="headtop">
            <div class="row second-header visible-sm-* visible-md-* visible-lg-* hidden-xs">
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <a class="brand_img_adjust" href="#"><img class="img-responsive brand_img" src="images/BBPS_LOGO.png" alt="BBPS">
                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-2">
                </div>
                <div class="col-sm-6 col-md-6 col-lg-5 sub-header-icons">
                    <ul class="list-inline pull-right">
                        <li class="round-circle"><img class="" src="images/small_icon/home2.png"></li>
                        <li><label class="second-header-label hidden-xs ">Home</label></li>
                        <li class="round-circle"><img class="" src="images/small_icon/mail-us2.png"></li>
                        <li><label class="second-header-label hidden-xs ">Mail Us</label></li>
                        <li class="round-circle"><img class="" src="images/small_icon/contact2.png"></li>
                        <li><label class="second-header-label hidden-xs ">Contact Us</label></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2 visible-sm-* visible-md-* visible-lg-*">
                    <a class="brand_img_adjust pull-right" href="#">
                        <img class="img-responsive brand_img left-brand-img-adjust" src="images/NPCI_LOGO.jpg" alt="BBPS" >
                    </a>
                </div>
            </div>
            <div class="row second-header hidden-sm-* hidden-md-* hidden-lg-* visible-xs">
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <center>
                        <a class="brand_img_adjust" href="#"><img class="img-responsive brand_img" src="images/BBPS_LOGO.png" alt="BBPS">
                        </a>
                    </center>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <center>
                        <ul class="list-inline">
                            <li class="round-circle"><img class="" src="images/small_icon/home2.png"></li>
                            <li><label class="second-header-label  hidden-xs">Home</label></li>
                            <li class="round-circle"><img class="" src="images/small_icon/mail-us2.png"></li>
                            <li><label class="second-header-label  hidden-xs">Mail Us</label></li>
                            <li class="round-circle"><img class="" src="images/small_icon/contact2.png"></li>
                            <li><label class="second-header-label  hidden-xs">Contact Us</label></li>
                        </ul>
                    </center>
                </div>
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2 visible-sm-* visible-md-* visible-lg-*">
                    <center>
                        <a class="brand_img_adjust" href="#">
                            <img class="img-responsive brand_img" src="images/NPCI_LOGO.jpg" alt="BBPS" >
                        </a>
                    </center>
                </div>
            </div>
        </div>
        <!--navbar only for mobile device-->    
        <!--navbar  -->
		<nav class="navbar navbar-default nav_color" role="navigation">
			<div class="container-fluid">
				<!--     Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!--<a class="navbar-brand" href="#">Brand</a>-->
				</div>

				<!--Collect the nav links, forms, and other content for toggling--> 
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav main_nav">
						<!--                                <li ><a class="navbar_li" href="#">HOME</a></li>-->
						<li ><a class="navbar_li" href="#">ABOUT US</a></li>
						<li ><a class="navbar_li" href="#">PARTNER</a></li>
						<li ><a class="navbar_li" href="#">BILLER</a></li>
						<li ><a class="navbar_li" href="#">CUSTOMER</a></li>
						<li ><a class="navbar_li" href="#">WHAT'S NEW</a></li>
						<li><a class="navbar_last" href="#">FAQs</a></li>
					</ul>
					<div class="col-xs-12 col-sm-6 col-md-3 pull-right visible-lg-* hidden-xs hidden-sm hidden-md">
						<form class="navbar-form" role="search">
							<div class="input-group">
								<input type="text" class="form-control" id="inputValidation" placeholder="Search here..."/>
								<div class="input-group-btn">
									<button class="btn btn-default search-btn" type="button"><i class="glyphicon glyphicon-search"></i></button>
								</div>
								<!--<span class="glyphicon glyphicon-search form-control-feedback" style="color:#fff;"></span>-->
							</div>
						</form>
					</div>
				</div>
			</div> 
		</nav>
		<!--navbar  -->
        <div class="">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> 
            <!-- Wrapper for slides -->
            <!--<div class="hidden-xs hidden-sm visible-md-* visible-lg-*">-->
                <div class="carousel-inner" role="listbox">
					<?php
						$index = 1;
						$select_slider_img = "Select * from bbpsws.show_slider_data(3,3)";
						$res_slider_img = pg_query($conn,$select_slider_img);
						if($res_slider_img){
							while($row = pg_fetch_array($res_slider_img))
							{
								?>
								<div class="item <?php if($index == 1){ echo 'active';}?>">
									<a href="<?php echo $row['redirect_url']; ?>"><img class="desktop_slide" src="<?php echo $row['slider_url']?>" alt=""></a>
									<div class="carousel-caption"></div>
								</div>
								<?php
								$index++;
							}
						}
                    ?>
                </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <!--end of desktop navbar-->
        <!--first blog-->
        <div class="container-fluid" id="go-to-bbps-manage">
			<?php
				$select_the_blog_data = "select * from bbpsws.show_section_data(5,3)";
				$res = pg_query($conn,$select_the_blog_data);
				$row = pg_fetch_array($res);   
				$tagline_html = str_replace("''","'",$row['section_html']);
				echo htmlspecialchars_decode($tagline_html);
			?>
        </div> 
        <!--end of first blog-->
        <!--second blog-->
        <div class="img_block block" id="go-to-bbps-partner">
            <?php
				$select_the_blog_partner = "select * from bbpsws.show_section_data('Partners')";
				$res_partner = pg_query($conn,$select_the_blog_partner);
				$row_partner = pg_fetch_array($res_partner);   
				//$row_partner = str_replace("''","'",$row_partner['header']);
				$partner_text = str_replace("''","'",$row_partner['section_html']);
				echo htmlspecialchars_decode($partner_text);
            ?>
        </div>
        <!--end of second blog-->
        <!--third blog-->
        <div class="container-fluid" id="go-to-bbps-billers">
            <?php
				$select_the_blog_biller = "select * from bbpsws.show_section_data('Billers')";
				$res_biller = pg_query($conn,$select_the_blog_biller);
				$row_biller = pg_fetch_array($res_biller);   
				//$row_partner = str_replace("''","'",$row_partner['header']);
				$biller_text = str_replace("''","'",$row_biller['section_html']);
				echo htmlspecialchars_decode($biller_text);
            ?>
        </div>
        <!--end of third blog-->
        <!--fourth blog-->
        <div class="img_block" id="go-to-bbps-customer">
            <?php
				$select_the_blog_customer = "select * from bbpsws.show_section_data('Customers')";
				$res_customer = pg_query($conn,$select_the_blog_customer);
				$row_customer = pg_fetch_array($res_customer);   
				//$row_partner = str_replace("''","'",$row_partner['header']);
				$customer_text = str_replace("''","'",$row_customer['section_html']);
				echo htmlspecialchars_decode($customer_text);
            ?>
        </div> 
        <!--end of fourth blog-->
        <!--Start search block-->
        <div class="container-fluid">
            <div class='search_block'>
                <div class='row'>
                    <div class='col-md-12'>
                        <div class="search_block_heading"><center>How can BBPS help you?</center></div>
                    </div>
                </div>
                <div class='row'>
                    <div class="form-group col-xs-12 col-sm-12  col-md-6 col-lg-6 bottom_search">
                        <div class="searchbx_bottom">
                            <form class="searchbox" action="">
                                <input class="input_search" type="search" placeholder="Got a question? Ask!" /> 
                                <img class="srch_btn" src="images/small_icon/search.png">
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <!--end of search block-->
		
        <!--News section-->
        <div class="img_block">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-12 col-lg-12 header_text">NEWS</div>
                </div>
                <div class="slider1">
				<?php
					$new_dt = '';
					$select_news_data = "select * from bbpsws.show_news_data1(0,0)";
					$res_news_data = pg_query($conn, $select_news_data);
					if($res_news_data){
						while($row_news = pg_fetch_array($res_news_data)){
							$news_dt = $row_news['news_on'];
							$myDateTime = DateTime::createFromFormat('Y-m-d', $news_dt);
							$formatteddate = $myDateTime->format('d M');
							?>
								<div class="slide">
									<div class="col-xs-12 col-sm-12 col-md-12">
										<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 blk1">
											<div class="slider_block_1">
												<div class="new_header_section">
													<?php echo htmlspecialchars_decode($row_news['news_header']);?>
												</div>
												<br/>
												<div class="news_desc">
													<div class='heading_text_size show-read-more'> <?php  echo htmlspecialchars_decode($row_news['news_html']);?></div>
												</div>
											</div>
										</div>
										<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 blk2">
											<div class="day_month1">
												<center><?php echo $formatteddate; ?></center>
											</div>
											<div class="news_img">
												<a href="<?php echo $row_news['redirect_url'];?>">
													<?php 
														$url_string = $row_news['news_img_url'];
														$ext = substr($url_string,strrpos($url_string, ".")+1);
														//echo $ext;
														if($ext == 'png' || $ext == 'jpg' || $ext == 'jpeg' || $ext == 'bmp' || $ext == 'gif'){
													?>
													<img class="img-responsive" src="<?php echo substr($row_news['news_img_url'],3);?>">
													<?php }
														else{
															?>
															<video width="260" height="272" style="background-color: #fff;">
																<source src="<?php echo substr($row_news['news_img_url'],3);?>" type="video/mp4">
															</video>
															<?php
														}
													?>
												</a>
											</div>
										</div>
									</div>
								</div>
							<?php
						}
					}
				?>
                </div>   
            </div>
        </div>
        <!--End of news section-->

        <!--footer animation div start-->
        <div class="hidden_popular_block close_cl">
            <div class="container cl_hidden ">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer_logo"><img class="img-responsive" src="images/logo_footer.png" ></div><br/>
                        <div class="text_size">
                        <?php
                            $select_the_footer_text = "select * from bbpsws.show_section_data(2,2)";
                            $res_footer_text = pg_query($conn,$select_the_footer_text);
                            $row_footer_text = pg_fetch_array($res_footer_text);   
							//$row_partner = str_replace("''","'",$row_partner['header']);
                            $footer_text = str_replace("''","'",$row_footer_text['section_html']);
                            echo htmlspecialchars_decode($footer_text);
                        ?>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="popular_link_header"> Popular Tags</div>
                        <div class="popular_block"> 
                            <div class="tag_popular"><span class="popular_tag">Electricity bill</span>
                                <span class="popular_tag">Quick bill pay</span>
                                <span class="popular_tag">BBPS</span>
                                <span class="popular_tag">Electricity bill</span>
                            </div>
                            <div class="tag_popular">
                                <span class="popular_tag">Online bill payment</span>
                                <span class="popular_tag">NPCI</span>
                                <span class="popular_tag">Gas Bill</span>
                                <span class="popular_tag">Telephone Bill</span>
                            </div> 
                            <div class="tag_popular"><span class="popular_tag">DTH</span>
                                <span class="popular_tag">Utility Bills</span>
                                <span class="popular_tag">RBI</span>
                                <span class="popular_tag">Payment Service Provider</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="imp_link_header"> Important links</div>
                        <div class="important_link">
                            <div class="imp_links"><img src="images/small_icon/arrow_img.png">&nbsp;&nbsp;<span ><a href="#">BBPS Procedural Guidelines</a></span></div>
                            <div class="imp_links"><img src="images/small_icon/arrow_img.png">&nbsp;&nbsp;<span ><a href="#">BBPS Technical specification</a></span></div>
                            <div class="imp_links"><img src="images/small_icon/arrow_img.png">&nbsp;&nbsp;<span ><a href="#">RBI Circulars</a></span></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <!--end of footer-->

        <!--footer-->
        <div class="footer">
            <div class="container footer_text">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <ul class="list-inline footer-nav-links">
                        <li><a href="#">Contact Us</a></li>
                        <li><a herf="#">Disclaimer</a></li>
                        <li><a href="#">Privacy And Security Policy</a></li>
                        <li><a herf="#">Careers</a></li>
                        <li><a herf="#">Terms & Conditions</a></li>
                        <li><a herf="#">Site Map</a></li> 
                    </ul>
                    <div >&copy;&nbsp;2016 BBPS. All Rights Reserved.</div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 footer_icon">
                    <span class="footer-links">
                        <ul class="list-unstyled">
                            <li><a href="http://www.npci.org.in/" target="_blank"><img src="images/arrow_01.png" alt=""> &nbsp;NPCI</a></li>
                            <li><a href="https://www.rbi.org.in/" target="_blank"><img src="images/arrow_01.png" alt=""> &nbsp;RBI</a></li>
                            <li><a href="#" target="_blank"><img src="images/arrow_01.png" alt=""> &nbsp;BBPOU</a></li>
                            <li id="top-btn">Back to top  &nbsp;<img src="images/arrow_02.png" alt=""></li>
                        </ul>
                    </span>
                </div>

            </div>  
        </div>
        </div>
        <!--end of footer-->
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/html5shiv.min.js"></script>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    </body>
</html>