import { httpClient } from "../httpClient";

export async function deleteList(id: string) {
  await httpClient.delete(`/columns/${id}`);
}
