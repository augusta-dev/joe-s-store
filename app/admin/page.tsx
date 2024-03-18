import AdminSignin from "../../components/Admin/AdminSignin";
import UploadProvider from "../../components/Providers/UploadProvider";

const Admin = () => {
	return (
		<UploadProvider>
			<AdminSignin></AdminSignin>
		</UploadProvider>
	);
};
export default Admin;
