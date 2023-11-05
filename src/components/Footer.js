import React from 'react';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className='text-center w-full mt-[60px] p-[15px] text-gray-300 bg-custom-color'>
        <div>
        <h3>Copyright © {year} SK</h3>
        </div>
        <div className='w-1/2 text-right pr-[100px]'>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
