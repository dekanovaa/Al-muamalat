import './Service.css'
import icon1 from '../../../../assets/icon1.png'
import icon2 from '../../../../assets/icon2.png'
import icon3 from '../../../../assets/icon3.png'
import icon4 from '../../../../assets/icon4.png'
import icon5 from '../../../../assets/icon5.png'
import icon6 from '../../../../assets/Icon 6.png'

function Service() {
  return (
    <div className='service'>
        <div className='container service_container'>
            <h2 className='service_title'>
            Our services 
            </h2>
            <p className='service_text'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
            <ul className="service_list">
                <li className='manajement'>
                   <div className="service_top">
                   <img className='service_img' src={icon1} alt="menejmenticon" />
                   <h3 className="service_subtitle">Islamic Fund Management</h3>
                   </div>
                   <p className="service_subtext">We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.</p>
                   {/* <button className='service_btn'>Learn more</button> */}
                </li>
                <li className='relation'>
                   <div className="service_top">
                   <img className='service_img' src={icon2} alt="international" />
                   <h3 className="service_subtitle">International Relations</h3>
                   </div>
                   <p className='service_subtext'>We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.</p>
                   {/* <button className='service_btn'>Learn more</button> */}
                </li>
                <li className='training'>
                    <div className="service_top">
                    <img className='service_img' src={icon3} alt="education" />
                    <h3 className="service_subtitle">Education and Training</h3>
                    </div>
                    <p className='service_subtext'>We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.</p>
                    {/* <button className='service_btn'>Learn more</button> */}
                </li>
                <li className='bank'>
                    <div className="service_top">
                    <img className='service_img' src={icon4} alt="islamic bank" />
                    <h3 className="service_subtitle">For Islamic Banks</h3>
                    </div>
                    <p className='service_subtext'>We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.</p>
                    {/* <button className='service_btn'>Learn more</button> */}
                </li>
                <li className='market'>
                    <div className="service_top">
                    <img className='service_img' src={icon5} alt="market" />
                    <h3 className="service_subtitle">Islamic Capital Market</h3>
                    </div>
                    <p className='service_subtext'>We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.</p>
                    {/* <button className='service_btn'>Learn more</button> */}
                </li>
                <li className='audit'>
                    <div className="service_top">
                    <img className='service_img' src={icon6} alt="audit" />
                    <h3 className="service_subtitle">Shariah Compliance Audit</h3>
                    </div>
                    <p className='service_subtext'>We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.</p>
                    {/* <button className='service_btn'>Learn more</button> */}
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Service