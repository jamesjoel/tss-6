import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { usePDF } from 'react-to-pdf'
import './Invoice.css';

const PaymetConfirm = () => {
    let [showInvoice, setShowInvoice] = useState(true);
    const { toPDF, targetRef } = usePDF({filename: 'invoice.pdf'});
    let genPdf = ()=>{
        toPDF();
    }

  return (
   <>
    {
        showInvoice
        ?
        <div  className='invoice' ref={targetRef}>
    <div className="invoice-box">
            <div className='invoice-head'>
                Payment Receipt
            </div>
            <h3 className='invoice-logo'>Study-Hive</h3>
            <p className='invoice-sub-logo'>A Smart Room and Hostel Finder for Students</p>
			<table>
				<tr className="top">
					<td colspan="2">
						<table>
							<tr>
								<td className="title">
									{/* <img src="./images/logo.png" alt="Company logo" style="width: 100%; max-width: 300px" /> */}
								</td>

								<td>
									Invoice #: 123<br />
									Created: January 1, 2023<br />
									Due: February 1, 2023
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr className="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									Sparksuite, Inc.<br />
									12345 Sunny Road<br />
									Sunnyville, TX 12345
								</td>

								<td>
									Acme Corp.<br />
									John Doe<br />
									john@example.com
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr className="heading">
					<td>Payment Method</td>

					<td>Check #</td>
				</tr>

				<tr className="details">
					<td>Check</td>

					<td>1000</td>
				</tr>

				<tr className="heading">
					<td>Item</td>

					<td>Price</td>
				</tr>

				<tr className="item">
					<td>Website design</td>

					<td>$300.00</td>
				</tr>

				<tr className="item">
					<td>Hosting (3 months)</td>

					<td>$75.00</td>
				</tr>

				<tr className="item last">
					<td>Domain name (1 year)</td>

					<td>$10.00</td>
				</tr>

				<tr className="total">
					<td></td>

					<td>Total: $385.00</td>
				</tr>
			</table>
        
    </div>
        </div>
        :
        ''
        } 




   <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
        <div className="col-md-3">
          <div className='alert alert-secondary'>
            <p className='m-0'>Hello</p>
            <h4>{ localStorage.getItem("name") }</h4>
          </div>
          <div className='alert alert-secondary'>
            <h6>My Account</h6>
            <ul className='nav flex-column'>
              
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>Enquiries  <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/my-profile' className='nav-link'>My Profile  <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/edit-profile' className='nav-link'>Edit Profile  <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/update-password' className='nav-link'>Update Password  <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/logout' className='nav-link'>Logout  <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              
             
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <h4>Payment Confirm</h4>
          <div className="alert alert-info">
            <p>Your Payment Done Successfully.... for Download Your Invoice <button onClick={genPdf} className='btn btn-dark'>Click Here</button></p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default PaymetConfirm