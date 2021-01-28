import Mail from '../lib/Mail';
import {IRegistration} from '../models/registration';

export default {
    key: 'UserReport',
    options: {
        delay: 5000,
    },
    async handle({data}: IRegistration){
        const { user: {name, email}} = data;
        
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject: 'Relatorio',
            html: `Olá, ${name}, aqui está um relatorio :D`,
        })
    }
}