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

const ContactData = ({ ingredients, history, price }) => {
    const [ formState, setFormState ] = useState({
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                validation: {
                    required: true,
                },
                elementState: {
                    value: '',
                    valid: false,
                    touched: false,
                },
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                validation: {
                    required: true,
                },
                elementState: {
                    value: '',
                    valid: false,
                    touched: false,
                },
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP',
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                elementState: {
                    value: '',
                    valid: false,
                    touched: false,
                },
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                validation: {
                    required: true,
                },
                elementState: {
                    value: '',
                    valid: false,
                    touched: false,
                },
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                validation: {
                    required: true,
                },
                elementState: {
                    value: '',
                    valid: false,
                    touched: false,
                },
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ],
                },
                validation: {},
                elementState: {
                    value: 'fastest',
                    valid: true,
                    touched: false,
                },
            },
        },
        isValid: false,
        loading: false,
    });

    const checkFormValidity = () => {
        let validity = true;
        Object.keys(formState.orderForm).forEach(key => {
            validity = formState.orderForm[key].elementState.valid && validity
        });
        return validity;
    };

    const checkValidity = (value, rules) => {
        let isValid = true;
        const { required, minLength, maxLength } = rules;
        if (required){
            isValid = value.trim() !== '' && isValid;
        }
        if (minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    };

    const setValue = ({ target: { value }}, key) => {
        const newFormState = { ...formState };
        newFormState.orderForm[key].elementState = {
            ...newFormState.orderForm[key].elementState,
            valid : newFormState.orderForm[key].validation && checkValidity(value, newFormState.orderForm[key].validation),
            touched: true,
            value,
        };
        const isValid = checkFormValidity();
        setFormState({ ...newFormState, isValid });
    };
    const order = () => {
        setFormState({ ...formState, loading: true });
        const customer = Object.keys(formState.orderForm).map(item => (
            {[item]: formState.orderForm[item].elementState.value}
        )).reduce((obj, item) => ({
                ...obj,
                ...item,
        }), {});
        const order = { ingredients, price , customer };

        axios.post('/orders.json', order)
            .then((response) => {
                console.log('response: ',response);
                history.push('/orders');
            })
            .catch((error) => {
                console.log('error', error);
            })
            .finally(() => {
                setFormState({ ...formState, loading: false });
            });
    };
    const { loading } = formState;
    return (
        <ContactContainer>
            { loading ?
                <Spinner/>
                :
                <>
                    <h3> Enter your contact details</h3>
                    <form>
                        {
                            Object.keys(formState.orderForm).map((item) => (
                                <Input
                                    key={item}
                                    name={item}
                                    type={formState.orderForm[item].elementType}
                                    config={formState.orderForm[item].elementConfig}
                                    elementState={formState.orderForm[item].elementState}
                                    onChange={(target) => setValue(target, item)}
                                />
                            ))
                        }
                    </form>
                    <hr/>
                    <Button className="success" click={order} disabled={!formState.isValid}>Order</Button>
            </>
            }
        </ContactContainer>
    )
};

export default withErrorHandler(withRouter(ContactData));
