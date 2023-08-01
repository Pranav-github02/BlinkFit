import React from 'react'

const ContactMain = () => {
    return (
        <div className='contact-main'>
            <div className='container' style={{ display: 'flex' }}>
                <div className='row'>
                    <div className='col-50'>
                        <div className='inner'>
                            <div className='main'>
                                <div className='title'>
                                    <h2>Get In Touch</h2>
                                </div>
                                <div className='content'>
                                    <div className='content-main'>
                                        <form>
                                            <div className='contact-form'>
                                                <div className='row'>
                                                    <div className='col-sm-4'>
                                                        <label>Name</label>
                                                        <br />
                                                        <input type="text" name='Name' className='name' size={40} placeholder='Name' required />
                                                    </div>
                                                    <div className='col-sm-4'>
                                                        <label>Email</label>
                                                        <br />
                                                        <input type='email' name='Email' className='email' placeholder='Email address' required />
                                                    </div>
                                                    <div className='col-sm-4'>
                                                        <label>Phone</label>
                                                        <br />
                                                        <input type='number' name='Phone' className='phone' placeholder='Phone number' />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-sm-12'>
                                                        <label>Your message</label>
                                                        <br />
                                                        <textarea cols={40} rows={10} placeholder='Comment or message' required />
                                                    </div>
                                                </div>
                                                <div className='button'>
                                                    <input type='submit' value="Send Message" className='submit-btn' />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-40'>
                        <div className='inner'>
                            <div className='main'>
                                <div className='content'>
                                    <div className='content-main'>
                                        <div className='inner1'>
                                            <div className='inner-main'>
                                                <div className='inner-main1'>
                                                    <h3 className='title'>Address</h3>
                                                </div>
                                            </div>
                                            <div className='inner2'>
                                                <div className='content1'>
                                                    NH64, Rajpura, Punjab 140401.
                                                </div>
                                            </div>
                                            <div className='inner-main'>
                                                <div className='inner-main1'>
                                                    <h3 className='title'>Phone</h3>
                                                </div>
                                            </div>
                                            <div className='inner2'>
                                                <div className='content1'>
                                                    (+91) 9216784520
                                                </div>
                                            </div>
                                            <div className='inner-main'>
                                                <div className='inner-main1'>
                                                    <h3 className='title'>Email</h3>
                                                </div>
                                            </div>
                                            <div className='inner2'>
                                                <div className='content1'>
                                                    support@blinkfit.com
                                                </div>
                                            </div>
                                            <div className='inner-main'>
                                                <div className='inner-main1'>
                                                    <h3 className='title'>Opening Hours</h3>
                                                </div>
                                            </div>
                                            <div className='inner2'>
                                                <div className='content1'>
                                                    9:00Am - 7:00Pm, Sunday Close
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMain