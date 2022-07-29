// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck


export const applicationMapper = (formData?: any) => {
    if (formData !== null && formData !== undefined) {
      return {
        "Tipo de candidatura": formData.applicationType === "pay" ? "Paga" : "Gratuita",
        "Nome Completo": formData.fullName,
        "Data de nascimento": formData.birthDate,
        "Género": formData.genre,
        "Email (no caso de candidatura paga, deverá ser o mesmo do serviço de pagamento)": formData.email,
        "Link de perfil Steam (deverá ser público)": formData.steamProfileLink,
        "Já jogaste roleplay?": formData.hasRoleplayExperience,
        "Se sim, há quanto tempo jogas roleplay?": formData.roleplayExperienceTime,
        "Se sim, em que servidor(es) ou comunidade(s)?": formData.previousServersOrCommunities,
        "Há quanto tempo acompanhas o VRRP?": formData.timeAsAFollower,
        "O que conheces do VRRP?": formData.knowAboutOurServer,
        "Porque pretendes entrar no VRRP?": formData.applicationReason,
        "Qual é o conceito de roleplay para ti?": formData.roleplayConcept,
        "Qual seria o teu foco de roleplay dentro do servidor? O que é importante para ti no roleplay?": formData.roleplayFocus,
        "Enumera alguns pontos fortes teus a nível de roleplay": formData.strengthsInRoleplay,
        "Consideras-te um bom roleplayer? Porquê?": formData.goodRoleplayer,
        "O que achas que podes trazer de inovador e de bom ao servidor?": formData.innovativeForTheServer,
        "Caso entres no VRRP, qual seria a primeira coisa que farias já dentro do servidor?": formData.firstAction,
        "Faz um breve resumo da história que pretendes criar e desenvolver": formData.shortStory,
      };
    }
    return {};
  };