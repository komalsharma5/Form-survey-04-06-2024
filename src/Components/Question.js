import React, { Component } from 'react'

export default class Question extends Component {
  constructor(props) {
    super(props)
  
    this.props = props;
  }
  
  render() { 
    return (
      <div  style={{backgroundColor: '#f2f2f2'}}>
          <div className='container'>
            <div className='row'>
                <div className='col-12' style={{backgroundColor: '#fff',boxShadow: '1px 1px 5px #999'}}>
                    <form className='p-5' onSubmit={this.props.change}>
                        <div className='m-5'>
                          <label className='form-label'><b>3.</b> What are you currently doing?</label><br></br>
                          <input type="radio" name="q1" value={"Teaching"}></input>
                          <label>Teaching</label>
                          <input type="radio" name="q1" value={"Student"}></input>
                          <label>Student</label>
                          <input type="radio" name="q1" value={"Programmer"}></input>
                          <label>Programmer</label>
                          <input type="radio" name="q1" value={"Other"}></input>
                          <label>Other</label>
                          <input className='form-control' type="text" name='other' placeholder='Typed here if not listed' required></input>
                        </div>
                        <div className='m-5'>
                          <label className='form-label'><b>4.</b> Please rate your Course</label><br></br>
                          <input type="radio" name="q2" value={"Poor"}></input>
                          <label>Poor</label>
                          <input type="radio" name="q2" value={"Good"}></input>
                          <label>Good</label>
                          <input type="radio" name="q2" value={"Excellent"}></input>
                          <label>Excellent</label>
                        </div>
                        <div className='m-5'>
                          <label className='form-label'><b>5.</b> Write the review here.</label>
                          <input className='form-control' type="text" name='q3' required ></input>
                        </div>

                        <button type='submit' className='btn text-light bg-primary m-5 p-2 px-4'>Submit</button>
                    </form>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
