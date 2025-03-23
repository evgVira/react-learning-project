import React, {useState} from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import Input from "..//comps/Input"
import DataList from "../views/local/DataList";
import css from "../../style/form"

const {FormContainer, ButtonContainer} = css;

const Main = () => {

    const [value, setValue] = useState('');
    const [type, setType] = useState('');
    const [comment, setComment] = useState('');
    const [data, setData] = useState([])

    const clearFields = () => {
        const dataLine = `${value}::${type}::${comment}`
        setData(prev => [...prev, dataLine])
        setValue("");
        setType("");
        setComment("");
    }

    return (
        <React.Fragment>
            <Head>
            </Head>
            <FormContainer>
                <Input action={setValue} inputValue={value} placeholder={"Введите сумму"}>
                </Input>
                <Input action={setType} inputValue={type} placeholder={"Введите тип"}>
                </Input>
                <Input action={setComment} inputValue={comment} placeholder={"Комментарий"}>
                </Input>
                <ButtonContainer onClick={clearFields}>Сохранить транзакцию</ButtonContainer>
            </FormContainer>
            <DataList data={data}/>
            <Foot>
            </Foot>
        </React.Fragment>
    );
}

export default Main;