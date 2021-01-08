import DashboardLayout from 'components/layouts/Dashboard';
import Stores from 'components/sections/Stores';
import FetchProvider from 'utils/FetchProvider';

// TODO: check user is loggedin
// maybe by checking if provider api_key is set

const Dashboard = () => (
    <DashboardLayout>
        <FetchProvider>
            <Stores />
        </FetchProvider>
    </DashboardLayout>
);

export default Dashboard;
