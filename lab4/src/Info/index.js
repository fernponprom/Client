import React, {Component}  from 'react';
import axios from "axios"
import { Card, Button, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class info extends Component {

    state = { user: '', data:''}
 
    componentDidMount = () => this.fetchUser(this.state.user)
 
    fetchUser = (USER) => {
        axios.get('https://api.github.com/users')
            .then(res=> {
                this.setState({data: res.data})
                console.log(res.data)
            })
    }

 
    render() {
        let {data} = this.state
        let count=0
        console.log(data.length)
        console.log(count)
            if (data)
            return ( <div class='container'>
                     <CardGroup> {data.map((info) => {
                      console.log('check: '+ count)
                       count++
                       if(count>6 && count<12)
                         return (<Card>
                            <Card.Img variant="top" src={info.avatar_url} />
                            <Card.Body>
                              <Card.Title>{info.login}</Card.Title>
                              <Card.Text> 
                              type: {info.type}
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="primary" href={info.url}>See more</Button>
                            </Card.Footer>
                          </Card>)
                     })}
                  </CardGroup>
                              
            </div> )
            return (<div>.</div>);
        
        }
        
        
    
 }
 
 export default info