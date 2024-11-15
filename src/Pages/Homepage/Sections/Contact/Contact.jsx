import './Contact.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import axios from 'axios'


function Contact() {
    const [value, setValue] = useState()
    const [loading,setloading] = useState(false);
    const sendMessage = (event) =>{
      setloading(true);
      event.preventDefault();
      const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
      const id = -1002022260815;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const textContent = `Ismi: ${name}  \n Telefon_raqami: ${phone}`
      axios({
        url:url,
        method:'POST',
        data:{
          "chat_id": id,
          "text": textContent,
        }
      })
      .then((res) =>{
        document.getElementById("form").reset();
        alert("Yuborildi")
      }).catch((error) =>{
        console.log("yuborishda xotilik yuz berdi",error);
      }).finally(() =>{
        setloading(false);
      })
    }
  return (
    <div className='contact'>
        <div className='container contact_container'>
            <div className="contact_left">
                <h1 className='contact_title'>Workshops and Spiritual Development</h1>
                <p className='contact_text'>Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life</p>
            </div>
            <div className="contact_right">
                <form id="form" onSubmit={sendMessage}>
                    <h3 className='form_title'>Free consultation</h3>
                    <p className="form_text">Leave your phone number, and we will reach out to provide you with complete information about our courses. </p>
                    <input type="text" placeholder='Name' id='name' required/>
                   <div id='phone'>
                   <PhoneInput
                      required
                     placeholder="Enter phone number"
                     value={value}
                     onChange={setValue}/>
                   </div>
                    <div className="form_line">
                        <input type="checkbox" />
                        <p className='form_subtext'>I agree to the use of my personal information for consultation purposes.</p>
                    </div>
                    <button type='submit' loading={loading} className='contact_btn'>{loading?"Yuborilmoqda...":"Submit"}</button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Contact