import React, {useState} from 'react';
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import axios from '../../server';
import Button from "../UI/Button/Button";
import withErrorHandler from "../Hoc/withErrorHandler";
import Spinner from "../UI/Spinner/Spinner";
import Input from "../UI/Input";

const ContactContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #EEE;
  padding: 10px;
  box-sizing: border-box;
  
  @media(max-width: 500px) {
    width: 100%;
  }
`;

const ContactData = ({ ingredients, history }) => {
    const [ contact, setContact ] = useState({
        customer : {
            name: '',
            email: '',
            street: '',
            postCode: '',
        },
        loading: false,
    });
    const setValue = ({ target: { value }}, key) => {
        const newCustomer = {
            ...contact,
            customer : {
                ...contact.customer,
                [key] : value,
            },
        };
        setContact(newCustomer);
    };
    const order = () => {
        setContact({ ...contact, loading: true });
        const { customer } = contact;
        // TODO: Calculate price
        const order = { ingredients, price: 52000 , customer };
        axios.post('/orders.json', order)
            .then((response) => {
                console.log('response: ',response);
                history.push('/orders');
            })
            .catch((error) => {
                console.log('error', error);
            })
            .finally(() => {
                setContact({ ...contact, loading: false });
            });
    };
    const { loading } = contact;
    return (
        <ContactContainer>
            { loading ?
                <Spinner/>
                :
                <>
                    <h3> Enter your contact details</h3>
                    <form>
                        <Input
                            inputType="input"
                            type="text"
                            name="name"
                            placeholder="Input your name"
                            onChange={(target) => setValue(target, 'name')}
                        />
                        <Input
                            inputType="input"
                            type="email"
                            name="email"
                            placeholder="Input your email"
                            onChange={(target) => setValue(target, 'email')}
                        />
                        <Input
                            inputType="input"
                            type="text"
                            name="street"
                            placeholder="Input your street"
                            onChange={(target) => setValue(target, 'street')}
                        />
                        <Input
                            inputType="input"
                            type="text"
                            name="postCode"
                            placeholder="Input your postal code"
                            onChange={(target) => setValue(target, 'postCode')}
                        />
                    </form>
                    <hr/>
                    <Button className="success" click={order} >Order</Button>
            </>
            }
        </ContactContainer>
    )
};

export default withErrorHandler(withRouter(ContactData));
