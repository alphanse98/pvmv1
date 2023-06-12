

function FooterSection() {
    return (
        <footer>
            <div className="headerContainer">
                <div className="FooterFlex">
                    <div className="FooterSendQuote">
                        <h1 className="FooterHeadding fontFamily">Send Us a Quote!</h1>
                        <input placeholder="Name" className="FooterInp"></input>
                        <input placeholder="Phone Number" className="FooterInp"></input>
                        <input placeholder="Email" className="FooterInp"></input>
                        <input placeholder="Description" className="FooterInp"></input>
                        <button className="FooterBtn">Submit</button>
                    </div>
                    <div className="FooterAbout"></div>
                        <h1>About Us</h1>
                </div>
            </div>
        </footer>
    );
  }
  
  export default FooterSection;
  