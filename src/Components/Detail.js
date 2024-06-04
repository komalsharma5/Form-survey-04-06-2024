import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(props) {
      super(props)
    
      this.props = props;
    }
    
  render() {
    return (
      <div style={{backgroundColor: '#f2f2f2'}}> 
        <div className='container'>
            <div className='row'>
                <div className='col-12' style={{backgroundColor: '#fff',boxShadow: '1px 1px 5px #999'}}>
                    <form className='p-5' onSubmit={this.props.Submit}>
                        <div className='m-5'>
                          <label className='form-label'><b>1.</b> Name:</label>
                          <input className='form-control' type='text' name='name' placeholder='Enter the Name'></input>
                        </div>
                        
                        <div className='m-5'>
                          <label className='form-label'><b>2.</b> Email</label>
                          <input className='form-control' type="email" name='email' placeholder='Enter the Email'></input>
                        </div>

                        <button type='submit' className='btn text-light bg-primary m-5 p-2 px-4'>Next</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
