import React, { Component } from 'react'
import TopNav from './TopNav';
import ScenarioSelector from './ScenarioSelector';
import IndicatorCategories from '../components/IndicatorCategories';
import Contact from './Contact';
import language from '../Language';

class Home extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            displayIndicators: false,
            indicatorCategories: [],
            mailIsOpen : false
        }

        this.openMail = this.openMail.bind(this);
        this.displayIndicators = this.displayIndicators.bind(this);
    }

    openMail(){
        if (this.state.mailIsOpen === false) {
            this.setState({mailIsOpen: true})
        }
    }
  
    displayIndicators(_indicatorCategories) {
        // Display the indicators
        this.setState({displayIndicators: true});
        this.setState({indicatorCategories: _indicatorCategories});
    }

    render () {
        if (this.state.mailIsOpen) {
            return (
                <div>
                    <Contact language={this.language}/>
                </div>
            )
        }
        else {
            if(this.state.displayIndicators === false) {
                return (
                    <div>
                        <TopNav language={this.props.language} openMail={this.openMail}/>

                        <div className="row">
                            <div className="col-md-3">
                                <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} />
                            </div>
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <TopNav language={this.props.language} openMail={this.openMail}/>

                        <div className="row">
                            <div className="col-md-3">
                                <ScenarioSelector language={this.props.language} displayIndicators={this.displayIndicators} />
                            </div>
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-3">
                                <IndicatorCategories language={this.props.language} indicatorCategories={this.state.indicatorCategories} />
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}