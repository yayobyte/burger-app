import React, {useEffect, useState} from 'react';
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
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP',
                },
                value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: '',
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ],
                },
                value: 'fastest',
            },
        },
        loading: false,
    });
    const setValue = ({ target: { value }}, key) => {
        const newCustomer = { ...contact };
        newCustomer.orderForm[key].value = value;
        setContact(newCustomer);
    };
    const order = () => {
        setContact({ ...contact, loading: true });
        const customer = Object.keys(contact.orderForm).map(item => (
            {[item]: contact.orderForm[item].value}
        )).reduce((obj, item) => ({
                ...obj,
                ...item,
        }), {});
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
                        {
                            Object.keys(contact.orderForm).map((item) => (
                                <Input
                                    key={item}
                                    name={item}
                                    type={contact.orderForm[item].elementType}
                                    config={contact.orderForm[item].elementConfig}
                                    value={contact.orderForm[item].value}
                                    onChange={(target) => setValue(target, item)}
                                />
                            ))
                        }
                    </form>
                    <hr/>
                    <Button className="success" click={order} >Order</Button>
            </>
            }
        </ContactContainer>
    )
};

export default withErrorHandler(withRouter(ContactData));
