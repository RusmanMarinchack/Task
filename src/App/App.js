import React, {setState} from 'react';
import Header from '../Header/Header';
import Converter from '../Conversion/Conversion';
import '../App/App.css'


class App extends React.Component {
        state = {
            error: null,
            isLoader: false,
            currensy: []
        }
    
    componentDidMount(){
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            this.setState({
                isLoader: true,
                currensy: result
            });
            },
            (error) => {
                this.setState({
                    isLoader: true,
                    error
                })
            }
        )
    }



    // console.log(currensy.txt)
render() {
    const {error, isLoader, currensy} = this.state;

    if(error){
        return <p>{error.message}</p>
    } else if (!isLoader){
        return <p>Loading...</p>
    } else {
        return (
            <div className='container'>
                <Header currensy={currensy} />
                <Converter currensy={currensy} />
            </div>
        ); 
    }

   

}
}

export default App;