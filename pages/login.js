import Head from 'next/head'

const Login=()=>(
	<div className="wrapper">
		<Head>
			<title>Login</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"/>
		</Head>


    	<form action="#" className="form0" >
    		<fieldset className="form0_0_block">
    			<div className="form0_0_block2"> 
    				<p className="form0_0 form0_0_title">Login</p>
				  	<p className="form0_0">
				  		<i className="fas fa-envelope fa-lg form0_0_icono"></i>
				  		<input type="text" placeholder="Correo electrónico"/>
				  	</p>
				  	<p className="form0_0">
				  		
				  		<i className="fas fa-lock fa-lg form0_0_icono"></i>
				  		<input type="text" placeholder="Contraseña"/>
				  	</p>
				  	<p className="form0_0">
				  		<input className="form0_0_btn" type="button" value="Ingresa" />

				  	</p>
			  	</div>
		  	</fieldset>
    	</form>





		{/* Antes de la ultima etiqueta */}
		<style jsx>
			{`
				.wrapper{
					display:flex;
					justify-content:center;
					align-items:center;
					height:100vh;
					width:100vh;
					background-image: linear-gradient(to right top, #f1f9fd, #bad0d8, #84a9b1, #4e8489, #0a6060);
				}
				.form0{
					display:block;
					background:#ecf0f1;
					width:300px;
					padding:10px;
					height:400px;
					background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
					background-image: url("https://c.pxhere.com/photos/00/76/graffiti_background_grunge_street_art_graffiti_wall_graffiti_art_artistic_painted-1168697.jpg!d");
					background-size:100% 100%;
				}
					.form0_0_block{
						height:380px;
						display:flex;
						flex-direction:column;
						align-items:center;
						justify-content:center;
						
					}
						.form0_0_block2{
							background:rgb(232,232,232,0.9);
							padding:20px;
						}
						.form0_0{
							display:flex;
							flex-direction:row;
							justify-content:center;
							
						}
						.form0_0_title{
							font-weight:bold;
						}
							i{
								margin-right:10px;
								
								display:flex;
								align-items:center;
								
							}
						.form0_0_btn{
							width:90px;
							height:27px;
						}
						

			`}
		</style>

    </div>

);

export default Login;