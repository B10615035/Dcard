import React from 'react'
import {render} from 'react-dom'
import 'styles/scenicSpotDetail.css'

class ScenicSpotDetail extends React.Component{
    state = {
        active: false,
        detail: []
    }

    close = () => this.setState({
        active: false
    })

    open = (detail, image) => {
        this.setState({
            active: true,
            detail: detail,
            image: image
        })
    }

    render(){
        const _class = {
            true: 'detailWrapper active',
            false: 'detailWrapper'
        }

        const {Name, DescriptionDetail, Phone, Address,TravelInfo,OpenTime} = this.state.detail

        return(
            <React.Fragment>
                <div className={_class[this.state.active]}>
                    <div className="overLayer" onClick={this.close}></div>
                    <div className="detail">
                        <img className="detailImage" src={this.state.image} />
                        <ul>
                            <li><span>名稱 : </span>{Name}</li>
                            <li><span>介紹 : </span>{DescriptionDetail}</li>
                            <li><span>地址 : </span>{Address}</li>
                            <li><span>電話 : </span>{Phone}</li>
                            <li><span>資訊 : </span>{TravelInfo}</li>
                            <li><span>時間 : </span>{OpenTime}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const _div = document.createElement('div')
document.body.appendChild(_div)

const _ScenicSpotDetail = render(<ScenicSpotDetail/>, _div)

export default _ScenicSpotDetail;