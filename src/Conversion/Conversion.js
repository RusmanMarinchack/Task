import React from "react";
import "../Conversion/Conversion.css"

function Converter(props) {

    const inputOne = React.createRef();
    const selectOne = React.createRef();
    const inputTwo = React.createRef();
    const selectTwo = React.createRef();



    function valueInpetOne() {
        // console.log(inputOne.current.value);

        if (selectOne.current.value === 'UAH') {
            console.log(1)
            if (selectTwo.current.value === 'USD') {
                inputTwo.current.value = (inputOne.current.value / props.currensy[26].rate).toFixed(2);
            }
            else if (selectTwo.current.value === 'EUR') {
                inputTwo.current.value = (inputOne.current.value / props.currensy[32].rate).toFixed(2);
            }
            else {
                inputTwo.current.value = inputOne.current.value;
            }
        }
        else if (selectOne.current.value === 'EUR') {
            if (selectTwo.current.value === 'USD') {
                inputTwo.current.value = (inputOne.current.value * 1.13).toFixed(2);
            }
            else if (selectTwo.current.value === 'UAH') {
                inputTwo.current.value = (inputOne.current.value / props.currensy[32].rate).toFixed(2);
            }
            else {
                inputTwo.current.value = inputOne.current.value;
            }
        }
        else if (selectOne.current.value === 'USD') {
            if (selectTwo.current.value === 'EUR') {
                inputTwo.current.value = (inputOne.current.value * 0.88).toFixed(2);
            }
            else if (selectTwo.current.value === 'UAH') {
                inputTwo.current.value = (inputOne.current.value / props.currensy[26].rate).toFixed(2);
            }
            else {
                inputTwo.current.value = inputOne.current.value;
            }
        }



        if (inputOne.current.value === '') {
            inputTwo.current.value = ''
        }
    }

    function valueInpetTwo(e) {
        
        // console.log(e.target.value)
        if (selectTwo.current.value === 'UAH') {
            console.log(1)
            if (selectOne.current.value === 'USD') {
                inputOne.current.value = (inputTwo.current.value / props.currensy[26].rate).toFixed(2)
                console.log(1)
            }
            else if (selectOne.current.value === 'EUR') {
                inputOne.current.value = (inputTwo.current.value / props.currensy[32].rate).toFixed(2)
                console.log(1)
            }
            else {
                inputOne.current.value = inputTwo.current.value
            }
        }
        else if (selectTwo.current.value === 'EUR') {
            if (selectOne.current.value === 'USD') {
                inputOne.current.value = (inputTwo.current.value * 1.13).toFixed(2);
            }
            else if (selectOne.current.value === 'UAH') {
                inputOne.current.value = (inputTwo.current.value / props.currensy[32].rate).toFixed(2);
            }
            else {
                inputOne.current.value = inputTwo.current.value;
            }
        }
        else if (selectTwo.current.value === 'USD') {
            if (selectOne.current.value === 'EUR') {
                inputOne.current.value = (inputTwo.current.value * 0.88).toFixed(2);
            }
            else if (selectOne.current.value === 'UAH') {
                inputOne.current.value = (inputTwo.current.value * props.currensy[26].rate).toFixed(2);
            }
            else {
                inputOne.current.value = inputTwo.current.value;
            }
        }

        if (inputTwo.current.value === '') {
            inputOne.current.value = '';
        }
    }

    return (
        <section className="converter">
            <div className="wrapper">
                <h2 className="wrapper__title">Конвертація</h2>
                <div className="wrapper__item">
                    <input type="number" className="input" onInput={valueInpetOne} ref={inputOne} placeholder={' '}/>
                    <label>Валюта</label>
                    <select className="select" ref={selectOne}>
                        <option value="UAH">UAH</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="wrapper__item" >
                    <input type="number" className="input" onInput={valueInpetTwo} ref={inputTwo} placeholder={' '} />
                    <label>Валюта</label>
                    <select className="select2" ref={selectTwo}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Converter;