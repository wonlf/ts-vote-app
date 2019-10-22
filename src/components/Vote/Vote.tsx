import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Vote.scss';


const Vote = () => {
    let url: string = document.URL;


    const [response, setRes] = useState({
        title: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans1_i: '',
        ans2_i: '',
        ans3_i: '',
        ans4_i: ''
    });



    useEffect(() => {
        let v_url:string = url.substring(23)
        const a = v_url.replace(/[^0-9]/g,"");;
        axios.get(`http://voting-vwujy.run.goorm.io/vote/${a}`)
            .then(res => {
                console.log(res)
                if(res.data.success === true){
                    setRes({
                        title: res.data.title,
                        ans1: res.data.options[0].opt,
                        ans2: res.data.options[1].opt,
                        ans3: res.data.options[2].opt,
                        ans4: res.data.options[3].opt,
                        ans1_i: res.data.options[0].id,
                        ans2_i: res.data.options[1].id,
                        ans3_i: res.data.options[2].id,
                        ans4_i: res.data.options[3].id,
                    })
                }
                    
                if(res.data.success === false){
                    alert('없는 투표입니다.')
                    window.history.go(-1);
                }
            })
    }, []);

    const [form2, setForm2] = useState({
        checked: ''
    });
    const [success1, setSuc] = useState({
        success: false

    })

    let { ans1_i, ans2_i, ans3_i, ans4_i } = response;

    let v_url:string = url.substring(23);
    const a = v_url.replace(/[^0-9]/g,"");
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let { checked } = form2;

        let data = {
            checked: ''
        }
        
        switch(checked){
            case '1':
                data.checked = ans1_i
                break;
            case '2':
                data.checked = ans2_i
                break
            case '3':
                data.checked = ans3_i
                break
            case '4':
                data.checked = ans4_i
                break

            default:
                console.log('error')
        }
        

        
        console.log(data)
        axios.post(`http://voting-vwujy.run.goorm.io/select/${a}` , data)
            .then(res=> {
                console.log(res.data)
                setSuc({
                    success: res.data.success
                })
            })
    }

    let { success } = success1;

    let { title, ans1, ans2, ans3, ans4 } = response;

    

    let button1= <button type={'submit'} className={'Vote_button'} onClick={onClick}>투표하기</button>;

    if(success === true){
        button1 = <a href={`/v${a}/result`}><button type={'button'} className={'Vote_button'} >결과창 가기</button></a>
    }



    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setForm2({
            ...form2,
            checked: e.target.value
        })

    };


    return(
      <>
          <h1 style={{textAlign: 'center'}}>투표: {title}</h1>
          <form className={"Vote_Form"}>
          <div className={'Vote_radio'}><input type={'radio'} value={1} name={'option'} onChange={onChange1} /><span>{ans1}</span></div>
          <div className={'Vote_radio'}><input type={'radio'} value={2} name={'option'} onChange={onChange1} /><span>{ans2}</span></div>
          <div className={'Vote_radio'}><input type={'radio'} value={3} name={'option'} onChange={onChange1} /><span>{ans3}</span></div>
          <div className={'Vote_radio'}><input type={'radio'} value={4} name={'option'} onChange={onChange1} /><span>{ans4}</span></div>
          {button1}
          </form>
      </>
    );
}

export default Vote;
