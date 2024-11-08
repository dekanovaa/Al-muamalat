import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='container contact_container'>
            <div className="contact_left">
                <h1 className='contact_title'>Workshops and Spiritual Development</h1>
                <p className='contact_text'>Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life</p>
            </div>
            <div className="contact_right">
                <form>
                    <h3 className='form_title'>Free consultation</h3>
                    <p className="form_text">Leave your phone number, and we will reach out to provide you with complete information about our courses. </p>
                    <input type="text" placeholder='Name' id='name' />
                    <input type="phone" placeholder='+44' id='phone' />
                    <div className="form_line">
                        <p className='form_subtext'>I agree to the use of my personal information for consultation purposes.</p>
                    </div>
                    <button className='contact_btn'>Submit</button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Contact