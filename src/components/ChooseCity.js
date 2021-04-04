import React from 'react'
import Header from 'components/Header'
import Button from 'react-bootstrap/Button'
import * as Content from 'constants/cityList'

class ChooseCity extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="buttonBox">
                    {
                    Content.cityListEn.map((item, index) => {
                        return (
                            <Button className="m-2 p-4" key={index} href={'/scenicSpot/'+item} variant="outline-secondary">
                                {Content.cityListCh[index]} <br /> {item}
                            </Button>
                    )})
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ChooseCity;