import { success } from "./libs/response-lib";
import validate from 'card-validator';

export async function main(event) {
  const number = event.pathParameters.card_number;
  return success({
    number,
    ...validate.number(number)
  });
}
