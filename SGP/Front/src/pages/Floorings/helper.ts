import { message } from "antd";
import { deletePavementById, getAllPavements } from "../../services/pavements";

export const getPavements = async (setPavements: any) => {
  const pavements = await getAllPavements();
  setPavements(pavements);
};

export const deletePavement = async (pavementId: string, setPavements: any) => {
  await deletePavementById(pavementId);
  const pavements = await getAllPavements();
  setPavements(pavements);
  message.success("Pavimento deletado com sucesso!");
};
