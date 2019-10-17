import React, { useState } from 'react';

type MyFormProps = {
    onSubmit: (form: { qus: string; ans1: string; ans2: string; ans3: string; ans4: string; ans5: string;}) => void;
};


const Form = ({ onSubmit }: MyFormProps) => {
    const [form, setForm] = useState({
        qus: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans5: ''
    });
    const { qus, ans1, ans2, ans3, ans4, ans5 } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            qus: '',
            ans1: '',
            ans2: '',
            ans3: '',
            ans4: '',
            ans5: ''
        })
    };

    let input1 = null;
    let input2 = null;


    if (ans3 !== ''){
        input1 = <input name={'ans4'} value={ans4} onChange={onChange} placeholder={'네번째 선택지를 적어주세요'}/>
    }
    if (ans4 !== ''){
        input2 = <input name={'ans5'} value={ans5} onChange={onChange} placeholder={'다섯번째 선택지를 적어주세요'}/>
    }



    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <input name={'qus'} value={qus} onChange={onChange} placeholder={'질문을 입력하세요.'}/>
            <input name={'ans1'} value={ans1} onChange={onChange} placeholder={'첫번째 선택지를 적어주세요'}/>
            <input name={'ans2'} value={ans2} onChange={onChange} placeholder={'두번째 선택지를 적어주세요'}/>
            <input name={'ans3'} value={ans3} onChange={onChange} placeholder={'세번째 선택지를 적어주세요'}/>
            {input1}
            {input2}

            <button type="submit">등록</button>
        </form>
    );
}


export default Form;
