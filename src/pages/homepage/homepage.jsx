import './homepage.css';

const Homepage = () => {
    return (
        <>
        <div className="taking">
        <div className="row">
            <div className="col-md-6 col-12-sm-12">
                <div className=""><p>
                    <span className="grow">Get analysis of all OOH in<br/>Nigeria on ZABUNI</span></p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iure officiis tenetur ipsam soluta ex, perferendis nemo unde distinctio consequatur in, ratione debitis cupiditate alias. Accusantium, repellat. Magni, deleniti omnis.</p>
                    <div className="olab">
                        <button className="homeb"><a href="/" className="start2">Learn How</a></button>
                        <button className="homeb"><a href="/" className="start2">Become a Publisher</a></button>
                    </div> 
                </div>
            </div>
            <div className="col-md-6">
                <img src="https://res.cloudinary.com/adesanza/image/upload/v1615071737/zabuni/Group_279_gydgbo.svg" alt="" />
            </div>
        </div>
    </div>
    <div>
        <div className="row">
            <div className="col-md-7 col-12-sm-12">
                <img src="https://res.cloudinary.com/adesanza/image/upload/v1615073055/zabuni/Group_272_1_wbdst1.svg" alt="" />
            </div>
            <div className="col-md-5">
                <h3 id="feature">Our billboards</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aspernatur laudantium ipsam numquam modi cum consequatur facere nostrum dolore. Ducimus repudiandae hic consequuntur veritatis. Unde sequi ea consequatur? Mollitia, nemo.</p>
            </div>
        </div>
    </div>
    <div className="later">
        <h3 id="feature" className="differ">Start your Campaign</h3>
        <div className="row">
            <div className="col-md-4">
                <img src="https://res.cloudinary.com/adesanza/image/upload/v1615074243/zabuni/Group_276_srz2ti.svg" alt="" />
                <span><p>Set Your Advert Channels<br/>& Budget</p></span>
            </div>
            <div className="col-md-4">
                <img src="https://res.cloudinary.com/adesanza/image/upload/v1615074238/zabuni/Group_277_d5rlrd.svg" alt="" />
                <span><p>Our Adverts Expert <br/>Contacts you</p></span>
            </div>
            <div className="col-md-4">
                <img src="https://res.cloudinary.com/adesanza/image/upload/v1615074235/zabuni/Agreement-rafiki_mxyxgd.svg" alt="" />
                <p>Close The Deal</p>
            </div>
        </div>
    </div>
        {/* The Modal */}
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
            {/* Modal Header */}
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <center><h2 className="modal-title">Login</h2></center>
        
             {/* Modal body  */}
        <div className="modal-body">
            <center>
            <input className="form-control loww" type="email" placeholder=" Email" name="" id="" />
            <input className="mb-4 loww" type="password" placeholder="Password" />
            <button className="lower">Login</button>
            </center>
        </div>
        
            {/* Modal footer  */}
        <div className="modal-footer">
            <center><h4>Don’t have an account?<span><a href="/">Sign Up</a></span></h4></center>
        </div>
      </div>
    </div>
  </div>
    </>
    )
}

export default Homepage;