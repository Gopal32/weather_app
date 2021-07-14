import React from  'react';
import Card from '../card/Card';
import Data from '../card/Data';

const Service = () => {

  return (
    <>
    <div className='my-5'> 
    <h1 className='text-center' style={{color:'blue'}}>Service</h1>
    </div>
    <div className="container-fluid">
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className="row gy-4">
                {
                  Data.map((val, ind) => {
                    return <Card 
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                    />
                  })
                }
                 </div>
                 </div>
                  </div>
                  </div>
    </>
  )
}

export default Service;