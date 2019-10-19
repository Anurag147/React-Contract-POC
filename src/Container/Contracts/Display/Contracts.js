import React,{Component} from 'react';
import Contract from '../../../Components/Contract/Contract';
import axios from '../../../axios-contract';

class Contracts extends Component{

    state={

        contracts:[]
    }

    componentDidMount(){
        axios.get('/contracts.json')
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
                        <Contract name={contract.contractData.name} 
                        description={contract.contractData.description}
                        country={contract.contractData.country}
                        owner={contract.contractData.owner}
                        category={contract.contractData.category}
                        ownerEmail={contract.contractData.ownerEmail}
                        key={contract.id}/>
                    ))}
                    </div>
        );
    }
}

export default Contracts;