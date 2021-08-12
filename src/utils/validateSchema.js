import * as Yup from 'yup';

const loginValidate = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('É necessario inserir um e-mail válido'),
  password: Yup.string().required('A senha precisa ser informada'),
});

export default loginValidate;