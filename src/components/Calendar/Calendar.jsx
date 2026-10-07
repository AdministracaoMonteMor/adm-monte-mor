import { useEffect, useMemo, useState } from "react";
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatDateBR } from "../../utils/formatDate";
import "./Calendar.css";

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const VIEWS = { month: "month", week: "week", list: "list" };

function eventsOnDay(events, day) {
  const key = format(day, "yyyy-MM-dd");
  return events.filter((e) => e.date === key);
}

export default function Calendar({ events, onSelectEvent, initialDate = new Date() }) {
  const [view, setView] = useState(VIEWS.month);
  const [cursor, setCursor] = useState(initialDate);

  useEffect(() => {
    setCursor(initialDate);
  }, [initialDate]);

  const sortedEvents = useMemo(
    () =>
      [...events].sort(
        (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time),
      ),
    [events],
  );

  const monthGrid = useMemo(() => {
    const start = startOfWeek(startOfMonth(cursor), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(cursor), { weekStartsOn: 0 });
    return eachDayOfInterval({ start, end });
  }, [cursor]);

  const weekDays = useMemo(() => {
    const start = startOfWeek(cursor, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [cursor]);

  const periodLabel =
    view === VIEWS.week
      ? `${format(weekDays[0], "d MMM", { locale: ptBR })} – ${format(weekDays[6], "d MMM yyyy", { locale: ptBR })}`
      : format(cursor, "MMMM yyyy", { locale: ptBR });

  const goPrev = () => {
    if (view === VIEWS.week) setCursor((d) => addDays(d, -7));
    else setCursor((d) => subMonths(d, 1));
  };

  const goNext = () => {
    if (view === VIEWS.week) setCursor((d) => addDays(d, 7));
    else setCursor((d) => addMonths(d, 1));
  };

  const today = new Date();

  return (
    <div className="calendar-root">
      <div className="calendar-toolbar">
        <div className="calendar-view-tabs" role="tablist">
          {[
            [VIEWS.month, "Mensal"],
            [VIEWS.week, "Semanal"],
            [VIEWS.list, "Lista"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={view === key}
              className={view === key ? "active" : ""}
              onClick={() => setView(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {view !== VIEWS.list && (
          <div className="calendar-nav">
            <button type="button" onClick={goPrev} aria-label="Período anterior">
              ‹
            </button>
            <span className="calendar-period-label">{periodLabel}</span>
            <button type="button" onClick={goNext} aria-label="Próximo período">
              ›
            </button>
          </div>
        )}
      </div>

      {view === VIEWS.month && (
        <div className="calendar-month">
          <div className="calendar-weekdays">
            {WEEKDAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="calendar-days">
            {monthGrid.map((day) => {
              const dayEvents = eventsOnDay(sortedEvents, day);
              const inMonth = isSameMonth(day, cursor);
              const isToday = isSameDay(day, today);
              return (
                <div
                  key={day.toISOString()}
                  className={`calendar-day ${inMonth ? "" : "other-month"} ${dayEvents.length ? "has-events" : ""} ${isToday ? "today" : ""}`}
                >
                  <div className="calendar-day-number">{format(day, "d")}</div>
                  {dayEvents.map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      className="calendar-event-chip"
                      onClick={() => onSelectEvent(ev)}
                    >
                      {ev.time} {ev.title}
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {view === VIEWS.week && (
        <div className="calendar-week">
          {weekDays.map((day) => {
            const dayEvents = eventsOnDay(sortedEvents, day);
            return (
              <div key={day.toISOString()} className="calendar-week-day">
                <div className="calendar-week-day-header">
                  {format(day, "EEE, d MMM", { locale: ptBR })}
                </div>
                {dayEvents.length === 0 ? (
                  <span className="calendar-list-item-meta">Sem eventos</span>
                ) : (
                  dayEvents.map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      className="calendar-event-chip"
                      style={{ marginBottom: "0.35rem", whiteSpace: "normal" }}
                      onClick={() => onSelectEvent(ev)}
                    >
                      {ev.time} — {ev.title}
                    </button>
                  ))
                )}
              </div>
            );
          })}
        </div>
      )}

      {view === VIEWS.list && (
        <div className="calendar-list">
          {sortedEvents.length === 0 ? (
            <p className="empty-state">Nenhum evento cadastrado.</p>
          ) : (
            sortedEvents.map((ev) => (
              <div key={ev.id} className="calendar-list-item">
                <div className="calendar-list-item-main">
                  <h4>{ev.title}</h4>
                  <div className="calendar-list-item-meta">
                    {formatDateBR(ev.date)} · {ev.time} · {ev.location}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => onSelectEvent(ev)}
                >
                  Ver detalhes
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export function findEventDateForOpen(events, eventId) {
  const ev = events.find((e) => e.id === eventId);
  if (!ev) return new Date();
  return parseISO(ev.date);
}
