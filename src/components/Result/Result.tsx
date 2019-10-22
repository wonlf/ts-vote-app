import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Result.scss'




const Result = () => {
    let url:string = document.URL;
    const [response, setRes] = useState({
        title: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans1_s: '',
        ans2_s: '',
        ans3_s: '',
        ans4_s: '',

    });
    useEffect(() => {
        let v_url:string = url.substring(23)
        const a = v_url.replace(/[^0-9]/g,"");
        axios.get(`http://voting-vwujy.run.goorm.io/result/${a}`)
            .then(res => {
                console.log(res)
                setRes({
                    title: res.data.title,
                    ans1: res.data.scoers[0].key,
                    ans2: res.data.scoers[1].key,
                    ans3: res.data.scoers[2].key,
                    ans4: res.data.scoers[3].key,
                    ans1_s: res.data.scoers[0].value,
                    ans2_s: res.data.scoers[1].value,
                    ans3_s: res.data.scoers[2].value,
                    ans4_s: res.data.scoers[3].value,
                })

            })
    }, []);

    let { title, ans1, ans2, ans3, ans4, ans1_s, ans2_s, ans3_s, ans4_s } = response;
        return (
            <>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <div className={'R_Form'}>
                <div className={'R_div'}>{ans1} = {ans1_s}회</div>
                <div className={'R_div'}>{ans2} = {ans2_s}회</div>
                <div className={'R_div'}>{ans3} = {ans3_s}회</div>
                <div className={'R_div'}>{ans4} = {ans4_s}회</div>
            </div>
            </>
        );
}

export default Result;
