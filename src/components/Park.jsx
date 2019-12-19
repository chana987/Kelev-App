import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import DogsInPark from './DogsInPark';
import ParkPictures from './ParkPictures';
import { Layout } from 'antd';
import Amenities from  './Amenities'
import ParkGeneralInfo from './ParkGeneralInfo';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { observer } from 'mobx-react';

const { Header, Footer, Sider, Content } = Layout;

@observer
class Park extends Component {


    render() {

        return (
            <div className="parkComponent">
            <Layout id="parkLayout"  style={{height:"100vh"}}>
                <Content id="info">
                <Content id="inside">
                    <Link to = "/"><div id = "back-button"><i className="fas fa-chevron-left"></i></div></Link>
                    <ParkPictures />
                </Content>
                <Content>
                   
                    <ParkGeneralInfo />
                </Content>

              </Content>
              
                <Content id="dogs"><DogsInPark /></Content>
             
                <Content id="amenities"><Amenities/> </Content>
            </Layout>
            </div>
        );
    }
}

export default Park;