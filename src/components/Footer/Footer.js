import React from 'react';

const Footer = ({isData}) => {
  return (
    <div className="footer" style={{
      height:'100px',
      width:'100%',
      position:'absolute',
      marginTop: isData ? '50px' : '500px'
    }}>
        <h4 style={{textAlign:'center',color:'white'}}>Dibuat oleh Masmudi!</h4>
    </div>
  )
}

export default Footer