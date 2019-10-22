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
    });



    useEffect(() => {
        let v_url:string = url.substring(23)
        axios.get(`http://voting-vwujy.run.goorm.io/vote/${v_url}`)
            .then(res => {
                console.log(res)
                    setRes({
                        title: res.data.title,
                        ans1: res.data.options[0].opt,
                        ans2: res.data.options[1].opt,
                        ans3: res.data.options[2].opt,
                        ans4: res.data.options[3].opt,
                    })

            })
    }, []);

    const [form2, setForm2] = useState({
        checked: ''
    });


    const onClick = () => {
        const { checked } = form2;
        let v_url:string = url.substring(23)
        axios.post(`http://voting-vwujy.run.goorm.io/select/${v_url}` , checked)
            .then(res=> {
                console.log(res.data)
            })
    }


    let { title, ans1, ans2, ans3, ans4 } = response;

    let button2= <button type={'submit'} className={'Vote_button'} onClick={onClick}>투표하기</button>;

    // if(){
    //     button2 = <a>a</a>
    // }

    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setForm2({
            ...form2,
            checked: e.target.value
        })

    };


    return(
      <>
          <h1 style={{textAlign: 'center'}}>{title}</h1>
          <form className={"Vote_Form"}>
          <div className={'Vote_radio'}><input type={'radio'} value={1} name={'option'} onChange={onChange1} /><span>{ans1}</span></div>
          <div className={'Vote_radio'}><input type={'radio'} value={2} name={'option'} onChange={onChange1} /><span>{ans2}</span></div>
          <div className={'Vote_radio'}><input type={'radio'} value={3} name={'option'} onChange={onChange1} /><span>{ans3}</span></div>
          <div className={'Vote_radio'}><input type={'radio'} value={4} name={'option'} onChange={onChange1} /><span>{ans4}</span></div>
          {button2}
          </form>
      </>
    );
}

export default Vote;
