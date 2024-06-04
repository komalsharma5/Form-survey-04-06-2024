<div className='container'>
            <div className='row'>
                <div className='col-12' style={{backgroundColor: '#f2f2f2'}}>
                    <div className='p-5'>
                        <div className='m-5'>
                          <label className='form-label'>1 Name:</label>
                          <input className='form-control' type='text' name='name' placeholder='Enter the Name' required></input>
                        </div>
                        
                        <div className='m-5'>
                          <label className='form-label'>2 Email</label>
                          <input className='form-control' type="email" name='email' placeholder='Enter the Email' required></input>
                        </div>

                        <button type='submit' className='btn text-light bg-primary m-5 p-2 px-4' onClick={this.props.submit}>Next</button>
                    </div>
                </div>
            </div>
        </div>