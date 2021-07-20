import { forwardRef } from "react"
import { ContactForm } from "../components/ContactForm"
import { Icon } from '../components/common/icon/Icon';

export const Contact = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="contact">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                        <h1 className="fs-1 pb-3">Contact</h1>
                        <p>Please feel free contact with me by:</p>
                        <p><Icon type="bi-telephone"/>+48 536 251 788</p>
                        <p><Icon type="bi-envelope"/>oleksandrtomes@gmail.com</p>
                        <p>or sending message by this contact form <Icon type="bi-arrow-right"/></p>
                    </div>
                    <div className="col-lg-8">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
})