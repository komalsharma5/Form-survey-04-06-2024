import React, { Component } from 'react'
import Detail from './Detail'
import Question from './Question'
import 'bootstrap/dist/css/bootstrap.css';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import app from '../Firebase'

// Get database
const database = getDatabase(app);


class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: uuidv4(),
        name: '',
        email: '',
        submit: false,
        questions: {
          q1: '',
          q2: '',
          q3: '',
          other: ''
        }
      }
    }

    detailSubmitHandler = (e) => {
        e.preventDefault()
        // const name=e.target.name.value
        // const email=e.target.email.value
        this.setState({
          name: e.target.name.value,
          email: e.target.email.value,
          submit: true
        })
    }

    questionSubmitHandler = (e) => {
        e.preventDefault()
          
        const question ={};
        question.q1= e.target.q1.value
        question.q2= e.target.q2.value
        question.q3= e.target.q3.value
        question.other= e.target.other.value
        this.setState({
          questions: question
        })

        const userRef = ref(database,`User/${this.state.id}`);
        set(userRef,{
          name: this.state.name,
          email: this.state.email,
          questions: question
        })
    }


    
 render() {
  console.log(this.state);
  
    return (
      <div>
        <div className='container-fluid' style={{backgroundColor: '#f2f2f2'}}>
          <div className='row'>
            <div className='col-12 bg-secondary-subtle '>
              <h1 className='h1 text-center py-5'>Survey</h1>
            </div>
          </div>
        </div>

        {
            this.state.submit === false ? <Detail Submit={this.detailSubmitHandler}></Detail> : <Question change={this.questionSubmitHandler}></Question>
        }
        
      </div>

    )
  }
}



export default User;