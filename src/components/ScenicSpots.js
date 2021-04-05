import React from 'react'
import axios from 'axios'
import Header from 'components/Header'
import ScenicSpot from 'components/ScenicSpot'

class ScenicSpots extends React.Component{
    state = {
        scenicSpots: [],
        skipAmount: 0,
        isRequestData: true
    }

    requestData = (cityElement) => {
        if (this.state.isRequestData) {
            axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${cityElement}?$top=30&$skip=${this.state.skipAmount}&$format=JSON`)
                .then(response => {
                    if (response.data.length != 30) { // when no more data then no need to request
                        this.setState({
                            isRequestData: false
                        })
                    }

                    this.setState(prevState => ({
                        scenicSpots: prevState.scenicSpots.concat(response.data),
                        skipAmount: prevState.skipAmount + 30
                    }))
                })
        }

    }

    // check user need all data or only one city's data
    componentDidMount = () => {
        var urlElement = (this.props.history.location.pathname).split("/")
        var cityElement = ""
        if (urlElement.length === 3 && urlElement[1] === "scenicSpot") {
            cityElement = urlElement[2]
        }

        document.addEventListener('scroll', () => this.trackScrolling(cityElement))
        this.requestData(cityElement)
    }


    // detect user scrolling the page to the end or not
    trackScrolling = (cityElement) => {
        if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight)
            this.requestData(cityElement)
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="px-5 pt-5 d-flex flex-wrap justify-content-around overflow-auto" id="scenicSpotBody">
                    {
                    this.state.scenicSpots.map(s => {
                        return <ScenicSpot key={s.ID} spot={s}></ScenicSpot>
                    })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ScenicSpots;