import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Rate } from 'antd';

@inject("parksStore")
@observer
class ParkGeneralInfo extends Component {
    
    constructor(){
        super()
        this.state = {
            chosenPark: {}
        }
    }

    async componentDidMount (){
        // let parkId = await this.props.parksStore.parkId
        // console.log(parkId)
        // await this.props.parksStore.getPark(parkId)
        // let chosenPark = this.props.parksStore.chosenPark
        // this.setState({chosenPark}, function(){
        //     console.log(this.state.chosenPark)

        // })
        console.log(this.props.parksStore.chosenPark)
    }
    
    
    render() {
        const rating = this.props.parksStore.parkRating
        const starPercentage = (rating / 5) * 100;
        const starPercentageRounded = Math.round(starPercentage / 10) * 10 + '%'

        return (
            this.props.parksStore.chosenPark?
            <div id="general-info">
                <h1 id="park-name">{this.props.parksStore.chosenPark.park_name}</h1>
                <div id = "rating">
                <span>{rating + '.0'}</span>
                <div className="stars-outer" >
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <div className="stars-inner" style={{ width: starPercentageRounded }}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                </div> 
                <p>{this.state.chosen_park.address}</p>
            </div>
            :null
        );
    }
}

export default ParkGeneralInfo;