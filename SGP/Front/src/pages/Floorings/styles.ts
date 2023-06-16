import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: "Poppins", sans-serif;
`;

export const FlooringsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 600px;
  max-height: 600px;

  background: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.l};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

export const ForgotPasswordLLink = styled.a`
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.lettering.informations};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const CreateAccountLink = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.lettering.informations};
`;
