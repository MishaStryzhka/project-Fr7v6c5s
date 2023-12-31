import React, { useState } from 'react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import ButtonRoutes from '../Buttons/ButtonRoutes';
import { ButtonNext, ButtonPrev } from '../Buttons/Buttons';
import { validationSchemaAdd } from '../addPetValidation';
import {
  InputContainer,
  Label,
  Input,
  ErrorText,
  Title,
  InputsWrap,
} from './SecondStep.styled';

const SecondFormLost = ({
  formData,
  currentStatus,
  handleNextData,
  handlePrevStep,
  chooseOption,
}) => {
  const [formDataState, setFormDataState] = useState({
    title: formData.title || '',
    name: formData.name || '',
    date: formData.date || '',
    breed: formData.breed || '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormDataState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextValidation = () => {
    validationSchemaAdd
      .validate(formDataState, { abortEarly: false })
      .then(() => {
        handleNextData(formDataState);
      })
      .catch(err => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <div>
      <Title>Add lost pet</Title>
      <StatusIndicator
        currentStatus={currentStatus}
        chooseOption={chooseOption}
      />
      <InputsWrap>
        <InputContainer>
          <Label htmlFor="addTitle">Title of add</Label>
          <Input
            type="text"
            id="addTitle"
            name="title"
            value={formDataState.title}
            onChange={handleChange}
            placeholder="Type title of add"
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="name">Pet's name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formDataState.name}
            onChange={handleChange}
            placeholder="Type name pet"
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="date">Date of birth</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formDataState.date}
            onChange={handleChange}
            required
            placeholder="dd.mm.yyyy"
          />
          {errors.date && <ErrorText>{errors.date}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="breed">Breed</Label>
          <Input
            type="text"
            id="breed"
            name="breed"
            value={formDataState.breed}
            onChange={handleChange}
            required
            placeholder="Type breed"
          />
          {errors.breed && <ErrorText>{errors.breed}</ErrorText>}
        </InputContainer>
      </InputsWrap>
      <ButtonRoutes>
        <ButtonNext textButton="Next" handleNextData={handleNextValidation} />
        <ButtonPrev textButton="Back" handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};

export default SecondFormLost;
