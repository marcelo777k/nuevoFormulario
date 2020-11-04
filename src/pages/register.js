import {Form, Input, Button, InputNumber ,Checkbox, Typography} from 'antd';

import {Row,Col} from 'antd';


const {Title}=Typography;


const layout={
	labelCol:{span:8},
	wrapperCol:{span:16},
};
const tailLayout={
	wrapperCol:{offset:8,span:16}
}

const onFinish=values=>{
	console.log(values);
}


const validateMessages={
	required:'${label} is required!',
	types:{
		email:'${label} is not validate email',
		
	}
};






const Register=()=>{
	return (
		<>
			<Row justify="center">
				<Col>
					
					<Form
						style={{backgroundColor:'#ECFBB2',padding:'1rem 2rem 1rem 1rem'}}
						{...layout}
						name="nest-messages" 
						onFinish={onFinish}
						validateMessages={validateMessages}
					>
						<Title style={{textAlign:'center'}} level={2}>Registro</Title>
						

						<Form.Item
							name={['user','name']}
							label="Nombre"
							rules={[{required:true}]}
						>
							<Input/>	
						</Form.Item>

						<Form.Item
							name={['user','lastName']}
							label="Apellido"
							rules={[{required:true}]}
						>
							<Input/>	
						</Form.Item>

						<Form.Item
							name={['user','age']}
							label="Edad"
							rules={[{type:'number', min:1,max:150,required:true}]}
						>
							<InputNumber/>
						</Form.Item>


						<Form.Item
							name={['user','email']}
							label="Email"
							rules={[{type:'email',required:true}]}
						>
							<Input/>
						</Form.Item>

						<Form.Item
							wrapperCol={{...layout.wrapperCol,offset:8}}
						>
							<Button type="primary" htmlType="submit">
								Registro
							</Button>
						</Form.Item>

					</Form>

				</Col>
			</Row>
			

			
		</>
	);
}
export default Register;