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
						<span className="form0_0_icono">Nombre</span>
						<input type="text" placeholder="Nombre"/>
				  	</p>
					<p className="form0_0">
						<span className="form0_0_icono">Apellido</span>
						<input type="text" placeholder="Apellido"/>
				  	</p>
					<p className="form0_0">
						<span className="form0_0_icono">Edad</span>
						<input type="text" placeholder="Edad"/>
				  	</p>
				  	<p className="form0_0">
					  	<span className="form0_0_icono">Correo</span>
				  		<input type="text" placeholder="Contraseña"/>
				  	</p>
				  	<p className="form0_0 form0_0_btn_principal">
				  		<input className="form0_0_btn" type="button" value="Registrar"/>

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
					width:400px;
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
							justify-content:flex-start;
						}
						.form0_0_icono{
							
							display:block;
							margin-right:10px;
							width:4rem;
						}
						.form0_0_title{
							font-weight:bold;
							text-align:center;
							justify-content:center;
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
						.form0_0_btn_principal{
							justify-content:center;
						}
						

			`}
		</style>

    </div>

);

export default Login;