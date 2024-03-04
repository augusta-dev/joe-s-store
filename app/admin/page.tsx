import AdminPage from "../../components/Admin/Admin";
import UploadProvider from "../../components/Providers/UploadProvider";

const Admin = () => {
	return (
		<UploadProvider>
			<AdminPage></AdminPage>
		</UploadProvider>
	);
};
export default Admin;
