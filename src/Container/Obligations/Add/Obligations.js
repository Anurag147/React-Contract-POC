import React,{Component} from 'react';
import './Obligations.css';
import Input from '../../../Components/Layout/UI/Input/Input';
import Button from '../../../Components/Layout/UI/Button/Button';
import axios from '../../../axios-contract';

class Obligations extends Component{

    state={
        contractForm:{
                contractTitle:{
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Contract Title'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                obligationTitle: {
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Obligation Title'
                    },
                    value:'',
                    validation: {
                        required:true
                    },
                    valid:false
                },

                taskSummary:{
                    elementtype:'input',
                    elementConfig:{
                        type: 'text',
                        placeholder:'Enter Task Summary'
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

                criticality:{
                    elementtype:'select',
                    elementConfig:{
                        options:[
                            {value:'Critical', displayValue:'Critical'},
                            {value:'Routine', displayValue:'Routine'}]
                    },
                    value:'Critical',
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
        axios.post('/obligations.json',contract)
        .then(response=>{
            console.log(response)
            alert('Obligation Added Successfully');
            this.props.history.replace('/viewobligations');
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
            <div className="AddObligationData">
                <h4>Add Obligation</h4>
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

export default Obligations;