import React from 'react'
import Card from 'react-bootstrap/Card'
import notFoundImage from 'images/notFound.jpg'
import Button from 'react-bootstrap/Button'
import 'styles/scenicSpot.css'
import ScenicSpotDetail from 'components/ScenicSpotDetail'

class ScenicSpot extends React.Component{

    handleDescriptionLimit = (string) =>  {
        return string.length > 72 ? string.slice(0, 72) + " . . ." : string
    }

    handleImage = () => {
        var image = this.props.spot.Picture.PictureUrl1
        this.props.spot.Picture.PictureUrl1 = image ? image : notFoundImage
    }

    openDetail = () => ScenicSpotDetail.open(this.props.spot, this.props.spot.Picture.PictureUrl1)

    render(){

        this.handleImage()

        const {Picture, Name, Description, DescriptionDetail} = this.props.spot
        return(
            <React.Fragment>
                <Card className="mx-3 mb-5 card" style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" variant="top" src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
                    <Card.Body>
                        <Card.Title className="font-weight-bold">{Name}</Card.Title>
                        <Card.Text> {this.handleDescriptionLimit(Description ? Description : DescriptionDetail)} </Card.Text>
                        <Button className="float-right" variant="outline-secondary" onClick={this.openDetail}>Read More</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default ScenicSpot;