import React,{useState} from  'react';

const Contact = () => {

  const [data, setData] = useState({
    email:"",
    msg:"",
  });

  //get value
  const inputHandler = (event) =>{
    const {name, value} =event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name] :value,
      }
    })
  }

  //On Submit
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`${data.email}`);
  }

  return (
    <>
    <div className="my-5">
    <h1 className="text-center" style={{color:'blue'}}>Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputHandler} placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" name="msg" value={data.msg} onChange={inputHandler} >Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact;