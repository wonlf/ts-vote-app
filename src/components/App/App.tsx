import React, { useState } from 'react';
import axios from "axios";
import './App.scss';


interface Iform {
    title: string;
    opt: any;
}

const App = () => {
    const [form, setForm] = useState({
        title: '',
        opt: {

        }
    });
    const [response, setRes] = useState({
        resp: false
    });

    let { resp } = response;

    let { opt } = form;


    let optS:any = {};

    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const onChange2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        optS[Number(name)] = value;

        if(Number(name) === autoincrement_count){
            // 투표항목을 추가하는 함수를 부른다.

        }
    };


    const onSubmit = (form: Iform) => {
        let array_optS:Array<string> = []

        Object.keys(optS).map((key) => {
            array_optS.push(optS[key])
        });

        setForm({
            ...form,
            opt: array_optS
        })


        const data = {title:"sibal", opt:array_optS}

        axios.post(`http://voting-vwujy.run.goorm.io/`, data  )
            .then(res => {
                resp = res.data.success
                setRes({
                    resp: true
                })
                console.log(data)
                console.log(res.data)
            })

    };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit(form);
    };


    let btn = <button type={'submit'} className={'App_button'} onClick={handleSubmit}>등록</button>;


    if(resp === true){
        btn = <a href={`/vote`} className={'App_href'}>투표하러가기</a>
        console.log(opt)
    }

    let autoincrement_count = 0;
    const autoincrement = () => {
        return autoincrement_count += 1;
    }


    return (
        <>
        <div>
            <h1 style={{textAlign: 'center'}}>투표 하셈 수고</h1>
        </div>
            <form  style={{display: "flex", flexDirection: "column"}} className={'App_Form'}>
                <input name={'title'} onChange={onChange1} placeholder={'질문을 입력하세요.'} className={'App_input'}/>
                <input name={`${autoincrement()}`} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'}/>
                <input name={`${autoincrement()}`} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'} />

                {btn}
            </form>
        </>
    );

    // function Greetings() {
    //     return (
    //         <input name={`${autoincrement()}`} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'} />
    //     );
    // }
}






export default App;
