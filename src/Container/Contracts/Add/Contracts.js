import React,{Component} from 'react';
import './Contracts.css';
import Input from '../../../Components/Layout/UI/Input/Input';
import Button from '../../../Components/Layout/UI/Button/Button';
import axios from '../../../axios-contract';

class Contracts extends Component{

    state={
        contractForm:{
                name:{
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Name'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                description: {
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Description'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                country:{
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Country'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                owner:{
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Owner'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                ownerEmail: {
                    elementtype:'input',
                    elementConfig:{
                        type: 'email',
                        placeholder:'Enter Owner Email'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                category:{
                    elementtype:'select',
                    elementConfig:{
                        options:[
                            {value:'IT', displayValue:'IT'},
                            {value:'Manufacturing', displayValue:'Manufacturing'}]
                    },
                    value:'IT',
                    validation: {
                        required:false
                    },
                    valid:true
                },

            },
        formvalid:false,
    }

    addContract = (event) => {
        event.preventDefault();
        const formData={};
        for (let formElementIdentifier in this.state.contractForm){
            formData[formElementIdentifier]= this.state.contractForm[formElementIdentifier].value;
        }

        const contract = {
            contractData:formData
        }

        //Post Call
        axios.post('/contracts.json',contract)
        .then(response=>{
            console.log(response)
            alert('Contract Added Successfully');
            this.props.history.replace('/viewcontracts');
        })
        .catch(error=>{
            console.log(error)
        });
    }

    checkValidity(value,rules){
        let isValid=true;
        if(rules.required){
            isValid = value.trim()!='' && isValid;
        }
        return isValid;
       }
   
       inputChangedHandler = (event,inputIdentifier) => {
               const updatedOrderForm = {
                   ...this.state.contractForm
               };
               const updatedFormElement = {
                   ...updatedOrderForm[inputIdentifier]
               };
               updatedFormElement.value=event.target.value;
               updatedFormElement.valid=this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
               updatedOrderForm[inputIdentifier]=updatedFormElement;
               let isFormValid=true;
                   for (let formElementIdentifier in updatedOrderForm){
                       isFormValid= updatedOrderForm[formElementIdentifier].valid && isFormValid;
                   }
               this.setState({contractForm:updatedOrderForm,formvalid:isFormValid});
       }

    render(){

        const formElementsArray = [];
        for(let key in this.state.contractForm){
            formElementsArray.push({
                id:key,
                config: this.state.contractForm[key]
            });
        }

        return (
            <div className="AddContactData">
                <h4>Add Contract</h4>
                <form>
                    {formElementsArray.map(formElement=>(
                      <Input key={formElement.id} elementtype={formElement.config.elementtype} 
                      elementConfig={formElement.config.elementConfig}
                      value={formElement.config.value}
                      changed={(event)=>this.inputChangedHandler(event,formElement.id)}
                      isValid={formElement.config.valid}/>
                     ))}
                    <Button btnType="Success" disabled={!this.state.formvalid} clicked={this.addContract}>Add</Button>
                </form>
            </div>
        );
    }
}

export default Contracts;