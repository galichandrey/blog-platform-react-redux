import { format } from "date-fns";

export default function dateConvert(createdAt) {
  const normalDate = format(new Date(createdAt), "MMMM d, u");
  return normalDate;
}
