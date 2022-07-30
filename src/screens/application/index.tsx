// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PaypalPayment } from "@components/paypal";
import { useForm, Controller } from "react-hook-form";
import {
  Stack,
  Button,
  MenuItem,
  TextField,
  Select,
  SelectChangeEvent,
  Grid,
  Box,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@components/form/Form";
import { FormInputText } from "@components/form/inputs/FormInputText";
import { FormInputDate } from "@components/form/inputs/FormInputDatePicker";
import { FormInputSelect } from "@components/form/inputs/FormInputSelect";
import { applicationMapper } from "@mappers/application/applicationMapper";
import ApplicationTypeCard from "@components/paymentTypeCard";
import AlertDialog from "@components/dialog";
import variables from '@/variables'

// interface IFormInputs {
//   fullName: string;
//   birthDate: number;
// }

// const schema = yup
//   .object({
//     fullName: yup.string().required(),
//     birthDate: yup.number().positive().integer().required(),
//   })
//   .required();

const Application = () => {
  const [applicationType, setApplicationType] = useState(0);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [payAndSubmit, setPayAndSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const { handleSubmit } = useForm();
  const recaptchaRef = React.createRef();

  const schema = yup.object({
    fullName: yup.string().required("Campo obrigatório"),
    birthDate: yup.string().required("Campo obrigatório"),
    genre: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Formato Inválido").required("Campo obrigatório"),
    steamProfileLink: yup.string().required("Campo obrigatório"),
    hasRoleplayExperience: yup.string().required("Campo obrigatório"),
    roleplayExperienceTime: yup.string().required("Campo obrigatório"),
    previousServersOrCommunities: yup.string(),
    timeAsAFollower: yup.string().required("Campo obrigatório"),
    knowAboutOurServer: yup.string().required("Campo obrigatório"),
    applicationReason: yup.string().required("Campo obrigatório"),
    roleplayConcept: yup.string().required("Campo obrigatório"),
    roleplayFocus: yup.string().required("Campo obrigatório"),
    strengthsInRoleplay: yup.string().required("Campo obrigatório"),
    goodRoleplayer: yup.string().required("Campo obrigatório"),
    innovativeForTheServer: yup.string().required("Campo obrigatório"),
    firstAction: yup.string().required("Campo obrigatório"),
    shortStory: yup.string().required("Campo obrigatório"),
  });

  const [initialValues, setInitialValues] = useState({
    applicationType: "",
    fullName: "",
    birthDate: "",
    genre: "",
    email: "",
    steamProfileLink: "",
    hasRoleplayExperience: "",
    roleplayExperienceTime: "",
    previousServersOrCommunities: "",
    timeAsAFollower: "",
    knowAboutOurServer: "",
    applicationReason: "",
    roleplayConcept: "",
    roleplayFocus: "",
    strengthsInRoleplay: "",
    goodRoleplayer: "",
    innovativeForTheServer: "",
    firstAction: "",
    shortStory: "",
  });

  const renderSwitch = (param: number) => {
    switch (param) {
      case 1:
        return (
          <Grid item xs={12}>
            <Button type="submit" variant="contained" disabled={disableSubmit}>
              Submeter
            </Button>
          </Grid>
        );
      case 2:
        return payAndSubmit ? (
          <Grid item xs={12}>
            <Box sx={{ my: 3 }}>
              <Typography variant="caption">
                3. Efetue o pagamento e a candidatura será submetida
                automaticamente
              </Typography>
            </Box>
            <PaypalPayment triggerSubmit={triggerSubmit} />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              disabled={disableSubmit}
              // onClick={() => setPayAndSubmit(true)}
            >
              Pagar e submeter
            </Button>
          </Grid>
        );
      // default:
      //   return "foo";
    }
  };

  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  const triggerSubmit = () => {
    refSubmitButtom?.current?.click();
    console.log("submitHandler");
  };

  const submitHandler = (values: any) => {
    console.log("values", values);
    console.log("values: ", applicationMapper(values));

    const loadEmail = async () => {
      setLoading(true);

      if (applicationType === 2) {
        setPayAndSubmit(true);
      }

      if (applicationType === 1) {
        axios
          // .post(import.meta.env.VITE_URL_BACKEND, applicationMapper(values), {
          .post(variables.VITE_URL_BACKEND, applicationMapper(values), {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response.data);
            setLoading(false);
            setResponseMessage("Candidatura enviada com sucesso");
            setOpenModal(true);
          })
          .catch((error) => {
            console.log(error.data);
            setLoading(false);
            setResponseMessage("Erro ao submeter a candidatura");
          });
      } else if (applicationType === 1 && payAndSubmit === true) {
        axios
          // .post(import.meta.env.VITE_URL_BACKEND, applicationMapper(values), {
          .post(variables.VITE_URL_BACKEND, applicationMapper(values), {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response.data);
            setLoading(false);
            // setResponseMessage("Candidatura enviada com sucesso");
            setOpenModal(true);
          })
          .catch((error) => {
            console.log(error.data);
            setLoading(false);
            setResponseMessage("Erro ao submeter a candidatura");
          });
      }
    };

    loadEmail();
  };

  // if (import.meta.env.VITE_APPLICATION_STATUS_FREE === "open") {
  return (
    <Box bgcolor="#FDFDFD" sx={{ my: 8 }}>
      <Form
        id="filtro-id"
        // onSubmit={(values) => {
        //   if (applicationType === 2) {
        //     setPayAndSubmit(true);
        //   }
        //   console.log("values: ", applicationMapper(values));

        //   axios
        //     .post(import.meta.env.VITE_URL_BACKEND, applicationMapper(values), {
        //       headers: { "Content-Type": "application/json" },
        //     })
        //     .then((response) => {
        //       console.log(response.data);
        //     })
        //     .catch((error) => {
        //       console.log(error.data);
        //     });
        // }}
        onSubmit={(values) => handleSubmit(submitHandler(values))}
        schema={schema}
        defaultValues={initialValues}
      >
        {({ control, setValue }) => (
          <>
            {/* <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            > */}
            <Container>
              <AlertDialog openModal={openModal} />
              <Typography
                variant="h1"
                sx={{ my: 6 }}
                style={{ textAlign: "center" }}
              >
                Ficamos muito felizes por te quereres juntar a nós!
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ my: 6 }}
                style={{ textAlign: "center" }}
              >
                Esta é a etapa inicial do teu processo de candidatura à nossa
                comunidade. Lê atentamente tudo o que te é pedido e preenche
                todos os campos como sugerido.
              </Typography>

              <Typography variant="caption">
                1. Seleciona o tipo de candidatura
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <ApplicationTypeCard
                  title="Gratuita"
                  description="Demorará entre 2 a 3 semanas a ser analisada"
                  id={1}
                  applicationType={applicationType}
                  setApplicationType={setApplicationType}
                  // disabled={import.meta.env.VITE_APPLICATION_STATUS_FREE}
                  disabled={variables.VITE_APPLICATION_STATUS_FREE}
                  price={0}
                  setValue={setValue}
                  paymentType="free"
                />
                <ApplicationTypeCard
                  title="Paga"
                  description="Será analisada com maior prioridade em comparação com as candidaturas gratuitas"
                  id={2}
                  applicationType={applicationType}
                  setApplicationType={setApplicationType}
                  // disabled={import.meta.env.VITE_APPLICATION_STATUS_PAID}
                  disabled={variables.VITE_APPLICATION_STATUS_PAID}
                  // price={import.meta.env.VITE_PAYMENT_PRICE}
                  price={variables.VITE_PAYMENT_PRICE}
                  setValue={setValue}
                  paymentType="pay"
                />
              </Stack>

              {applicationType !== 0 && (
                <Box>
                  <Box sx={{ my: 3 }}>
                    <Typography variant="caption">
                      2. Preenche os campos abaixo
                    </Typography>
                  </Box>

                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      <FormInputText
                        name="fullName"
                        control={control}
                        label="Nome Completo"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputDate
                        name="birthDate"
                        control={control}
                        label="Data de nascimento"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputSelect
                        name="genre"
                        control={control}
                        label="Género"
                        options={["Masculino", "Feminino", "Outro"]}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="email"
                        control={control}
                        label="Email (no caso de candidatura paga, deverá ser o mesmo do serviço de pagamento)"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="steamProfileLink"
                        control={control}
                        label="Link de perfil Steam (deverá ser público)"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputSelect
                        name="hasRoleplayExperience"
                        control={control}
                        label="Já jogaste roleplay?"
                        options={["Sim", "Não"]}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputSelect
                        name="roleplayExperienceTime"
                        control={control}
                        label="Se sim, há quanto tempo jogas roleplay?"
                        options={[
                          "Nunca",
                          "+1 mês",
                          "+3 meses",
                          "+6 meses",
                          "+1 ano",
                          "+1.5 anos",
                          "+2 anos",
                          "+3 anos",
                          "+4 anos",
                        ]}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      {/* colocar esta pergunta dinamica dependendo da roleplayExperienceTime */}
                      <FormInputText
                        name="previousServersOrCommunities"
                        control={control}
                        label="Se sim, em que servidor(es) ou comunidade(s)?"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputSelect
                        name="timeAsAFollower"
                        control={control}
                        label="Há quanto tempo acompanhas o VRRP?"
                        options={[
                          "Nunca",
                          "+1 mês",
                          "+3 meses",
                          "+6 meses",
                          "+1 ano",
                          "+1.5 anos",
                          "+2 anos",
                          "+3 anos",
                          "+4 anos",
                        ]}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="knowAboutOurServer"
                        control={control}
                        label="O que conheces do VRRP?"
                        multiline
                        rows={3}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="applicationReason"
                        control={control}
                        label="Porque pretendes entrar no VRRP?"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="roleplayConcept"
                        control={control}
                        label="Qual é o conceito de roleplay para ti?"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="roleplayFocus"
                        control={control}
                        label="Qual seria o teu foco de roleplay dentro do servidor? O que é importante para ti no roleplay?"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="strengthsInRoleplay"
                        control={control}
                        label="Enumera alguns pontos fortes teus a nível de roleplay"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="goodRoleplayer"
                        control={control}
                        label="Consideras-te um bom roleplayer? Porquê?"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="innovativeForTheServer"
                        control={control}
                        label="O que achas que podes trazer de inovador e de bom ao servidor?"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="firstAction"
                        control={control}
                        label="Caso entres no VRRP, qual seria a primeira coisa que farias já dentro do servidor?"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormInputText
                        name="shortStory"
                        control={control}
                        label="Faz um breve resumo da história que pretendes criar e desenvolver"
                        multiline
                        rows={5}
                      />
                    </Grid>

                    {/* </Stack> */}

                    <Grid item xs={12}>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        // sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                        sitekey={variables.VITE_RECAPTCHA_KEY}
                        // onChange={onChange}
                        onChange={(e) => {
                          if (e) {
                            setDisableSubmit(false);
                          } else {
                            setDisableSubmit(true);
                          }
                        }}
                      />
                    </Grid>

                    {!loading ? (
                      renderSwitch(applicationType, handleSubmit)
                    ) : (
                      <Grid item xs={12}>
                        <CircularProgress />
                      </Grid>
                    )}

                    {responseMessage && (
                      <Grid item xs={12}>
                        <Typography variant="caption">
                          {responseMessage}
                        </Typography>
                      </Grid>
                    )}

                    <button
                      hidden={true}
                      ref={refSubmitButtom}
                      type={"submit"}
                    />
                  </Grid>
                </Box>
              )}
            </Container>
          </>
        )}
      </Form>
    </Box>
  );
  // }

  // return (
  //   <Container>
  //     <Typography variant="h3" sx={{ my: 6 }} textAlign="center">
  //       Candidaturas fechadas temporariamente
  //     </Typography>
  //   </Container>
  // );
};

export default Application;
