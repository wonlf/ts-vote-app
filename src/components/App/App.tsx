import React  from 'react';
import './App.scss';
import Form from './Form/Form';
import axios from 'axios'



const App = () => {
    const onSubmit = (form: { qus: string; ans1: string; ans2: string; ans3: string; ans4: string; ans5: string;}) => {
        axios.post(`http://192.168.0.141:3001`,  form )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };
    return <Form onSubmit={onSubmit} />;
}


export default App;
