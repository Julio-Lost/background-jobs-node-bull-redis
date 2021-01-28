import Mail from '../lib/Mail';
import {IRegistration} from '../models/registration';

export default {
    key: 'RegistrationMail',
    async handle({data}: IRegistration){
        const { user: {name, email}} = data;
        
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuario',
            html: `Olá, ${name}, bem-vindo ao sistemas de fila :D`,
        })
    }
}