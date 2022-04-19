import React from "react";




function Login ({onChangeName, onChangePassword,onClickLogin }) {

  

    return (
       
      
           
       <div className="col d-flex justify-content-center p-5 m-3 fs-2  "> 
            <form  onSubmit={onClickLogin}     > 
                <div className="mb-3  ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                     <input   type="text " onChange={onChangeName}  name="name"  placeholder="Enter your Username" 
                        className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label " >Password</label>
                <input onChange={onChangePassword}   type="password" name="password"  placeholder="Enter your password" className="form-control form-control-lg " id="exampleInputPassword1" />
                </div>
                <button     type="login " className="btn btn-primary fs-2">LOGIN</button>
            </form>
        </div>

        
    );
   
}

export default Login;