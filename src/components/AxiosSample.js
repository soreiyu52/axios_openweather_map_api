import React from 'react';
import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp'

const config = {proxy: 'http://webservice.recruit.co.jp'}
const API_ENDPOINT = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=9418d992ec5c342b&lat=34.67&lng=135.52&range=5&order=4?format=jsonp';

const AxiosSample = () => {

    window.callback = json => console.log(json)
    /**
     * 実際にhttpリクエストを送っている関数
     * ボタンを押すとaxios経由でopenweathermapAPIにhttpリクエストを送る
     */
    const getApi = () => {
        axios.get(API_ENDPOINT, {
            'headers': {'Content-Type': 'application/xml'},
            'responseType': 'xml',
            'adapter': axiosJsonpAdapter
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <>
            <button onClick={getApi}>get</button>
        </>
    );
}

export default AxiosSample

