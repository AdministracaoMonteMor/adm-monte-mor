import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateBR(dateStr) {
  return format(parseISO(dateStr), "dd/MM/yyyy", { locale: ptBR });
}

export function formatDateLongBR(dateStr) {
  return format(parseISO(dateStr), "d 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function formatMonthYear(date) {
  return format(date, "MMMM yyyy", { locale: ptBR });
}
