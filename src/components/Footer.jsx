import React from 'react';
import styles from'../Footer.module.css';

function Footer() {
return (
    <>
    <section id={styles.text} className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-5">
                    <h3 className='mb-5'>Location</h3>
                    <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 p-5">
                    <h3 className='mb-5'>Around THE WEB</h3>
                    <div id={styles.icons} className='d-flex justify-content-center align-items-center'>
                        <span className='mx-1'>
                            <i className='fa fa-brands fa-facebook'></i>
                        </span>
                        <span className='mx-1'>
                            <i className='fa fa-brands fa-twitter'></i>
                        </span>
                        <span className='mx-1'>
                            <i className='fa fa-brands fa-linkedin'></i>
                        </span>
                        <span className='mx-1'>
                            <i className='fa fa-brands fa-dribbble'></i>
                        </span>
                    </div>
                </div>
                <div className='col-md-4 p-5'>
                    <h3 className='mb-5'>About FREELANCER</h3>
                    <p>Freelance is a free to use, MIT<br/>
                    licensed Bootstrap theme created by<br/>
                    Route</p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div id={styles.tail} className='col-md-12'>
                    <p>Copyright © Your Website 2023</p>
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Footer