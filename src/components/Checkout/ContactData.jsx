import React, {useState} from 'react';
import styled from "styled-components";
import Lottie from "react-lottie";
import FoodIcon from "@material-ui/icons/Fastfood";
import CancelIcon from "@material-ui/icons/Cancel";
import { Input, Button } from "../UI";
import reactReduxConnector from "../../helpers/reactReduxConnector";
import { purchaseBurger } from "../../store/actions";
import { checkFieldValidity, checkFormValidity } from "./../../helpers/";
import * as animationData from "../../assets/lotties/address.json";

const ContactContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #EEE;
  padding: 10px;
  box-sizing: border-box;
  
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 15px 0;
  }
  
  @media(max-width: 500px) {
    width: 100%;
  }
`;

const ContactData = ({ ingredients, price, purchaseBurger, token, userId, cancelOrder }) => {
    const [ formState, setFormState ] = useState({
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Your Name',
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
                    label: 'Street',
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
                    label: 'ZIP',
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
                    label: 'Your Country',
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
                    label: "Delivery Method"
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
    });

    const setValue = ({ target: { value }}, key) => {
        const newFormState = { ...formState };
        newFormState.orderForm[key].elementState = {
            ...newFormState.orderForm[key].elementState,
            valid : newFormState.orderForm[key].validation && checkFieldValidity(value, newFormState.orderForm[key].validation),
            touched: true,
            value,
        };
        const isValid = checkFormValidity(formState.orderForm);
        setFormState({ ...newFormState, isValid });
    };
    const order = () => {
        const customer = Object.keys(formState.orderForm).map(item => (
            {[item]: formState.orderForm[item].elementState.value}
        )).reduce((obj, item) => ({
                ...obj,
                ...item,
        }), {});
        const order = { ingredients, price , customer, userId };
        purchaseBurger(order, token);
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <ContactContainer>
            <h3> Enter your delivery details</h3>
            <Lottie options={defaultOptions}
                    height={200}
                    width={200}
                    isStopped={false}
                    isPaused={false}
            />
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
            <div className="buttons">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={cancelOrder}
                    startIcon={<CancelIcon />}
                >
                    CANCEL
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={order}
                    disabled={!formState.isValid}
                    startIcon={<FoodIcon />}
                >
                    ORDER
                </Button>
            </div>

        </ContactContainer>
    )
};

const mapStateToProps = ({
    burgerBuilder: { ingredients, totalPrice, loading, successMessage, error },
    auth: { idToken, localId },
}) => {
    return {
        loading,
        ingredients,
        error,
        price: totalPrice,
        successMessage,
        token: idToken,
        userId: localId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseBurger: (order, token) => dispatch(purchaseBurger(order, token))
    }
};

export default reactReduxConnector(mapStateToProps,mapDispatchToProps)(ContactData);
