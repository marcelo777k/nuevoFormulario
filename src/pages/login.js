import {Form, Input, Button,  Checkbox, Typography} from 'antd';

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
		password:'${label} esta equivocado el password',
	}
};



const Login=()=>{
	return (
		<>
			<Row justify="center">
				<Col>
					
					<Form
						style={{backgroundColor:'#EBEBEB',padding:'1rem 2rem 1rem 1rem'}}
						{...layout}
						name="nest-messages" 
						onFinish={onFinish}
						validateMessages={validateMessages}
					>
						<Title style={{textAlign:'center'}} level={2}>Login</Title>
						<Form.Item
							name={['user','email']}
							label="Email"
							rules={[{type:'email',required:true}]}
						>
							<Input/>
						</Form.Item>

						
						<Form.Item
							name={['user','password']}
							label="Password"
							rules={[{required:true}]}
						>
							<Input.Password/>
						</Form.Item>



						<Form.Item
							wrapperCol={{...layout.wrapperCol,offset:8}}
						>
							<Button type="primary" htmlType="submit">
								Sesión
							</Button>
						</Form.Item>
					</Form>

				</Col>
			</Row>
			

			
		</>
	);
}
export default Login;