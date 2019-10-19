import React,{Component} from 'react';
import Obligation from '../../../Components/Obligation/Obligation';
import axios from '../../../axios-contract';

class Obligations extends Component{

    state={

        contracts:[]
    }

    componentDidMount(){
        axios.get('/obligations.json')
        .then(res=>{
            const fetchedContracts = [];
            for(let key in res.data){
                fetchedContracts.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({contracts:fetchedContracts})
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render(){
        console.log(this.state.contracts)
        return(
                        <div>
                        {this.state.contracts.map(contract=>(
                        <Obligation contractTitle={contract.contractData.contractTitle} 
                        obligationTitle={contract.contractData.obligationTitle}
                        taskSummary={contract.contractData.taskSummary}
                        owner={contract.contractData.owner}
                        criticality={contract.contractData.criticality}
                        ownerEmail={contract.contractData.ownerEmail}
                        key={contract.id}/>
                    ))}
                    </div>
        );
    }
}

export default Obligations;