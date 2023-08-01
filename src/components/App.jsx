import { Component } from 'react';
import SectionTitle from "./SectionTitle/SectionTitle"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from './Statistics/Statistics';
import NotificationMessage from './NotificationMessage/NotificationMessage';

export class App extends Component  {
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }

   countTotalFeedback = () => {
       return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total === 0) {
            return 0;
        }
        return Math.round(this.state.good * 100 / this.countTotalFeedback());
    }

    handleButtonClick = (key) => {
        this.setState(prevState => ({
            [key]: prevState[key] +=1
        }))
    }

  
  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
          color: '#010101'
        
      }}
      >
        
        <SectionTitle>

          <FeedbackOptions 
          handleButtonClick={this.handleButtonClick} />
        
         {this.countTotalFeedback() === 0 ? <NotificationMessage/> : <Statistics             
          state={this.state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}/>}
          
      
        </SectionTitle>
        
    </div>
  );
 }
};
