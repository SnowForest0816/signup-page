import React from 'react';
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

function SignUp () {
  return (
    <div className='signup'>
      <div className='section'>
        <div className='title'>Sign up</div>
        <div className='main'>
          <div>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <div className='input_img'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='' width="20px" height="20px" />
                  </div>
                </InputAdornment>
              }
              className="input"
              placeholder="Your Name"
            />
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <div className='input_img'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIS5yuNwk9YwirOC31FINpfSBVdmnh0Q6_yqec4s&s' alt='' width="20px" height="20px" />
                  </div>
                </InputAdornment>
              }
              className="input"
              placeholder="Your Email"
            />
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <div className='input_img'>
                    <img src='https://www.pngfind.com/pngs/m/268-2683107_png-file-svg-password-icon-vector-png-transparent.png' alt='' width="20px" height="20px" />
                  </div>
                </InputAdornment>
              }
              className="input"
              placeholder="Password"
            />
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <div className='input_img'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNtlJh5xxmmtTWhlRuIUAkvoYL9XpxlhKow&usqp=CAU' alt='' width="20px" height="20px" />
                  </div>
                </InputAdornment>
              }
              className="input"
              placeholder="Repeat your password"
            />

            <div className='checkbox'>
              <input type="checkbox" />
              <label className='central'>I agree all statement in <p style={{"padding-left": '3px', 'text-decoration': 'underline'}}>Terms of service</p></label>
            </div>

            <button className='btn'>Register</button>
          </div>
          <div className='sec_image'>
            <img src='https://thumbs.dreamstime.com/b/working-computer-avatar-businesswoman-desk-vector-illustration-graphic-design-136722034.jpg' alt='' width="300px" height="300px" />
            <div className='sec_text'> 
              I am already member
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;