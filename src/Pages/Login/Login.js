import './Login.css';
import Image from './DM 04.png'
function Login() {
  function signIn(){
    localStorage.setItem('A',1)
  }
  return (
    <div className="Login" style={{backgroundColor:'#F6F9FF',height:'90vh'}}>
      <div style={{height:'100%',display:'flex',flexDirection:'row'}}>
      <div style={{width:'60%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'10px 20px'}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
          <div style={{fontSize:'60px'}}>Attendance</div> 
          <div style={{fontSize:'60px',color:'#012970'}}>for your College</div>
          </div>
          <div ><img src={Image} alt='something' style={{height:'300px',width:'300px'}}/></div>
        </div>
        <div style={{width:'100%'}}>
          <div style={{width:'80%',margin:'10px 25px',fontSize:'14px',color:'#757F8E',fontFamily:'Roboto',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?</div></div>
      </div>
      </div>
      <div style={{width:'40%',height:'100%' ,display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <form style={{display:'flex',flexDirection:'column',width:'80%',justifyContent:'center',alignItems:'flex-start',padding:'30px 30px',backgroundColor:'white',fontFamily:'Roboto',borderRadius:'5px'}}>
      <div style={{display:'flex',flexDirection:'row',width:'100%',margin:'0px 0px 10px 0px'}}>
        <div style={{width:'45%',display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #5F6EF1',borderRadius:'5px',height:'30px'}}><input type='radio' name='radio-check'/>&nbsp;&nbsp;&nbsp;Teacher</div>
        <div style={{width:'45%',display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #5F6EF1',borderRadius:'5px',height:'30px',margin:'0px 10px'}}><input type='radio' name='radio-check'/>&nbsp;&nbsp;&nbsp;Admin</div>
      </div>
      <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          User ID
        <input type='text' style={{width:'80%',margin:'5px 0px',height:'30px',borderRadius:'5px'}}/>
        </label>
      </div>
      
      <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          Password
        <input type='password' style={{width:'80%',margin:'5px 0px',height:'30px',borderRadius:'5px'}}/>
        </label>
      </div>

      <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',height:'40px'}}>
        <input type='checkbox' style={{margin:'0px 5px 0px 0px',borderRadius:'5px'}}/>
        Remember me
        </label>
      </div>

      <button type='submit' onClick={signIn} style={{width:'20%',margin:'5px 0px',height:'30px',backgroundColor:'#3C4EF1',color:'white',fontSize:'18px',borderRadius:'5px'}}>Sign in</button>
      </form>
      </div>
      </div>

    </div>
  );
}

export default Login;
