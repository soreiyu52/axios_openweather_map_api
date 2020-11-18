import React, {useState} from 'react';
import axios from 'axios';

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ed9e746d3ad6e7440bc04717247700b0'; // 発行した API key(自分で発行したものを使ってください。)

const AxiosSample = () => {

    const [cityName, setCityName] = useState('');
    const [data, setData] = useState({
        city: '',
        response: []
    });

    let state = {
        apiKey: API_KEY,
        requestCity: cityName,
    };

    /**
     * 実際にhttpリクエストを送っている関数
     * ボタンを押すとaxios経由でopenweathermapAPIにhttpリクエストを送る
     */
    const handleGetWeather = () => {
        axios.get(API_ENDPOINT, {
            params: {
                q: state.requestCity,
                APPID: state.apiKey
            }
        }).then(res => {
            setData({
                city: res.data.name,
                response: res.data.weather
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    /**
     * 天気を表示させる関数
     * 取得できなかった場合は出力しないようにしている。
     * @returns {string | NodeJS.Module}
     */
    const view = () => {
        if (data.response.length !== 0) {
            return data.response[0].main
        }
    }

    return (
        <>
            <input
                type="text" value={state.requestCity}
                onChange={(e) => setCityName(e.target.value)}
            />
            <button onClick={handleGetWeather}>Search</button>
            <p> 場所 : {data.city} </p>
            <p> 天気 : {view()}</p>
        </>
    );
}

export default AxiosSample

