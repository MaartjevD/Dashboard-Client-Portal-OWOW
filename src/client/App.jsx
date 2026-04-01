import ClientLayout from './components/layout/ClientLayout';
import ProjectOverviewPage from './pages/ProjectOverviewPage';

function App() {
  return (
  <Route element={<ClientLayout />}>
    <Route path="/dashboard" element={<DashboardPage />} />
  </Route>
  );
}

export default App;