import React, { useState } from 'react';
import axios from "axios";
import './App.scss';
import useSend from "../../hooks/useSend";



interface Iform {
    title: string;
    opt: any;
};


const App = () => {
    const [form, setForm] = useState({
        title: '',
        opt: {

        }
    });
    const [response, setRes] = useState({
        resp: false
    });
    const [url_link, setUrl] = useState({
        url: ''
    })

    let { resp } = response;

    let optS:any = {};
    let t_name:string = '';

    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        t_name = value;
    };

    const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        optS[Number(name)] = value;
    };


    const onSubmit = (form: Iform) => {
        let array_optS:Array<string> = []

        Object.keys(optS).map((key) => {
            return array_optS.push(optS[key])
        });

        setForm({
            ...form,
            title: t_name,
            opt: array_optS
        })
        
        if(array_optS[0] === null || array_optS[1] === null|| array_optS[2] === null || array_optS[3] === null){
            alert('선택지를 비우지 마시고, 공백을 넣어주세요')
        }

        const data = {title:t_name, opt:array_optS}

        axios.post(`http://voting-vwujy.run.goorm.io/`, data  )
            .then(res => {
                setUrl({
                    url: res.data.id
                });
                setRes({
                    resp: true
                });

            })

    };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit(form);
    };


    let btn = <button type={'submit'} className={'App_button'} onClick={handleSubmit}>등록</button>;

    const { onSend } = useSend();

    let { url } = url_link;


    if(resp === true){
        btn = <a href={`/v${url}`} className={'App_href'}>
            <button className={'App_button'} onClick={() => onSend(url)}>투표하러가기</button>
            </a>
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
                <input name={`${autoincrement()}`} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'} />
                <input name={`${autoincrement()}`} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'} />
                {btn}
            </form>
        </>


    );



    // function Greetings() {
    //     return (
    //         <input name={`${autoincrement()}`} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'}  />
    //     );
    // }

    // function Greetings2({ name, list }: GreetingsProps) {
    //     let list = <input name={name} onChange={onChange2} placeholder={'선택지를 적어주세요.'} className={'App_input'} id={name} />
    //     return (
    //         {list}
    //     );
    // }
}






export default App;
