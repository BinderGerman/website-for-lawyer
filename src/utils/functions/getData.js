import { data } from "../constants";

export const getPresentation = async () => {
  try {
    return data.presentation;
  } catch (error) {
    console.error(`Presentación no encontrada, error: ${error}`);
  }
};

export const getServices = async () => {
  try {
    return await data.services;
  } catch (error) {
    console.error(`Servicios no encontrados, error: ${error}`);
  }
};

export const getValues = async () => {
  try {
    return await data.values;
  } catch (error) {
    console.error(`Valores no encontrados, error: ${error}`);
  }
};
