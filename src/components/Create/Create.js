import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { addNewUser } from './../../store/actions/userAction';

function Create() { 
   const dispatch = useDispatch() 
   const history = useHistory() 
   const { register, handleSubmit, errors } = useForm(); 

   const submittedData = (data) => { 
      dispatch(addNewUser(data)) 
      history.push('/') 
   } 

   return ( 
      <div> 
         <form onSubmit={handleSubmit(submittedData)}> 
            <label>ID *</label> 
            <input 
               type="number" 
               name="id" 
               ref={register({ required: 'ID Required' })} 
            /> 

            <div> 
               <label>Name *</label> 
               <input 
                  type="text" 
                  name="name" 
                  ref={register({ required: 'Name Required' })} 
               /> 

               <label>Email *</label> 
               <input 
                  type="email" 
                  name="email" 
                  ref={register({ 
                     required: 'Email Required', 
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                     } 
                  })} 
               /> 
            </div> 
            <div> 
               <label>Age</label> 
               <input 
                  type="text"  
                  name="age" 
                  ref={register} 
               /> 

               <label>Phone</label> 
               <input 
                  type="number" 
                  name="phone"
                  ref={register({ required: 'phone required', minLength: 11 })} 
               /> 
            </div> 
            <div> 
               <label>Gender</label> 
               <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  ref={register} 
               /> 
               <label>Male</label> 

               <input 
                  type="radio" 
                  name="gender" 
                  value="female" 
                  ref={register} 
               /> 
               <label>Female</label> 
            </div> 
            { 
               errors.id && <p>{errors.id.message}</p> 
            } 
            { 
               errors.name && <p>{errors.name.message}</p> 
            } 
            { 
               errors.email && <p>{errors.email.message}</p> 
            } 
            { 
               errors.phone && <p>Atleast 11 characters required</p> 
            } 
            <button className="mt-4">Submit</button> 
         </form> 





         {/* <Form onSubmit={handleSubmit(submittedData)}>
            <Row form>
               <Col md={6}>
                  <FormGroup row>
                     <Label sm={2} size="lg">Name *</Label>
                     <Col sm={8}>
                        <Input
                           name="name" type="text" // id="exampleEmail" 
                           placeholder="Enter your name"
                           ref={register({
                              required: { value: true, message: "Name is required" }
                           })} 
                        /> 
                     </Col>
                  </FormGroup>
               </Col> 

               <Col md={6}>
                  <FormGroup row>
                     <Label sm={2} size="lg">Email *</Label>
                     <Col sm={8}>
                        <Input
                           type="email" name="email" // id="exampleEmail" 
                           placeholder="Enter your email"
                           ref={register({
                              required: { value: true, message: "Email is required" }
                           })} 
                        /> 
                     </Col> 
                  </FormGroup> 
               </Col> 
            </Row> 

            <Button type="submit">Submit</Button>
         </Form>  */}
      </div>
   )
}

export default Create; 
