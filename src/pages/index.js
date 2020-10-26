import Head from 'next/head'
import Link from 'next/link'
import MyApp from "a_app"
import {DatePicker} from 'antd';

export default function Home() {
  return (
    <div className="wrapper">
		<Head>
			<title>Login</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"/>
		</Head>

		<DatePicker/>
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
					<p className="form0_0">
						<small>¿No tienes cuenta, <Link href="/register"><a>registrate</a></Link>?</small>
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
					background-image: linear-gradient(to right top, #305b9f, #2359bf, #3651dc, #6040f1, #9000ff);
				}
				.form0{
					display:block;
					background:#ecf0f1;
					width:300px;
					padding:10px;
					height:400px;
					background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
					
				}
					.form0_0_block{
						height:380px;
						display:flex;
						flex-direction:column;
						align-items:center;
						justify-content:center;
						
					}
						.form0_0_block2{
							background:rgb(232,232,232,0.8);
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
							