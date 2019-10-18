import React, { useState } from 'react';
import axios from "axios";
import './App.scss';

interface Iform {
    qus: string;
    ans1: string;
    ans2: string;
    ans3: string;
    ans4: string;
    ans5: string;
}

const App = () => {
    const [form, setForm] = useState({
        qus: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans5: ''
    });
    const [response, setRes] = useState({
        resp: false
    });


    const { qus, ans1, ans2, ans3, ans4, ans5 } = form;
    let { resp } = response;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const onSubmit = (form: Iform) => {
        axios.post(`http://172.20.10.14:3001/`,  form )
            .then(res => {
                resp = res.data.success
                setRes({
                    resp: true
                })
                console.log(res.data)
            })

    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit(form);
        // setForm({
        //     qus: '',
        //     ans1: '',
        //     ans2: '',
        //     ans3: '',
        //     ans4: '',
        //     ans5: ''
        // })

    };


    let input1 = null;
    let input2 = null;


    if (ans3 !== ''){
        input1 = <input name={'ans4'} value={ans4} onChange={onChange} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
    }
    if (ans4 !== ''){
        input2 = <input name={'ans5'} value={ans5} onChange={onChange} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
    }

    let btn = <button type={'submit'} className={'App_button'} onClick={handleSubmit}>등록</button>;

    console.log(resp);

    if(resp === true){
        btn = <a href={`/vote`} className={'App_href'}>투표하러가기</a>

    }


    return (
        <form  style={{display: "flex", flexDirection: "column"}} className={'App_Form'}>
            <input name={'qus'} value={qus} onChange={onChange} placeholder={'질문을 입력하세요.'} className={'App_input'}/>
            <input name={'ans1'} value={ans1} onChange={onChange} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
            <input name={'ans2'} value={ans2} onChange={onChange} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
            <input name={'ans3'} value={ans3} onChange={onChange} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
            {input1}
            {input2}
            {btn}
        </form>
    );


    // type GreetingsProps = {
    //     name: string;
    //     value: string;
    //     // id: number | undefined;
    // };
    //
    // function Greetings({ name, value }: GreetingsProps) {
    //     return (
    //         <input name={name} value={value} onChange={onChange} id={'input4'} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
    //     );
    // }


}




export default App;
