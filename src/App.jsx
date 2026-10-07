import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/Calendar/CalendarPage";
import AnnouncementsPage from "./pages/Announcements/AnnouncementsPage";
import AnnouncementDetails from "./pages/AnnouncementDetails/AnnouncementDetails";
import SectorsPage from "./pages/Sectors/SectorsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendario" element={<CalendarPage />} />
          <Route path="comunicados" element={<AnnouncementsPage />} />
          <Route path="comunicados/:id" element={<AnnouncementDetails />} />
          <Route path="setores" element={<SectorsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
