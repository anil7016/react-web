import React from "react";

const About = () => {

    return(
        <div className="">
            <div style={{backgroundRepeat: 'no-repeat', backgroundImage: 'url(http://beconnected.no/wp-content/uploads/2014/08/fon-2.jpg)', backgroundAttachment: 'scroll', backgroundPosition: 'center center'}}>
                <img src="http://beconnected.no/wp-content/uploads/2014/08/fon-2.jpg"></img>
            </div>
            <div className="container">
                <div className="py-4 text-center">
                    <h4>About</h4>
                    <p>BECONNECTED</p>
                </div>
                <div className="row" style={ {textAlign :'justify'}}>
                    <div className="col-md-6">
                        <h4>Meet BeConnected</h4>
                        <div>
                        <p><strong>BeConnected</strong> is a <strong>Translation and Localisation </strong>company offering online services to a global clientele. We operate from our offices in <strong>Oslo, Norway</strong> and <strong>Sofia, Bulgaria</strong>. We specialize in language services covering the Nordic and Eastern European languages. These languages include Norwegian, Danish, Swedish, Icelandic, Finnish, Bulgarian, Romanian, Russian, Turkish, Polish and Czech.  We translate from English, German, French and Italian into these languages – and from these languages into English, German, French and Italian. We offer a wide range of services to meet your needs in in an ever-changing global market. We also have the resources to handle all projects and deliver them on time regardless of their various scopes and requirements. BeConnected operates <strong>24/7 365 days a year</strong>, because the business world never sleeps.</p>
                        <p><strong>BeConnected</strong> also works as a sub-contractor for other global translation companies. Why not work directly with our team of dedicated project coordinators? Our experienced staff can coordinate your project and needs. This means that you save valuable time, and you do not have to worry about the hassle of working with multiple contractors. You benefit from the <strong>talent, expertise and experience</strong> we offer to turn your idea into a superior product – on time and tailored to your specific requirements.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Meet Our Teams and Partners</h4>
                        <div>
                            <p>The <strong>BeConnected </strong>team is a group of qualified and dedicated professionals who are ready to support all your needs.</p>
                            <p>We have an internal localisation team that handles all projects and requests with expert efficiency and works closely with a team of highly qualified linguists. Our internal QA team is led by native speakers who are responsible for quality control and QA specialists who are responsible for the final layout of the final documents. &nbsp;We also have a dedicated team of IT professionals who are able to handle complicated requests and help solve any IT-related issues.</p>
                            <p><strong>BeConnected </strong>works closely with an extensive international network of professionals including highly qualified and certified linguists, language specialists, proof-readers, and other experts with many years of experience in the translation, editing and copywriting. All the people we work with undergo a rigorous recruitment and selection process managed by our Vendor Management Team.</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default About;